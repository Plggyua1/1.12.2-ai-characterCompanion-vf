'use strict'

/*
PHASE 24 — PERSONALITY PROFILE

Traits are normalized [0..1]
Stable across sessions (later persisted).
*/

class PersonalityProfile {
  constructor ({
    riskTolerance = 0.4,
    curiosity = 0.5,
    loyalty = 0.6,
    verbosity = 0.3,
    patience = 0.5
  } = {}) {
    this.traits = {
      riskTolerance,
      curiosity,
      loyalty,
      verbosity,
      patience
    }
  }

  get (trait) {
    return this.traits[trait]
  }

  snapshot () {
    return { ...this.traits }
  }
}

module.exports = {
  PersonalityProfile
}
