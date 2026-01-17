'use strict'

/*
PHASE 33.4 — ROLE AFFINITY
*/

class RoleAffinity {
  score ({ selfRole, otherRole }) {
    if (selfRole === otherRole) return 0.3
    if (selfRole === 'scout' && otherRole === 'fighter') return 0.8
    if (selfRole === 'builder' && otherRole === 'guard') return 0.7
    return 0.5
  }
}

module.exports = {
  RoleAffinity
}
