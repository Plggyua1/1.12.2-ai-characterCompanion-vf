'use strict'

/*
PHASE 41.6 — CRAFTING PLANNER
*/

class CraftingPlanner {
  plan ({ recipe }) {
    return [
      { type: 'gather_resources', recipe },
      { type: 'open_crafting' },
      { type: 'craft_item', recipe }
    ]
  }
}

module.exports = {
  CraftingPlanner
}
