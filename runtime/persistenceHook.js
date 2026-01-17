'use strict'

const systemLog = require('../diagnostics/systemLogger')
const Shutdown = require('./shutdownCoordinator')

function attachPersistence (bot, state, engine) {
  if (!engine || typeof engine.save !== 'function') {
    systemLog.warn('Persistence engine missing or invalid')
    return
  }

  // 🔒 SAVE ONLY ON SHUTDOWN (NO INTERVALS, NO TIMERS)
  Shutdown.register(async () => {
    try {
      systemLog.info(`Persisting state for ${state.name}`)
      await engine.save(state)
    } catch (err) {
      systemLog.error(`Persistence save failed for ${state.name}: ${err}`)
    }
  })

  systemLog.info(`Persistence hook armed for ${state.name}`)
}

module.exports = {
  attachPersistence
}
