'use strict'

/*
PHASE 28 — PERFORMANCE GUARD

Purpose:
Prevent excessive processing in a single tick.
*/

class PerformanceGuard {
  constructor ({ maxOps = 100 } = {}) {
    this.maxOps = maxOps
    this.ops = 0
  }

  count () {
    this.ops++
    if (this.ops > this.maxOps) {
      throw new Error('Performance limit exceeded')
    }
  }

  reset () {
    this.ops = 0
  }
}

module.exports = {
  PerformanceGuard
}
