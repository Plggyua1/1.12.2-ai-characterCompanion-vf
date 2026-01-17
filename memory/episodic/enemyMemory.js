'use strict'

/*
PHASE 42.9 — ENEMY MEMORY
*/

class EnemyMemory {
  constructor () {
    this.enemies = new Map()
  }

  record ({ type, danger }) {
    this.enemies.set(type, {
      danger,
      lastSeen: Date.now()
    })
  }

  recall (type) {
    return this.enemies.get(type) || null
  }
}

module.exports = {
  EnemyMemory
}
