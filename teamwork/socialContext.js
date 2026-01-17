'use strict'

/*
PHASE 31.1 — SOCIAL CONTEXT
*/

class SocialContext {
  build ({ playerModel, world }) {
    if (!playerModel) return null

    return {
      trust: playerModel.trust,
      reliability: playerModel.reliability,
      familiarity: playerModel.interactions || 0,
      proximity: world.playerDistance || Infinity,
      dangerShared: world.threatNearby || false
    }
  }
}

module.exports = {
  SocialContext
}
