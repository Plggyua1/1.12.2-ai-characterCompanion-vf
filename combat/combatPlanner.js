'use strict'

/*
PHASE 42.5 — COMBAT PLANNER
*/

class CombatPlanner {
  plan (decision) {
    switch (decision) {
      case 'fight':
        return [
          { type: 'equip_weapon' },
          { type: 'engage_target' }
        ]
      case 'flee':
        return [
          { type: 'retreat' },
          { type: 'seek_safety' }
        ]
      case 'avoid':
        return [
          { type: 'detour' }
        ]
      default:
        return []
    }
  }
}

module.exports = {
  CombatPlanner
}
