'use strict'

/*
PHASE 41.10 — BUILDING EXECUTOR
*/

const { TaskExecutor } = require('../execution/taskExecutor')

class BuildingExecutor {
  constructor () {
    this.executor = new TaskExecutor('building')
  }

  run (plan) {
    this.executor.start(plan)
    return this.executor
  }
}

module.exports = {
  BuildingExecutor
}
