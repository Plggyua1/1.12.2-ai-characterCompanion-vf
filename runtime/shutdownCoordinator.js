'use strict'

const callbacks = new Set()
let initialized = false

function register (fn) {
  if (typeof fn !== 'function') {
    throw new Error('Shutdown callback must be a function')
  }
  callbacks.add(fn)
}

function init () {
  if (initialized) return
  initialized = true

  const handler = async (signal) => {
    console.log(`[SHUTDOWN] ${signal} received`)
    for (const fn of callbacks) {
      try {
        await fn()
      } catch (err) {
        console.error('[SHUTDOWN] callback error:', err)
      }
    }
    process.exit(0)
  }

  process.once('SIGINT', handler)
  process.once('SIGTERM', handler)
}

module.exports = {
  init,
  register
}
