'use strict'

/*
PHASE 24 — PERSONALITY BIAS ENGINE

Purpose:
Softly bias urgency & scoring without overriding logic.
*/

class PersonalityBiasEngine {
  constructor (personalityProfile) {
    this.personality = personalityProfile
  }

  /**
   * Bias goal urgency (Phase 19 output)
   */
  biasGoalUrgency (goal) {
    let urgency = goal.urgency

    if (goal.type === 'explore_unknown') {
      urgency *= 1 + this.personality.get('curiosity') * 0.4
    }

    if (goal.type === 'avoid_threat' || goal.type === 'ensure_safety') {
      urgency *= 1 + (1 - this.personality.get('riskTolerance')) * 0.5
    }

    return clamp(urgency, 0, 1)
  }

  /**
   * Bias arbitration score (Phase 20 hook)
   */
  biasArbitrationScore (goal, baseScore) {
    let score = baseScore

    if (goal.type === 'assist_ally') {
      score += this.personality.get('loyalty') * 0.3
    }

    if (goal.confidence < 0.4) {
      score -= (1 - this.personality.get('patience')) * 0.2
    }

    return score
  }

  /**
   * Bias planning preference (Phase 21 hook)
   */
  biasPlanSteps (steps, goalType) {
    if (goalType === 'explore_unknown') {
      if (this.personality.get('riskTolerance') < 0.4) {
        return steps.map(s =>
          s.type === 'advance_cautiously'
            ? { ...s, caution: 'high' }
            : s
        )
      }
    }

    return steps
  }

  /**
   * Communication tendency (used in Phase 25)
   */
  shouldSpeak (context = {}) {
    const base = this.personality.get('verbosity')
    if (context.socialPressure) return base + 0.2 > 0.5
    return base > 0.6
  }
}

function clamp (v, min, max) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  PersonalityBiasEngine
}
