'use strict'

/*
PHASE 33.1 — AGENT REGISTRY
*/

class AgentRegistry {
  constructor () {
    this.agents = new Map()
  }

  register ({ id, role, lastSeen }) {
    this.agents.set(id, {
      id,
      role,
      lastSeen: lastSeen || Date.now()
    })
  }

  updateSeen (id) {
    const agent = this.agents.get(id)
    if (agent) agent.lastSeen = Date.now()
  }

  list () {
    return Array.from(this.agents.values())
  }
}

module.exports = {
  AgentRegistry
}
