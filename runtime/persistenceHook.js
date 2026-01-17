'use strict'

/*
PHASE 43.9 — PERSISTENCE HOOK
(UPDATED — PER-BOT SAFE)
*/

const { PersistenceEngine } = require('../persistence/persistenceEngine')

function attachPersistence (bot, state, savePath) {
  const engine = new PersistenceEngine(savePath)

  // Load on startup
  const loaded = engine.load(state)
  Object.assign(state, loaded)

  // Periodic save
  setInterval(() => {
    engine.save(state)
  }, 1000 * 60)

  // Save on exit
  process.on('SIGINT', () => engine.save(state))
  process.on('SIGTERM', () => engine.save(state))
}

module.exports = {
  attachPersistence
}
