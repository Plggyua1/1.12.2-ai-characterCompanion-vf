'use strict'

/*
PHASE 38.2 — GEMINI CLIENT
*/

const fetch = require('node-fetch')

const GEMINI_API_KEY = process.env.GEMINI_API_KEY
const GEMINI_ENDPOINT =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent'

class GeminiClient {
  constructor () {
    this.enabled = !!GEMINI_API_KEY
  }

  async generate (prompt) {
    if (!this.enabled) return null

    try {
      const res = await fetch(`${GEMINI_ENDPOINT}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ]
        })
      })

      if (!res.ok) return null
      const data = await res.json()

      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text || null
      )
    } catch {
      return null
    }
  }
}

module.exports = {
  GeminiClient
}
