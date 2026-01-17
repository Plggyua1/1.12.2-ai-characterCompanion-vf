'use strict'

/*
PHASE 42.2 — SURVIVAL STATE
*/

class SurvivalState {
  evaluate ({ health, hunger, armor }) {
    let risk = 0

    if (health < 10) risk += 0.4
    if (hunger < 6) risk += 0.3
    if (!armor) risk += 0.2

    return clamp(risk)
  }
}

function clamp (v, min = 0, max = 1) {
  return Math.max(min, Math.min(max, v))
}

module.exports = {
  SurvivalState
}
