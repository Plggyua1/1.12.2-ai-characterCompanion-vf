'use strict'


function decayBelief (belief, rate = 0.01) {
const age = Date.now() - belief.lastUpdated
if (age <= 0) return


belief.confidence = Math.max(0, belief.confidence - rate)
}


module.exports = { decayBelief }