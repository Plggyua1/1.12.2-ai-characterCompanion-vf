'use strict'

class RelationshipStore {
  save (relationships) {
    return Array.from(relationships.map.entries())
  }

  load (data) {
    const map = new Map()
    for (const [k, v] of data || []) map.set(k, v)
    return map
  }
}

module.exports = {
  RelationshipStore
}
