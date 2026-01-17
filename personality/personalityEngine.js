'use strict'

const personalityConfig = require('../configuration/personality.config')

function resolvePersonality (selection) {
  if (!selection) return personalityConfig.default
  return personalityConfig.presets[selection] || personalityConfig.default
}

function applyPersonalityBias (base, personality) {
  return {
    ...base,
    tone: personality.description,
    verbosityBias: personality.speech.verbosity,
    emotionBias: personality.speech.emotion
  }
}

module.exports = {
  resolvePersonality,
  applyPersonalityBias
}
