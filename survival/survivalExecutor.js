'use strict'

/*
PHASE 42.8 — SURVIVAL EXECUTOR
*/

const { TaskExecutor } = require('../execution/taskExecutor')

class SurvivalExecutor {
  constructor () {
    this.executor = new TaskExecutor('survival')
  }

  run (plan) {
    this.executor.start(plan)
    return this.executor
  }
}

module.exports = {
  SurvivalExecutor
}
