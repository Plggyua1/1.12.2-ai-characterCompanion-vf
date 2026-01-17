'use strict'

/*
PHASE 31.2 — SOCIAL GOALS
*/

class SocialGoals {
  generate ({ social }) {
    if (!social) return []

    const goals = []

    if (social.trust > 0.6 && social.proximity < 6) {
      goals.push({
        type: 'coordinate_with_player',
        urgency: 0.4,
        decay: 0.01
      })
    }

    if (social.trust < 0.3 && social.proximity < 4) {
      goals.push({
        type: 'maintain_distance',
        urgency: 0.6,
        decay: 0.02
      })
    }

    return goals
  }
}

module.exports = {
  SocialGoals
}
