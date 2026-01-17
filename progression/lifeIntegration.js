'use strict'

/*
PHASE 46.8 — LIFE INTEGRATION
*/

const { LifeArcEngine } = require('./lifeArcEngine')
const { ProjectGenerator } = require('./projectGenerator')
const { ProjectDecomposer } = require('./projectDecomposer')

class LifeIntegration {
  constructor () {
    this.arcEngine = new LifeArcEngine()
    this.generator = new ProjectGenerator()
    this.decomposer = new ProjectDecomposer()
  }

  update ({ state }) {
    const arc = this.arcEngine.infer({
      personality: state.personality,
      memories: state.episodicMemory,
      failures: state.failures || 0
    })

    if (!state.projects.active.length) {
      const project = this.generator.generate({
        arc,
        location: state.location
      })

      if (project) state.projects.add(project)
    }

    const active = state.projects.active[0]
    return active
      ? this.decomposer.decompose(active)
      : []
  }
}

module.exports = {
  LifeIntegration
}
