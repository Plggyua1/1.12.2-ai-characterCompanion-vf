'use strict'

/*
PHASE 35.2 — MOD CAPABILITIES
*/

class ModCapabilities {
  build (detection) {
    return {
      assumeVanillaPhysics: !detection.customBlocks,
      assumeUnknownMobs: detection.customEntities,
      assumeUnknownItems: detection.customItems,
      conservativeInteraction: detection.hasForge
    }
  }
}

module.exports = {
  ModCapabilities
}
