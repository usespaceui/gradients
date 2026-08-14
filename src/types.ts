export const PaletteMode = {
  presets: 'presets',
  random: 'random',
  nice: 'nice',
} as const

export type PaletteMode = (typeof PaletteMode)[keyof typeof PaletteMode]

export interface PaletteOptions {
  colors?: string[]
  mode?: PaletteMode
}

export interface GradientPalette {
  seed: number | string
  colors: string[]
}
