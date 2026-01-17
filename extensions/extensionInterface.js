'use strict'

/*
PHASE 45.1 — EXTENSION INTERFACE
*/

class ExtensionInterface {
  onTick (context) {}
  onPerception (data) {}
  onMemoryWrite (entry) {}
  proposeGoals () { return [] }
  proposePressures () { return [] }
}

module.exports = {
  ExtensionInterface
}
