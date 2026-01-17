'use strict'

/*
PHASE 33.7 — AGENT SPEECH FILTER
*/

class AgentSpeechFilter {
  allow ({ lastSpokeAt, urgency }) {
    const now = Date.now()
    if (urgency > 0.7) return true
    return now - lastSpokeAt > 15000
  }
}

module.exports = {
  AgentSpeechFilter
}
