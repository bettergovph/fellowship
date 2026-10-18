# Working with Claude Code

Guidance for working on the BetterGovPH Fellowship site (fellowship.bettergov.ph). See README.md for setup and structure.

## Content

- All copy, links, dates, and challenge data live in `src/content.ts`. Keep it faithful to the fellowship guidelines, the BetterGov Summit pitch decks, and the application form; do not invent figures, partners, or promises.
- Each challenge links to its pitch deck slide by id, with a cover thumbnail in `public/decks/`.

## Design

- The design follows BetterGov.ph's one-year report: full-screen slides (`.fs-slide`) on ink, paper, blue, or wash grounds (`.t-ink`, `.t-paper`, `.t-blue`, `.t-wash`), running heads, chapter watermarks, and display type set tight.
- Styles live in `src/fellowship.css` (slides) and `src/base.css` (document defaults). Reuse the existing classes and primitives in `src/primitives.tsx` before adding new ones.
- Motion must stay optional: the prerendered page shows everything, and reduced motion leaves it still.
- Check layouts from 320px wide; the header must not overlap at any width.

## Before pushing

1. `npm run typecheck`
2. `npm run lint:fix` and `npm run format`
3. `npm run build`
