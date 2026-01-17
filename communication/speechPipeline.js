'use strict'

/*
PHASE 31.6 — SPEECH PIPELINE
*/

const { ToneMapper } = require('./toneMapper')
const { LLMRenderer } = require('./llmRenderer')

class SpeechPipeline {
  constructor ({ embodiment, provider }) {
    this.toneMapper = new ToneMapper()
    this.renderer = new LLMRenderer({ provider })
    this.embodiment = embodiment
  }

  async speak ({ intent, personality, trust }) {
    if (!intent) return

    const tone = this.toneMapper.map({
      baseTone: intent.tone,
      personality
    })

    const text = await this.renderer.render({
      intent,
      tone,
      personality,
      trust
    })

    if (text) {
      this.embodiment.chat(text)
    }
  }
}

module.exports = {
  SpeechPipeline
}
