'use strict'

/*
PHASE 37.5 — META COGNITION
*/

const { DecisionTrace } = require('./decisionTrace')
const { ConflictMonitor } = require('./conflictMonitor')
const { StabilityMonitor } = require('./stabilityMonitor')
const { ExplanationEngine } = require('../communication/explanationEngine')

class MetaCognition {
  constructor (baselinePersonality) {
    this.tracer = new DecisionTrace()
    this.conflict = new ConflictMonitor()
    this.stability = new StabilityMonitor()
    this.explainer = new ExplanationEngine()
    this.baseline = baselinePersonality
  }

  recordDecision (data) {
    this.tracer.record(data)
  }

  analyze ({ pressures, personality }) {
    return {
      conflict: this.conflict.detect({ pressures }),
      instability: this.stability.evaluate({
        personality,
        baseline: this.baseline
      })
    }
  }

  explainLast (personality) {
    const trace = this.tracer.latest()
    const conflict = this.conflict.detect({
      pressures: trace?.pressures || []
    })

    return this.explainer.explain({
      trace,
      conflict,
      personality
    })
  }
}

module.exports = {
  MetaCognition
}
