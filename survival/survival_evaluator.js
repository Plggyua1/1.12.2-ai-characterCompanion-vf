'use strict'

/*
SURVIVAL EVALUATOR

Evaluates if survival actions are possible.
*/

class SurvivalEvaluator {
  hasFood (bot) {
    if (!bot?.inventory?.items) return false

    return bot.inventory.items().some(item => item.name.includes('bread') || item.name.includes('apple'))
  }
}

module.exports = { SurvivalEvaluator }
