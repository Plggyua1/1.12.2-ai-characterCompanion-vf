'use strict'


let current = null


function claim (action) {
if (current) return false
current = action
return true
}


function release (action) {
if (current === action) current = null
}


function active () {
return current
}


module.exports = { claim, release, active }