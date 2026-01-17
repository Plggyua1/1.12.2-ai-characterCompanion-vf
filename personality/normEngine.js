'use strict'

/*
PHASE 36.2 — NORM ENGINE
*/

class NormEngine {
  evaluate ({ actionType, norms, personality }) {
    let resistance = 0

    if (norms.never.includes(actionType)) {
      resistance += 0.6
    }

    if (norms.caution.includes(actionType)) {
      resistance += 0.3
    }

    // Personality bias (risk-tolerant AIs care less)
    resistance *= (1 - (personality.riskTolerance || 0))

    return clamp(resistance)
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  NormEngine
}
