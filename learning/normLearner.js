'use strict'

/*
PHASE 36.3 — NORM LEARNER
*/

class NormLearner {
  update ({ actionType, outcome, normMemory }) {
    const entry = normMemory[actionType] || { weight: 0.5 }

    if (outcome.socialPenalty) {
      entry.weight += 0.1
    }

    if (outcome.socialApproval) {
      entry.weight -= 0.05
    }

    normMemory[actionType] = clamp(entry.weight)
    return normMemory
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  NormLearner
}
