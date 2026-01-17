'use strict'

/*
PHASE 27 — INTERRUPTION MANAGER

Purpose:
Signal safe aborts without killing state.
*/

class InterruptionManager {
  constructor () {
    this.interrupted = false
  }

  requestInterrupt () {
    this.interrupted = true
  }

  clear () {
    this.interrupted = false
  }

  shouldInterrupt () {
    return this.interrupted
  }
}

module.exports = {
  InterruptionManager
}
