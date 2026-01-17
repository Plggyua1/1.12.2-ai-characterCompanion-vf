'use strict'

/*
PHASE 29 — EMBODIMENT ADAPTER

Purpose:
Expose Mineflayer safely to action modules.
*/

class Embodiment {
  constructor (bot) {
    this.bot = bot
  }

  moveTo (position) {
    return this.bot.pathfinder.goto(position)
  }

  stop () {
    this.bot.clearControlStates()
    this.bot.pathfinder.setGoal(null)
  }

  lookAt (target) {
    return this.bot.lookAt(target)
  }

  equip (item, slot = 'hand') {
    return this.bot.equip(item, slot)
  }

  attack (entity) {
    return this.bot.attack(entity)
  }

  chat (text) {
    this.bot.chat(text)
  }
}

module.exports = {
  Embodiment
}
