'use strict'

/*
PHASE 35.1 — MOD DETECTOR
*/

class ModDetector {
  detect ({ registry, scoreboard, entities }) {
    return {
      hasForge: !!registry?.forgeHandshake,
      customBlocks: registry?.blocks?.length > 0,
      customEntities: entities?.some(e => e.isCustom),
      customItems: registry?.items?.length > 0
    }
  }
}

module.exports = {
  ModDetector
}
