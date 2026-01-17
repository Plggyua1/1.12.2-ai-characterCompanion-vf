'use strict'

const { createBelief, updateBelief } = require('./belief')
const { decayBelief } = require('./decay')

const beliefs = {}

function ingest (snapshot) {
  if (!snapshot) return

  if (snapshot.self) {
    beliefs.self = beliefs.self || {}

    if (snapshot.self.health != null) {
      beliefs.self.health = beliefs.self.health || createBelief(null, 0)
      updateBelief(beliefs.self.health, snapshot.self.health)
    }

    if (snapshot.self.food != null) {
      beliefs.self.food = beliefs.self.food || createBelief(null, 0)
      updateBelief(beliefs.self.food, snapshot.self.food)
    }
  }
}

function tick () {
  for (const domain of Object.values(beliefs)) {
    for (const belief of Object.values(domain)) {
      decayBelief(belief)
    }
  }
}

function read () {
  return beliefs
}

module.exports = { ingest, tick, read }