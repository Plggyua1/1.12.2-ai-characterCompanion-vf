'use strict'

/*
PHASE 44.6 — COORDINATION MONITOR
*/

class CoordinationMonitor {
  check ({ missedSignals, conflict }) {
    if (missedSignals > 3) return 'desync'
    if (conflict) return 'conflict'
    return 'ok'
  }
}

module.exports = {
  CoordinationMonitor
}
