'use strict'

const systemLog = require('../diagnostics/systemLogger')
const Shutdown = require('./shutdownCoordinator')

function attachPersistence (bot, state, engine) {
  if (!engine || typeof engine.save !== 'function') return

  // REGISTER SAVE WITH SHUTDOWN COORDINATOR
  Shutdown.register(async () => {
    try {
      systemLog.info(`Persisting state for ${state.name}`)
      await engine.save(state)
    } catch (err) {
      systemLog.error(`Persistence save failed for ${state.name}: ${err}`)
    }
  })

  // OPTIONAL: periodic autosave (no signals)
  bot.on('spawn', () => {
    systemLog.info(`Persistence active for ${state.name}`)
  })
}

module.exports = {
  attachPersistence
}
