'use strict'

/*
PHASE 46.6 — PLACE MEMORY
*/

class PlaceMemory {
  constructor () {
    this.places = new Map()
  }

  mark (location, significance) {
    this.places.set(
      `${location.x},${location.z}`,
      { location, significance }
    )
  }

  recall (location) {
    return this.places.get(`${location.x},${location.z}`) || null
  }
}

module.exports = {
  PlaceMemory
}
