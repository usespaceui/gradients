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

// Always generates the exact same harmonious 5-color palette for "Ada"
const palette = generatePalette('Ada')

console.log(palette.colors) // ['#bcd6ff', '#1f4fd8', '#0a1a4a', '#6073ff', '#59adef']
```

## 🧰 Utilities Included

- `generatePalette(seed: number | string, options?: PaletteOptions): GradientPalette`
  Takes a deterministic seed string or number and returns a beautiful, mathematically chosen 5-color palette.

- `GLOBAL_PALETTES`
  An array containing all the curated base palettes (e.g. _Phosphophyllite_, _Padparadscha_, _Morganite_, etc.) used by the procedural generator.

---

## 📦 Related Packages

| Package                                                          | Description                                    |
| ---------------------------------------------------------------- | ---------------------------------------------- |
| [`@usespaceui/avatars`](https://github.com/usespaceui/avatars)   | Generative deterministic avatars               |
| [`@usespaceui/squircle`](https://github.com/usespaceui/squircle) | Figma-style corner smoothing (Apple squircles) |
| [`@usespaceui/sounds`](https://github.com/usespaceui/sounds)     | Procedural Web Audio UI sound engine           |

---

## 🪪 License

MIT — Free for commercial and personal use.

---

## 📚 Resources

- 🔍 [Explore the palettes & Playground](https://gradients.spaceui.one)
- 🌍 [Space UI Official Site](https://www.spaceui.one)

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
