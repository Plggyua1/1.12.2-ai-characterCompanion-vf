'use strict'


const Registry = require('./registry')


function init () {
for (const system of Registry.all()) {
if (typeof system.init === 'function') {
try { system.init() } catch (e) {}
}
}
}


function shutdown () {
for (const system of Registry.all()) {
if (typeof system.shutdown === 'function') {
try { system.shutdown() } catch (e) {}
}
}
}


module.exports = { init, shutdown }