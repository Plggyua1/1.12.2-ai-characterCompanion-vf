'use strict'

const fs = require('fs')
const path = require('path')

function createLogger (logDir) {
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true })
  const logPath = path.join(logDir, 'ai.log')

  function write (level, msg) {
    fs.appendFileSync(
      logPath,
      `[${new Date().toISOString()}] [${level}] ${msg}\n`
    )
  }

  return {
    info: msg => write('INFO', msg),
    warn: msg => write('WARN', msg),
    error: msg => write('ERROR', msg)
  }
}

module.exports = {
  createLogger
}
