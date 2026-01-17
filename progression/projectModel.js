'use strict'

/*
PHASE 46.1 — PROJECT MODEL
*/

class ProjectModel {
  create ({ type, location, reason }) {
    return {
      id: `${type}:${Date.now()}`,
      type,
      location,
      reason,
      startedAt: Date.now(),
      progress: 0,
      completed: false,
      abandoned: false
    }
  }
}

module.exports = {
  ProjectModel
}
