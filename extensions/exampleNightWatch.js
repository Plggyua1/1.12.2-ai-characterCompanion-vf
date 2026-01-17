'use strict'

const { ExtensionInterface } = require('./extensionInterface')

class NightWatch extends ExtensionInterface {
  onTick ({ time }) {
    this.isNight = time % 24000 > 13000
  }

  proposeGoals () {
    if (!this.isNight) return []
    return [{
      type: 'observe',
      urgency: 0.4,
      reason: 'night_watch'
    }]
  }
}

module.exports = {
  NightWatch
}
