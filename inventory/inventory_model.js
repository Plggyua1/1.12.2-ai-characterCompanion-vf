'use strict'

const { snapshotInventory } = require('./inventory_snapshot')

/*
INVENTORY MODEL

Produces a semantic inventory representation.
*/

class InventoryModel {
  constructor (classifier, memory) {
    this.classifier = classifier
    this.memory = memory
  }

  analyze (bot) {
    const snapshot = snapshotInventory(bot)

    return snapshot.map(item => {
      const learned = this.memory.recall(item.name)
      const categories = learned?.categories || this.classifier.classify(item)

      return {
        ...item,
        categories
      }
    })
  }
}

module.exports = { InventoryModel }
