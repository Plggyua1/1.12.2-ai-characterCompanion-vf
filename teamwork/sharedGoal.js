'use strict'

/*
PHASE 44.4 — SHARED GOAL
*/

class SharedGoal {
  create ({ type, contributors, urgency }) {
    return {
      type,
      contributors,
      urgency,
      startedAt: Date.now(),
      progress: 0
    }
  }
}

module.exports = {
  SharedGoal
}
