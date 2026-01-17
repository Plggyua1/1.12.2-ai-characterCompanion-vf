'use strict'

/*
CONTEXT SIGNATURE

Purpose:
Compress situation context into a stable, comparable key.
*/

function buildContextSignature (context = {}) {
  const parts = []

  if (context.timeOfDay) parts.push(`time:${context.timeOfDay}`)
  if (context.biome) parts.push(`biome:${context.biome}`)
  if (context.threatLevel !== undefined) {
    parts.push(`threat:${Math.round(context.threatLevel * 10)}`)
  }

  if (context.social) {
    parts.push(`social:${context.social}`)
  }

  return parts.join('|') || 'generic'
}

module.exports = {
  buildContextSignature
}
