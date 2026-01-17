'use strict'

/*
INVENTORY SNAPSHOT

Creates a safe, immutable view of the current inventory.
*/

function snapshotInventory (bot) {
  if (!bot?.inventory?.items) return []

  return bot.inventory.items().map(item => ({
    name: item.name,
    type: item.type,
    count: item.count,
    metadata: item.metadata || {},
    durability: item.durability ?? null
  }))
}

module.exports = { snapshotInventory }
