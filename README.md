# 🌑 Inverted colors

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/inverted-colors.svg)](https://travis-ci.org/AnandChowdhary/inverted-colors)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/inverted-colors/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/inverted-colors?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/inverted-colors.svg)](https://github.com/AnandChowdhary/inverted-colors/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/inverted-colors.svg)
![NPM type definitions](https://img.shields.io/npm/types/inverted-colors.svg)
[![NPM](https://img.shields.io/npm/v/inverted-colors.svg)](https://www.npmjs.com/package/inverted-colors)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/inverted-colors.svg)](https://www.npmjs.com/package/inverted-colors)

[![NPM](https://nodei.co/npm/inverted-colors.png)](https://www.npmjs.com/package/inverted-colors)

Inverted colors is a package that tells you whether a user prefers inverted colors. It's based on the CSS `@media (inverted-colors)`, which is part of [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/). It's around 700 bytes minified, 300 bytes gzipped.

## ⭐ Usage

Add the dependency from NPM:

```bash
npm install inverted-colors
```

Import the package:

```js
import invertedColors from "inverted-colors";
```

Then call the function:

```js
const colorPreference = invertedColors();
// Returns "none" or "inverted"
```

## 💡 Browser support

This package only works in browsers that natively support `@media (inverted-colors)`, so it just returns `"none"` in unsupported browsers. [Current browser support](https://caniuse.com/#feat=inverted-colors)

By passing `false` as the argument, you can get `"unsupported"` as the value for unsupported browsers:

```js
const colorPreference = invertedColors(false);
// Returns "inverted", "none", or "unsupported"
```

## 🛠️ Development

Install dependencies:

```bash
yarn
```

Compile Typescript to ES6 before publishing to NPM:

```bash
yarn build
```

## 📀 Media Queries Level 5

- 🙅 `prefers-reduced-motion` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-motion) · [NPM](https://www.npmjs.com/package/prefers-reduced-motion)
- 🎨 `prefers-color-scheme` · [GitHub](https://github.com/AnandChowdhary/prefers-color-scheme) · [NPM](https://www.npmjs.com/package/prefers-color-scheme)
- 🕶️ `prefers-contrast` · [GitHub](https://github.com/AnandChowdhary/prefers-contrast) · [NPM](https://www.npmjs.com/package/prefers-contrast)
- 🎞️ `prefers-reduced-transparency` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-transparency) · [NPM](https://www.npmjs.com/package/prefers-reduced-transparency)
- 🌑 `inverted-colors` · [GitHub](https://github.com/AnandChowdhary/inverted-colors) · [NPM](https://www.npmjs.com/package/inverted-colors)
- 🧖 `environment-blending` · [GitHub](https://github.com/AnandChowdhary/environment-blending) · [NPM](https://www.npmjs.com/package/environment-blending)
- 💡 `light-level` · [GitHub](https://github.com/AnandChowdhary/light-level) · [NPM](https://www.npmjs.com/package/light-level-css)

## 📝 License

MIT
