'use strict'

/*
PHASE 26 — TRUST ENGINE

Purpose:
Update player trust and reliability slowly from outcomes.
Trust is earned, decays, and is never absolute.
*/

class TrustEngine {
  reinforce ({ model, outcome }) {
    if (!model) return

    switch (outcome) {
      case 'kept_promise':
        model.trust += 0.05
        model.reliability += 0.04
        break

      case 'assisted_safely':
        model.trust += 0.03
        break

      case 'endangered_ai':
        model.trust -= 0.1
        model.reliability -= 0.1
        break

      case 'betrayal':
        model.trust -= 0.2
        model.reliability -= 0.25
        break
    }

    model.trust = clamp(model.trust)
    model.reliability = clamp(model.reliability)
    model.lastInteractionAt = Date.now()
  }

  decay (model, now = Date.now()) {
    if (!model) return

    const idleTime = now - model.lastInteractionAt

    if (idleTime > 1000 * 60 * 10) {
      model.trust = clamp(model.trust - 0.01)
    }
  }
}

/**
 * Local helper — intentionally NOT shared
 */
function clamp (value, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value))
}

module.exports = {
  TrustEngine
}
