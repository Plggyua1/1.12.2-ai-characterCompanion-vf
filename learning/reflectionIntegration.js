'use strict'

/*
PHASE 39.5 — REFLECTION INTEGRATION
*/

const { ReflectionTrigger } = require('./reflectionTrigger')
const { ReflectionEngine } = require('./reflectionEngine')
const { ReflectionMemory } = require('../memory/semantic/reflectionMemory')

class ReflectionIntegration {
  constructor () {
    this.trigger = new ReflectionTrigger()
    this.engine = new ReflectionEngine()
    this.memory = new ReflectionMemory()
    this.lastReflectionAt = null
  }

  async maybeReflect (episodes) {
    if (!this.trigger.shouldReflect({
      episodeCount: episodes.length,
      lastReflectionAt: this.lastReflectionAt
    })) return

    const summary = await this.engine.reflect(episodes)
    if (summary) {
      this.memory.store(summary)
      this.lastReflectionAt = Date.now()
    }
  }
}

module.exports = {
  ReflectionIntegration
}
