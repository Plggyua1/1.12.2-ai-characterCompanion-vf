'use strict'


const Self = require('./self')
const Entities = require('./entities')
const Environment = require('./environment')
const Inventory = require('./inventory')


function snapshot () {
return {
self: Self.read(),
entities: Entities.read(),
environment: Environment.read(),
inventory: Inventory.read()
}
}


module.exports = { snapshot }