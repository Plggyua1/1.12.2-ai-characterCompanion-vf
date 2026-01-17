'use strict'

/*
PHASE 30.1 — SURVIVAL ASSESSOR
*/

class SurvivalAssessor {
  assess ({ self, world }) {
    return {
      lowHealth: self.health < 8,
      starving: self.food < 6,
      exposed: world.isNight && !world.hasShelterNearby,
      threatNearby: world.hostilesNearby > 0,
      urgency: this._urgency(self, world)
    }
  }

  _urgency (self, world) {
    let u = 0
    if (self.health < 8) u += 0.4
    if (self.food < 6) u += 0.3
    if (world.hostilesNearby > 0) u += 0.5
    if (world.isNight && !world.hasShelterNearby) u += 0.2
    return Math.min(1, u)
  }
}

module.exports = {
  SurvivalAssessor
}
