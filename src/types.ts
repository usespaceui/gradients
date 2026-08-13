export interface PaletteOptions {
  colors?: string[]
}

export type Harmony = 'analogous' | 'triadic' | 'splitComplementary' | 'tetradic' | 'complementary' | 'custom'

export interface GradientPalette {
  seed: number | string
  colors: string[]
  harmony: Harmony
}
