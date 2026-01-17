'use strict'

/*
PHASE 36.4 — SOCIAL ENTITY DETECTOR
*/

class SocialEntityDetector {
  isProtected (entity) {
    if (!entity) return false
    if (entity.nameTag) return true
    if (entity.customName) return true
    return false
  }
}

module.exports = {
  SocialEntityDetector
}
