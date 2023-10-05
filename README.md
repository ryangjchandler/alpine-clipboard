> ✨ Help support the maintenance of this package by [sponsoring me](https://github.com/sponsors/ryangjchandler).

# Alpine Clipboard

Copy text to the user's clipboard.

![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/ryangjchandler/alpine-clipboard?label=version&style=flat-square)
![Build size Brotli](https://img.badgesize.io/ryangjchandler/alpine-clipboard/master/dist/alpine-clipboard.js.svg?compression=gzip&style=flat-square&color=green)
[![Monthly downloads via CDN](https://data.jsdelivr.com/v1/package/npm/@ryangjchandler/alpine-clipboard/badge)](https://www.jsdelivr.com/package/npm/@ryangjchandler/alpine-clipboard)

> Since v2.0, this package only supports Alpine v3.x. If you're still using Alpine 2.x, please use [v1.0](https://github.com/ryangjchandler/alpine-clipboard/tree/v1.0.0) of this package.

## About

This plugin adds a new `$clipboard` magic property to all of your Alpine components that can be used to copy any piece of data to the user's clipboard.

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, just before Alpine.

```html
<script src="https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-clipboard@2.x.x/dist/alpine-clipboard.js" defer></script>
```

### NPM

```bash
npm install @ryangjchandler/alpine-clipboard
```

Add the `$clipboard` magic property to your project by importing the package **before** Alpine.js.

```js
import Alpine from 'alpinejs'
import Clipboard from "@ryangjchandler/alpine-clipboard"

Alpine.plugin(Clipboard)

window.Alpine = Alpine
window.Alpine.start()
```

## Usage

> **Note**
> The Clipboard API that this package uses only works in a secure context (`https`) and `localhost`. 

To copy some data to the clipboard, invoke `$clipboard` from an event handler in your component.

```html
<div x-data="{ input: '' }">
    <input x-model="input">
    <button type="button" @click="$clipboard(input)">
        Copy to Clipboard
    </button>
</div>
```

### Directive

This package also includes an `x-clipboard` directive that can be added to any element (usually a `button`) and it will copy the result of the expression on `click`.

```html
<div x-data="{ input: 'Foo!' }">
    <button x-clipboard="input">
        Copy to Clipboard
    </button>
</div>
```

If you are rendering on the server, you might prefer to copy raw content instead of evaluating the expression as JavaScript. This can be done by adding the `.raw` modifier to the directive.

Here's a Blade snippet as an example:

```blade
<button x-clipboard.raw="{{ $post->url() }}">
    Copy to Clipboard
</button>
```

### `Object` and `Array`

Since you can pass any properties through to the `$clipboard` function, if you pass through an `Object` or `Array`, it will be run through `JSON.stringify` before being copied to the clipboard.

```html
<div x-data="{ items: ['foo', 'bar'] }">
    <button type="button" @click="$clipboard(items)">Copy to Clipboard</button>
</div>
```

The clipboard will now contain `["foo","bar"]`.

### Hooks

If you are using the `npm` installation method for this package or the ESM distribution, you can use the `Clipboard.configure()` method to attach an `onCopy` hook to the clipboard.

```js
import Clipboard from '@ryangjchandler/alpine-clipboard'

Alpine.plugin(Clipboard.configure({
    onCopy: () => {
        console.log('Copied!')
    }
}))
```

## Specifying the mime type of the content

If you're using the `$clipboard` magic function, you can pass an additional argument to the function specifying the mime-type of the content. This is especially useful for copying things as HTML and being able to paste into rich text editors, email clients, etc.

```html
<button x-on:click="$clipboard(content, 'text/html')">
    Copy as HTML
</button>
```

## Versioning

This projects follow the [Semantic Versioning](https://semver.org/) guidelines.

## License

Copyright (c) 2021 Ryan Chandler and contributors

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
