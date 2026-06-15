import { useState } from 'react';

/**
 * ModelViewer.tsx — React island, hydrated with client:visible.
 *
 * Renders the <model-viewer> web component. The web component script itself is
 * loaded (deferred) ONLY on pages that use 3D — see gis.astro <head>. Until the
 * user interacts / the model loads, the poster .webp is shown, so there is no
 * layout shift and no 3D cost on pages without it.
 *
 * For richer interactive/animated scenes, swap this island's body for a
 * Three.js GLTFLoader implementation (dynamic import) — the props stay the same.
 */
export interface ModelViewerProps {
  /** Path to the .glb, e.g. "/models/placeholder.glb" */
  src: string;
  /** Path to a .webp preview shown before 3D loads */
  poster: string;
  /** Accessible description of the model */
  alt: string;
}

export default function ModelViewer({ src, poster, alt }: ModelViewerProps) {
  const [failed, setFailed] = useState(false);

  // Graceful fallback: if the web component never upgrades (script blocked) or
  // the model errors, the poster image alone still communicates the scene.
  if (failed) {
    return (
      <img
        src={poster}
        alt={alt}
        width={1200}
        height={800}
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
      />
    );
  }

  return (
    // @ts-expect-error — <model-viewer> is a custom element registered at runtime
    <model-viewer
      src={src}
      poster={poster}
      alt={alt}
      camera-controls
      auto-rotate
      shadow-intensity="1"
      loading="lazy"
      reveal="auto"
      onError={() => setFailed(true)}
      style={{
        width: '100%',
        aspectRatio: '3 / 2',
        background: 'var(--color-card)',
        borderRadius: '8px',
      }}
    />
  );
}
