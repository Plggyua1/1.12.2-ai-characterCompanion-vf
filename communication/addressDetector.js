'use strict'

/*
PHASE 40.1 — ADDRESS DETECTOR
*/

class AddressDetector {
  isAddressed ({ botName, message }) {
    const lower = message.toLowerCase()
    return (
      lower.includes(botName.toLowerCase()) ||
      lower.startsWith('hey') ||
      lower.startsWith('yo')
    )
  }
}

module.exports = {
  AddressDetector
}
