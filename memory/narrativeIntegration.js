'use strict'

/*
PHASE 34.7 — NARRATIVE INTEGRATION
*/

const { NarrativeEpisode } = require('./episodic/narrativeEpisode')
const { NarrativeRecall } = require('./episodic/narrativeRecall')
const { RelationshipModel } = require('./social/relationshipModel')
const { RelationshipEvents } = require('./social/relationshipEvents')
const { PersonalityDrift } = require('../personality/personalityDrift')
const { IdentityGuard } = require('../personality/identityGuard')

class NarrativeIntegration {
  constructor (baselinePersonality) {
    this.episodes = []
    this.narrative = new NarrativeEpisode()
    this.recall = new NarrativeRecall()
    this.relationships = new RelationshipModel()
    this.relEvents = new RelationshipEvents()
    this.drift = new PersonalityDrift()
    this.guard = new IdentityGuard()
    this.baseline = baselinePersonality
  }

  recordEvent ({ actors, event, outcome, tags, personality }) {
    const ep = this.narrative.create({ actors, event, outcome, tags })
    this.episodes.push(ep)

    for (const actor of actors || []) {
      const delta = this.relEvents.interpret(outcome)
      this.relationships.applyEvent(actor, delta)
    }

    this.drift.apply({
      personality,
      experiences: [{ type: outcome }]
    })

    this.guard.enforce(personality, this.baseline)
  }

  recallByTags (tags) {
    return this.recall.recall({ episodes: this.episodes, tags })
  }
}

module.exports = {
  NarrativeIntegration
}
