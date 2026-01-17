'use strict'

/*
BOT PRIORITY SCHEDULER
*/

class BotScheduler {
  constructor () {
    this.throttles = new Map() // id → ms
  }

  setThrottle (id, ms) {
    this.throttles.set(id, ms)
  }

  clearThrottle (id) {
    this.throttles.delete(id)
  }

  getThrottle (id) {
    return this.throttles.get(id) || 250
  }
}

module.exports = {
  BotScheduler
}
