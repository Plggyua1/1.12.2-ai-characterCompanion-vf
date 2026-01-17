'use strict'


const { getBot } = require('../runtime/bindBot')


function read () {
const bot = getBot()
if (!bot) return []


return Object.values(bot.entities || {}).map(e => ({
id: e.id,
type: e.type,
name: e.name,
position: e.position
}))
}


module.exports = { read }