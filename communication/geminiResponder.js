'use strict'

/*
PHASE 40.5 — GEMINI RESPONDER
*/

const { GeminiClient } = require('./geminiClient')

class GeminiResponder {
  constructor () {
    this.client = new GeminiClient()
  }

  async respond ({ message, style }) {
    const prompt = `
You are a Minecraft player replying to another player.

Message:
"${message}"

Style:
${style}

Rules:
- First person
- Short response
- No AI or system references
- No emojis

Reply:
`.trim()

    return await this.client.generate(prompt)
  }
}

module.exports = {
  GeminiResponder
}
