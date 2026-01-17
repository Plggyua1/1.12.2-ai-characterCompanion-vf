'use strict'

/*
PHASE 32.2 — ATTENTION BUDGET
*/

class AttentionBudget {
  constructor ({ max = 100 } = {}) {
    this.max = max
    this.remaining = max
  }

  spend (cost) {
    if (this.remaining < cost) return false
    this.remaining -= cost
    return true
  }

  reset () {
    this.remaining = this.max
  }

  snapshot () {
    return {
      remaining: this.remaining,
      saturated: this.remaining < this.max * 0.2
    }
  }
}

module.exports = {
  AttentionBudget
}
