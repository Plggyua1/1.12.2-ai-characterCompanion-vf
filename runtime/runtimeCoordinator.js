'use strict'

/*
PHASE 29.1 — RUNTIME COORDINATOR

Purpose:
Central runtime glue. No decisions.
*/

const { Watchdog } = require('../diagnostics/watchdog')
const { PersistenceManager } = require('../persistence/persistenceManager')
const { log } = require('../diagnostics/logger')

class RuntimeCoordinator {
  constructor ({ interruptions }) {
    this.watchdog = new Watchdog()
    this.persistence = new PersistenceManager()
    this.interruptions = interruptions
    this.stateProvider = null
  }

  bindStateProvider (fn) {
    this.stateProvider = fn
  }

  tick () {
    this.watchdog.check(this.interruptions)
  }

  save () {
    if (!this.stateProvider) return
    this.persistence.save(this.stateProvider())
  }

  shutdown () {
    log('runtime', 'shutdown_requested')
    this.save()
  }
}

module.exports = {
  RuntimeCoordinator
}
