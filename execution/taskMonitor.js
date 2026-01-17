'use strict'

/*
PHASE 41.12 — TASK MONITOR
*/

class TaskMonitor {
  check ({ executor, hazards }) {
    if (hazards?.immediate) {
      executor.abort()
      return 'aborted'
    }
    return executor.state
  }
}

module.exports = {
  TaskMonitor
}
