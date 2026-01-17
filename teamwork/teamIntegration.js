'use strict'

/*
PHASE 44.8 — TEAM INTEGRATION
*/

const { PlayerRoleModel } = require('./playerRoleModel')
const { TeamState } = require('./teamState')
const { TeamConsent } = require('./teamConsent')
const { TeamPlanner } = require('./teamPlanner')
const { TeamExit } = require('./teamExit')

class TeamIntegration {
  constructor () {
    this.roles = new PlayerRoleModel()
    this.state = new TeamState()
    this.consent = new TeamConsent()
    this.planner = new TeamPlanner()
    this.exit = new TeamExit()
  }

  attemptJoin ({ player, actions, trust, personality }) {
    if (!this.consent.allow({ trust, personality })) return false
    const role = this.roles.infer({ actions })
    this.state.join(player, role)
    return true
  }

  alignTask ({ sharedGoal, player }) {
    const member = this.state.members.get(player)
    if (!member) return null
    return this.planner.align({ sharedGoal, role: member.role })
  }

  evaluateExit ({ trust, coordination }) {
    return this.exit.shouldLeave({ trust, coordination })
  }
}

module.exports = {
  TeamIntegration
}
