'use strict'

/*
PHASE 37.6 — DEBUG INTERFACE
*/

function attachDebug (bot, meta) {
  bot.on('chat', (username, message) => {
    if (message === '!why' && username === bot.username) return

    if (message === '!why') {
      const explanation = meta.explainLast(bot.personality)
      if (explanation) {
        bot.chat('[thinking] I can explain if you want.')
      }
    }
  })
}

module.exports = {
  attachDebug
}
