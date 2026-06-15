# Self-hosted fonts (drop-here)

The site currently uses **system font stacks** as placeholders (see
`src/styles/global.css`). To switch to self-hosted fonts:

1. Drop the `.woff2` files here, e.g.:
   - `display-serif.woff2` — headlines (display serif)
   - `body-sans.woff2` — body copy (sans)
   - `label-mono.woff2` — labels / tags / metadata (mono)
2. Uncomment the `@font-face` block at the top of `src/styles/global.css`.
3. Update `--font-display`, `--font-sans`, `--font-mono` to use the new families.
4. Add `<link rel="preload" as="font" type="font/woff2" crossorigin>` for the
   above-the-fold font(s) in `src/layouts/Layout.astro` `<head>`.

Use `.woff2` only — no CDN, no Google Fonts.
