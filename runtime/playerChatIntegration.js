'use strict'

/*
PHASE 40.6 — PLAYER CHAT INTEGRATION
*/

const { AddressDetector } = require('../communication/addressDetector')
const { CommunicationIntent } = require('../communication/communicationIntent')
const { SilenceGate } = require('../communication/silenceGate')
const { ResponsePlanner } = require('../communication/responsePlanner')
const { GeminiResponder } = require('../communication/geminiResponder')

function attachPlayerChat (bot, relationships) {
  const detector = new AddressDetector()
  const silence = new SilenceGate()
  const planner = new ResponsePlanner()
  const responder = new GeminiResponder()
  const intentBuilder = new CommunicationIntent()

  bot.on('chat', async (username, message) => {
    if (username === bot.username) return
    if (!detector.isAddressed({ botName: bot.username, message })) return

    const trust = relationships.get(username)?.trust || 0.4
    const intent = intentBuilder.build({ sender: username, message, trust })

    if (!silence.allow({ urgency: intent.urgency })) return

    const style = planner.plan({ message, trust })
    const reply = await responder.respond({ message, style })

    if (reply) bot.chat(reply)
  })
}

module.exports = {
  attachPlayerChat
}
