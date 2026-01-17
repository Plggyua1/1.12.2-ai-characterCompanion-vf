'use strict'

const os = require('os')
const systemLog = require('../diagnostics/systemLogger')

class PerformanceGovernor {
  constructor () {
    this.lastCheck = Date.now()
    this.tickBudgets = new Map() // botId -> ms
    this.overloaded = false
  }

  registerBot (id) {
    this.tickBudgets.set(id, 250)
  }

  unregisterBot (id) {
    this.tickBudgets.delete(id)
  }

  getBudget (id) {
    return this.tickBudgets.get(id) || 250
  }

  update () {
    const load = os.loadavg()[0]
    const mem = process.memoryUsage().rss / 1024 / 1024

    if (load > 2.5 || mem > 1500) {
      if (!this.overloaded) {
        systemLog.warn(
          `PERF GOVERNOR ENGAGED load=${load.toFixed(2)} mem=${mem.toFixed(0)}MB`
        )
      }
      this.overloaded = true
      this._throttle()
    } else if (this.overloaded) {
      systemLog.info('PERF GOVERNOR RELEASED')
      this.overloaded = false
      this._normalize()
    }
  }

  _throttle () {
    for (const [id] of this.tickBudgets.entries()) {
      this.tickBudgets.set(id, 1000)
    }
  }

  _normalize () {
    for (const [id] of this.tickBudgets.entries()) {
      this.tickBudgets.set(id, 250)
    }
  }
}

module.exports = {
  PerformanceGovernor
}
