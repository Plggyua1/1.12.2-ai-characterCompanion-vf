'use strict'

/*
SURVIVAL MONITOR

Observes health and hunger.
Produces survival pressures.
*/

class SurvivalMonitor {
  observe (perception = {}) {
    const pressures = []

    const health = perception.health
    const food = perception.food

    if (typeof health === 'number' && health < 10) {
      pressures.push({
        type: 'survival',
        magnitude: 10 - health,
        sources: ['low_health']
      })
    }

    if (typeof food === 'number' && food < 14) {
      pressures.push({
        type: 'hunger',
        magnitude: 14 - food,
        sources: ['low_food']
      })
    }

    return pressures
  }
}

module.exports = { SurvivalMonitor }