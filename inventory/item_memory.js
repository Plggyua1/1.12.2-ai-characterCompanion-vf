'use strict'

/*
ITEM MEMORY

Stores learned associations about items.
*/

class ItemMemory {
  constructor () {
    this.knowledge = new Map()
  }

  remember (itemName, info) {
    this.knowledge.set(itemName, info)
  }

  recall (itemName) {
    return this.knowledge.get(itemName)
  }
}

module.exports = { ItemMemory }
