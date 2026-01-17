'use strict'

const { getBot } = require('../runtime/bindBot')

function read () {
  const bot = getBot()
  if (!bot || !bot.entity) return null

  return {
    health: typeof bot.health === 'number' ? bot.health : null,
    food: typeof bot.food === 'number' ? bot.food : null,
    position: bot.entity.position,
    onGround: bot.entity.onGround
  }
}

module.exports = { read }
