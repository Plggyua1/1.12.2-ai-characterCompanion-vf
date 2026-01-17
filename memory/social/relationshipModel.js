'use strict'

/*
PHASE 34.2 — RELATIONSHIP MODEL
*/

class RelationshipModel {
  constructor () {
    this.map = new Map()
  }

  get (actorId) {
    if (!this.map.has(actorId)) {
      this.map.set(actorId, {
        bond: 0.5,
        trust: 0.5,
        resentment: 0,
        lastEventAt: Date.now()
      })
    }
    return this.map.get(actorId)
  }

  applyEvent (actorId, { bond = 0, trust = 0, resentment = 0 }) {
    const r = this.get(actorId)
    r.bond = clamp(r.bond + bond)
    r.trust = clamp(r.trust + trust)
    r.resentment = clamp(r.resentment + resentment)
    r.lastEventAt = Date.now()
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  RelationshipModel
}
