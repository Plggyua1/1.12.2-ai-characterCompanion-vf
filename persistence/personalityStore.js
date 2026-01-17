'use strict'

class PersonalityStore {
  save (personality) {
    return JSON.parse(JSON.stringify(personality))
  }

  load (data, fallback) {
    return { ...fallback, ...data }
  }
}

module.exports = {
  PersonalityStore
}
