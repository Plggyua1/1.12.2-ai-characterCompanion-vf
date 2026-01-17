'use strict'

/*
PHASE 28 — PERSISTENCE MANAGER

Purpose:
Save and restore AI state safely.
*/

const fs = require('fs')
const path = require('path')
const { log } = require('../diagnostics/logger')

class PersistenceManager {
  constructor (filename = 'ai_state.json') {
    this.path = path.join(__dirname, filename)
  }

  save (state) {
    try {
      fs.writeFileSync(
        this.path,
        JSON.stringify(state, null, 2)
      )
      log('persistence', 'state_saved')
    } catch (err) {
      log('persistence', 'save_failed', { error: err.message })
    }
  }

  load () {
    try {
      if (!fs.existsSync(this.path)) return null
      const raw = fs.readFileSync(this.path)
      log('persistence', 'state_loaded')
      return JSON.parse(raw)
    } catch (err) {
      log('persistence', 'load_failed', { error: err.message })
      return null
    }
  }
}

module.exports = {
  PersistenceManager
}
