import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro 6 Content Layer: glob loader sources the MDX case studies.
// Entry `id` is derived from the filename (e.g. "vsync-redesign").
const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    section: z.enum(['uiux', 'products', 'cv', 'gis']),
    year: z.number(),
    role: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    ogImage: z.string().optional(),
    wip: z.boolean().default(false),
    thesis: z.string(),
    problem: z.string(),
    outcome: z.string(),
    model: z.string().optional(), // path to .glb if 3D exists
    modelPoster: z.string().optional(), // path to .webp preview for model-viewer
  }),
});

export const collections = { projects };
