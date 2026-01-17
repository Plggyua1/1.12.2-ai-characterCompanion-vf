'use strict'

/*
INVENTORY INTENTS

Generates intents based on inventory decisions.
*/

function inventoryIntents (inventory = []) {
  const intents = []

  for (const item of inventory) {
    if (item.decision === 'discard_candidate') {
      intents.push({
        type: 'discard_item',
        item: item.name,
        urgency: 1,
        status: 'candidate'
      })
    }
  }

  return intents
}

module.exports = { inventoryIntents }
