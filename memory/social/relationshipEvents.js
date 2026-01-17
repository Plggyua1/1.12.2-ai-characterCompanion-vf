'use strict'

/*
PHASE 34.3 — RELATIONSHIP EVENTS
*/

class RelationshipEvents {
  interpret (outcome) {
    switch (outcome) {
      case 'saved_me':
        return { bond: 0.15, trust: 0.1 }
      case 'fought_together':
        return { bond: 0.08, trust: 0.05 }
      case 'abandoned_me':
        return { bond: -0.2, trust: -0.25, resentment: 0.2 }
      case 'lied_to_me':
        return { trust: -0.2, resentment: 0.25 }
      default:
        return {}
    }
  }
}

module.exports = {
  RelationshipEvents
}
