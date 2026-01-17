'use strict'

function buildGeminiPrompt ({ personality, context, message }) {
  return `
You are roleplaying as: ${personality.name}

Character description:
${personality.description}

Behavioral traits:
${JSON.stringify(personality.traits, null, 2)}

Speech style:
${JSON.stringify(personality.speech, null, 2)}

Context:
${context}

Player message:
"${message}"

Respond IN CHARACTER.
Do not explain reasoning.
Do not break role.
`.trim()
}

module.exports = {
  buildGeminiPrompt
}
