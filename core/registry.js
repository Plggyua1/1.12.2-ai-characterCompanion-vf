'use strict'


const systems = new Map()


function register (name, system) {
if (systems.has(name)) return
systems.set(name, system)
}


function get (name) {
return systems.get(name)
}


function all () {
return Array.from(systems.values())
}


module.exports = { register, get, all }