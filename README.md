> ✨ Help support the maintenance of this package by [sponsoring me](https://github.com/sponsors/ryangjchandler).

# Alpine Clipboard

Copy text to the user's clipboard.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ryangjchandler/alpine-clipboard?label=version&style=flat-square)
![Build size Brotli](https://img.badgesize.io/ryangjchandler/alpine-clipboard/master/dist/alpine-clipboard.js.svg?compression=gzip&style=flat-square&color=green)
[![Monthly downloads via CDN](https://data.jsdelivr.com/v1/package/npm/@ryangjchandler/alpine-clipboard/badge)](https://www.jsdelivr.com/package/npm/@ryangjchandler/alpine-clipboard)

## About

This plugin adds a new `$clipboard` magic property to all of your Alpine components that can be used to copy any piece of data to the user's clipboard.

## Installation

### CDN

Include the following `<script>` tag at the end of your `<body>`:

```html
<script src="https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-clipboard@1.x.x/dist/alpine-clipboard.js"></script>
```

### NPM

```bash
npm install @ryangjchandler/alpine-clipboard
```

Add the `$clipboard` magic property to your project by importing the package **before** Alpine.js.

```js
import "@ryangjchandler/alpine-clipboard"
// import "alpinejs"
```

#### Legacy Browser Support

If you need to support legacy browsers, you can import the `alpine-clipboard.ie11.js` file instead.

**CDN**

```
<script src="https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-clipboard@1.x.x/dist/alpine-clipboard.ie11.js"></script>
```

**NPM**

```js
import "@ryangjchandler/alpine-clipboard/src/index.ie11.js"
// import "alpinejs"
```

## Usage

To copy some data to the clipboard, invoke `$clipboard` from an event handler in your component.

```html
<div x-data="{ input: '' }">
    <input x-model="input">
    <button type="button" @click="$clipboard(input)">Copy to Clipboard</button>
</div>
```

### `Object` and `Array`

Since you can pass any properties through to the `$clipboard` function, if you pass through an `Object` or `Array`, it will be run through `JSON.stringify` before being copied to the clipboard.

```html
<div x-data="{ items: ['foo', 'bar'] }">
    <button type="button" @click="$clipboard(items)">Copy to Clipboard</button>
</div>
```

The clipboard will now contain `["foo","bar"]`.

## Versioning

This projects follow the [Semantic Versioning](https://semver.org/) guidelines. This means that there *could* be breaking changes on minor version changes, up until v1.x is reached.

For example, 0.1 -> 0.2 might introduce a breaking change.

## License

Copyright (c) 2020 Ryan Chandler and contributors

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
