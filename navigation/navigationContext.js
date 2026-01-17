'use strict'

/*
PHASE 30.2 — NAVIGATION CONTEXT
*/

class NavigationContext {
  evaluate ({ world }) {
    return {
      hasKnownShelter: world.knownShelters?.length > 0,
      nearestShelter: world.knownShelters?.[0] || null,
      terrainRisk: world.terrainRisk || 0,
      visibility: world.visibility || 1
    }
  }
}

module.exports = {
  NavigationContext
}
