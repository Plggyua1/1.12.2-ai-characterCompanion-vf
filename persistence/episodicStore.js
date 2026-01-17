'use strict'

class EpisodicStore {
  save (episodes) {
    return episodes.slice(-200)
  }

  load (data) {
    return data || []
  }
}

module.exports = {
  EpisodicStore
}
