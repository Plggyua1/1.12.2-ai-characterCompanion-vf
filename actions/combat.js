'use strict'

module.exports = async function combatAction (bot, step) {
  if (!step.target) return
  bot.attack(step.target)
}
