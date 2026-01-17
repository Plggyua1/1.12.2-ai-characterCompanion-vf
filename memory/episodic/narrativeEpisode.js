'use strict'

/*
PHASE 34.1 — NARRATIVE EPISODE
*/

class NarrativeEpisode {
  create ({ actors, event, outcome, salience = 0.5, tags = [] }) {
    return {
      timestamp: Date.now(),
      actors,
      event,
      outcome,
      salience,   // 0..1 (importance)
      tags,
      strength: salience,
      recalls: 0
    }
  }

  reinforce (episode) {
    episode.recalls++
    episode.strength = clamp(episode.strength + 0.05 * episode.salience)
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  NarrativeEpisode
}
