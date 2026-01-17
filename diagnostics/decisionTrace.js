'use strict'

/*
PHASE 37.1 — DECISION TRACE
*/

class DecisionTrace {
  constructor () {
    this.traces = []
  }

  record ({ intentId, pressures, resistances, outcome }) {
    this.traces.push({
      time: Date.now(),
      intentId,
      pressures,
      resistances,
      outcome
    })

    if (this.traces.length > 200) {
      this.traces.shift()
    }
  }

  latest () {
    return this.traces[this.traces.length - 1] || null
  }
}

module.exports = {
  DecisionTrace
}
