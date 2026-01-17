'use strict'

/*
PHASE 46.2 — PROJECT STATE
*/

class ProjectState {
  constructor () {
    this.active = []
    this.completed = []
  }

  add (project) {
    this.active.push(project)
  }

  complete (project) {
    project.completed = true
    this.active = this.active.filter(p => p.id !== project.id)
    this.completed.push(project)
  }

  abandon (project) {
    project.abandoned = true
    this.active = this.active.filter(p => p.id !== project.id)
  }
}

module.exports = {
  ProjectState
}
