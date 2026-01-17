'use strict'

/*
PHASE 40.3 — SILENCE GATE
*/

class SilenceGate {
  constructor () {
    this.lastSpokenAt = 0
  }

  allow ({ urgency }) {
    const now = Date.now()
    if (now - this.lastSpokenAt < 4000) return false
    if (urgency < 0.35) return false

    this.lastSpokenAt = now
    return true
  }
}

module.exports = {
  SilenceGate
}
