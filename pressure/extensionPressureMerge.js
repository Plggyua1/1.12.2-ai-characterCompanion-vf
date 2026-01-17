'use strict'

/*
PHASE 45.5 — EXTENSION PRESSURE MERGE
*/

function mergeExtensionPressures (base, extensionPressures = []) {
  return base.concat(
    extensionPressures.filter(p =>
      typeof p.force === 'number' &&
      p.force >= 0 &&
      p.force <= 1
    )
  )
}

module.exports = {
  mergeExtensionPressures
}
