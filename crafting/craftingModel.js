'use strict'

/*
PHASE 40.10 — CRAFTING MODEL
*/

class CraftingModel {
  knows (recipe) {
    return recipe?.unlocked === true
  }
}

module.exports = {
  CraftingModel
}
