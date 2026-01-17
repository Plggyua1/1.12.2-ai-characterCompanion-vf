'use strict'

/*
PHASE 44.1 — PLAYER ROLE MODEL
*/

class PlayerRoleModel {
  infer ({ actions }) {
    let role = 'unknown'

    if (actions.includes('gather')) role = 'gatherer'
    if (actions.includes('build')) role = 'builder'
    if (actions.includes('fight')) role = 'fighter'
    if (actions.includes('lead')) role = 'leader'

    return role
  }
}

module.exports = {
  PlayerRoleModel
}
