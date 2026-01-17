'use strict'

/*
PHASE 45.4 — EXTENSION HOOK
*/

const { buildExtensionContext } = require('../extensions/extensionContext')

function attachExtensions ({ registry, state }) {
  setInterval(() => {
    const ctx = buildExtensionContext(state)
    registry.notifyTick(ctx)
  }, 250)

  state.extensionRegistry = registry
}

module.exports = {
  attachExtensions
}
