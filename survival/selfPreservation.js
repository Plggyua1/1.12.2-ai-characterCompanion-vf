'use strict'

/*
PHASE 36.6 — SELF PRESERVATION
*/

class SelfPreservation {
  evaluate ({ health, threats, socialRisk }) {
    let pressure = 0

    if (health < 8) pressure += 0.4
    if (threats > 2) pressure += 0.3
    if (socialRisk > 0.5) pressure += 0.2

    return clamp(pressure)
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  SelfPreservation
}
