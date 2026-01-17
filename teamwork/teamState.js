'use strict'

/*
PHASE 44.2 — TEAM STATE
*/

class TeamState {
  constructor () {
    this.members = new Map()
    this.activePlan = null
  }

  join (player, role) {
    this.members.set(player, { role, joinedAt: Date.now() })
  }

  leave (player) {
    this.members.delete(player)
  }

  isTeamed () {
    return this.members.size > 0
  }
}

module.exports = {
  TeamState
}
