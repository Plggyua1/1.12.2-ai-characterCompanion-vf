'use strict'

const fs = require('fs')
const config = require('../configuration/bots.config')
const { resolveBots } = require('../configuration/botResolver')
const { getBotPaths } = require('../configuration/botPaths')
const { BotSupervisor } = require('./botSupervisor')
const { AdminController } = require('./adminController')
const { watchConfig } = require('../configuration/configWatcher')
const { startStatusServer } = require('./statusServer')
const { PerformanceGovernor } = require('./performanceGovernor')
const systemLog = require('../diagnostics/systemLogger')

function ensureDirs (paths) {
  Object.values(paths).forEach(p => {
    if (p.endsWith('.json')) return
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true })
  })
}

function bootstrap () {
  const supervisor = new BotSupervisor()
  const admin = new AdminController(supervisor)
  const governor = new PerformanceGovernor()

  const bots = resolveBots(config)

  bots.forEach(botMeta => {
    const paths = getBotPaths(botMeta.id)
    ensureDirs(paths)

    governor.registerBot(botMeta.id)

    supervisor.launch({
      ...botMeta,
      geminiKey: config.gemini.apiKey,
      paths,
      supervisor
    })
  })

  // Performance governor tick
  setInterval(() => {
    governor.update()
  }, 5000)

  // Hot config reload (safe)
  watchConfig(() => {
    systemLog.warn('Config hot-reloaded (applies to new bots only)')
  })

  // Web status server
  startStatusServer(supervisor)

  global.AI_ADMIN = admin
}

module.exports = {
  bootstrap
}
