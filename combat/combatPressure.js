'use strict'

/*
PHASE 42.4 — COMBAT PRESSURE
*/

class CombatPressure {
  generate ({ threat, survivalRisk }) {
    return {
      type: 'combat_survival',
      value: clamp(threat + survivalRisk)
    }
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  CombatPressure
}
