'use strict'

/*
PHASE 27 — ACTION ROUTER

Purpose:
Translate abstract plan steps into concrete actions.
*/

const { log } = require('../diagnostics/logger')

class ActionRouter {
  constructor (bot) {
    this.bot = bot
    this.actions = new Map()
  }

  register (stepType, actionHandler) {
    this.actions.set(stepType, actionHandler)
  }

  async executeStep (step) {
    const handler = this.actions.get(step.type)

    if (!handler) {
      throw new Error(`No action registered for step: ${step.type}`)
    }

    log('runtime', 'executing_step', { step: step.type })
    await handler(this.bot, step)
  }
}

module.exports = {
  ActionRouter
}
