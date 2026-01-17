'use strict'

/*
PHASE 43.8 — PERSISTENCE ENGINE
(UPDATED — PER-BOT SAFE)
*/

const fs = require('fs')

const schema = require('./schema')

const { PersonalityStore } = require('./personalityStore')
const { RelationshipStore } = require('./relationshipStore')
const { EpisodicStore } = require('./episodicStore')
const { SemanticStore } = require('./semanticStore')
const { ProceduralStore } = require('./proceduralStore')
const { EnemyStore } = require('./enemyStore')

class PersistenceEngine {
  constructor (savePath) {
    this.savePath = savePath

    this.personality = new PersonalityStore()
    this.relationships = new RelationshipStore()
    this.episodic = new EpisodicStore()
    this.semantic = new SemanticStore()
    this.procedural = new ProceduralStore()
    this.enemy = new EnemyStore()
  }

  save (state) {
    const data = {
      version: schema.version,
      savedAt: Date.now(),

      personality: this.personality.save(state.personality),
      relationships: this.relationships.save(state.relationships),
      episodicMemory: this.episodic.save(state.episodicMemory),
      semanticMemory: this.semantic.save(state.semanticMemory),
      proceduralMemory: this.procedural.save(state.proceduralMemory),
      enemyMemory: this.enemy.save(state.enemyMemory)
    }

    fs.writeFileSync(this.savePath, JSON.stringify(data, null, 2))
  }

  load (fallback) {
    if (!fs.existsSync(this.savePath)) return fallback

    const raw = JSON.parse(fs.readFileSync(this.savePath))
    if (raw.version !== schema.version) return fallback

    return {
      personality: this.personality.load(raw.personality, fallback.personality),
      relationships: this.relationships.load(raw.relationships),
      episodicMemory: this.episodic.load(raw.episodicMemory),
      semanticMemory: this.semantic.load(raw.semanticMemory),
      proceduralMemory: this.procedural.load(raw.proceduralMemory),
      enemyMemory: this.enemy.load(raw.enemyMemory)
    }
  }
}

module.exports = {
  PersistenceEngine
}
