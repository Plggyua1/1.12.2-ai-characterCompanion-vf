'use strict'

/*
OUTCOME CLASSIFIER

Purpose:
Normalize outcomes so learning systems
can reason over them later.
*/

function classifyOutcome ({
  completed = false,
  aborted = false,
  pressureReduced = false,
  dangerIncreased = false
}) {
  if (completed && pressureReduced && !dangerIncreased) {
    return 'success'
  }

  if (!completed && pressureReduced) {
    return 'near_miss'
  }

  if (aborted || dangerIncreased) {
    return 'failure'
  }

  return 'unknown'
}

module.exports = {
  classifyOutcome
}
