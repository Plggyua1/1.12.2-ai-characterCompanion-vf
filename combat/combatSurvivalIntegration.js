'use strict'

/*
PHASE 42.11 — COMBAT & SURVIVAL INTEGRATION
*/

const { ThreatModel } = require('./threatModel')
const { SurvivalState } = require('../survival/survivalState')
const { CombatDecision } = require('./combatDecision')
const { CombatPlanner } = require('./combatPlanner')
const { CombatExecutor } = require('./combatExecutor')
const { CombatPressure } = require('./combatPressure')

const { SurvivalPlanner } = require('../survival/survivalPlanner')
const { SurvivalExecutor } = require('../survival/survivalExecutor')

class CombatSurvivalIntegration {
  run (context, personality) {
    const threat = new ThreatModel().assess(context)
    const survivalRisk = new SurvivalState().evaluate(context)

    const decision = new CombatDecision().decide({
      threat,
      survivalRisk,
      personality
    })

    const pressure = new CombatPressure().generate({
      threat,
      survivalRisk
    })

    if (decision === 'ignore') {
      return { pressure }
    }

    if (decision === 'fight' || decision === 'flee' || decision === 'avoid') {
      const plan = new CombatPlanner().plan(decision)
      return {
        pressure,
        executor: new CombatExecutor().run(plan)
      }
    }

    const survivalPlan = new SurvivalPlanner().plan({ state: context })
    return {
      pressure,
      executor: new SurvivalExecutor().run(survivalPlan)
    }
  }
}

module.exports = {
  CombatSurvivalIntegration
}
