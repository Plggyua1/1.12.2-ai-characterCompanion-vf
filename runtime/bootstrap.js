'use strict'

/*
============================================================
SYSTEM BOOTSTRAP
============================================================

Responsibilities:
- Initialize logging
- Load configuration
- Resolve bots
- Start status server
- Launch bots
- Register ONE shutdown handler
============================================================
*/

const systemLog = require('../diagnostics/systemLogger')
const { resolveBots } = require('../configuration/botResolver')
const botConfig = require('../configuration/bots.config')

const Shutdown = require('./shutdownCoordinator')
const { startStatusServer } = require('./statusServer')
const { createBotInstance } = require('./createBotInstance')

async function bootstrap () {
  systemLog.info('============================================')
  systemLog.info('AI COMPANION SYSTEM STARTING')
  systemLog.info('============================================')

  // Initialize global shutdown coordinator ONCE
  Shutdown.init()

  // Resolve bot definitions
  const bots = resolveBots(botConfig)
  systemLog.info(`Resolved ${bots.length} bot(s)`)

  // Start live status server
  startStatusServer()

  // Create bots
  for (const botDef of bots) {
    createBotInstance({
      ...botDef,
      geminiKey: botConfig.gemini.apiKey,
      supervisor: null
    })
  }

  systemLog.info('System bootstrap complete')
}

module.exports = bootstrap
