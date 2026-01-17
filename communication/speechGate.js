'use strict'

const { state } = require('../core/state')

function shouldSpeak () {
  const timeSince = state.tick - state.lastSpokeAt
  if (timeSince < 20) return false
  return true
}

function recordSpeech () {
  state.lastSpokeAt = state.tick
}

module.exports = {
  shouldSpeak,
  recordSpeech
}
