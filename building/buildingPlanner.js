'use strict'

/*
PHASE 41.9 — BUILDING PLANNER
*/

class BuildingPlanner {
  plan ({ blueprint }) {
    return blueprint.blocks.map(b => ({
      type: 'place_block',
      block: b
    }))
  }
}

module.exports = {
  BuildingPlanner
}
