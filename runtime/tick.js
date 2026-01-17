'use strict'


let interval = null


function start (fn, rate = 50) {
if (interval) return
interval = setInterval(() => {
try { fn() } catch (e) {}
}, rate)
}


function stop () {
if (!interval) return
clearInterval(interval)
interval = null
}


module.exports = { start, stop }