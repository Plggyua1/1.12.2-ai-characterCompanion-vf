'use strict'

/*
PHASE 30.6 — NAVIGATION PLANNING HINTS
*/

class NavigationHints {
  build ({ navigation }) {
    return {
      preferShelter: navigation.hasKnownShelter,
      avoidHighRiskTerrain: navigation.terrainRisk > 0.6,
      visibilityPenalty: 1 - navigation.visibility
    }
  }
}

module.exports = {
  NavigationHints
}
