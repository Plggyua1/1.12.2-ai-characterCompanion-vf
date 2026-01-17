'use strict'

/*
PHASE 33.3 — COORDINATION CONTEXT
*/

class CoordinationContext {
  build ({ self, agents }) {
    if (!agents || agents.length === 0) return null

    return {
      agentCount: agents.length,
      rolesPresent: agents.map(a => a.role),
      selfRole: self.role || 'generalist',
      canCoordinate: agents.length > 1
    }
  }
}

module.exports = {
  CoordinationContext
}
