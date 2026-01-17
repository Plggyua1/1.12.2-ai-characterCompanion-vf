'use strict'

/*
PHASE 41.7 — CRAFTING EXECUTOR
*/

const { TaskExecutor } = require('../execution/taskExecutor')

class CraftingExecutor {
  constructor () {
    this.executor = new TaskExecutor('crafting')
  }

  run (plan) {
    this.executor.start(plan)
    return this.executor
  }
}

module.exports = {
  CraftingExecutor
}
