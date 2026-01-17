'use strict'

/*
PHASE 40.4 — RESPONSE PLANNER
*/

class ResponsePlanner {
  plan ({ message, trust }) {
    if (trust < 0.3) return 'brief'
    if (message.includes('?')) return 'explanatory'
    return 'casual'
  }
}

module.exports = {
  ResponsePlanner
}
