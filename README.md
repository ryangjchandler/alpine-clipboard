> ✨ Help support the maintenance of this package by [sponsoring me](https://github.com/sponsors/ryangjchandler).

# Alpine Clipboard

Copy text to the user's clipboard.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ryangjchandler/alpine-clipboard?label=version&style=flat-square)
![GitHub file size in bytes](https://img.shields.io/github/size/ryangjchandler/alpine-clipboard/dist/alpine-clipboard.js?label=min%20%28no%20gzip%29&style=flat-square)
[![Monthly downloads via CDN](https://data.jsdelivr.com/v1/package/npm/@ryangjchandler/alpine-clipboard/badge)](https://www.jsdelivr.com/package/npm/@ryangjchandler/alpine-clipboard)

## About

This plugin adds a new `$clipboard` magic property to all of your Alpine components that can be used to copy any piece of data to the user's clipboard.

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document:

``` html
<script src="https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-clipboard@0.1.1/dist/alpine-clipboard.umd.js"></script>
```

> **Important**: This must be added **before** loading Alpine.js when using CDN links.

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
