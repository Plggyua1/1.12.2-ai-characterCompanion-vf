'use strict'

/*
PHASE 35.3 — ADAPTIVE INTERACTION GUARD
*/

class AdaptiveGuard {
  allow ({ action, capabilities }) {
    if (!capabilities) return true

    if (capabilities.conservativeInteraction) {
      if (action.type === 'use_unknown_block') return false
      if (action.type === 'consume_unknown_item') return false
    }

    return true
  }
}

module.exports = {
  AdaptiveGuard
}
