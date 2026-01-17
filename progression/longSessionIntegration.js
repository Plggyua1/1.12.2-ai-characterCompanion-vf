'use strict'

/*
PHASE 32.7 — LONG SESSION INTEGRATION
*/

const { FatigueModel } = require('./fatigueModel')
const { AttentionBudget } = require('../core/attentionBudget')
const { EpisodicDecay } = require('../memory/episodic/decayEngine')
const { ConsolidationEngine } = require('../learning/consolidationEngine')

class LongSessionIntegration {
  constructor () {
    this.fatigue = new FatigueModel()
    this.attention = new AttentionBudget()
    this.decay = new EpisodicDecay()
    this.consolidation = new ConsolidationEngine()
  }

  tick (context) {
    const fatigueSnap = this.fatigue.update(context.activity || {})
    const attentionSnap = this.attention.snapshot()

    return {
      fatigue: fatigueSnap,
      attention: attentionSnap
    }
  }

  maintainMemory (memory) {
    memory.episodic = this.decay.decay(memory.episodic)
    this.consolidation.consolidate(memory)
  }
}

module.exports = {
  LongSessionIntegration
}
