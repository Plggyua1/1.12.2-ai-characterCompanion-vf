'use strict'

/*
PHASE 29.6 — RUNTIME SETUP
*/

const movement = require('../actions/movement')
const interaction = require('../actions/interaction')
const combat = require('../actions/combat')

function setupRuntime ({ actionRouter }) {
  actionRouter.register('move', movement)
  actionRouter.register('equip', interaction)
  actionRouter.register('attack', combat)
}

module.exports = {
  setupRuntime
}
