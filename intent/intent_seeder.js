'use strict'

/*
PHASE 5 — INTENT SEEDING

Purpose:
Transform pressures into possible intents.
No arbitration. No execution.
*/

class IntentSeeder {
  seed (pressures = []) {
    const intents = []

    for (const pressure of pressures) {
      switch (pressure.type) {
        case 'survival':
          intents.push(this._intent('heal_self', pressure))
          break

        case 'hunger':
          intents.push(this._intent('eat_food', pressure))
          break

        case 'threat':
          intents.push(this._intent('escape_danger', pressure))
          break

        case 'uncertainty':
          intents.push(this._intent('observe_environment', pressure))
          break
      }
    }

    return intents
  }

  _intent (type, pressure) {
    return {
      type,
      urgency: pressure.magnitude,
      sources: pressure.sources,
      createdAt: Date.now(),
      status: 'candidate'
    }
  }
}

module.exports = {
  IntentSeeder
}
