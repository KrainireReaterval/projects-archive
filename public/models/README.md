# 3D models (drop-here)

- `placeholder.glb` — a minimal valid (empty-scene) GLB stub so the GIS page's
  `<ModelViewer>` island loads without 404ing. **Replace with the real Spline
  `.glb` export** when ready (keep the filename, or update `MODEL_SRC` in
  `src/pages/gis.astro`).
- `placeholder.webp` — optional poster image shown before the model loads. Add a
  real `.webp` preview; until then the island falls back gracefully.

Export pipeline: design in Spline → export `.glb` → drop here. GitHub Pages
serves these as static assets (no Spline CDN at runtime).
