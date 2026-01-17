'use strict'

const path = require('path')

function getBotPaths (botId) {
  return {
    root: path.join(__dirname, '..', 'runtime_data', botId),
    logs: path.join(__dirname, '..', 'runtime_data', botId, 'logs'),
    memory: path.join(__dirname, '..', 'runtime_data', botId, 'memory'),
    persistence: path.join(__dirname, '..', 'runtime_data', botId, 'save.json')
  }
}

module.exports = {
  getBotPaths
}
