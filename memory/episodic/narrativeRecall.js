'use strict'

/*
PHASE 34.4 — NARRATIVE RECALL
*/

class NarrativeRecall {
  recall ({ episodes, tags = [], limit = 3 }) {
    return episodes
      .filter(ep => tags.some(t => ep.tags.includes(t)))
      .sort((a, b) => b.strength - a.strength)
      .slice(0, limit)
  }
}

module.exports = {
  NarrativeRecall
}
