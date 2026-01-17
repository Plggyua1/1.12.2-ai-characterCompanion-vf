'use strict'

/*
PHASE 29 — SPEECH EXECUTOR

Purpose:
Send approved speech to the game body.
*/

const { log } = require('../diagnostics/logger')

class SpeechExecutor {
  constructor (embodiment) {
    this.embodiment = embodiment
  }

  speak (text) {
    if (!text) return
    log('speech', 'spoken', { text })
    this.embodiment.chat(text)
  }
}

module.exports = {
  SpeechExecutor
}
