'use strict'

/*
PHASE 23 — PATTERN STORE

Purpose:
Maintain confidence-weighted patterns derived from experience.

Patterns are hypotheses, not rules.
*/

const { v4: uuidv4 } = require('uuid')

class PatternStore {
  constructor () {
    this.patterns = new Map()
  }

  /**
   * Update or create a pattern
   */
  reinforcePattern ({
    goalType,
    contextSignature,
    outcome
  }) {
    const key = `${goalType}:${contextSignature}`
    let pattern = this.patterns.get(key)

    if (!pattern) {
      pattern = {
        id: uuidv4(),
        goalType,
        contextSignature,

        confidence: 0.5,
        successCount: 0,
        failureCount: 0,

        lastUpdated: Date.now()
      }
    }

    if (outcome === 'success') {
      pattern.successCount++
      pattern.confidence += 0.1
    }

    if (outcome === 'failure') {
      pattern.failureCount++
      pattern.confidence -= 0.15
    }

    if (outcome === 'near_miss') {
      pattern.confidence += 0.03
    }

    pattern.confidence = clamp(pattern.confidence, 0.05, 0.95)
    pattern.lastUpdated = Date.now()

    this.patterns.set(key, pattern)
    return pattern
  }

  /**
   * Retrieve patterns relevant to a goal & context
   */
  getPatternsForGoal (goalType, contextSignature) {
    return Array.from(this.patterns.values())
      .filter(p =>
        p.goalType === goalType &&
        p.contextSignature === contextSignature
      )
      .sort((a, b) => b.confidence - a.confidence)
  }

  /**
   * Natural decay over time
   */
  decayPatterns (now = Date.now()) {
    for (const pattern of this.patterns.values()) {
      const age = now - pattern.lastUpdated
      const decay = age * 0.0000005
      pattern.confidence = clamp(pattern.confidence - decay, 0.05, 0.95)
    }
  }
}

function clamp (v, min, max) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  PatternStore
}
