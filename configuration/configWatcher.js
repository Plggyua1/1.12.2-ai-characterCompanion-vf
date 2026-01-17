'use strict'

const fs = require('fs')
const path = require('path')
const systemLog = require('../diagnostics/systemLogger')

const CONFIG_PATH = path.join(__dirname, 'bots.config.js')

function watchConfig (onReload) {
  let timeout = null

  fs.watch(CONFIG_PATH, () => {
    if (timeout) clearTimeout(timeout)

    timeout = setTimeout(() => {
      delete require.cache[require.resolve('./bots.config')]
      const config = require('./bots.config')
      systemLog.warn('HOT RELOAD: bots.config.js reloaded')
      onReload(config)
    }, 2000)
  })
}

module.exports = {
  watchConfig
}
