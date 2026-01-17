'use strict'

/*
PHASE 27 — RUNTIME CONTROLLER

Purpose:
Connect the AI mind to the Mineflayer body safely.
No logic lives here.
*/

const { IntentAuthority } = require('../intent/intentAuthority')
const { ActionRouter } = require('./actionRouter')
const { InterruptionManager } = require('../interruption/interruptionManager')
const { RecoveryManager } = require('../recovery/recoveryManager')
const { log } = require('../diagnostics/logger')

class RuntimeController {
  constructor (bot) {
    this.bot = bot

    this.intentAuthority = new IntentAuthority()
    this.actionRouter = new ActionRouter(bot)
    this.interruptions = new InterruptionManager()
    this.recovery = new RecoveryManager()
  }

  /**
   * Execute a plan step-by-step
   */
  async executePlan (plan) {
    if (!plan || !Array.isArray(plan.steps)) return

    for (const step of plan.steps) {
      // Intent check
      if (!this.intentAuthority.claim(plan.goalId)) {
        log('runtime', 'intent_denied', { goalId: plan.goalId })
        return
      }

      try {
        await this.actionRouter.executeStep(step)
      } catch (err) {
        log('runtime', 'step_failed', {
          step: step.type,
          error: err.message
        })

        this.intentAuthority.release(plan.goalId)
        this.recovery.handle(err)
        return
      }

      // Interruption check
      if (this.interruptions.shouldInterrupt()) {
        log('runtime', 'execution_interrupted', {
          goalId: plan.goalId
        })

        this.intentAuthority.release(plan.goalId)
        return
      }
    }

    this.intentAuthority.release(plan.goalId)
  }
}

module.exports = {
  RuntimeController
}
