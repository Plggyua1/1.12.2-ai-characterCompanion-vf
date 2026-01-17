'use strict'

/*
PHASE 39.2 — REFLECTION PROMPT
*/

class ReflectionPrompt {
  build ({ episodes }) {
    const bulletEvents = episodes
      .slice(-10)
      .map(e => `- ${e.event} → ${e.outcome}`)
      .join('\n')

    return `
You are a Minecraft player reflecting privately on recent experiences.

Recent events:
${bulletEvents}

Summarize:
- What patterns you notice
- Who you trust or distrust more
- What you should be cautious about

Rules:
- First person
- Short paragraphs
- No AI/system references
- No advice, just reflection

Reflection:
`.trim()
  }
}

module.exports = {
  ReflectionPrompt
}
