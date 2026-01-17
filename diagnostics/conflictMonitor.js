'use strict'

/*
PHASE 37.2 — CONFLICT MONITOR
*/

class ConflictMonitor {
  detect ({ pressures }) {
    if (!pressures || pressures.length < 2) return null

    const sorted = pressures.sort((a, b) => b.value - a.value)
    const top = sorted[0]
    const second = sorted[1]

    if (Math.abs(top.value - second.value) < 0.1) {
      return {
        type: 'ambivalence',
        pressures: [top, second]
      }
    }

    return null
  }
}

module.exports = {
  ConflictMonitor
}
