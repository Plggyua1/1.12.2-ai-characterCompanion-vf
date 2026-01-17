'use strict'

/*
PHASE 34.6 — IDENTITY GUARD
*/

class IdentityGuard {
  enforce (personality, baseline) {
    for (const key of Object.keys(baseline)) {
      const delta = personality[key] - baseline[key]
      if (Math.abs(delta) > 0.3) {
        personality[key] = baseline[key] + Math.sign(delta) * 0.3
      }
    }
    return personality
  }
}

module.exports = {
  IdentityGuard
}
