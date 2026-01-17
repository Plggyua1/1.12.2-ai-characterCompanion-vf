'use strict'

/*
============================================================
AI COMPANION — ROOT ENTRY POINT
============================================================

This is the ONLY file that should be executed with Node.

Responsibilities:
- Initialize logging
- Load configuration
- Start supervisors
- Spawn bots
- Enable crash recovery
- Enable performance governor
- Start status/dashboard server

DO NOT put logic here.
DO NOT import Mineflayer here directly.
This file only orchestrates system startup.
============================================================
*/

const systemLog = require('./diagnostics/systemLogger')
const { bootstrap } = require('./runtime/bootstrap')

// ---------------------------------------------------------
// PROCESS SAFETY GUARDS
// ---------------------------------------------------------

process.on('uncaughtException', err => {
  systemLog.error(
    `UNCAUGHT EXCEPTION:\n${err?.stack || err}`
  )
})

process.on('unhandledRejection', err => {
  systemLog.error(
    `UNHANDLED PROMISE REJECTION:\n${err}`
  )
})

process.on('SIGINT', () => {
  systemLog.warn('SIGINT received — shutting down')
  process.exit(0)
})

process.on('SIGTERM', () => {
  systemLog.warn('SIGTERM received — shutting down')
  process.exit(0)
})

// ---------------------------------------------------------
// BOOT SYSTEM
// ---------------------------------------------------------

systemLog.info('============================================')
systemLog.info('AI COMPANION SYSTEM STARTING')
systemLog.info('============================================')

try {
  bootstrap()
} catch (err) {
  systemLog.error(
    `FATAL BOOTSTRAP ERROR:\n${err?.stack || err}`
  )
  process.exit(1)
}
