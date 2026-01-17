'use strict'

class ProceduralStore {
  save (proceduralMemory) {
    return Array.from(proceduralMemory.procedures.entries())
  }

  load (data) {
    const map = new Map()
    for (const [k, v] of data || []) map.set(k, v)
    return { procedures: map }
  }
}

module.exports = {
  ProceduralStore
}
