'use strict'

module.exports = async function movementAction (bot, step) {
  if (!step.target) return
  await bot.pathfinder.goto(step.target)
}
