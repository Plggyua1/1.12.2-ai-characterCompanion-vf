'use strict'

/*
PHASE 19 — GOAL & DESIRE GENERATION

Purpose:
Convert pressure snapshots into competing, decaying goals.

Rules:
- Consumes pressures ONLY
- Produces NO actions
- Claims NO intent
- Executes NOTHING
- Stateless beyond local decay math
- Multiple goals may exist simultaneously
*/

const { v4: uuidv4 } = require('uuid')

/**
 * Goal structure (read-only downstream)
 * ------------------------------------
 * {
 *   id,
 *   type,
 *   sourcePressure,
 *   urgency,
 *   confidence,
 *   decayRate,
 *   createdAt,
 *   lastEvaluated,
 *   metadata
 * }
 */

function generateGoalsFromPressures (pressureSnapshot, context = {}) {
  if (!pressureSnapshot || typeof pressureSnapshot !== 'object') return []

  const now = Date.now()
  const goals = []

  for (const pressureKey of Object.keys(pressureSnapshot)) {
    const pressure = pressureSnapshot[pressureKey]
    if (!pressure || pressure.magnitude <= 0) continue

    const goal = synthesizeGoal(pressureKey, pressure, now, context)
    if (goal) goals.push(goal)
  }

  return goals
}

/**
 * Translate one pressure into a goal candidate
 */
function synthesizeGoal (pressureKey, pressure, now, context) {
  const baseUrgency = clamp(
    pressure.magnitude * pressure.certainty,
    0,
    1
  )

  if (baseUrgency <= 0) return null

  return {
    id: uuidv4(),
    type: mapPressureToGoalType(pressureKey),
    sourcePressure: pressureKey,

    urgency: baseUrgency,
    confidence: pressure.certainty,

    decayRate: calculateDecay(pressure, context),

    createdAt: now,
    lastEvaluated: now,

    metadata: {
      uncertainty: pressure.uncertainty,
      contributingBeliefs: pressure.sources || [],
      contextSnapshot: context || null
    }
  }
}

/**
 * Pressure → abstract goal intent
 * (Not actions, not plans)
 */
function mapPressureToGoalType (pressureKey) {
  const map = {
    survival_threat: 'ensure_safety',
    hunger: 'acquire_food',
    danger_nearby: 'avoid_threat',
    resource_scarcity: 'gather_resources',
    curiosity: 'explore_unknown',
    social_tension: 'repair_relationship',
    obligation: 'assist_ally'
  }

  return map[pressureKey] || 'resolve_pressure'
}

/**
 * Decay determines how fast urgency fades if not reinforced
 */
function calculateDecay (pressure, context) {
  let decay = 0.001

  if (pressure.volatility) decay += pressure.volatility * 0.002
  if (pressure.certainty < 0.4) decay += 0.003
  if (context?.timeCritical) decay += 0.005

  return clamp(decay, 0.0001, 0.05)
}

/**
 * Re-evaluate urgency over time without side effects
 */
function evaluateGoalDecay (goal, now = Date.now()) {
  const elapsed = now - goal.lastEvaluated
  if (elapsed <= 0) return goal.urgency

  const decayAmount = elapsed * goal.decayRate
  return clamp(goal.urgency - decayAmount, 0, 1)
}

/**
 * Utilities
 */
function clamp (val, min, max) {
  return Math.max(min, Math.min(max, val))
}

module.exports = {
  generateGoalsFromPressures,
  evaluateGoalDecay
}
