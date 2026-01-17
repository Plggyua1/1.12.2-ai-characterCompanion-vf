'use strict'

/*
PHASE 41.3 — EXPLORATION PLANNER
*/

class ExplorationPlanner {
  plan ({ targetChunk }) {
    return [
      { type: 'navigate', target: targetChunk },
      { type: 'scan_area' },
      { type: 'mark_known' }
    ]
  }
}

module.exports = {
  ExplorationPlanner
}
