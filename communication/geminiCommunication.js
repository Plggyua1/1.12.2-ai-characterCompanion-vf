'use strict'

/*
PHASE 38.4 — GEMINI COMMUNICATION
*/

const { GeminiClient } = require('./geminiClient')
const { GeminiPrompt } = require('./geminiPrompt')

class GeminiCommunication {
  constructor () {
    this.client = new GeminiClient()
    this.prompt = new GeminiPrompt()
  }

  async explain (explanation) {
    if (!explanation) return null

    const prompt = this.prompt.buildExplanationPrompt(explanation)
    return await this.client.generate(prompt)
  }
}

module.exports = {
  GeminiCommunication
}
