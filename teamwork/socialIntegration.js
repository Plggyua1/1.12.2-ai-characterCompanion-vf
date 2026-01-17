'use strict'

/*
PHASE 31.7 — SOCIAL INTEGRATION
*/

const { SocialContext } = require('./socialContext')
const { SocialGoals } = require('./socialGoals')

class SocialIntegration {
  constructor () {
    this.context = new SocialContext()
    this.goals = new SocialGoals()
  }

  run (context) {
    const social = this.context.build(context)
    return this.goals.generate({ social })
  }
}

module.exports = {
  SocialIntegration
}
