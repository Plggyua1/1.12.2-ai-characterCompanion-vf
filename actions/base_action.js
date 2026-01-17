'use strict'

/*
BASE ACTION

Represents a possible world interaction.
Does NOT execute anything.
*/

class BaseAction {
  constructor (type) {
    this.type = type
    this.createdAt = Date.now()
    this.status = 'idle' // idle | ready | blocked | invalid

    this.prerequisites = []
    this.risks = []
    this.interruptible = true
    this.context = {}
  }

  evaluate (state = {}) {
    // Default evaluation: always possible
    this.status = 'ready'
    return this.status
  }
}

module.exports = { BaseAction }