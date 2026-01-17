'use strict'

/*
PHASE 39.1 — REFLECTION TRIGGER
*/

class ReflectionTrigger {
  shouldReflect ({ episodeCount, lastReflectionAt }) {
    if (episodeCount >= 20) return true
    if (!lastReflectionAt) return true

    const elapsed = Date.now() - lastReflectionAt
    return elapsed > 1000 * 60 * 30 // 30 minutes
  }
}

module.exports = {
  ReflectionTrigger
}
