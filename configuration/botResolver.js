'use strict'

/*
============================================================
BOT RESOLVER — CANONICAL VERSION
============================================================

Purpose:
- Convert bots.config.js into concrete bot definitions
- NO auto-scaling
- NO implicit duplication
- NO strategy assumptions
- Single source of truth: configuration

Each bot definition MUST be explicit.
============================================================
*/

function resolveBots (config) {
  if (!config || !Array.isArray(config.bots)) {
    throw new Error('bots.config.js must export a { bots: [] } array')
  }

  return config.bots.map((bot, index) => {
    if (!bot.id || !bot.name) {
      throw new Error(
        `Bot entry at index ${index} is missing required fields (id, name)`
      )
    }

    return {
      id: bot.id,
      name: bot.name,
      personality: bot.personality || null
    }
  })
}

module.exports = {
  resolveBots
}
