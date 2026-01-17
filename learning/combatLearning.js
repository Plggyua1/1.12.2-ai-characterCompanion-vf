'use strict'

/*
PHASE 42.10 — COMBAT LEARNING
*/

class CombatLearning {
  learn ({ success, enemyType, enemyMemory }) {
    enemyMemory.record({
      type: enemyType,
      danger: success ? 0.4 : 0.8
    })
  }
}

module.exports = {
  CombatLearning
}
