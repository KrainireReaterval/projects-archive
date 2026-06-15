/// <reference path="../.astro/types.d.ts" />

// Allow the <model-viewer> custom element in JSX (React islands).
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': any;
  }
}
