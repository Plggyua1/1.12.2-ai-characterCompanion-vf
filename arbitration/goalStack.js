'use strict'

const { state } = require('../core/state')

function pushGoal (goal) {
  state.goals.push({
    ...goal,
    createdAt: state.tick,
    completed: false
  })
}

function activeGoal () {
  return state.goals.find(g => !g.completed) || null
}

function completeGoal (name) {
  const goal = state.goals.find(g => g.name === name)
  if (goal) goal.completed = true
}

module.exports = {
  pushGoal,
  activeGoal,
  completeGoal
}
