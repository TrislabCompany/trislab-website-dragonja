# trislab-website-dragonja

Dragonja, dragonja.si, built from `tl-template-website` v0.4.0. Read this first; the detail is in [`docs/`](docs/).

## What it is

An [Astro](https://astro.build) site built into static files, served by Cloudflare Pages. It has a home page, an about page, a contact page, an imprint, a privacy policy, an accessibility statement, a sustainability page, a sitemap page and a 404 page, and a list page and a page per item for `attractions`. It sets no cookies and loads no outside service.

**Languages:** Slovenian, English, Croatian, Italian, German. The first is the default; each language lives under its own URL.

## Design

The site's own design, not the template's: a calm, image-led destination site for the valley. The design direction is in [docs/brief.md](docs/brief.md#design-direction). In short:

- **Colours** from the logo: river blue, hill green and earth brown on the warm white of Istrian stone (`src/styles/tokens.css`).
- **Type:** Fraunces for headings, Inter for text, both self-hosted.
- **Photos** are registered in `src/lib/photos.ts` with their alternative text in every language and their credit; pages refer to a photo by its id, and every page lists the credits of the photos it shows. Sources and licences: [docs/image-credits.md](docs/image-credits.md).
- **Pages** (`src/pages/[...lang]/`):
  - **Home** (`index.astro`, texts in `src/texts/home.ts`): the hero photo, three ways in, the story of the valley, featured attractions, when to come, how to get here.
  - **Attractions** (`[collection]/`, one Markdown file per attraction and language in `src/content/attractions/`): twelve attractions grouped by kind, each with its photo, where it is, its text and its sources.
  - **About** (`about.astro`) and **Visit us** (`visit-us.astro`), texts in `src/texts/pages.ts`. Visit us has the ways to get here, good to know, the seasons, the map and the gallery.
- **Map:** OpenStreetMap data drawn as inline SVG (`src/components/ValleyMap.astro`), so no visitor's browser asks another server. `scripts/make-map.mjs` makes `src/assets/map/valley.json` from the Overpass API; run it by hand when the map should change. The points of the attractions are in `src/lib/places.ts`.
- **Structured data:** the valley as a `TouristDestination` on the home page, each attraction as a `TouristAttraction` with its point (`src/components/PlaceData.astro`).
- **Old addresses:** `/about`, `/attractions` and `/visit-us` of the earlier site redirect to the Slovenian pages (`public/_redirects`); `www.dragonja.si` is redirected by Cloudflare.

**Design rules the build checks:**

- **A photo shows at most once on a page, and every photo on a page has its credit there** (`scripts/check-design.mjs`, run by `pnpm test`). Choose another photo from `src/lib/photos.ts` rather than repeating one; the home page skips a featured attraction whose photo is already on the page.
- **Every fact cites a source** next to it; a fact that can't be checked against a source is left out. Advice (where to park) has no source.
- **No placeholder text** reaches a page: no "sample text", no lorem ipsum, no "TBD".

**Page weight:** the limit is 750 KB per page instead of the template's 500 KB (`page-weight.config.json`). The home page is led by photos: it shows eleven, and every one except the hero loads only when it scrolls into view, so the first screen weighs far less than the total. About and Visit us (a gallery of eight) are the next heaviest; the attraction pages stay well under 500 KB.

## Environments

| Environment | Address | Shows | Who can open it |
| --- | --- | --- | --- |
| `dev` | `dev.dragonja.si` | The newest merged work | Signed-in people only |
| `staging` | `staging.dragonja.si` | The newest release | Signed-in people only |
| `production` | `dragonja.si` | The promoted release | Everyone, after the cutover |

How a change moves between them is in [docs/deployment.md](docs/deployment.md). Where each one runs and which version is deployed: `pnpm status`.

## Before production

- Have a lawyer review the privacy policy and the accessibility statement (`src/content/legal/<language>/`).
- Have a native speaker review the Croatian, Italian and German texts (the pages, `src/texts/`, `src/content/`, `src/lib/photos.ts`).
- Check the two photos taken over from the earlier site (`valley-cascade`, `stone-house` in `src/lib/photos.ts`): where they were taken and who may publish them.
- Check the facts in `src/site.config.ts` against the company's published data.

## Work on it

1. `pnpm install`, then `pnpm dev`, and open <http://localhost:4321>.
2. Run `pnpm test` and `pnpm test:a11y` before every push ([docs/getting-started.md](docs/getting-started.md)).
3. Every change is a PR to `main`. `ci / ci` must pass and a code owner must approve. A merge deploys to `dev`.

## More

- [AGENTS.md](AGENTS.md): the guide for coding agents and their skills.
- [Site settings](docs/site-settings.md): languages, lists of items, contact and legal pages, the brand.
- [Deployment](docs/deployment.md): deploy, release and promote.
- [Quality checks](docs/quality-checks.md): what `ci / ci` checks.
- [Updates from the template](docs/upgrading/README.md): `.template-version` and update PRs.
