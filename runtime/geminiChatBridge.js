'use strict'

/*
PHASE 38.5 — GEMINI CHAT BRIDGE
*/

function attachGeminiChat (bot, meta, gemini) {
  bot.on('chat', async (username, message) => {
    if (username === bot.username) return
    if (message !== '!why') return

    const explanation = meta.explainLast(bot.personality)
    if (!explanation) return

    const response = await gemini.explain(explanation)
    if (response) {
      bot.chat(response)
    }
  })
}

module.exports = {
  attachGeminiChat
}
