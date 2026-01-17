'use strict'

/*
PHASE 40.7 — PROCEDURAL MEMORY
*/

class ProceduralMemory {
  constructor () {
    this.procedures = new Map()
  }

  record (task, steps) {
    this.procedures.set(task, {
      steps,
      confidence: 0.5
    })
  }

  recall (task) {
    return this.procedures.get(task) || null
  }

  reinforce (task, success) {
    const p = this.procedures.get(task)
    if (!p) return
    p.confidence += success ? 0.05 : -0.1
    p.confidence = Math.max(0, Math.min(1, p.confidence))
  }
}

module.exports = {
  ProceduralMemory
}
