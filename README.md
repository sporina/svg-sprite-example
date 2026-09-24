# svg-sprite-example

Static HTML/CSS prototype of a toolbar for a Resco web tool, with icons served from an inline SVG sprite.

## Files

- `index.html` – the page. The top of `<body>` holds a hidden `<svg>` sprite with one `<symbol>` per icon; buttons reference icons with `<svg><use href="#icon-name"></use></svg>`.
- `style.css` – toolbar, button, separator and icon styles.

## Usage

Open `index.html` in a browser; no build step or dependencies.

## Adding an icon

1. Add a `<symbol id="icon-foo" viewBox="0 0 24 24">…</symbol>` to the sprite in `index.html`.
2. Use it: `<svg class="icon-size-s" aria-hidden="true"><use href="#icon-foo"></use></svg>`.

Icons use `fill: currentColor`, so they take the text color of their parent.
