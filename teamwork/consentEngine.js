'use strict'

/*
PHASE 26 — CONSENT ENGINE

Purpose:
Ensure AI never agrees to unsafe or undesired cooperation.
*/

function hasConsent (playerModel, requestType) {
  if (!playerModel) return false

  switch (requestType) {
    case 'follow':
      return playerModel.boundaries.follow && playerModel.trust > 0.4

    case 'share_inventory':
      return (
        playerModel.boundaries.shareInventory &&
        playerModel.trust > 0.6
      )

    case 'risk_life':
      return (
        playerModel.boundaries.riskLife &&
        playerModel.trust > 0.85
      )

    default:
      return false
  }
}

module.exports = {
  hasConsent
}
