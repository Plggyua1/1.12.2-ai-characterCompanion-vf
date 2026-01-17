'use strict'

/*
PHASE 35.6 — MOD BIAS
*/

class ModBias {
  apply ({ goals, capabilities }) {
    if (!capabilities?.conservativeInteraction) return goals

    return goals.map(g => ({
      ...g,
      urgency: g.urgency * 0.9
    }))
  }
}

module.exports = {
  ModBias
}
