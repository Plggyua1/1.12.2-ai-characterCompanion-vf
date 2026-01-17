'use strict'

/*
PRESSURE ENGINE

Purpose:
Convert beliefs (with uncertainty) into internal pressures.
Pressures are forces, not decisions.
This system NEVER performs actions.
This system NEVER requests intent.
*/

class PressureEngine {
  constructor () {
    this._pressures = new Map()
  }

  /**
   * Update pressures from current beliefs.
   * @param {Map<string, { value: any, confidence: number }>} beliefs
   * @returns {Array<{ type: string, magnitude: number, sources: string[] }>}
   */
  update (beliefs) {
    this._reset()

    if (!beliefs || typeof beliefs.get !== 'function') {
      return this._snapshot()
    }

    this._fromHealth(beliefs)
    this._fromHunger(beliefs)
    this._fromDanger(beliefs)
    this._fromUncertainty(beliefs)

    return this._snapshot()
  }

  /* =========================
     INTERNAL HELPERS
     ========================= */

  _reset () {
    this._pressures.clear()
  }

  _addPressure (type, magnitude, source) {
    if (magnitude <= 0) return

    const existing = this._pressures.get(type) || {
      type,
      magnitude: 0,
      sources: []
    }

    existing.magnitude += magnitude
    existing.sources.push(source)

    this._pressures.set(type, existing)
  }

  /* =========================
     PRESSURE SOURCES
     ========================= */

  _fromHealth (beliefs) {
    const health = beliefs.get('health')
    if (!health || health.value == null) return

    const deficit = Math.max(0, 20 - health.value)
    const confidence = typeof health.confidence === 'number'
      ? health.confidence
      : 0.5

    const pressure = deficit * (1 - confidence)
    this._addPressure('survival', pressure, 'low_health')
  }

  _fromHunger (beliefs) {
    const food = beliefs.get('food')
    if (!food || food.value == null) return

    const deficit = Math.max(0, 20 - food.value)
    const confidence = typeof food.confidence === 'number'
      ? food.confidence
      : 0.5

    const pressure = deficit * (1 - confidence)
    this._addPressure('hunger', pressure, 'low_food')
  }

  _fromDanger (beliefs) {
    const danger = beliefs.get('danger')
    if (!danger || danger.value !== true) return

    const confidence = typeof danger.confidence === 'number'
      ? danger.confidence
      : 0.5

    const pressure = 10 * confidence
    this._addPressure('threat', pressure, 'perceived_danger')
  }

  _fromUncertainty (beliefs) {
    let uncertainty = 0

    for (const belief of beliefs.values()) {
      if (
        belief &&
        typeof belief.confidence === 'number' &&
        belief.confidence < 0.5
      ) {
        uncertainty += (1 - belief.confidence)
      }
    }

    if (uncertainty > 0) {
      this._addPressure(
        'uncertainty',
        uncertainty,
        'low_confidence_world'
      )
    }
  }

  /* =========================
     OUTPUT
     ========================= */

  _snapshot () {
    return Array.from(this._pressures.values())
      .sort((a, b) => b.magnitude - a.magnitude)
  }
}

module.exports = {
  PressureEngine
}
