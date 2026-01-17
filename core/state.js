'use strict'

const state = {
  tick: 0,

  intent: null,
  intentSince: 0,

  pressures: {},
  goals: [],

  personality: {
    caution: 0.5,
    curiosity: 0.5,
    loyalty: 0.5,
    aggression: 0.3
  },

  thoughts: [],
  lastSpokeAt: 0
}

function tick () {
  state.tick++
}

module.exports = {
  state,
  tick
}
