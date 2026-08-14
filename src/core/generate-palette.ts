import { GradientPalette, PaletteMode, PaletteOptions } from '../types'
import { BASE_COLORS } from '../palettes/colors'
import { PRESET_PALETTES } from '../palettes/presets'
import { NICE_PALETTES } from '../palettes/nice'
import { seededRandom, toSeed, normalizeColors } from './utils'

function getRandomMode(rng: () => number): PaletteMode {
  const r = rng()
  if (r < 0.33) return PaletteMode.random
  if (r < 0.66) return PaletteMode.presets
  return PaletteMode.nice
}

function generateRandomPalette(seed: number, rng: () => number): GradientPalette {
  const allColors = BASE_COLORS.map((c) => c.color)
  const selected: string[] = []
  const available = [...allColors]

  for (let i = 0; i < 5; i++) {
    if (available.length === 0) break
    const idx = Math.floor(rng() * available.length)
    selected.push(available[idx])
    available.splice(idx, 1)
  }

  return { seed, colors: selected }
}

function generatePresetPalette(seed: number, customColors?: string[]): GradientPalette {
  const custom = normalizeColors(customColors)
  if (custom) {
    return { seed, colors: custom }
  }

  const paletteIndex = seed % PRESET_PALETTES.length
  const basePalette = PRESET_PALETTES[paletteIndex].colors
  const offset = seed % basePalette.length
  const colors = basePalette.map((_, i) => basePalette[(i + offset) % basePalette.length])

  return { seed, colors }
}

function generateNicePalette(seed: number): GradientPalette {
  const paletteIndex = seed % NICE_PALETTES.length
  const basePalette = NICE_PALETTES[paletteIndex].colors
  const offset = seed % basePalette.length
  const colors = basePalette.map((_, i) => basePalette[(i + offset) % basePalette.length])

  return { seed, colors }
}

export function generatePalette(seed?: number | string, options: PaletteOptions = {}): GradientPalette {
  const actualSeed = seed !== undefined ? seed : Math.random().toString(36).substring(2, 10)
  const s = toSeed(actualSeed)
  const rng = seededRandom(s)
  const mode = options.mode || getRandomMode(rng)

  if (mode === 'random') {
    return generateRandomPalette(s, rng)
  }

  if (mode === 'nice') {
    return generateNicePalette(s)
  }

  return generatePresetPalette(s, options.colors)
}
