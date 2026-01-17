'use strict'

const { Task } = require('./task')

/*
SURVIVAL TASKS

Real Mineflayer-backed survival execution.
*/

function createEatTask (action, bot, evaluator) {
  const task = new Task(action, bot)

  task.run = async () => {
    task.start()

    try {
      if (!evaluator.hasFood(bot)) {
        task.fail(new Error('No food available'))
        return
      }

      const foodItem = bot.inventory.items().find(i => i.name.includes('bread') || i.name.includes('apple'))

      await bot.equip(foodItem, 'hand')
      await bot.consume()

      task.complete()
    } catch (err) {
      task.fail(err)
    }
  }

  return task
}

module.exports = {
  createEatTask
}
