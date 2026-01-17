'use strict'

/*
PHASE 29 — RUNTIME LIFECYCLE

Purpose:
Wire watchdog, persistence, and clean shutdown.
*/

const { Watchdog } = require('../diagnostics/watchdog')
const { PersistenceManager } = require('../persistence/persistenceManager')
const { log } = require('../diagnostics/logger')

class RuntimeLifecycle {
  constructor ({ interruptions }) {
    this.watchdog = new Watchdog()
    this.persistence = new PersistenceManager()
    this.interruptions = interruptions
  }

  tick () {
    this.watchdog.check(this.interruptions)
  }

  save (state) {
    this.persistence.save(state)
  }

  shutdown (state) {
    log('lifecycle', 'shutdown')
    this.save(state)
  }
}

module.exports = {
  RuntimeLifecycle
}
