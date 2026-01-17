'use strict'

/*
PHASE 32.1 — FATIGUE MODEL
*/

class FatigueModel {
  constructor () {
    this.fatigue = 0 // 0..1
    this.lastUpdate = Date.now()
  }

  update ({ activityLoad = 0, resting = false }) {
    const now = Date.now()
    const dt = Math.min(60000, now - this.lastUpdate)
    this.lastUpdate = now

    if (resting) {
      this.fatigue -= 0.00002 * dt
    } else {
      this.fatigue += activityLoad * 0.00003 * dt
    }

    this.fatigue = clamp(this.fatigue)
    return this.snapshot()
  }

  snapshot () {
    return {
      fatigue: this.fatigue,
      impaired: this.fatigue > 0.7
    }
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  FatigueModel
}
