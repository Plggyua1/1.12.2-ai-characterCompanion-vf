'use strict'

const Uncertainty = require('../uncertainty')

function update (perceptionSnapshot) {
  Uncertainty.ingest(perceptionSnapshot)
}

function tick () {
  Uncertainty.tick()
}

function read () {
  return Uncertainty.read()
}

module.exports = { update, tick, read }
