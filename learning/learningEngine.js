'use strict'

/*
PHASE 23 — LEARNING ENGINE

Purpose:
Extract pattern confidence updates from episodic memory.
*/

const { buildContextSignature } = require('./contextSignature')
const { log } = require('../diagnostics/logger')

class LearningEngine {
  constructor (patternStore) {
    this.patternStore = patternStore
  }

  /**
   * Learn from a recorded episode
   */
  processEpisode (episode) {
    if (!episode.goal || !episode.outcome) return null

    const contextSig = buildContextSignature(episode.context)

    const pattern = this.patternStore.reinforcePattern({
      goalType: episode.goal.type,
      contextSignature: contextSig,
      outcome: episode.outcome
    })

    log('learning', 'pattern_updated', {
      patternId: pattern.id,
      goalType: pattern.goalType,
      confidence: pattern.confidence
    })

    return pattern
  }

  /**
   * Passive decay tick
   */
  tick () {
    this.patternStore.decayPatterns()
  }
}

module.exports = {
  LearningEngine
}
