'use strict'

/*
PHASE 40.9 — EXPLORATION MODEL
*/

class ExplorationModel {
  assess ({ knownChunks, curiosity }) {
    return {
      desire: (1 - knownChunks) * curiosity,
      risk: knownChunks < 0.3 ? 0.4 : 0.1
    }
  }
}

module.exports = {
  ExplorationModel
}
