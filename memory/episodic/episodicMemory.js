'use strict'

/*
PHASE 22 — EPISODIC MEMORY

Purpose:
Store lived experiences:
- goals attempted
- plans formed
- outcomes observed
- failures and near-misses

Memory is append-only.
*/

const { v4: uuidv4 } = require('uuid')

class EpisodicMemory {
  constructor (maxEntries = 5000) {
    this.entries = []
    this.maxEntries = maxEntries
  }

  /**
   * Record a new episode
   */
  recordEpisode ({
    goal,
    plan,
    outcome,
    context = {},
    timestamp = Date.now()
  }) {
    const entry = {
      id: uuidv4(),
      timestamp,

      goal: goal
        ? { id: goal.id, type: goal.type, urgency: goal.urgency }
        : null,

      plan: plan
        ? {
            id: plan.id,
            steps: plan.steps.map(s => s.type),
            status: plan.status
          }
        : null,

      outcome: outcome || 'unknown',

      context,
      tags: deriveTags(goal, outcome)
    }

    this.entries.push(entry)

    if (this.entries.length > this.maxEntries) {
      this.entries.shift()
    }

    return entry
  }

  /**
   * Recall recent episodes by tag or goal type
   */
  recall (filter = {}) {
    return this.entries.filter(e => {
      if (filter.goalType && e.goal?.type !== filter.goalType) return false
      if (filter.tag && !e.tags.includes(filter.tag)) return false
      return true
    })
  }
}

function deriveTags (goal, outcome) {
  const tags = []

  if (goal?.type) tags.push(goal.type)
  if (outcome === 'failure') tags.push('failure')
  if (outcome === 'near_miss') tags.push('near_miss')
  if (outcome === 'success') tags.push('success')

  return tags
}

module.exports = {
  EpisodicMemory
}
