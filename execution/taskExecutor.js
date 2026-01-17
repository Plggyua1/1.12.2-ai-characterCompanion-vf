'use strict'

/*
PHASE 41.2 — TASK EXECUTOR
*/

const TaskState = require('./taskState')

class TaskExecutor {
  constructor (name) {
    this.name = name
    this.state = TaskState.PENDING
    this.stepIndex = 0
    this.steps = []
  }

  start (steps) {
    this.steps = steps
    this.state = TaskState.RUNNING
  }

  next () {
    if (this.stepIndex >= this.steps.length) {
      this.state = TaskState.COMPLETED
      return null
    }
    return this.steps[this.stepIndex++]
  }

  fail () {
    this.state = TaskState.FAILED
  }

  abort () {
    this.state = TaskState.ABORTED
  }
}

module.exports = {
  TaskExecutor
}
