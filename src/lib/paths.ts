/**
 * withBase — prefix an internal absolute path with Astro's configured `base`.
 * Safe even when base is '/' (the default for this project). Use for every
 * internal link/href so the site keeps working if `base` ever changes.
 */
const BASE = import.meta.env.BASE_URL; // e.g. '/' or '/subpath/'

export function withBase(path: string): string {
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
