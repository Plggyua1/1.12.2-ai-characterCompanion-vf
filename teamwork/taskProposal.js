'use strict'

/*
PHASE 33.6 — TASK PROPOSAL
*/

class TaskProposal {
  propose ({ task, confidence }) {
    return {
      task,
      confidence,
      time: Date.now()
    }
  }

  evaluate ({ proposal, trust }) {
    if (trust < 0.4) return false
    return proposal.confidence > 0.5
  }
}

module.exports = {
  TaskProposal
}
