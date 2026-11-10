import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Content is kept per language: src/content/<collection>/<language>/<name>.md.
// The same file name in two languages is the same item translated; its id is
// "<language>/<name>" (src/lib/content.ts splits it). The language of the
// source text and the others, as drafts from it, are the site's choice.

// One page per item: /<lang>/<collection>/<name>. A list of items is a
// collection here and an entry in `collections` in src/site.config.ts, under
// the same id. To add another list (news, products, cases...), copy a block,
// give it its id, add it to `collections` below and to src/site.config.ts. Add
// fields to the schema as the items need them: a date, an image, a category.
const attractions = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/attractions" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** Position in lists, lowest first. */
    order: z.number().int(),
    tags: z.array(z.string()).default([]),
    /** What it is: the groups on the list page and the "ways in" on the home page. */
    kind: z.enum(["nature", "culture", "activity", "place"]),
    /**
     * A photo id from src/lib/photos.ts; the build fails on an unknown id.
     * Without one, the attraction shows the map around its point
     * (src/lib/places.ts) instead: never a photo of another place.
     */
    photo: z.string().optional(),
    /** Where it is, in a few words ("2 km upstream of the village"). */
    where: z.string(),
    /** Shown on the home page, in this order. */
    featured: z.boolean().default(false),
    /** The sources of the facts in the text: every fact cites one. */
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).min(1),
  }),
});


// The texts of the privacy policy, the accessibility statement and the
// sustainability page: src/content/legal/<language>/privacy.md,
// accessibility.md and sustainability.md. The imprint is built from
// src/site.config.ts. The pages show no date: no law asks for one, and a date
// that is not kept up to date does more harm than good.
const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { attractions, legal };
