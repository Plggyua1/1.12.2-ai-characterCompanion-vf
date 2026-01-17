'use strict'

/*
PHASE 37.4 — EXPLANATION ENGINE
*/

class ExplanationEngine {
  explain ({ trace, conflict, personality }) {
    if (!trace) return null

    return {
      intent: trace.intentId,
      dominantPressure: trace.pressures?.[0]?.type,
      resistance: trace.resistances || 0,
      conflict: conflict?.type || null,
      personalityBias: {
        riskTolerance: personality.riskTolerance,
        curiosity: personality.curiosity
      }
    }
  }
}

module.exports = {
  ExplanationEngine
}
