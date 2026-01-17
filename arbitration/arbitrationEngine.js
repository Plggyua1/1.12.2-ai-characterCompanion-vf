'use strict'

/*
PHASE 20 — ARBITRATION LAYER

Purpose:
Decide which goal (if any) is permitted to act.

Rules:
- Consumes goals ONLY
- Authorizes at most ONE goal
- Does NOT plan
- Does NOT execute
- Does NOT claim intent itself
- Enforces cooldowns and safe interruption
*/

const DEFAULT_COOLDOWN_MS = 4000

/**
 * Arbitration result:
 * {
 *   authorizedGoal: goal | null,
 *   reason,
 *   timestamp
 * }
 */

class ArbitrationEngine {
  constructor () {
    this.activeGoalId = null
    this.lastSwitchTime = 0
    this.cooldowns = new Map()
  }

  /**
   * Main entry point
   */
  arbitrate (goals, now = Date.now()) {
    if (!Array.isArray(goals) || goals.length === 0) {
      return this._deny('no_goals', now)
    }

    const viable = goals
      .filter(g => g.urgency > 0)
      .map(g => this._scoreGoal(g, now))
      .sort((a, b) => b.score - a.score)

    if (viable.length === 0) {
      return this._deny('no_viable_goals', now)
    }

    const candidate = viable[0].goal

    if (!this._canSwitchTo(candidate, now)) {
      return this._deny('cooldown_active', now)
    }

    if (!this._isInterruptionSafe(candidate)) {
      return this._deny('interruption_blocked', now)
    }

    this._authorize(candidate, now)

    return {
      authorizedGoal: candidate,
      reason: 'authorized',
      timestamp: now
    }
  }

  /**
   * Goal scoring (continuous, non-binary)
   */
  _scoreGoal (goal, now) {
    const age = now - goal.createdAt

    let score =
      goal.urgency * 1.2 +
      goal.confidence * 0.6 -
      goal.decayRate * age * 0.001

    // Stickiness bias to avoid thrashing
    if (goal.id === this.activeGoalId) {
      score += 0.25
    }

    return { goal, score }
  }

  /**
   * Prevent rapid goal switching
   */
  _canSwitchTo (goal, now) {
    if (this.activeGoalId === goal.id) return true

    const last = this.cooldowns.get(goal.id) || 0
    if (now - last < DEFAULT_COOLDOWN_MS) return false

    return true
  }

  /**
   * Interruption safety gate
   * (future expansion point)
   */
  _isInterruptionSafe (goal) {
    // Placeholder for Phase 21+ signals
    // For now, always safe
    return true
  }

  /**
   * Commit authorization
   */
  _authorize (goal, now) {
    if (this.activeGoalId && this.activeGoalId !== goal.id) {
      this.cooldowns.set(this.activeGoalId, now)
    }

    this.activeGoalId = goal.id
    this.lastSwitchTime = now
  }

  _deny (reason, now) {
    return {
      authorizedGoal: null,
      reason,
      timestamp: now
    }
  }
}

module.exports = {
  ArbitrationEngine
}
