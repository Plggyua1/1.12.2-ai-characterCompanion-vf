'use strict'

/*
PHASE 35.4 — MOD PATTERN LEARNER
*/

class ModPatternLearner {
  observe ({ action, outcome }) {
    if (!action || !action.isModded) return null

    return {
      pattern: action.type,
      outcome,
      confidence: outcome.success ? 0.1 : -0.2,
      modded: true
    }
  }
}

module.exports = {
  ModPatternLearner
}
