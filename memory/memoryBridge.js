'use strict'

/*
MEMORY INTEGRATION BRIDGE

Purpose:
Safe entry point for writing experiences
without coupling systems together.
*/

const { EpisodicMemory } = require('./episodic/episodicMemory')
const { log } = require('../diagnostics/logger')

class MemoryBridge {
  constructor () {
    this.episodic = new EpisodicMemory()
  }

  recordExperience ({ goal, plan, outcome, context }) {
    const entry = this.episodic.recordEpisode({
      goal,
      plan,
      outcome,
      context
    })

    log('memory', 'episode_recorded', {
      episodeId: entry.id,
      goalType: goal?.type,
      outcome
    })

    return entry
  }

  recall (filter) {
    return this.episodic.recall(filter)
  }
}

module.exports = {
  MemoryBridge
}
