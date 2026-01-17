'use strict'

/*
PHASE 26 — PLAYER MODEL

Represents the AI's belief about a specific player.
Descriptive only. No authority.
*/

class PlayerModel {
  constructor (playerId) {
    this.playerId = playerId

    this.trust = 0.5            // [0..1]
    this.reliability = 0.5      // [0..1]
    this.familiarity = 0.0      // [0..1]

    this.lastInteractionAt = 0
    this.boundaries = {
      follow: false,
      shareInventory: false,
      riskLife: false
    }
  }

  snapshot () {
    return {
      playerId: this.playerId,
      trust: this.trust,
      reliability: this.reliability,
      familiarity: this.familiarity,
      boundaries: { ...this.boundaries }
    }
  }
}

module.exports = {
  PlayerModel
}
