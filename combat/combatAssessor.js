'use strict'

/*
PHASE 30.3 — COMBAT ASSESSOR
*/

class CombatAssessor {
  assess ({ self, enemies }) {
    if (!enemies || enemies.length === 0) return null

    return {
      outnumbered: enemies.length > 1,
      weakestEnemy: enemies[0],
      estimatedThreat: this._threat(enemies),
      shouldAvoid: enemies.length > 2 || self.health < 10
    }
  }

  _threat (enemies) {
    return Math.min(1, enemies.length * 0.3)
  }
}

module.exports = {
  CombatAssessor
}
