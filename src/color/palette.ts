import { toSeed } from '../core/hash'
import type { GradientPalette, PaletteOptions } from '../types'

function normalizeHex(color: string): string | null {
  const m = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(color.trim())
  if (!m) return null
  let h = m[1]
  if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]
  return `#${h.toUpperCase()}`
}

function normalizeColors(colors?: string[]): string[] | null {
  if (!colors?.length) return null
  const out: string[] = []
  for (const c of colors) {
    const h = normalizeHex(c)
    if (h) out.push(h)
  }
  return out.length ? out : null
}

export interface GlobalPalette {
  name: string
  colors: string[]
}

export const GLOBAL_PALETTES: GlobalPalette[] = [
  { name: 'Phosphophyllite', colors: ['#7cf0c4', '#3aa0ff', '#0f2f5c', '#1b6b4a', '#8ceaff'] },
  { name: 'Padparadscha', colors: ['#ff8f6b', '#ffd76b', '#6b4bff', '#ff8a0f', '#ffd9bd'] },
  { name: 'Morganite', colors: ['#ffb1e4', '#8f6bff', '#2a1450', '#ff5596', '#bdc0ff'] },
  { name: 'Red Beryl', colors: ['#ffd2a8', '#ff6b8f', '#4a1030', '#ffd34c', '#8b2252'] },
  { name: 'Benito', colors: ['#a8e6ff', '#5e7bff', '#101a4a', '#4c9bff', '#b0d6ff'] },
  { name: 'Bort', colors: ['#bcd6ff', '#1f4fd8', '#0a1a4a', '#6073ff', '#59adef'] },
  { name: 'Euclase', colors: ['#e6d2ff', '#43c8ff', '#1a2a6b', '#7af0e6', '#2a7bba'] },
  { name: 'Alexandrite', colors: ['#f7c63c', '#e93a2c', '#5c1208', '#ffaa1c', '#8b1a1a'] },
  { name: 'Chrysoberyl', colors: ['#ffc2c2', '#c26bff', '#2e0f4a', '#9b59b6', '#e8a0ff'] },
  { name: 'Cinnabar', colors: ['#cde7f3', '#2178e6', '#0a2a5c', '#7fa9e5', '#64cff5'] },
  { name: 'Diamond', colors: ['#cdd7e6', '#5f7391', '#141c2b', '#87ceeb', '#86acbc'] },
  { name: 'Hemimorphite', colors: ['#dfe9f5', '#4682b4', '#16273d', '#96a4e2', '#77c6d4'] },
  { name: 'Antarcticite', colors: ['#f6ca3a', '#20a85d', '#0b3d28', '#6bffaa', '#2d7a4f'] },
  { name: 'Ghost Quartz', colors: ['#e8c4ff', '#6b4bff', '#1a0f3d', '#a67bff', '#d4a0ff'] },
  { name: 'Borthium', colors: ['#cdd7e6', '#141c2b', '#87ceeb', '#87ceeb', '#6b8fff'] },
  { name: 'Tourmaline', colors: ['#ff6b8f', '#6bff8f', '#8f6bff', '#ffff6b', '#ff8f6b'] },
  { name: 'Aquamarine', colors: ['#4dbfff', '#00a8cc', '#001f3f', '#0083b0', '#2db8ff'] },
  { name: 'Tanzanite', colors: ['#6b4bff', '#a76bff', '#2a1a5c', '#8f6bff', '#c4a0ff'] },
  { name: 'Fluorite', colors: ['#d46bff', '#9b6bff', '#3d1a6b', '#c99bff', '#e8c4ff'] },
  { name: 'Lapis Lazuli', colors: ['#090909', '#2770EA', '#06C4F8', '#0CBFF9', '#1A8BBF'] },
  { name: 'Garnet', colors: ['#3a5cff', '#1c2f8f', '#0a1440', '#6b8fff', '#c9a832'] },
  { name: 'Sapphire', colors: ['#4c6bff', '#1a2f9c', '#050a2e', '#7f9aff', '#2140c4'] },
  { name: 'Peridot', colors: ['#d4ff6b', '#8fbf1c', '#2a3d0a', '#e8ff9e', '#5c8f14'] },
]

export function generatePalette(seed: number | string, options: PaletteOptions = {}): GradientPalette {
  const s = toSeed(seed)
  let custom = normalizeColors(options.colors)

  if (custom) {
    // Return the custom colors exactly as provided so the primary color (index 0) remains consistent across variants.
    return { seed: s, colors: custom, harmony: 'custom' }
  }

  // Choose a palette deterministically from GLOBAL_PALETTES
  const paletteIndex = s % GLOBAL_PALETTES.length
  const basePalette = GLOBAL_PALETTES[paletteIndex].colors

  // Shift colors based on seed for variety
  const offset = s % basePalette.length
  const colors = basePalette.map((_, i) => basePalette[(i + offset) % basePalette.length])

  return { seed: s, colors, harmony: 'custom' }
}
