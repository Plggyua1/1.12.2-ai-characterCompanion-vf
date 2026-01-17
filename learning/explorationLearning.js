'use strict'

/*
PHASE 41.5 — EXPLORATION LEARNING
*/

class ExplorationLearning {
  learn ({ success, proceduralMemory }) {
    proceduralMemory.reinforce('exploration', success)
  }
}

module.exports = {
  ExplorationLearning
}
