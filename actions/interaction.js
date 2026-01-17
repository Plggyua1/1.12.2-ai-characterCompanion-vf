'use strict'

module.exports = async function interactionAction (bot, step) {
  if (step.type === 'equip' && step.item) {
    await bot.equip(step.item, step.slot || 'hand')
  }
}
