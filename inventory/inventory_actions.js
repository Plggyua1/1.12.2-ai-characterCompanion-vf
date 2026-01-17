'use strict'

/*
INVENTORY ACTIONS

Low-level Mineflayer-bound inventory actions.
*/

async function eatItem (bot, item) {
  await bot.equip(item, 'hand')
  await bot.consume()
}

async function equipItem (bot, item) {
  await bot.equip(item, 'hand')
}

async function dropItem (bot, item) {
  await bot.tossStack(item)
}

module.exports = {
  eatItem,
  equipItem,
  dropItem
}
