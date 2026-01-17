'use strict'

/*
ACTION REGISTRY

Holds currently available actions for inspection.
*/

class ActionRegistry {
  constructor () {
    this.actions = []
  }

  update (actions = []) {
    this.actions = actions
  }

  list () {
    return this.actions
  }

  ready () {
    return this.actions.filter(a => a.status === 'ready')
  }
}

module.exports = { ActionRegistry }