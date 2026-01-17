'use strict'

const { BaseAction } = require('./base_action')

/*
ACTION FACTORY

Maps intents to possible actions.
*/

class ActionFactory {
  fromIntent (intent) {
    if (!intent) return []

    switch (intent.type) {
      case 'eat_food':
        return [this._eatAction()]

      case 'heal_self':
        return [this._healAction()]

      case 'escape_danger':
        return [this._escapeAction()]

      case 'observe_environment':
        return [this._observeAction()]

      default:
        return []
    }
  }

  _eatAction () {
    const action = new BaseAction('eat')
    action.prerequisites.push('has_food')
    action.risks.push('vulnerable_while_eating')
    return action
  }

  _healAction () {
    const action = new BaseAction('heal')
    action.prerequisites.push('has_healing_item')
    return action
  }

  _escapeAction () {
    const action = new BaseAction('escape')
    action.risks.push('unknown_path')
    return action
  }

  _observeAction () {
    return new BaseAction('observe')
  }
}

module.exports = { ActionFactory }