'use strict'

/*
PHASE 33.8 — MULTI-AGENT INTEGRATION
*/

const { AgentRegistry } = require('./agentRegistry')
const { CoordinationContext } = require('./coordinationContext')
const { CoordinationGoals } = require('./coordinationGoals')

class MultiAgentIntegration {
  constructor () {
    this.registry = new AgentRegistry()
    this.context = new CoordinationContext()
    this.goals = new CoordinationGoals()
  }

  run ({ self, world }) {
    const agents = this.registry.list()
    const context = this.context.build({ self, agents })
    return this.goals.generate({ context })
  }
}

module.exports = {
  MultiAgentIntegration
}
