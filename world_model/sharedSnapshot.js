'use strict'

/*
PHASE 33.2 — SHARED WORLD SNAPSHOT
*/

class SharedSnapshot {
  create ({ world }) {
    return {
      time: Date.now(),
      hostiles: world.hostilesNearby || 0,
      shelter: world.hasShelterNearby || false,
      resources: world.visibleResources || []
    }
  }

  merge (local, incoming) {
    if (!incoming) return local

    return {
      hostiles: Math.max(local.hostiles, incoming.hostiles),
      shelter: local.shelter || incoming.shelter,
      resources: mergeUnique(local.resources, incoming.resources)
    }
  }
}

function mergeUnique (a = [], b = []) {
  return Array.from(new Set([...a, ...b]))
}

module.exports = {
  SharedSnapshot
}
