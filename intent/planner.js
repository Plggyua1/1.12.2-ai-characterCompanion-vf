'use strict'

/*
PHASE 21 — PLANNING & REPLANNING

Purpose:
Convert an authorized goal into a tentative, abortable plan.

Rules:
- Consumes ONE authorized goal
- Produces abstract plan steps
- NO execution
- NO intent claiming
- Plans may be partial
- Plans may be invalidated at any time
*/

const { v4: uuidv4 } = require('uuid')

class Planner {
  constructor () {
    this.activePlan = null
  }

  /**
   * Entry point
   */
  generatePlan (authorizedGoal, worldSnapshot = {}, now = Date.now()) {
    if (!authorizedGoal) {
      this.activePlan = null
      return null
    }

    // Replan if goal changed
    if (!this.activePlan || this.activePlan.goalId !== authorizedGoal.id) {
      this.activePlan = this._buildNewPlan(authorizedGoal, worldSnapshot, now)
      return this.activePlan
    }

    // Validate existing plan
    if (!this._isPlanStillValid(this.activePlan, worldSnapshot)) {
      this.activePlan = this._buildNewPlan(authorizedGoal, worldSnapshot, now)
      return this.activePlan
    }

    return this.activePlan
  }

  /**
   * Construct a fresh plan
   */
  _buildNewPlan (goal, worldSnapshot, now) {
    return {
      id: uuidv4(),
      goalId: goal.id,
      goalType: goal.type,

      createdAt: now,
      lastEvaluated: now,

      status: 'tentative', // tentative | partial | invalid

      steps: this._deriveSteps(goal, worldSnapshot),

      assumptions: this._extractAssumptions(goal, worldSnapshot),

      metadata: {
        confidence: goal.confidence,
        urgencyAtCreation: goal.urgency
      }
    }
  }

  /**
   * Abstract step derivation
   * (NO mechanics, NO actions)
   */
  _deriveSteps (goal, worldSnapshot) {
    switch (goal.type) {
      case 'ensure_safety':
        return [
          { type: 'assess_threats' },
          { type: 'increase_distance' },
          { type: 'seek_safe_position' }
        ]

      case 'acquire_food':
        return [
          { type: 'identify_food_sources' },
          { type: 'obtain_food' },
          { type: 'secure_supply' }
        ]

      case 'explore_unknown':
        return [
          { type: 'select_direction' },
          { type: 'advance_cautiously' },
          { type: 'record_discoveries' }
        ]

      default:
        return [
          { type: 'analyze_pressure_source' },
          { type: 'reduce_pressure' }
        ]
    }
  }

  /**
   * Extract assumptions that may invalidate the plan
   */
  _extractAssumptions (goal, worldSnapshot) {
    return {
      environmentStable: true,
      goalUrgencyAbove: 0.2,
      confidenceAbove: 0.3
    }
  }

  /**
   * Validate plan against updated conditions
   */
  _isPlanStillValid (plan, worldSnapshot) {
    if (!plan) return false
    if (plan.status === 'invalid') return false

    // Placeholder for future signals:
    // - world changes
    // - memory conflicts
    // - interruption signals

    return true
  }

  /**
   * External invalidation hook
   */
  invalidatePlan (reason = 'external') {
    if (this.activePlan) {
      this.activePlan.status = 'invalid'
      this.activePlan.invalidatedReason = reason
    }
  }
}

module.exports = {
  Planner
}
