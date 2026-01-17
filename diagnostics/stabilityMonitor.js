'use strict'

/*
PHASE 37.3 — STABILITY MONITOR
*/

class StabilityMonitor {
  evaluate ({ personality, baseline }) {
    const warnings = []

    for (const key of Object.keys(baseline)) {
      const delta = Math.abs(personality[key] - baseline[key])
      if (delta > 0.25) {
        warnings.push({
          trait: key,
          drift: delta
        })
      }
    }

    return warnings.length ? warnings : null
  }
}

module.exports = {
  StabilityMonitor
}
