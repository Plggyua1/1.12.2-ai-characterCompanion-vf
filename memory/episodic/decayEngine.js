'use strict'

/*
PHASE 32.3 — EPISODIC DECAY
*/

class EpisodicDecay {
  decay (episodes, now = Date.now()) {
    return episodes.filter(ep => {
      const age = now - ep.timestamp
      const strength = ep.strength ?? 1
      const survivalBias = ep.survival ? 0.5 : 1
      return age < strength * survivalBias * 1000 * 60 * 60
    })
  }
}

module.exports = {
  EpisodicDecay
}
