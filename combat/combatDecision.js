'use strict'

/*
PHASE 42.3 — COMBAT DECISION
*/

class CombatDecision {
  decide ({ threat, survivalRisk, personality }) {
    if (survivalRisk > 0.6) return 'flee'
    if (threat < 0.3) return 'ignore'

    if (personality.riskTolerance > 0.6) return 'fight'
    if (threat > 0.6) return 'flee'

    return 'avoid'
  }
}

module.exports = {
  CombatDecision
}
