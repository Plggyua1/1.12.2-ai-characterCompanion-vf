'use strict'

/*
PHASE 45.3 — EXTENSION CONTEXT
*/

function buildExtensionContext (state) {
  return {
    time: Date.now(),
    personality: state.personality,
    location: state.location,
    health: state.health,
    hunger: state.hunger,
    knownPlayers: Array.from(state.relationships?.keys?.() || []),
    currentIntent: state.intent?.type || null
  }
}

module.exports = {
  buildExtensionContext
}
