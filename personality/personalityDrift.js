'use strict'

/*
PHASE 34.5 — PERSONALITY DRIFT
*/

class PersonalityDrift {
  apply ({ personality, experiences }) {
    for (const exp of experiences) {
      if (exp.type === 'betrayal') {
        personality.trustBias = clamp(personality.trustBias - 0.01)
        personality.caution = clamp(personality.caution + 0.01)
      }

      if (exp.type === 'success') {
        personality.confidence = clamp(personality.confidence + 0.005)
      }

      if (exp.type === 'isolation') {
        personality.verbosity = clamp(personality.verbosity - 0.005)
      }
    }
    return personality
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  PersonalityDrift
}
