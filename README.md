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
- **Home page** (`src/pages/[...lang]/index.astro`, texts in `src/texts/home.ts`): the hero photo, three ways in, the story of the valley, featured attractions, when to come, how to get here.

**Page weight:** the limit is 750 KB per page instead of the template's 500 KB (`page-weight.config.json`). The home page is led by photos: it shows eleven, and every one except the hero loads only when it scrolls into view, so the first screen weighs far less than the total. Every other page stays under 500 KB.

## Environments

| Environment | Address | Shows | Who can open it |
| --- | --- | --- | --- |
| `dev` | `dev.dragonja.si` | The newest merged work | Signed-in people only |
| `staging` | `staging.dragonja.si` | The newest release | Signed-in people only |
| `production` | `dragonja.si` | The promoted release | Everyone, after the cutover |

How a change moves between them is in [docs/deployment.md](docs/deployment.md). Where each one runs and which version is deployed: `pnpm status`.

## Before production

- Replace the sample texts: the legal pages in `src/content/legal/<language>/` need a lawyer's review, and the about page and the other pages need the site's own texts in every language.
- Have a native speaker review every language that is not the source of the texts.
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
