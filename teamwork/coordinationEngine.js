'use strict'

/*
PHASE 26 — COORDINATION ENGINE

Purpose:
Decide HOW to work with a player if cooperation is allowed.
*/

function determineCoordination ({
  playerModel,
  goal,
  personality
}) {
  if (!playerModel || !goal) return 'independent'

  // Low trust → parallel only
  if (playerModel.trust < 0.4) {
    return 'parallel'
  }

  // High trust + loyal personality → follow or lead
  if (playerModel.trust > 0.75) {
    if (personality?.get('loyalty') > 0.6) {
      return 'follow'
    }
    return 'lead'
  }

  return 'parallel'
}

module.exports = {
  determineCoordination
}
