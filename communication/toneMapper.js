'use strict'

/*
PHASE 31.4 — TONE MAPPER
*/

class ToneMapper {
  map ({ baseTone, personality }) {
    if (!baseTone || !personality) return baseTone

    if (personality.verbosity < 0.3) {
      return 'brief'
    }

    if (personality.curiosity > 0.7) {
      return 'curious'
    }

    return baseTone
  }
}

module.exports = {
  ToneMapper
}
