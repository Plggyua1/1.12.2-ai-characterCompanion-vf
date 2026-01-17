'use strict'

/*
PHASE 25 — COMMUNICATION DECISION ENGINE

Purpose:
Decide IF the AI should communicate.

Rules:
- Silence is valid
- No chat output
- No Mineflayer
- Uses existing speechGate
- Personality & context gated
*/

const speechGate = require('./speechGate')
const { log } = require('../diagnostics/logger')

class CommunicationEngine {
  constructor (personalityBiasEngine) {
    this.personalityBias = personalityBiasEngine
  }

  evaluate ({
    goal,
    plan,
    context = {},
    nowTick
  }) {
    // Survival & focus first
    if (context.immediateDanger) {
      return null
    }

    // No reason to speak
    if (!goal && !context.socialPrompt) {
      return null
    }

    // Personality gating (verbosity, social pressure, etc)
    if (
      this.personalityBias &&
      !this.personalityBias.shouldSpeak(context)
    ) {
      return null
    }

    // Mechanical cooldown (existing system)
    if (!speechGate.shouldSpeak()) {
      return null
    }

    const intent = buildCommunicationIntent({
      goal,
      plan,
      context
    })

    if (!intent) return null

    // Record cooldown usage
    speechGate.recordSpeech()

    log('communication', 'communication_intent', {
      type: intent.type,
      goalType: goal?.type
    })

    return intent
  }
}

function buildCommunicationIntent ({ goal, plan, context }) {
  if (context.socialPrompt) {
    return {
      type: 'social_response',
      urgency: context.socialUrgency || 0.4
    }
  }

  if (goal) {
    return {
      type: 'goal_disclosure',
      goalType: goal.type,
      urgency: goal.urgency
    }
  }

  return null
}

module.exports = {
  CommunicationEngine
}
