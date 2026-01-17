'use strict'

/*
PHASE 41.13 — TASK FAILURE MEMORY
*/

class TaskFailureMemory {
  record ({ task, reason, episodicMemory }) {
    episodicMemory.push({
      time: Date.now(),
      task,
      reason,
      failed: true
    })
  }
}

module.exports = {
  TaskFailureMemory
}
