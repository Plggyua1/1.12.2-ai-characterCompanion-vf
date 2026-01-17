'use strict'

const fs = require('fs')
const path = require('path')

const LOG_DIR = path.join(__dirname, '..', 'logs')
const LOG_PATH = path.join(LOG_DIR, 'ai.log')

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR, { recursive: true })
}

function write (level, msg) {
  fs.appendFileSync(
    LOG_PATH,
    `[${new Date().toISOString()}] [${level}] ${msg}\n`
  )
}

module.exports = {
  info: msg => write('INFO', msg),
  warn: msg => write('WARN', msg),
  error: msg => write('ERROR', msg)
}
