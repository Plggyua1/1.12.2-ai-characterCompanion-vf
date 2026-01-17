'use strict'

/*
PHASE 36.5 — CUSTOM BUILD DETECTOR
*/

class CustomBuildDetector {
  isLikelyPlayerBuild ({ blockPattern, symmetry, materials }) {
    if (symmetry > 0.6) return true
    if (materials?.includes('glass')) return true
    if (blockPattern?.repeating) return true
    return false
  }
}

module.exports = {
  CustomBuildDetector
}
