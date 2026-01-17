'use strict'

/*
INVENTORY DECIDER

Determines what action makes sense for each item.
*/

class InventoryDecider {
  decide (item, utility) {
    if (utility >= 6) return 'keep'
    if (utility >= 3) return 'reserve'
    if (utility >= 0) return 'ignore'

    return 'discard_candidate'
  }
}

module.exports = { InventoryDecider }
