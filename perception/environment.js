'use strict'


const { getBot } = require('../runtime/bindBot')


function read () {
const bot = getBot()
if (!bot) return null


return {
timeOfDay: bot.time?.timeOfDay || null,
dimension: bot.game?.dimension || null
}
}


module.exports = { read }