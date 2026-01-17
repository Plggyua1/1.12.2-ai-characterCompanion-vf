'use strict'

/*
PHASE 44.3 — TEAM CONSENT
*/

class TeamConsent {
  allow ({ trust, personality }) {
    if (trust < 0.35) return false
    if (personality.loyalty < 0.3) return false
    return true
  }
}

module.exports = {
  TeamConsent
}
