'use strict'

/*
PHASE 46.7 — PROJECT PROGRESS
*/

class ProjectProgress {
  update (project, delta) {
    project.progress += delta
    if (project.progress >= 1) project.completed = true
  }
}

module.exports = {
  ProjectProgress
}
