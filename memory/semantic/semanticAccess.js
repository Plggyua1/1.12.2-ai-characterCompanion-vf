'use strict'

/*
PHASE 40.8 — SEMANTIC ACCESS
*/

class SemanticAccess {
  constructor (semanticMemory) {
    this.memory = semanticMemory
  }

  query (tag) {
    return this.memory.entries.filter(e =>
      e.summary.toLowerCase().includes(tag)
    )
  }
}

module.exports = {
  SemanticAccess
}
