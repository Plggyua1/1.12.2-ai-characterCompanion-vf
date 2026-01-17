'use strict'

/*
PHASE 45.2 — EXTENSION REGISTRY
*/

class ExtensionRegistry {
  constructor () {
    this.extensions = []
  }

  register (extension) {
    this.extensions.push(extension)
  }

  notifyTick (context) {
    for (const ext of this.extensions) {
      try { ext.onTick?.(context) } catch {}
    }
  }

  notifyPerception (data) {
    for (const ext of this.extensions) {
      try { ext.onPerception?.(data) } catch {}
    }
  }

  notifyMemory (entry) {
    for (const ext of this.extensions) {
      try { ext.onMemoryWrite?.(entry) } catch {}
    }
  }

  collectGoalProposals () {
    return this.extensions.flatMap(ext => {
      try { return ext.proposeGoals?.() || [] } catch { return [] }
    })
  }

  collectPressureProposals () {
    return this.extensions.flatMap(ext => {
      try { return ext.proposePressures?.() || [] } catch { return [] }
    })
  }
}

module.exports = {
  ExtensionRegistry
}
