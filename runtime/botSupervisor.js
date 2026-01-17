'use strict'

const systemLog = require('../diagnostics/systemLogger')
const { createBotInstance } = require('./createBotInstance')

const MAX_RESTARTS_PER_HOUR = 6
const HOUR = 1000 * 60 * 60

class BotSupervisor {
  constructor () {
    this.bots = new Map()           // id -> meta
    this.instances = new Map()      // id -> bot instance
    this.restartHistory = new Map() // id -> timestamps[]
    this.restartDelays = new Map()  // id -> ms
  }

  launch (meta) {
    try {
      systemLog.info(`Launching bot ${meta.name} (${meta.id})`)
      const bot = createBotInstance(meta)
      this.bots.set(meta.id, meta)
      this.instances.set(meta.id, bot)
      return bot
    } catch (err) {
      this.handleCrash(meta, err)
    }
  }

  handleCrash (meta, err) {
    const now = Date.now()
    const history = (this.restartHistory.get(meta.id) || [])
      .filter(t => now - t < HOUR)

    if (history.length >= MAX_RESTARTS_PER_HOUR) {
      systemLog.error(
        `RESTART CAP HIT — Bot ${meta.name} (${meta.id}) disabled for 1 hour`
      )
      this.restartHistory.set(meta.id, history)
      return
    }

    history.push(now)
    this.restartHistory.set(meta.id, history)

    systemLog.error(
      `Bot ${meta.name} (${meta.id}) crashed: ${err?.stack || err}`
    )

    const delay = Math.min(
      (this.restartDelays.get(meta.id) || 1000) * 2,
      30000
    )

    this.restartDelays.set(meta.id, delay)

    systemLog.warn(
      `Restarting bot ${meta.name} (${meta.id}) in ${delay}ms`
    )

    setTimeout(() => this.launch(meta), delay)
  }

  disconnect (id) {
    const bot = this.instances.get(id)
    if (!bot) return
    systemLog.warn(`Disconnecting bot ${id}`)
    bot.end()
    this.instances.delete(id)
  }

  reload (id) {
    const meta = this.bots.get(id)
    if (!meta) return
    systemLog.info(`Reloading bot ${meta.name} (${id})`)
    this.disconnect(id)
    this.launch(meta)
  }

  reloadAll () {
    for (const id of this.bots.keys()) this.reload(id)
  }

  disconnectAll () {
    for (const id of this.instances.keys()) this.disconnect(id)
  }

  pause (id) {
    const bot = this.instances.get(id)
    if (!bot) return
    bot._paused = true
    systemLog.warn(`Bot ${id} paused`)
  }

  resume (id) {
    const bot = this.instances.get(id)
    if (!bot) return
    bot._paused = false
    systemLog.info(`Bot ${id} resumed`)
  }

  disable (id) {
    systemLog.error(`Bot ${id} DISABLED`)
    this.disconnect(id)
    this.bots.delete(id)
  }

  forceSave (id) {
    const bot = this.instances.get(id)
    if (!bot?.state?._persistence) return
    bot.state._persistence.save(bot.state)
    systemLog.info(`Bot ${id} force-saved`)
  }

  status () {
    const out = []
    for (const [id, meta] of this.bots.entries()) {
      out.push({
        id,
        name: meta.name,
        online: this.instances.has(id),
        restartsLastHour: (this.restartHistory.get(id) || []).length
      })
    }
    return out
  }
}

module.exports = {
  BotSupervisor
}
