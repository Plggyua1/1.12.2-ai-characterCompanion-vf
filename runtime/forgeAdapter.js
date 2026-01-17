'use strict'

/*
PHASE 35.5 — FORGE ADAPTER

Purpose:
Isolate Forge handshake & protocol quirks.
*/

function setupForgeCompatibility (bot) {
  bot.once('login', () => {
    // Mineflayer handles most Forge handshakes automatically
    // This hook exists to isolate future fixes
  })

  bot.on('kicked', (reason) => {
    if (String(reason).includes('Forge')) {
      // Log, do not panic
    }
  })
}

module.exports = {
  setupForgeCompatibility
}
