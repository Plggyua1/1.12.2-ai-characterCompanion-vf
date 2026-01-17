'use strict'

/*
INVENTORY EVALUATOR

Assigns utility values to inventory items.
*/

class InventoryEvaluator {
  evaluate (item, context = {}) {
    let utility = 0

    for (const category of item.categories || []) {
      switch (category.type) {
        case 'food':
          utility += 5 * category.confidence
          if (context.hunger) utility += 3
          break

        case 'weapon':
          utility += 4 * category.confidence
          if (context.threat) utility += 2
          break

        case 'unknown':
          utility -= 1
          break
      }
    }

    return utility
  }
}

module.exports = { InventoryEvaluator }
