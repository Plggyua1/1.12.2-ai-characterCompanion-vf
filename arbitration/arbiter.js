'use strict'

/*
PHASE 6 — ARBITRATION

Purpose:
Select one active intent from many candidates.
Guarantee single authority.
*/

class Arbiter {
  constructor () {
    this.activeIntent = null
  }

  arbitrate (intents = [], context = {}) {
    if (!Array.isArray(intents) || intents.length === 0) {
      this.activeIntent = null
      return null
    }

    // Filter only viable candidates
    const candidates = intents.filter(i => i.status === 'candidate')
    if (candidates.length === 0) return null

    // Score intents
    let best = null
    let bestScore = -Infinity

    for (const intent of candidates) {
      const score = this._scoreIntent(intent, context)
      if (score > bestScore) {
        bestScore = score
        best = intent
      }
    }

    if (best) {
      best.status = 'active'
      best.activatedAt = Date.now()
      this.activeIntent = best
    }

    // Suppress others
    for (const intent of candidates) {
      if (intent !== best) {
        intent.status = 'suppressed'
      }
    }

    return best
  }

  _scoreIntent (intent, context) {
    let score = 0

    // Base urgency
    score += intent.urgency || 0

    // Penalize risk if context demands caution
    if (context.riskAversion) {
      score -= (intent.risk || 0) * context.riskAversion
    }

    // Favor survival-critical intents
    if (intent.type === 'heal_self' || intent.type === 'eat_food') {
      score += 5
    }

    // Slight decay for stale intents
    if (intent.createdAt) {
      const age = Date.now() - intent.createdAt
      score -= age / 60000 // 1 point per minute
    }

    return score
  }

  current () {
    return this.activeIntent
  }

  clear () {
    this.activeIntent = null
  }
}

module.exports = {
  Arbiter
}
