'use strict'

/*
PHASE 28 — EXTENSION HOOKS

Purpose:
Allow external systems to observe or extend behavior safely.
*/

class ExtensionHooks {
  constructor () {
    this.hooks = {}
  }

  register (hookName, fn) {
    if (!this.hooks[hookName]) {
      this.hooks[hookName] = []
    }
    this.hooks[hookName].push(fn)
  }

  emit (hookName, payload) {
    const fns = this.hooks[hookName]
    if (!fns) return

    for (const fn of fns) {
      try {
        fn(payload)
      } catch (_) {}
    }
  }
}

module.exports = {
  ExtensionHooks
}
