# Project decisions

Decisions are recorded here when they affect implementation. Client-dependent facts remain pending and must not be inferred.

## 12 November 2026 — Phase 2 approach

- **Stack:** Use the specified Build Option A: Astro with static output, strict TypeScript, plain CSS and Vercel deployment configuration. Do not scaffold until the client says “go”.
- **Migration:** Keep `newporthomeopathy-main/` intact while the rebuild is developed. Remove it only after the new site has passed parity and acceptance checks.
- **Facts:** Use `src/data/site.ts` as the single source for confirmed business details and `src/data/pending.ts` for typed unknowns. Unknown values stay `null`; omit their UI and structured-data fields until confirmed.
- **Copy:** The developer specification takes precedence over conflicting implementation ideas. Use exact approved Part 3 text where specified. Any newly drafted page copy remains clearly marked as a draft for clinic approval; do not invent clinic facts or claims.
- **Booking:** The Phase 1 WhatsApp booking links are temporary. The rebuilt site uses `/book-appointment/`; implement the specified booking-tool or enquiry-form fallback there, and remove `ajax.php` only after the replacement route works.
- **SEO assets:** Do not publish placeholder image, favicon, manifest, social-profile, map-profile or schema values. The current apex canonical is provisional until the preferred host is confirmed.
- **Analytics and cookies:** Add no analytics or marketing scripts before the specified consent mechanism is implemented. Never send enquiry contents or personal data to analytics.
- **Accessibility and compliance:** Keep page content in HTML, use semantic landmarks and keyboard-operable controls, and run copy compliance checks against built output before considering launch.

## Pending client decisions

The clinic must confirm the outstanding items listed in [`PROGRESS.md`](./PROGRESS.md) before the related details are published or used in production configuration. Until then, preserve them as pending rather than selecting plausible defaults.
