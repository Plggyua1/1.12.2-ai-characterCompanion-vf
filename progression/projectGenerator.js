'use strict'

/*
PHASE 46.4 — PROJECT GENERATOR
*/

const { ProjectModel } = require('./projectModel')

class ProjectGenerator {
  constructor () {
    this.model = new ProjectModel()
  }

  generate ({ arc, location }) {
    if (arc === 'explorer') {
      return this.model.create({
        type: 'map_region',
        location,
        reason: 'curiosity'
      })
    }

    if (arc === 'survivor') {
      return this.model.create({
        type: 'secure_base',
        location,
        reason: 'safety'
      })
    }

    return null
  }
}

module.exports = {
  ProjectGenerator
}
