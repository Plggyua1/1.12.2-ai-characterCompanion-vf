'use strict'

/*
PHASE 42.1 — THREAT MODEL
*/

class ThreatModel {
  assess ({ enemies, distance, equipment }) {
    let threat = 0

    for (const e of enemies || []) {
      threat += e.hostile ? 0.3 : 0
      threat += e.strength ? e.strength * 0.2 : 0
    }

    if (distance < 5) threat += 0.2
    if (!equipment?.weapon) threat += 0.3

    return clamp(threat)
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  ThreatModel
}
