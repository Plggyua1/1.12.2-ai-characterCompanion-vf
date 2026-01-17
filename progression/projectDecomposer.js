'use strict'

/*
PHASE 46.5 — PROJECT DECOMPOSER
*/

class ProjectDecomposer {
  decompose (project) {
    if (project.type === 'secure_base') {
      return [
        { type: 'gather', urgency: 0.4 },
        { type: 'build_shelter', urgency: 0.5 },
        { type: 'defend_area', urgency: 0.6 }
      ]
    }

    if (project.type === 'map_region') {
      return [
        { type: 'explore', urgency: 0.4 },
        { type: 'record_landmarks', urgency: 0.3 }
      ]
    }

    return []
  }
}

module.exports = {
  ProjectDecomposer
}
