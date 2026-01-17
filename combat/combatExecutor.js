'use strict'

/*
PHASE 42.6 — COMBAT EXECUTOR
*/

const { TaskExecutor } = require('../execution/taskExecutor')

class CombatExecutor {
  constructor () {
    this.executor = new TaskExecutor('combat')
  }

  run (plan) {
    this.executor.start(plan)
    return this.executor
  }
}

module.exports = {
  CombatExecutor
}
