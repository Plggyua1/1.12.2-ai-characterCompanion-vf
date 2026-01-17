'use strict'

/*
PHASE 35.7 — MOD INTEGRATION
*/

const { ModDetector } = require('./modDetector')
const { ModCapabilities } = require('./modCapabilities')
const { ModBias } = require('./modBias')

class ModIntegration {
  constructor () {
    this.detector = new ModDetector()
    this.capabilities = new ModCapabilities()
    this.bias = new ModBias()
  }

  run (context, goals) {
    const detection = this.detector.detect(context)
    const caps = this.capabilities.build(detection)
    const biasedGoals = this.bias.apply({ goals, capabilities: caps })

    return {
      capabilities: caps,
      goals: biasedGoals
    }
  }
}

module.exports = {
  ModIntegration
}
