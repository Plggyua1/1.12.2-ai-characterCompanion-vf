'use strict'


const { getBot } = require('../runtime/bindBot')


function read () {
const bot = getBot()
if (!bot) return []


return bot.inventory.items().map(item => ({
name: item.name,
count: item.count
}))
}


module.exports = { read }