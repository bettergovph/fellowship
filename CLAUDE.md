# Working with Claude Code

Guidance for working on the BetterGovPH Fellowship site (fellowship.bettergov.ph). See README.md for setup and structure.

## Content

- All copy, links, dates, and challenge data live in `src/content.ts`. Keep it faithful to the fellowship guidelines, the BetterGov Summit pitch decks, and the application form; do not invent figures, partners, or promises.
- Each challenge links to its pitch deck slide by id, with a cover thumbnail in `public/decks/`.

## Design

- The design follows BetterGov.ph's one-year report: full-screen slides (`.fs-slide`) on ink, paper, blue, or wash grounds (`.t-ink`, `.t-paper`, `.t-blue`, `.t-wash`), chapter watermarks, and display type set tight. Slides carry no running heads or slide numbers.
- The hero is exactly one screen tall and pinned (`useStickyHero`); keep its content fitting at 1280×720 and 390×844.
- The fellowship's own look is the blueprint theme (`.t-blueprint`) on the hero and navbar: BetterGov blue, an engineer's grid, and the flag's yellow (`--sun`) as the accent. Primary actions on blue use `.fs-button--sun`. It sets the fellowship apart from about.bettergov.ph, whose heroes are ink.
- Summit challenges are cards that open native `<dialog>` modals (`ChallengeGrid.tsx`).
- Styles live in `src/fellowship.css` (slides) and `src/base.css` (document defaults). Reuse the existing classes and primitives in `src/primitives.tsx` before adding new ones.
- Motion must stay optional: the prerendered page shows everything, and reduced motion leaves it still.
- Check layouts from 320px wide; the header must not overlap at any width.

## Before pushing

1. `npm run typecheck`
2. `npm run lint:fix` and `npm run format`
3. `npm run build`
