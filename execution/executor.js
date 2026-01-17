'use strict'

/*
EXECUTOR

Owns task execution and interruption.
*/

class Executor {
  constructor (bot) {
    this.bot = bot
    this.currentTask = null
  }

  async execute (task) {
    if (!task) return

    // Interrupt existing task
    if (this.currentTask && this.currentTask.status === 'running') {
      this.currentTask.interrupt('replaced')
    }

    this.currentTask = task

    try {
      await task.run()
    } catch (e) {
      task.fail(e)
    }
  }

  interrupt (reason) {
    if (this.currentTask && this.currentTask.status === 'running') {
      this.currentTask.interrupt(reason)
    }
  }
}

module.exports = { Executor }
