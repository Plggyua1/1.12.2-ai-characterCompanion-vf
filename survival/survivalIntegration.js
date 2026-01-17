'use strict'

/*
PHASE 30.7 — SURVIVAL INTEGRATION
*/

const { SurvivalAssessor } = require('./survivalAssessor')
const { SurvivalGoals } = require('./survivalGoals')

class SurvivalIntegration {
  constructor () {
    this.assessor = new SurvivalAssessor()
    this.goals = new SurvivalGoals()
  }

  run (context) {
    const survival = this.assessor.assess(context)
    return this.goals.generate({ survival })
  }
}

module.exports = {
  SurvivalIntegration
}
