'use strict'

/*
PHASE 30.5 — COMBAT GOALS
*/

class CombatGoals {
  generate ({ combat }) {
    if (!combat) return []

    if (combat.shouldAvoid) {
      return [{
        type: 'avoid_combat',
        urgency: 0.8,
        decay: 0.04
      }]
    }

    return [{
      type: 'defend_self',
      urgency: 0.7,
      decay: 0.02,
      target: combat.weakestEnemy
    }]
  }
}

module.exports = {
  CombatGoals
}
