'use strict'

/*
PHASE 31.5 — LLM RENDERER (Gemini-ready)
*/

class LLMRenderer {
  constructor ({ provider }) {
    this.provider = provider
  }

  async render ({ intent, tone, personality, trust }) {
    // Stub behavior until Gemini is wired:
    if (!intent?.template) return ''

    // Later:
    // - pass intent, tone, personality summary to Gemini
    // - receive text only

    return intent.template
  }
}

module.exports = {
  LLMRenderer
}
