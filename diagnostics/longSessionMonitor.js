'use strict'

/*
PHASE 32.6 — LONG SESSION MONITOR
*/

const { log } = require('./logger')

class LongSessionMonitor {
  check ({ fatigue, attention }) {
    if (fatigue > 0.85) {
      log('session', 'fatigue_critical', { fatigue })
    }

    if (attention.saturated) {
      log('session', 'attention_saturated')
    }
  }
}

module.exports = {
  LongSessionMonitor
}
