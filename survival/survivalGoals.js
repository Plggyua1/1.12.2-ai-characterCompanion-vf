'use strict'

/*
PHASE 30.4 — SURVIVAL GOALS
*/

class SurvivalGoals {
  generate ({ survival }) {
    const goals = []

    if (survival.lowHealth) {
      goals.push({
        type: 'recover_health',
        urgency: 0.9,
        decay: 0.02
      })
    }

    if (survival.starving) {
      goals.push({
        type: 'find_food',
        urgency: 0.8,
        decay: 0.015
      })
    }

    if (survival.threatNearby) {
      goals.push({
        type: 'seek_safety',
        urgency: 0.85,
        decay: 0.03
      })
    }

    return goals
  }
}

module.exports = {
  SurvivalGoals
}
