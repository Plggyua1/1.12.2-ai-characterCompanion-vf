'use strict'

/*
PHASE 41.4 — EXPLORATION EXECUTOR
*/

const { TaskExecutor } = require('../execution/taskExecutor')

class ExplorationExecutor {
  constructor () {
    this.executor = new TaskExecutor('exploration')
  }

  run (plan) {
    this.executor.start(plan)
    return this.executor
  }
}

module.exports = {
  ExplorationExecutor
}
