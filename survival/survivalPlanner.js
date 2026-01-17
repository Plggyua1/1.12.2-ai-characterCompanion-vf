'use strict'

/*
PHASE 42.7 — SURVIVAL PLANNER
*/

class SurvivalPlanner {
  plan ({ state }) {
    const steps = []

    if (state.health < 10) steps.push({ type: 'heal' })
    if (state.hunger < 6) steps.push({ type: 'eat' })
    if (!state.armor) steps.push({ type: 'craft_armor' })

    return steps
  }
}

module.exports = {
  SurvivalPlanner
}
