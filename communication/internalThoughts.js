'use strict'

const { state } = require('../core/state')

function think (text) {
  state.thoughts.push({
    tick: state.tick,
    text
  })

  if (state.thoughts.length > 50) {
    state.thoughts.shift()
  }
}

function recentThoughts (count = 5) {
  return state.thoughts.slice(-count)
}

module.exports = {
  think,
  recentThoughts
}
