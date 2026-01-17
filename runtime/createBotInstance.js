'use strict'

const mineflayer = require('mineflayer')
const systemLog = require('../diagnostics/systemLogger')
const { attachPersistence } = require('./persistenceHook')
const { attachChatAdmin } = require('./chatAdmin')
const { ProjectState } = require('../progression/projectState')
const { AdminController } = require('./adminController')

function createBotInstance ({ id, name, geminiKey, paths, supervisor }) {
  const bot = mineflayer.createBot({ username: name })

  const state = {
    id,
    name,
    geminiKey,

    personality: {},
    relationships: new Map(),
    episodicMemory: [],
    semanticMemory: { entries: [] },
    proceduralMemory: { procedures: new Map() },
    enemyMemory: { enemies: new Map() },
    projects: new ProjectState()
  }

  bot.state = state

  attachPersistence(bot, state, paths.persistence)

  const admin = new AdminController(supervisor)
  attachChatAdmin(bot, supervisor, admin)

  bot.on('end', () => {
    systemLog.error(`Bot ${name} (${id}) disconnected`)
    supervisor.handleCrash({ id, name, geminiKey, paths, supervisor }, 'disconnect')
  })

  bot.on('error', err => {
    systemLog.error(`Bot ${name} (${id}) error: ${err}`)
    supervisor.handleCrash({ id, name, geminiKey, paths, supervisor }, err)
  })

  systemLog.info(`Bot ${name} (${id}) fully online`)
  return bot
}

module.exports = {
  createBotInstance
}
