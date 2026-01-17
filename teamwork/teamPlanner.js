'use strict'

/*
PHASE 44.5 — TEAM PLANNER
*/

class TeamPlanner {
  align ({ sharedGoal, role }) {
    if (!sharedGoal) return null

    if (role === 'gatherer') return { type: 'gather', for: sharedGoal.type }
    if (role === 'builder') return { type: 'build', for: sharedGoal.type }
    if (role === 'fighter') return { type: 'protect', for: sharedGoal.type }

    return null
  }
}

module.exports = {
  TeamPlanner
}
