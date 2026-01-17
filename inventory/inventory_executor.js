'use strict'

const { canEat, canEquip, canDrop } = require('./inventory_guards')
const { eatItem, equipItem, dropItem } = require('./inventory_actions')

/*
INVENTORY EXECUTOR

Carries out a single inventory intent safely.
*/

class InventoryExecutor {
  constructor (bot) {
    this.bot = bot
    this.busy = false
  }

  async execute (intent, item) {
    if (this.busy) return { status: 'blocked' }
    this.busy = true

    try {
      switch (intent.type) {
        case 'eat_item':
          if (canEat(this.bot, item)) {
            await eatItem(this.bot, item)
            return { status: 'success', action: 'eat' }
          }
          break

        case 'equip_item':
          if (canEquip(this.bot, item)) {
            await equipItem(this.bot, item)
            return { status: 'success', action: 'equip' }
          }
          break

        case 'discard_item':
          if (canDrop(item)) {
            await dropItem(this.bot, item)
            return { status: 'success', action: 'drop' }
          }
          break
      }

      return { status: 'skipped' }
    } catch (err) {
      return { status: 'error', error: err.message }
    } finally {
      this.busy = false
    }
  }
}

module.exports = { InventoryExecutor }
