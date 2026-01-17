'use strict'

/*
PHASE 45.6 — EXTENSION GOAL MERGE
*/

function mergeExtensionGoals (coreGoals, extensionGoals = []) {
  return coreGoals.concat(
    extensionGoals.filter(g => g.type && g.urgency)
  )
}

module.exports = {
  mergeExtensionGoals
}
