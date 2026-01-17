'use strict'


function createBelief (value, confidence = 0.5) {
return {
value,
confidence,
lastUpdated: Date.now()
}
}


function updateBelief (belief, value, confidenceDelta = 0.1) {
belief.value = value
belief.confidence = Math.min(1, belief.confidence + confidenceDelta)
belief.lastUpdated = Date.now()
}


module.exports = { createBelief, updateBelief }