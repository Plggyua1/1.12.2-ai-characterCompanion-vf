'use strict'

const adminConfig = require('../configuration/admin.config')
const systemLog = require('../diagnostics/systemLogger')

function isAdmin (username) {
  return adminConfig.admins.includes(username)
}

function attachChatAdmin (bot, supervisor, admin) {
  bot.on('chat', (username, message) => {
    if (username === bot.username) return
    if (!message.startsWith(adminConfig.commandPrefix)) return

    if (!isAdmin(username)) {
      systemLog.warn(`UNAUTHORIZED CHAT CMD by ${username}`)
      return
    }

    const args = message.slice(1).split(' ')
    const cmd = args.shift()

    systemLog.info(`ADMIN CMD: ${cmd} ${args.join(' ')}`)

    switch (cmd) {
      case 'reload':
        args[0] ? admin.reloadBot(args[0]) : admin.reloadAll()
        break

      case 'disconnect':
        args[0] ? admin.disconnectBot(args[0]) : admin.disconnectAll()
        break

      case 'pause':
        supervisor.pause(args[0])
        break

      case 'resume':
        supervisor.resume(args[0])
        break

      case 'disable':
        supervisor.disable(args[0])
        break

      case 'save':
        supervisor.forceSave(args[0])
        break

      case 'status':
        systemLog.info(JSON.stringify(admin.status()))
        break
    }
  })
}

module.exports = {
  attachChatAdmin
}
