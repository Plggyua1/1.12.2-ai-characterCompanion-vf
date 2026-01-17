'use strict'

class SemanticStore {
  save (semanticMemory) {
    return semanticMemory.entries || []
  }

  load (data) {
    return { entries: data || [] }
  }
}

module.exports = {
  SemanticStore
}
