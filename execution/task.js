'use strict'

/*
TASK

A live, interruptible execution unit.
*/

class Task {
  constructor (action, bot) {
    this.action = action
    this.bot = bot
    this.status = 'pending' // pending | running | completed | failed | interrupted
    this.startedAt = null
  }

  start () {
    this.status = 'running'
    this.startedAt = Date.now()
  }

  interrupt (reason = 'unknown') {
    this.status = 'interrupted'
    this.interruptedReason = reason
  }

  complete () {
    this.status = 'completed'
  }

  fail (err) {
    this.status = 'failed'
    this.error = err
  }
}

module.exports = { Task }
