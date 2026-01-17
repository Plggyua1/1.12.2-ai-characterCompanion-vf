'use strict'

/*
ADMIN COMMAND CONTROLLER
*/

const systemLog = require('../diagnostics/systemLogger')

class AdminController {
  constructor (supervisor) {
    this.supervisor = supervisor
  }

  reloadBot (id) {
    systemLog.info(`ADMIN: reload bot ${id}`)
    this.supervisor.reload(id)
  }

  reloadAll () {
    systemLog.info('ADMIN: reload ALL bots')
    this.supervisor.reloadAll()
  }

  disconnectBot (id) {
    systemLog.warn(`ADMIN: disconnect bot ${id}`)
    this.supervisor.disconnect(id)
  }

  disconnectAll () {
    systemLog.warn('ADMIN: disconnect ALL bots')
    this.supervisor.disconnectAll()
  }

  status () {
    const status = this.supervisor.status()
    systemLog.info(`ADMIN: status requested`)
    return status
  }
}

module.exports = {
  AdminController
}
