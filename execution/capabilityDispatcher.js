'use strict'

/*
PHASE 41.14 — CAPABILITY DISPATCHER
*/

const { ExplorationPlanner } = require('../exploration/explorationPlanner')
const { ExplorationExecutor } = require('../exploration/explorationExecutor')

const { CraftingPlanner } = require('../crafting/craftingPlanner')
const { CraftingExecutor } = require('../crafting/craftingExecutor')

const { BuildingPlanner } = require('../building/buildingPlanner')
const { BuildingExecutor } = require('../building/buildingExecutor')

class CapabilityDispatcher {
  dispatch (goal) {
    switch (goal.type) {
      case 'explore':
        return {
          plan: new ExplorationPlanner().plan(goal),
          executor: new ExplorationExecutor()
        }
      case 'craft':
        return {
          plan: new CraftingPlanner().plan(goal),
          executor: new CraftingExecutor()
        }
      case 'build':
        return {
          plan: new BuildingPlanner().plan(goal),
          executor: new BuildingExecutor()
        }
      default:
        return null
    }
  }
}

module.exports = {
  CapabilityDispatcher
}
