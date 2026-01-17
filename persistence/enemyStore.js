'use strict'

class EnemyStore {
  save (enemyMemory) {
    return Array.from(enemyMemory.enemies.entries())
  }

  load (data) {
    const map = new Map()
    for (const [k, v] of data || []) map.set(k, v)
    return { enemies: map }
  }
}

module.exports = {
  EnemyStore
}
