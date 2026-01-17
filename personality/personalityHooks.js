'use strict'

/*
PERSONALITY HOOKS

Purpose:
Explicit hook points for other phases.
No automatic coupling.
*/

function applyPersonalityToGoal (goal, biasEngine) {
  return {
    ...goal,
    urgency: biasEngine.biasGoalUrgency(goal)
  }
}

function applyPersonalityToScore (goal, score, biasEngine) {
  return biasEngine.biasArbitrationScore(goal, score)
}

function applyPersonalityToPlan (plan, biasEngine) {
  return {
    ...plan,
    steps: biasEngine.biasPlanSteps(plan.steps, plan.goalType)
  }
}

module.exports = {
  applyPersonalityToGoal,
  applyPersonalityToScore,
  applyPersonalityToPlan
}
