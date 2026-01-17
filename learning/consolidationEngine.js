'use strict'

/*
PHASE 32.4 — CONSOLIDATION ENGINE
*/

class ConsolidationEngine {
  consolidate ({ episodic, semantic, procedural }) {
    for (const ep of episodic) {
      if (ep.repeats >= 3 && ep.type === 'pattern') {
        semantic.add(ep.pattern)
      }

      if (ep.repeats >= 5 && ep.type === 'action') {
        procedural.add(ep.action)
      }
    }
  }
}

module.exports = {
  ConsolidationEngine
}
