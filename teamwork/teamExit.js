'use strict'

/*
PHASE 44.7 — TEAM EXIT
*/

class TeamExit {
  shouldLeave ({ trust, coordination }) {
    if (trust < 0.25) return true
    if (coordination !== 'ok') return true
    return false
  }
}

module.exports = {
  TeamExit
}
