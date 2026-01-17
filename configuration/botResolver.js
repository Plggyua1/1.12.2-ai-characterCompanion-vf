'use strict'

/*
BOT RESOLVER — IDENTITY SOURCE OF TRUTH
*/

function resolveBots (config) {
  const bots = []

  if (config.bots.mode === 'single') {
    bots.push({
      id: 'bot-0',
      name: config.bots.naming.baseName
    })
    return bots
  }

  if (config.bots.naming.strategy === 'manual') {
    config.bots.naming.names.forEach((name, i) => {
      bots.push({
        id: `bot-${i}`,
        name
      })
    })
    return bots
  }

  // auto naming
  for (let i = 0; i < config.bots.count; i++) {
    bots.push({
      id: `bot-${i}`,
      name: `${config.bots.naming.baseName}${i + 1}`
    })
  }

  return bots
}

module.exports = {
  resolveBots
}
