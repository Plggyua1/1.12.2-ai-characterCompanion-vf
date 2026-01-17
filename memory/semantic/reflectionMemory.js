'use strict'

/*
PHASE 39.4 — REFLECTION MEMORY
*/

class ReflectionMemory {
  constructor () {
    this.entries = []
  }

  store (summary) {
    this.entries.push({
      time: Date.now(),
      summary
    })

    if (this.entries.length > 50) {
      this.entries.shift()
    }
  }
}

module.exports = {
  ReflectionMemory
}
