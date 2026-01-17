'use strict'

/*
PHASE 39.3 — REFLECTION ENGINE
*/

const { GeminiClient } = require('../communication/geminiClient')
const { ReflectionPrompt } = require('./reflectionPrompt')

class ReflectionEngine {
  constructor () {
    this.client = new GeminiClient()
    this.prompt = new ReflectionPrompt()
  }

  async reflect (episodes) {
    if (!episodes?.length) return null

    const prompt = this.prompt.build({ episodes })
    return await this.client.generate(prompt)
  }
}

module.exports = {
  ReflectionEngine
}
