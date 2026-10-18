# BetterGovPH Fellowship

The site for the BetterGovPH Fellowship pilot cohort: [fellowship.bettergov.ph](https://fellowship.bettergov.ph).

The fellowship is a three-month civic technology program. Fellows build working solutions with government agencies and civil society organizations for DBM COMPASS and the Philippines' open data ecosystem. It is jointly organized by BetterGovPH, WeSolve Foundation, the Philippine Open Government Partnership, and the Department of Budget and Management, with support from the Mozilla Foundation.

## Tech stack

- React 18 and TypeScript, built with Vite
- Prerendered to static HTML at build time (`prerender.js`)
- Served as static assets on a Cloudflare Worker (`wrangler.jsonc`)

The design follows BetterGov.ph's one-year report: full-screen slides on ink, paper and blue grounds, set in Inter Tight and Archivo.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5112
```

## Scripts

- `npm run dev` - development server on port 5112
- `npm run build` - client build, server build, then prerender to `dist/static`
- `npm run preview` - serve the production build on port 5112
- `npm run typecheck` - TypeScript checks
- `npm run lint` / `npm run lint:fix` - ESLint
- `npm run format` / `npm run format:check` - Prettier
- `npm run deploy` - build and deploy the `bettergov-fellowship` Worker

## Project structure

```
src/
├── content.ts            # All copy, links, dates, and challenge data
├── FellowshipApp.tsx     # Shell: skip link, header, page, footer
├── FellowshipPage.tsx    # The slides, in order
├── FellowshipHeader.tsx
├── FellowshipFooter.tsx
├── primitives.tsx        # Slide building blocks: running heads, rays, rising words, counters
├── useSlideReveal.ts     # Reveals slides and counts figures as they scroll into view
├── helpers.ts
├── base.css              # Document defaults: reset, type, focus, skip link
└── fellowship.css        # The slide design system
public/
├── decks/                # Cover slides of each challenge's pitch deck
└── og-fellowship.png     # Social share image
```

## Editing content

Copy, links, dates, and challenge details live in `src/content.ts`. Sources are the fellowship guidelines (slides and document), the BetterGov Summit pitch decks (17 October 2026), and the application form.

### Challenge decks

Each challenge links to its pitch in the consolidated deck by slide id (`deck.slideId` in `content.ts`). If a slide is deleted and recreated in Google Slides, its id changes and the link falls back to the first slide; copy the new id from the slide's link (`#slide=id.…`).

The thumbnails in `public/decks/` are the cover slides, exported with:

```
https://docs.google.com/presentation/d/<deck id>/export/png?pageid=<slide id>
```

### Contributions

The fellowship fund is still being raised. "Contribute to the fund" opens a pre-filled email to the organizers (`contributeEmail` and `fellowshipLinks.contribute` in `content.ts`). Swap in a donation page there when one exists.

## Deployment

```bash
npm run deploy
```

This builds the site and deploys the `bettergov-fellowship` Worker, with `fellowship.bettergov.ph` attached as a custom domain. Wrangler needs a Cloudflare API token for the BetterGov account (`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`).

## Related

- [BetterGov.ph](https://bettergov.ph) and [about.bettergov.ph](https://about.bettergov.ph)
- Discord: [discord.gg/bettergovph](https://discord.gg/bettergovph)
