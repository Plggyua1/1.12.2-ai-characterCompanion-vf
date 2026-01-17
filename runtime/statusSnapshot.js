'use strict'

function collectStatus (supervisor) {
  return supervisor.status().map(bot => ({
    id: bot.id,
    name: bot.name,
    online: bot.online,
    restartsLastHour: bot.restartsLastHour,
    timestamp: Date.now()
  }))
}

module.exports = {
  collectStatus
}
