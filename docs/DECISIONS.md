# Project decisions

Decisions are recorded here when they affect implementation. Client-dependent facts remain pending and must not be inferred.

## 12 November 2026 — Phase 2 approach

- **Stack:** Use the specified Build Option A: Astro with static output, strict TypeScript, plain CSS and Vercel deployment configuration. The client authorized work to continue on 12 November 2026; the root scaffold is complete.
- **Migration:** Keep `newporthomeopathy-main/` intact while the rebuild is developed. Remove it only after the new site has passed parity and acceptance checks.
- **Preview:** Keep the temporary root route marked `noindex`; it is scaffold-only and must be replaced with approved homepage content before deployment.
- **Tooling:** Use Astro's strict TypeScript checks, ESLint and Prettier. ESLint 9 is pinned because the available ESLint 10 dependency graph had moderate audit findings. The Astro TypeScript parser uses a scoped override to patched `minimatch` 11.0.1; linting and the full dependency audit pass with zero vulnerabilities.
- **Facts:** Use `src/data/site.ts` as the single source for rendered business details and `src/data/pending.ts` for typed unknowns. Fees, hours, payment methods, email, online format, media, booking details and other unconfirmed values stay `null`; omit their UI and structured-data fields until confirmed.
- **Copy:** The developer specification takes precedence over conflicting implementation ideas. Use exact approved Part 3 text where specified. Any newly drafted page copy remains clearly marked as a draft for clinic approval; do not invent clinic facts or claims.
- **Booking:** The Phase 1 WhatsApp booking links are temporary. The rebuilt site uses `/book-appointment/`; implement the specified booking-tool or enquiry-form fallback there, and remove `ajax.php` only after the replacement route works.
- **SEO assets:** Do not publish placeholder image, favicon, manifest, social-profile, map-profile or schema values. The current apex canonical is provisional until the preferred host is confirmed.
- **Analytics and cookies:** Add no analytics or marketing scripts before the specified consent mechanism is implemented. Never send enquiry contents or personal data to analytics.
- **Accessibility and compliance:** Keep page content in HTML, use semantic landmarks and keyboard-operable controls, and run copy compliance checks against built output before considering launch.
- **Shared components:** `BaseLayout` provides the header, footer and mobile action bar site-wide. The mobile menu remains navigable without JavaScript and adds `aria-expanded`, Escape handling and focus containment when JavaScript is available. Use the permitted Bootstrap Icons package only for the specified mobile action icons; do not add Bootstrap JavaScript or other UI libraries.
- **Unknown-dependent UI:** Omit fees, opening hours, email, social links, map links, photos and other client-dependent values while their central data remains `null`; do not render placeholder content.

## Pending client decisions

The clinic must confirm the outstanding items listed in [`PROGRESS.md`](./PROGRESS.md) before the related details are published or used in production configuration. Until then, preserve them as pending rather than selecting plausible defaults.
