'use strict'

/*
PHASE 33.5 — COORDINATION GOALS
*/

class CoordinationGoals {
  generate ({ context }) {
    if (!context?.canCoordinate) return []

    return [{
      type: 'coordinate_roles',
      urgency: 0.35,
      decay: 0.01
    }]
  }
}

module.exports = {
  CoordinationGoals
}
