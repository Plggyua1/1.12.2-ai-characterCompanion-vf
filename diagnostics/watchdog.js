'use strict'

/*
PHASE 28 — WATCHDOG

Purpose:
Detect stalled execution and request safe interruption.
*/

const { log } = require('./logger')

class Watchdog {
  constructor ({ timeoutMs = 10000 } = {}) {
    this.timeoutMs = timeoutMs
    this.lastKick = Date.now()
  }

  kick () {
    this.lastKick = Date.now()
  }

  check (interruptions) {
    if (Date.now() - this.lastKick > this.timeoutMs) {
      log('watchdog', 'execution_stall_detected')
      interruptions.requestInterrupt()
      this.lastKick = Date.now()
    }
  }
}

module.exports = {
  Watchdog
}
