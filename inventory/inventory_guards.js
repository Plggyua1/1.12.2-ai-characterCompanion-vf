'use strict'

/*
INVENTORY GUARDS

Ensures inventory actions are safe to perform.
*/

function canEat (bot, item) {
  if (!bot?.food || bot.food >= 20) return false
  return item?.categories?.some(c => c.type === 'food')
}

function canEquip (bot, item) {
  return item?.categories?.some(c => c.type === 'weapon' || c.type === 'armor')
}

function canDrop (item) {
  return !!item
}

module.exports = {
  canEat,
  canEquip,
  canDrop
}
