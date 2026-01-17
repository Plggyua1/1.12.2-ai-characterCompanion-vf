'use strict'

const systemLog = require('./diagnostics/systemLogger')
const bootstrap = require('./runtime/bootstrap')
const Shutdown = require('./runtime/shutdownCoordinator')

async function main () {
  try {
    Shutdown.init()
    await bootstrap()
  } catch (err) {
    systemLog.error('Fatal startup error:', err)
    process.exit(1)
  }
}

main()
