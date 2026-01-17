'use strict'

const { Task } = require('./task')

/*
TASK FACTORY

Maps actions to executable tasks.
*/

class TaskFactory {
  create (action, bot) {
    if (!action) return null

    const task = new Task(action, bot)

    switch (action.type) {
      case 'eat':
        task.run = async () => {
          task.start()
          try {
            // Placeholder — real inventory logic comes later
            await bot.waitForTicks(20)
            task.complete()
          } catch (e) {
            task.fail(e)
          }
        }
        break

      case 'observe':
        task.run = async () => {
          task.start()
          await bot.waitForTicks(10)
          task.complete()
        }
        break

      default:
        task.run = async () => {
          task.start()
          task.complete()
        }
    }

    return task
  }
}

module.exports = { TaskFactory }
