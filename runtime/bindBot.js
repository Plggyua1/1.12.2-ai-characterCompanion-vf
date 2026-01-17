'use strict'


const mineflayer = require('mineflayer')


let bot = null


function createBot (options) {
if (bot) return bot


bot = mineflayer.createBot(options)


bot.on('error', () => {})
bot.on('kicked', () => {})


return bot
}


function getBot () {
return bot
}


module.exports = { createBot, getBot }