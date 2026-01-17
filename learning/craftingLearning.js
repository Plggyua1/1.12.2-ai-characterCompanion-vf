'use strict'

/*
PHASE 41.8 — CRAFTING LEARNING
*/

class CraftingLearning {
  learn ({ success, proceduralMemory, recipe }) {
    proceduralMemory.reinforce(`craft:${recipe.name}`, success)
  }
}

module.exports = {
  CraftingLearning
}
