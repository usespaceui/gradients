<p align="center">
  <a href="https://www.spaceui.one" target="_blank">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://www.spaceui.one/favicon.ico">
      <source media="(prefers-color-scheme: light)" srcset="https://www.spaceui.one/favicon.ico">
      <img alt="Space UI logo" src="https://www.spaceui.one/favicon.ico" width="100" />
    </picture>
  </a>
</p>

<h1 align="center">
  @usespaceui/gradients
</h1>

<p align="center">
  Procedural beautiful color palettes and gradients.
</p>

<p align="center">
  <a href="https://gradients.spaceui.one">Preview</a> • 
  <a href="https://github.com/usespaceui/gradients">Source Code</a> • 
  <a href="https://www.spaceui.one">SpaceUI.one</a>
</p>

<p align="center">
  <a href="https://twitter.com/intent/follow?screen_name=usespaceui">
    <img src="https://img.shields.io/twitter/follow/usespaceui.svg?label=Follow%20@usespaceui" alt="Follow @usespaceui" />
  </a>
</p>

<div align="center">
  <a href="https://www.npmjs.com/package/@usespaceui/gradients">
    <img src="https://img.shields.io/npm/v/@usespaceui/gradients?color=%23fa6400&label=version" />
  </a>
  <a href="https://www.npmjs.com/package/@usespaceui/gradients">
    <img src="https://img.shields.io/npm/unpacked-size/%40usespaceui%2Fgradients?label=install%20size">
  </a>
  <a href="https://www.npmjs.com/package/@usespaceui/gradients">
    <img src="https://img.shields.io/bundlejs/size/%40usespaceui%2Fgradients?format=min">
  </a>
  <a href="https://www.npmjs.com/package/@usespaceui/gradients">
    <img src="https://img.shields.io/bundlejs/size/%40usespaceui%2Fgradients">
  </a>
  <a href="https://github.com/usespaceui/gradients">
    <img src="https://img.shields.io/github/repo-size/usespaceui/gradients">
  </a>
  <a href="https://www.npmjs.com/package/@usespaceui/gradients">
    <img src="https://img.shields.io/npm/dm/@usespaceui/gradients" />
  </a>
  <a href="https://github.com/usespaceui/gradients/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/@usespaceui/gradients" />
  </a>
  <br><br>
</div>

---

## ✨ Overview

`@usespaceui/gradients` is the core color engine behind Space UI avatars and the others Space UI projects. It provides utilities to procedurally generate beautiful, deterministic color palettes and manipulate hex colors.

---

## 📦 Installation

```bash
pnpm add @usespaceui/gradients
# or
npm install @usespaceui/gradients
# or
yarn add @usespaceui/gradients
```

Zero dependencies.

---

## 🚀 Usage

### Generating Deterministic Palettes

```ts
import { generatePalette } from '@usespaceui/gradients'

// Generates a deterministic harmonious 5-color palette for "Space UI"
const palette = generatePalette('Space UI')

console.log(palette.colors) // ['#bcd6ff', '#1f4fd8', '#0a1a4a', '#6073ff', '#59adef']

// Generate a random palette (auto-seeded)
const randomPalette = generatePalette()

// Force a specific generation mode
const presetOnly = generatePalette('seed')
const presetOnly = generatePalette('seed', { mode: 'presets' })
const randomOnly = generatePalette('seed', { mode: 'random' })
const niceOnly = generatePalette('seed', { mode: 'nice' })

// Provide your own custom colors
const customPalette = generatePalette('seed', { colors: ['#fff', '#000'] })
```

## 🧰 Utilities Included

- `generatePalette(seed?: number | string, options?: PaletteOptions): GradientPalette`
  Takes an optional seed string or number and returns a deterministic or random 5-color palette. Options allow you to specify the generation `mode` (`'presets'`, `'random'`, or `'nice'`) or force `colors`.

- `PRESET_PALETTES`
  An array containing all the curated Space UI custom palettes used in the `presets` generation mode.

- `NICE_PALETTES`
  An array of 200 beautiful palettes named after stars, imported from `nice-color-palettes` and used in the `nice` generation mode.

- `BASE_COLORS`
  An array containing all the individual beautiful base colors used in the `random` generation mode.

---

## 📦 Related Packages

| Package                                                          | Description                                    |
| ---------------------------------------------------------------- | ---------------------------------------------- |
| [`@usespaceui/avatars`](https://github.com/usespaceui/avatars)   | Generative deterministic avatars               |
| [`@usespaceui/sounds`](https://github.com/usespaceui/sounds)     | UI sound effects and audio interactions        |
| [`@usespaceui/squircle`](https://github.com/usespaceui/squircle) | Figma-style corner smoothing (Apple squircles) |

---

## 🪪 License

MIT — Free for commercial and personal use.

---

## 📚 Resources

- 🔍 [Explore the palettes & Playground](https://gradients.spaceui.one)
- 🌍 [Space UI Official Site](https://www.spaceui.one)

---

## 👏 Credits

- The `NICE_PALETTES` collection is powered by the amazing work from [nice-color-palettes](https://github.com/Experience-Monks/nice-color-palettes) by the Experience-Monks team (and sourced from ColourLovers). We are grateful for their beautiful curations!

---

## 🛠 Maintenance

If you find a bug or have a feature request, please open an [issue on GitHub](https://github.com/usespaceui/gradients/issues).
Engine internals are intentionally not part of the public API.

---

<p align="center">
  <a href="https://www.spaceui.one" target="_blank">
    <img src="https://www.spaceui.one/favicon.ico" width="60" style="border-radius: 50%" alt="Space UI Logo" />
  </a>
  <br />
  <b>Maintained by the Space UI Team</b>
</p>
