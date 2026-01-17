'use strict'

/*
PHASE 40.11 — BUILDING MODEL
*/

class BuildingModel {
  evaluate ({ resources, plan }) {
    if (!plan) return null
    if (!resources) return null

    return {
      feasible: resources.length >= plan.cost,
      confidence: 0.5
    }
  }
}

module.exports = {
  BuildingModel
}
