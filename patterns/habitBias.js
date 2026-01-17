'use strict'

/*
PHASE 32.5 — HABIT BIAS
*/

class HabitBias {
  bias ({ plan, procedural }) {
    if (!plan) return plan

    const familiarity = procedural.confidence(plan.type) || 0
    plan.costMultiplier = 1 - familiarity * 0.2
    return plan
  }
}

module.exports = {
  HabitBias
}
