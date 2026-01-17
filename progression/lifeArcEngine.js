'use strict'

/*
PHASE 46.3 — LIFE ARC ENGINE
*/

class LifeArcEngine {
  infer ({ personality, memories, failures }) {
    let arc = 'survivor'

    if (personality.curiosity > 0.6) arc = 'explorer'
    if (failures > 5) arc = 'cautious'
    if (memories.some(m => m.type === 'betrayal')) arc = 'loner'

    return arc
  }
}

module.exports = {
  LifeArcEngine
}
