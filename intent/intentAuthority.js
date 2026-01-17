'use strict'

const { state } = require('../core/state')

function canOverride (nextIntent) {
  if (!state.intent) return true
  if (state.intent === nextIntent) return false
  return true
}

function requestIntent (intentName) {
  if (!canOverride(intentName)) return false

  state.intent = intentName
  state.intentSince = state.tick
  return true
}

function releaseIntent (intentName) {
  if (state.intent === intentName) {
    state.intent = null
  }
}

function currentIntent () {
  return state.intent
}

module.exports = {
  requestIntent,
  releaseIntent,
  currentIntent
}
