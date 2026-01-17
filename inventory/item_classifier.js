'use strict'

/*
ITEM CLASSIFIER

Assigns probabilistic categories to items.
*/

class ItemClassifier {
  classify (item) {
    const categories = []

    if (!item?.name) {
      categories.push({ type: 'unknown', confidence: 1 })
      return categories
    }

    if (item.name.includes('bread') || item.name.includes('apple')) {
      categories.push({ type: 'food', confidence: 0.9 })
    }

    if (item.name.includes('sword')) {
      categories.push({ type: 'weapon', confidence: 0.8 })
    }

    if (categories.length === 0) {
      categories.push({ type: 'unknown', confidence: 0.6 })
    }

    return categories
  }
}

module.exports = { ItemClassifier }