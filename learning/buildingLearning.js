'use strict'

/*
PHASE 41.11 — BUILDING LEARNING
*/

class BuildingLearning {
  learn ({ success, proceduralMemory }) {
    proceduralMemory.reinforce('building', success)
  }
}

module.exports = {
  BuildingLearning
}
