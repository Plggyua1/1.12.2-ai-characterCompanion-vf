'use strict'

/*
PHASE 40.2 — COMMUNICATION INTENT
*/

class CommunicationIntent {
  build ({ sender, message, trust }) {
    return {
      type: 'communicate',
      sender,
      message,
      urgency: clamp(0.3 + trust * 0.4),
      createdAt: Date.now()
    }
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  CommunicationIntent
}
