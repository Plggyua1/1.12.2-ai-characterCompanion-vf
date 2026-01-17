'use strict'

module.exports = {
  default: {
    name: 'Neutral Companion',
    description: 'Balanced, calm, observant',
    traits: {
      aggression: 0.3,
      empathy: 0.6,
      curiosity: 0.5,
      humor: 0.2,
      formality: 0.5
    },
    speech: {
      verbosity: 0.5,
      emotion: 0.4
    }
  },

  presets: {
    sukuna: {
      name: 'Ryomen Sukuna',
      description: 'Cruel, arrogant, dominant',
      traits: {
        aggression: 0.9,
        empathy: 0.1,
        curiosity: 0.4,
        humor: 0.1,
        formality: 0.3
      },
      speech: {
        verbosity: 0.6,
        emotion: 0.8
      }
    },

    aqua: {
      name: 'Aqua (Konosuba)',
      description: 'Loud, emotional, chaotic',
      traits: {
        aggression: 0.4,
        empathy: 0.7,
        curiosity: 0.6,
        humor: 0.9,
        formality: 0.2
      },
      speech: {
        verbosity: 0.8,
        emotion: 0.9
      }
    },

    thorfinn: {
      name: 'Thorfinn',
      description: 'Quiet, reflective, restrained',
      traits: {
        aggression: 0.2,
        empathy: 0.8,
        curiosity: 0.3,
        humor: 0.1,
        formality: 0.7
      },
      speech: {
        verbosity: 0.2,
        emotion: 0.3
      }
    }
  }
}
