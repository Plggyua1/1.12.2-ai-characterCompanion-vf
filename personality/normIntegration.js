'use strict'

/*
PHASE 36.7 — NORM INTEGRATION
*/

const baselineNorms = require('./baselineNorms')
const { NormEngine } = require('./normEngine')

class NormIntegration {
  constructor () {
    this.norms = baselineNorms
    this.engine = new NormEngine()
  }

  evaluateAction ({ actionType, personality }) {
    return this.engine.evaluate({
      actionType,
      norms: this.norms,
      personality
    })
  }
}

module.exports = {
  NormIntegration
}
