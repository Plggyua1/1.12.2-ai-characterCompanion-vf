'use strict'

/*
PHASE 38.6 — GEMINI INTEGRATION
*/

const { GeminiCommunication } = require('./geminiCommunication')

function setupGemini (bot, meta) {
  const gemini = new GeminiCommunication()
  require('../runtime/geminiChatBridge')
    .attachGeminiChat(bot, meta, gemini)
}

module.exports = {
  setupGemini
}
