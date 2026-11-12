# Project progress

Last audited: 12 November 2026  
Source of truth: [`SPEC.md`](./SPEC.md)

## Current status

**Phase 1 audit and Phase 2 scaffold are complete; page implementation has not started.** The Phase 1 site remains in `newporthomeopathy-main/`. The Astro project is at the workspace root, and its temporary preview route is marked `noindex`.

The homepage reflects most of the Phase 1 (Parts 1–3) changes, but is **not ready for launch**. The audit found the following remaining issues and client-dependent blockers.

## Parts 1–3 audit

| Area                                    | Status                | Findings                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Part 1: template cleanup                | Mostly done           | The obsolete sections and template names are absent from `newporthomeopathy-main/index.html`. `inner-page.html`, `assets/forms/`, old stylesheet copies, and the listed unused image files are absent. `.htaccess` redirects `/inner-page.html` to `/`. `ajax.php` remains, as Part 1 allows during Phase 1; it still contains the legacy recipient and handler and must be removed once the replacement booking route is working. Unused Bootstrap CSS variants and `bootstrap-icons.json` remain in the vendor tree. |
| Part 2: document metadata and structure | Mostly done           | `lang="en-GB"`, the Home title and description, canonical, Open Graph/Twitter metadata, theme colour, three linked stylesheets, a skip link, `<main>`, one H1, the accessible menu button, and deferred `main.js` are present. The page uses a responsive `<picture>` hero and local map facade.                                                                                                                                                                                                                       |
| Part 2: referenced assets               | Needs work            | Favicon and manifest links are present with a client TODO, but `/favicon.ico`, `/icon.svg`, `/apple-touch-icon.png`, and `/site.webmanifest` are missing. The Open Graph image URL is also not backed by a file; it has a TODO. These references need real supplied/generated assets before launch.                                                                                                                                                                                                                    |
| Part 2: fonts                           | Interim state         | Open Sans is reduced to three Google Fonts weights with `display=swap`; the page has a TODO to self-host WOFF2 during Phase 2.                                                                                                                                                                                                                                                                                                                                                                                         |
| Part 2: contact details                 | Needs client input    | The domain email link is displayed although the mailbox is marked as not yet created. Social links are omitted and a TODO requests real profile URLs or confirmation that none exist. Book actions use WhatsApp pending the Phase 2 booking route, as intended for the hotfix.                                                                                                                                                                                                                                         |
| Part 3: approved replacement copy       | Mostly done           | The approved practitioner title and biography, first-consultation wording, service description, and GP statement are present. The exact approved replacement for the old “not sure whether…” paragraph is not present; the final CTA uses different wording.                                                                                                                                                                                                                                                           |
| Part 3: compliance and approval         | Needs client approval | The page includes a TODO requesting written approval of homepage copy, metadata and alt text. No written approval is recorded in the repository. Professional-body wording is omitted and its confirmation TODO is present. The GP statement is the specified copy; its use of “treatment” is part of that required statement.                                                                                                                                                                                         |
| Published business facts                | Needs client input    | Mon–Sat hours, fees, durations and payment methods appear on the live page, while the specification lists confirmations still needed. Confirm these before launch and update all instances consistently. Parking/accessibility also remains unconfirmed and is marked with a TODO.                                                                                                                                                                                                                                     |

### Additional Phase 1 findings

- The homepage contains no appointment form posting to PHP, but the retained `ajax.php` endpoint still accepts and emails unvalidated form fields. Remove it when the new enquiry route is deployed; do not rely on it for the rebuild.
- Only `bootstrap.min.css`, `bootstrap-icons.css` and `style.css` are linked. The extra Bootstrap variants and icon JSON file are not referenced by the page and should be removed during legacy cleanup.
- The legacy folder has not been modified. Shared site data, pending-items module, production pages and automated compliance scanning remain to be implemented.
- References under `docs/` are excluded from page-copy compliance scans. The site source was searched for the Part 1 template names and copy; the only remaining matching template contact detail is in the intentionally retained `ajax.php`.

## Phase 2 scaffold

| Item                            | Status      | Notes                                                                                                                                   |
| ------------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Astro project at workspace root | Done        | Static output is explicit; the legacy site remains untouched.                                                                           |
| TypeScript strict mode          | Done        | Uses Astro's strict tsconfig; the legacy folder is excluded from checks.                                                                |
| Plain CSS and vendor baseline   | Done        | No CSS framework or UI library has been added to the rebuild.                                                                           |
| Developer checks                | Done        | Build, Astro check, ESLint, Prettier and an `npm audit` run are configured/verified.                                                    |
| Temporary root preview          | Done        | One-H1, `en-GB`, noindex scaffold page; replace it with approved homepage content before deployment.                                    |
| Central site and pending data   | Done        | Confirmed NAP/contact identifiers are centralized; unconfirmed business details, assets, hours, fees and approvals are typed as `null`. |
| Layout, components and pages    | Not started | Next: implement the shared layout/SEO components, then pages in specification order.                                                    |

Validation passed: `npm run check` (0 errors, warnings or hints), `npm run lint`, `npm run format:check`, `npm run build`, and `npm audit` (0 vulnerabilities). A built-output compliance scan found no banned copy or template placeholders; the temporary preview has one H1, `lang="en-GB"` and `noindex`.

## Client confirmations still needed

1. Written approval of homepage copy, metadata and alt text.
2. Confirm fees, durations, payment methods, opening hours and Saturday availability.
3. Create/verify `hello@newporthomeopathy.com` and confirm the inbox for enquiries.
4. Confirm professional body, membership status and public register URL.
5. Supply/approve logo source, favicon assets, Open Graph image, and practitioner/clinic photos.
6. Confirm whether social profiles exist and provide their URLs.
7. Confirm parking, step-free access and directions.
8. Confirm the cancellation policy and approve the future distance-booking terms.
9. Confirm developer credit, ICO fee status and data-controller details.
10. Confirm the preferred canonical host before production redirects are configured.

## Next implementation steps

1. Build the shared layout, metadata and reusable accessible components, then implement the pages in the specification's order.
2. Add booking/API, policy pages, consent-gated analytics, SEO files and QA/compliance tooling.
3. Verify parity and acceptance requirements before removing the legacy folder; document client-dependent launch blockers rather than inventing facts.
