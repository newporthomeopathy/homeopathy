# Newport Homeopathy Clinic: Developer Technical Specification

Project: newporthomeopathy.com, Newport Homeopathy Clinic, Newport, Shropshire TF10 8BU
Prepared by: Articog Tech LLP, Hyderabad, India. Version 1.0, 12 November 2026. Confidential.

## Overview

Rebuild newporthomeopathy.com as a compliant, fast local-clinic website of about 11 pages, with a working booking route, full technical SEO and structured data. Line numbers refer to the ORIGINAL `index.html` in `newporthomeopathy-main.zip` (Medilab Bootstrap template v4.10.0, static HTML + PHP). Re-check the file before each edit because line numbers shift after deletions.

### Delivery in two phases

1. **Phase 1, hotfix (P0, within a few days):** Parts 1-3, and replace the broken forms with click-to-call and WhatsApp links until the new booking route is ready.
2. **Phase 2, rebuild (P1):** Parts 4-10, launched on the new page structure.

### Build options

| Option | When to choose it | Notes |
|---|---|---|
| A. Static site (Astro, or Next.js static export) on Vercel or Netlify, with a lightweight CMS for the blog | Recommended | Best speed and SEO, low running cost, easy content updates |
| B. Clean rebuild of the current HTML/PHP site on existing hosting | Client wants to stay on current hosting | Same requirements apply; delete the template, write clean markup |

### Priorities

- **P0:** before anything else (compliance, broken forms)
- **P1:** required for launch
- **P2:** within 30 days after launch

### Rules that apply to everything

- Delete unused code. Never hide it with `display:none`, because search engines and AI crawlers read the raw HTML.
- No health copy goes live until the clinic has approved it in writing (Part 3).
- Every page must work without JavaScript for its main content. Content must be in the HTML, not injected client-side.

---

## PART 1: Remove (P0)

Delete everything below from the codebase. All of it is template leftovers, belongs to other businesses, or is unused.

### Code blocks in index.html

| Lines | What it is | Action |
|---|---|---|
| 39-72 | Inline `<style>` block placed after `</head>` (invalid position) | Move needed rules into the stylesheet, delete the block |
| 97, 105-106 | Commented-out template logo markup | Delete |
| 113-132 | Commented Gallery nav link; hidden Departments, Doctors and 'Drop Down 1-4' menu items | Delete |
| 138 | Commented 'Make an Appointment' button | Replace with the new Book button (Part 5) |
| 146-148 | Commented `<h1>Welcome to Uthra Dental Lab</h1>` and template text | Delete |
| 214-230 | Hidden icon boxes with Lorem Ipsum ('Lorem Ipsum', 'Nemo Enim', 'Dine Pad') | Delete |
| 239-279 | Hidden Counts section (85 Doctors, 18 Departments, 12 Research Labs, 150 Awards) | Delete |
| 301-350 | Hidden services icon-box grid (Lorem Ipsum) | Delete |
| 356-417 | Hidden appointment form posting to `../UthraDentDL/forms/appointment.php`; 'Department 1', 'Doctor 1' options | Delete; replaced by Part 4 |
| 420-515 | Hidden Departments section (Cardiology, Neurology, Hepatology, Pediatrics, Eye Care) with `../UthraDentDL/` images | Delete |
| 518-595 | Hidden Doctors section (Walter White, Sarah Jhonson, William Anderson, Amanda Jepson) | Delete |
| 598-652 | Hidden Lorem Ipsum FAQ | Delete; real FAQ built in Part 5 |
| 655-736 | Hidden testimonials (Saul Goodman, Sara Wilsson, Jena Karlis, Matt Brandon, John Larson) | Delete |
| 739-818 | Hidden gallery with missing images | Delete |
| 831, 835 | Commented Google Maps embeds for Uthra Dental Lab and V Dent Dental Lab | Delete |
| 849-859 | Hidden duplicate email and phone boxes (phone shown as '+07904622856') | Delete |
| 867-888 | Hidden contact form with invalid action `../https://newporthomeopathy.com//assets/vendor/php-email-form.php` | Delete; replaced by Part 4 |
| 914-923, 933-950 | Hidden footer 'Useful Links', 'Our Services' (Web Design, Graphic Design...) and newsletter form | Delete |
| 959-970 | Commented Medilab copyright and licence notes | Delete |
| 982 | `#preloader` div | Delete (it delays the first paint) |
| 986, 988-990 | purecounter, glightbox, swiper and php-email-form validate.js scripts | Delete |

### Code in assets/js/main.js

- Lines 167-220: preloader removal, GLightbox, gallery lightbox, testimonials Swiper and PureCounter initialisation. Delete; none of these features remain.

### Files and folders

| Path | Reason |
|---|---|
| `inner-page.html` | Template page titled 'Inner Page - Medilab Bootstrap Template'. Delete and 301-redirect to `/` |
| `ajax.php` | Unvalidated input inserted into HTML email; sender AppointmentRequest@example.com. Delete once Part 4 is live (keep for now in Phase 1) |
| `assets/forms/appointment.php` | Sends enquiries to mcjunsc@gmail.com (not the clinic) and depends on a library that is not installed. Delete now |
| `assets/forms/contactold.php`, `assets/forms/Readme.txt` | Legacy, unused |
| `assets/scss/Readme.txt`, `changelog.txt` | Template files |
| `assets/css/style_17.01.24.css`, `style_19.01.24.css` | Old stylesheet copies |
| `assets/img/hero-bg.jpg` (6.8 MB), `hero-bg0.jpg`, `hero-bg.png`, `logo - Copy.png` | Unused images |
| `assets/vendor/`: animate.css, boxicons, remixicon, fontawesome-free, glightbox, swiper, purecounter, php-email-form | Unused or replaceable. Keep Bootstrap and bootstrap-icons only |
| All `*.map` files in `assets/vendor` | Not needed in production |

---

## PART 2: Fix in index.html (P0 for the hotfix, carry into the rebuild)

Each row is a defect in the current markup and the required change. In the rebuild, the same rule applies to every page template.

| Line(s) | Current | Required change |
|---|---|---|
| 2 | `<html lang="en">` | `<html lang="en-GB">` |
| 8 | `<title>Newport Homeopathy Clinic - Index</title>` | Unique title per page (Part 5) |
| 9 | `<meta content="" name="description">` (empty) | Unique meta description per page (Part 5) |
| 10 | Empty meta keywords | Delete (ignored by search engines) |
| 13-14 | Favicon is the full logo; `rel="logo.png"` is invalid | Proper favicon set (Part 6) |
| 17 | Google Fonts: Open Sans, Raleway and Poppins, 7+ weights each | Self-host one family, 2-3 weights, woff2, `font-display: swap` (Part 8) |
| 20-27 | 8 vendor stylesheets | bootstrap.min.css + bootstrap-icons.css + style.css only |
| head | No canonical, Open Graph, theme-color or JSON-LD | Add (Parts 6 and 7) |
| 81-82 | Email and phone in the top bar are plain text | `mailto:` with the new domain email; `tel:+447904622856`; add a WhatsApp link (Part 4) |
| 86-87, 975-976 | Facebook and Instagram icons link to `#` | Real profile URLs with `rel="noopener"` and an `aria-label`, or remove the icons |
| 98-104 | Logo opens a lightbox; class typo `lass="galelry-lightbox"`; empty alt | `<a href="/" class="logo"><img src="/assets/img/logo.png" alt="Newport Homeopathy Clinic" width="447" height="107"></a>` |
| 110-133 | Every nav link wraps an `<h5>` | Plain link text, styled with CSS. Headings only for content |
| 135 | Mobile menu toggle is an `<i>` icon | `<button type="button" class="mobile-nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="navbar">` |
| 144-150 | Hero is an empty container with a CSS background image; no H1 anywhere on the page | Add H1, subheading and CTAs (Part 5). Render the hero image as `<img>`/`<picture>` with `fetchpriority="high"` (Part 8) |
| 164-189 | Body copy in `<p class="fontP">` at 24px bold; `<FONT COLOR>` tags; empty `<i></i>` and `<h4></h4>` | Semantic `<h2>`/`<h3>` + normal-weight body text at 16-18px; remove deprecated tags and empty elements |
| 165-189, 208-212, 289-297 | Non-compliant health copy | Replace with the approved copy (Part 3) |
| 287, 289 | `<br/>`, `</br>` used for spacing (`</br>` is invalid) | Remove; use CSS margin |
| 289-297 | Whole paragraphs wrapped in `<strong>`; `<u>` used for emphasis | Plain text; use `<strong>` only for genuine emphasis |
| 833 | Map iframe has no title | Add `title="Map showing Newport Homeopathy Clinic, 75 Forton Road, Newport TF10 8BU"`. Better: static map image linking to Google Maps (Part 8) |
| 846, 910 | Address written as `TF108BU`, no county | `<address>75 Forton Road, Newport, Shropshire TF10 8BU</address>`, identical on every page |
| 908 | `<h3>Newport Homeopathy Clinic,</h3>` (trailing comma) | Remove the comma; not a heading in the footer |
| 926-930 | `<p>` wrapping an `<h3>`; email address marked up as `<h3>` | Valid markup: `<p>` with `tel:` and `mailto:` links |
| 963 | 'Copyright 2021-2025' | Output the current year automatically; confirm the developer credit line with the clinic |
| 987 | Loads `bootstrap.bundle.min.js`, which does not exist (only `bootstrap.bundle.js` is present), so it 404s on every visit | Ship the minified file and fix the path. Add `defer` to all scripts |

---

## PART 3: Content and compliance changes (P0)

The current copy breaks UK advertising guidance for homeopathic services (ASA/CAP): it lists medical conditions, uses 'treat', and makes safety claims. Replace it exactly as below, pending written approval from the clinic. These rules also apply to alt text, meta descriptions, Open Graph text, structured data and the Google Business Profile.

### Old text and new text

**Line 165**
- Remove: 'Homeopathy is an effective system of healing which assists the natural tendency of the body to heal itself. It recognises that symptoms of ill health are expressions of disharmony within the whole person and that it is the patient who needs treatment not the disease.'
- Replace with: 'Homeopathy is a system of complementary medicine developed over 200 years ago. A consultation takes time to understand your health, lifestyle and wellbeing as a whole.'

**Line 175**
- Remove: '...we treat you as a whole person not just the disease. I will take the full case history of the patient before advising on treatments.'
- Replace with: 'Your first consultation includes a detailed conversation about your health history, lifestyle and wellbeing, so that any advice is personal to you.'

**Line 182**
- Remove: 'We treat most chronic diseases and illnesses. If you are unsure that homeopathy is suitable for your health problem...'
- Replace with: 'Not sure whether a consultation is right for you? Call or WhatsApp for a free, no-obligation chat before you book.'

**Line 189**
- Remove: 'Homeopathy medicines are safe to use and they have no side effects. They can be used alongside conventional medicines and will not interfere with their action.'
- Replace with: Delete. Use the GP statement below instead.

**Line 208**
- Remove: 'Dr. Kavita Batchu BHMS'
- Replace with: 'Kavita Batchu, BHMS – Homeopath' (pending clinic confirmation)

**Line 209**
- Remove: '...which included medical training in human anatomy, physiology and pathology.'
- Replace with: 'I hold a five-year Bachelor of Homeopathic Medicine and Surgery (BHMS) degree from India and have over 15 years of experience as a homeopath.'

**Line 212**
- Remove: 'I am a member of the Royal Society of Homeopaths, United Kingdom.'
- Replace with: Placeholder until confirmed: e.g. 'Registered member of the Society of Homeopaths (RSHom)', linking to her public register entry. Do not publish the current wording. Add `<!-- TODO(client): confirm professional body, membership status and register link -->`.

**Line 289**
- Remove: 'We treat skin problems, allergies, asthma, flu, cold, cough, urinary problems, menstrual problems, arthritis, migraine headaches, vertigo, gastritis, motion sickness and various chronic diseases...'
- Replace with: 'I offer private, one-to-one homeopathy consultations in Newport, Shropshire, and online across the UK.'

### GP statement (reusable component)

Show on Home, Homeopathy consultations, Online consultations and FAQs, and a one-line version in the footer:

> "Homeopathy is a complementary therapy. It is not a substitute for diagnosis or treatment by a medical professional. Please keep seeing your GP about any health concern, and do not stop or change prescribed medication without medical advice."

### Copy rules for every page, now and in future content

- Never name a medical condition or symptom as something homeopathy helps with, in any form (headings, lists, alt text, URLs, tags, schema).
- Never use 'treat', 'treatment for', 'cure', 'heal', 'relief', 'effective', 'safe', 'no side effects' or 'natural remedy for...' about homeopathy.
- Do not use 'Dr' for the practitioner anywhere (site, schema, meta, GBP).
- Testimonials and reviews may describe the experience only (listening, professionalism, convenience). No quotes that mention conditions or results.
- Do not create condition pages, condition URLs or condition keyword tags.
- Fees, durations and hours must match the confirmed values everywhere: initial £50 (30-90 min), follow-up £30, follow-ups every 4-8 weeks, Monday-Saturday 9:00-18:00 (to be confirmed).

---

## PART 4: Enquiry and booking system (P0 contact links, P1 form)

Every page offers three actions: Book online, Call and WhatsApp. Ship the call and WhatsApp links in the Phase 1 hotfix; the form or booking tool ships with the rebuild.

### Contact links

| Action | Markup |
|---|---|
| Call | `<a href="tel:+447904622856">07904 622856</a>` |
| WhatsApp | `<a href="https://wa.me/447904622856?text=Hello%2C%20I%27d%20like%20to%20book%20a%20consultation" rel="noopener">WhatsApp</a>` |
| Email | `<a href="mailto:hello@newporthomeopathy.com">` (domain address to be created; replaces cavitasuresh@yahoo.com) |
| Book | `<a href="/book-appointment/" class="btn-book">Book a consultation</a>` |

### Mobile sticky action bar

Below 768px, fixed to the bottom, 56px high, with safe-area padding (`env(safe-area-inset-bottom)`), tap targets at least 44x44 px:

```html
<nav class="mobile-actions" aria-label="Quick contact">
  <a href="tel:+447904622856" data-track="click_call">
    <i class="bi bi-telephone" aria-hidden="true"></i> Call
  </a>
  <a href="https://wa.me/447904622856" data-track="click_whatsapp" rel="noopener">
    <i class="bi bi-whatsapp" aria-hidden="true"></i> WhatsApp
  </a>
  <a href="/book-appointment/" data-track="click_book">
    <i class="bi bi-calendar-check" aria-hidden="true"></i> Book
  </a>
</nav>
```

### Booking route

Preferred: embed a booking tool (Setmore, Calendly or Cliniko) on `/book-appointment/`, configured with Initial (£50, 90 min slot) and Follow-up (£30, 60 min slot), in person or online. Fallback: the enquiry form below.

### Enquiry form fields

| Field | Type | Rules |
|---|---|---|
| Full name | text | Required, 2-80 chars, `autocomplete="name"` |
| Email | email | Required, valid format, `autocomplete="email"` |
| Phone | tel | Required, UK format, `autocomplete="tel"` |
| Consultation type | select | Required: Initial consultation (£50) / Follow-up consultation (£30) |
| Format | radio | Required: In person (Newport) / Online |
| Preferred date | date | Optional, min = today, Monday-Saturday only |
| Preferred time | select | Optional: Morning / Afternoon / Late afternoon |
| Message | textarea | Optional, max 500 chars. Helper text: 'Please don't include medical details here.' |
| Consent | checkbox | Required: 'I agree to be contacted about my enquiry. See our privacy policy.' (linked) |
| Honeypot | hidden text | Must be empty; reject otherwise |

Every field has a visible `<label>`, errors are announced with `aria-describedby` / `aria-live`, and the form works without JavaScript.

### Server-side requirements

- Validate and sanitise every field on the server. Strip CR/LF from name and email (header injection). HTML-escape all values in the email body.
- Spam protection: honeypot plus Cloudflare Turnstile (or hCaptcha); rate-limit to 5 submissions per IP per hour.
- Send through an authenticated transactional service (Resend, Postmark or SMTP with auth) from noreply@newporthomeopathy.com to the clinic inbox, with Reply-To set to the patient's email. Never use PHP `mail()` with an unverified sender.
- Send the patient an automatic acknowledgement: enquiry received, the clinic will reply within one working day, phone number, GP statement.
- On success, redirect to `/book-appointment/thank-you/` (noindex), which is used for conversion tracking.
- Do not log or store form contents in analytics, error logs or third-party scripts. If submissions are stored, encrypt them and delete after 12 months unless the clinic sets a different retention period.

### Email DNS

- Create the domain mailbox and forwarding as the clinic wants.
- Publish SPF, DKIM and DMARC (start with p=none, move to quarantine after 2 weeks of clean reports).

### UK GDPR and PECR

- Health information is special category data, so the enquiry form collects contact details only (above).
- Publish `/privacy-policy/` (controller, purposes, lawful basis, processors such as the booking tool and email service, retention, rights, ICO complaint route) and `/cookie-policy/`.
- Load analytics and any marketing tags only after consent (Part 9).
- Ask the clinic to confirm it has paid the ICO data protection fee (it probably needs to).

---

## PART 5: New site architecture (P1)

Build 11 content pages, 3 policy pages and a thank-you page. Each page has one H1, a unique title (max 60 characters) and a unique meta description (max 155 characters). URLs are lowercase, hyphenated and end with a trailing slash.

### Pages, URLs and H1s

| Page | URL | H1 |
|---|---|---|
| Home | `/` | Homeopathy Consultations in Newport, Shropshire |
| About | `/about-kavita-batchu/` | About Kavita Batchu, BHMS |
| In-person consultations | `/homeopathy-consultations/` | Homeopathy Consultations at Our Newport Clinic |
| Online consultations | `/online-homeopathy-consultation/` | Online Homeopathy Consultations Across the UK |
| Fees | `/consultation-fees/` | Consultation Fees |
| What to expect | `/what-to-expect/` | What to Expect at Your Consultation |
| Areas we serve | `/areas-we-serve/` | Areas We Serve |
| FAQs | `/frequently-asked-questions/` | Frequently Asked Questions |
| Blog index | `/blog/` | Guides and Articles |
| Book | `/book-appointment/` | Book a Consultation |
| Contact | `/contact/` | Contact and Directions |
| Privacy policy | `/privacy-policy/` | Privacy Policy |
| Cookie policy | `/cookie-policy/` | Cookie Policy |
| Booking terms | `/booking-terms/` | Booking and Cancellation Terms |
| Thank you | `/book-appointment/thank-you/` | Thank You for Your Enquiry |
| Blog post | `/blog/<slug>/` | Post title |

### Title tags and meta descriptions

**Home**
- Title: Homeopath in Newport, Shropshire | Newport Homeopathy Clinic
- Description: Private homeopathy consultations with Kavita Batchu, BHMS, in Newport, Shropshire or online across the UK. Initial consultation £50. Book today.

**About**
- Title: Kavita Batchu, BHMS – Homeopath in Newport, Shropshire
- Description: Meet Kavita Batchu, BHMS, a homeopath with over 15 years' experience offering private consultations in Newport, Shropshire and online.

**In-person consultations**
- Title: Homeopathy Consultations in Newport, Shropshire
- Description: One-to-one homeopathy consultations at 75 Forton Road, Newport TF10 8BU. Initial 30-90 minutes, £50. Monday to Saturday, 9am-6pm.

**Online consultations**
- Title: Online Homeopathy Consultations UK | Newport Homeopathy
- Description: Private online homeopathy consultations by video or WhatsApp, available anywhere in the UK. Initial consultation £50, follow-ups £30.

**Fees**
- Title: Homeopathy Consultation Fees | Newport Homeopathy Clinic
- Description: Initial homeopathy consultation £50 (30-90 minutes); follow-up £30. Pay by cash or bank transfer. In Newport, Shropshire or online.

**What to expect**
- Title: What to Expect at Your Homeopathy Consultation
- Description: What happens at your first homeopathy consultation in Newport, how to prepare, how long it takes and how follow-up appointments work.

**Areas we serve**
- Title: Homeopath near Telford & Shropshire | Newport Homeopathy
- Description: Our Newport clinic is easy to reach from Telford, Edgmond, Gnosall, Market Drayton, Stafford and Shrewsbury. Online across the UK.

**FAQs**
- Title: Homeopathy Consultation FAQs | Newport Homeopathy Clinic
- Description: Answers to common questions about booking, fees, online appointments, parking and what happens at a homeopathy consultation in Newport.

**Blog index**
- Title: Homeopathy Guides & Articles | Newport Homeopathy Clinic
- Description: Practical guides on homeopathy consultations, fees, online appointments and choosing a homeopath, reviewed by Kavita Batchu, BHMS.

**Book**
- Title: Book a Homeopathy Consultation | Newport Homeopathy Clinic
- Description: Book an in-person consultation in Newport, Shropshire or an online consultation. Initial consultation £50. Call, WhatsApp or book online.

**Contact**
- Title: Contact & Directions | Newport Homeopathy Clinic, TF10
- Description: Find Newport Homeopathy Clinic at 75 Forton Road, Newport, Shropshire TF10 8BU. Opening hours, parking, phone and WhatsApp.

**Privacy policy**
- Title: Privacy Policy | Newport Homeopathy Clinic
- Description: How Newport Homeopathy Clinic collects, uses and protects your personal information.

**Cookie policy**
- Title: Cookie Policy | Newport Homeopathy Clinic
- Description: Which cookies this website uses and how to manage them.

**Booking terms**
- Title: Booking and Cancellation Terms | Newport Homeopathy Clinic
- Description: Booking, payment and cancellation terms for consultations.

**Thank you**
- Title: Thank You | Newport Homeopathy Clinic
- Description: (none; noindex)

**Blog post**
- Title: Post title (max 60 chars)
- Description: Post summary (max 155 chars)

### Header

- Logo (links to `/`) · Home · Consultations (dropdown: In person, Online) · Fees · About · FAQs · Contact · Book a consultation button (always visible).
- Top bar on desktop: phone (`tel:`), WhatsApp, email (`mailto:`).
- Use `aria-current="page"` on the active link. On mobile, the menu toggle is a `<button>` (Part 2) and the sticky action bar is shown (Part 4).

### Footer (every page)

- Name, address and phone, identical to the Google Business Profile: Newport Homeopathy Clinic, 75 Forton Road, Newport, Shropshire TF10 8BU · +44 7904 622856.
- Opening hours: Monday-Saturday, 9:00-18:00.
- Links to all main pages and policies, real social profiles, the one-line GP statement, © current year.

### Homepage section order

1. **Hero:** H1, subheading ('Private, one-to-one consultations with Kavita Batchu, BHMS, a homeopath with over 15 years' experience. In person at 75 Forton Road, Newport, or online anywhere in the UK.'), Book and Call/WhatsApp buttons, real photo.
2. **Trust strip:** 15+ years' experience · £50 initial consultation · In person and online · Mon-Sat, 9am-6pm.
3. **Meet your practitioner:** photo, short bio, link to About.
4. **Consultation options:** cards for In person, Online and Follow-up, each with duration, fee and a link.
5. **What to expect, in 3 steps:** get in touch; first consultation (30-90 min); follow-ups every 4-8 weeks.
6. **Fees table** and payment methods.
7. **Patient feedback** (experience-only; hide the section until approved reviews exist, meaning omit it from the HTML entirely).
8. **FAQ preview** (5-6 questions, linking to `/frequently-asked-questions/`).
9. **Location and hours:** address, map (Part 8), parking, accessibility.
10. **Final call to action + GP statement.**

### Other page templates

- Every page opens with a 1-2 sentence answer-first paragraph that gives the key facts (who, where, price, how to book), then the detail.
- Every page ends with the Book / Call / WhatsApp block.
- Visible breadcrumbs on every page except Home.
- Blog post template: author box (name, qualification, photo, link to About), 'Reviewed by' line, published and updated dates, related posts, and the CTA block. Copy is supplied by Articog and approved by the clinic.
- Custom 404 page with links to Home, Book and Contact.

### Internal linking

- Home links to every main page.
- Consultation pages link to Fees, What to expect and Book.
- FAQ answers link to the relevant page.
- Each blog post links to at least one service page and Book.

---

## PART 6: Technical SEO (P1)

The current site has no robots.txt, sitemap, canonical tags, Open Graph tags or favicon set. Add all of them as below.

### Canonical host and redirects (301, server or Vercel config)

| From | To |
|---|---|
| `http://` (any) | `https://` |
| `https://www.newporthomeopathy.com/*` | `https://newporthomeopathy.com/*` (confirm the preferred host with the clinic) |
| `/index.html` | `/` |
| `/inner-page.html` | `/` |
| URLs without a trailing slash | Same URL with a trailing slash |

Check Search Console for any other indexed URLs before launch and redirect them too. Each redirect must be a single hop.

### robots.txt at /robots.txt

```
User-agent: *
Allow: /
Disallow: /book-appointment/thank-you/

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: https://newporthomeopathy.com/sitemap.xml
```

Check that hosting firewall or bot-protection settings (e.g. Cloudflare 'Block AI bots') do not block Googlebot, Bingbot, OAI-SearchBot or PerplexityBot.

### XML sitemap at /sitemap.xml

Generated automatically on build. It lists every indexable page with `<lastmod>`, and excludes the thank-you page, 404 and redirected URLs. Submit it in Google Search Console and Bing Webmaster Tools.

### Head tags (every page)

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{page title}</title>
<meta name="description" content="{page meta description}">
<link rel="canonical" href="https://newporthomeopathy.com{path}">
<meta name="theme-color" content="#ffffff">

<!-- Open Graph / social -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Newport Homeopathy Clinic">
<meta property="og:title" content="{page title}">
<meta property="og:description" content="{page meta description}">
<meta property="og:url" content="https://newporthomeopathy.com{path}">
<meta property="og:image" content="https://newporthomeopathy.com/assets/img/og-image.jpg">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image">

<!-- Favicons -->
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

- `og-image.jpg`: 1200x630 px, clinic name and location, under 200 KB. Blog posts use `og:type` article and their own image.
- Favicon: make it from the logo's leaf mark only (not the whole wordmark): favicon.ico 32px, icon.svg, apple-touch-icon.png 180px, and 192px and 512px PNGs in the manifest.
- The thank-you page carries `<meta name="robots" content="noindex">`. No other page is noindex.
- Return a real 404 status for missing pages (no soft 404s).

### Security and hosting

- HTTPS everywhere with HSTS (`max-age=31536000`).
- Headers: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` restricting camera/mic/geolocation, and a `Content-Security-Policy` that allows only the booking tool, Turnstile, analytics and maps domains in use.
- Gzip or Brotli compression. Cache headers: hashed static assets 1 year immutable, HTML no-cache.

### Optional: llms.txt (P2)

A short `/llms.txt` that summarises the clinic (name, address, practitioner, services, fees, hours) and links to the main pages. It's cheap to add, but there's no evidence it affects rankings.

### Search Console and Bing

- Verify the domain property in Google Search Console by DNS TXT record.
- Import the property into Bing Webmaster Tools.
- Submit the sitemap to both, and request indexing for the home page after launch.

---

## PART 7: Structured data (P1)

Add JSON-LD in the `<head>` of each page, using stable `@id` values so the entities link up. Every value must match what is visible on the page and in the Google Business Profile. Do NOT use Physician, MedicalClinic, MedicalBusiness, medicalSpecialty or 'Dr': they imply a medical practice. Confirm the coordinates against the Google Business Profile pin before launch.

| Schema | Pages |
|---|---|
| HealthAndBeautyBusiness + WebSite (site-wide graph) | Every page |
| Person | About (referenced from every page by `@id`) |
| Service + Offer | In-person consultations, Online consultations, Fees |
| BreadcrumbList | Every page except Home |
| FAQPage | FAQs (only questions that are visibly answered on the page) |
| BlogPosting | Each blog post |

### Site-wide graph (every page)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://newporthomeopathy.com/#clinic",
      "name": "Newport Homeopathy Clinic",
      "url": "https://newporthomeopathy.com/",
      "logo": "https://newporthomeopathy.com/assets/img/logo.png",
      "image": "https://newporthomeopathy.com/assets/img/og-image.jpg",
      "description": "Private homeopathy consultations in Newport, Shropshire and online across the UK.",
      "telephone": "+44 7904 622856",
      "email": "hello@newporthomeopathy.com",
      "priceRange": "£30–£50",
      "paymentAccepted": "Cash, Bank transfer",
      "currenciesAccepted": "GBP",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "75 Forton Road",
        "addressLocality": "Newport",
        "addressRegion": "Shropshire",
        "postalCode": "TF10 8BU",
        "addressCountry": "GB"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": 52.7782, "longitude": -2.3783 },
      "hasMap": "https://maps.google.com/?cid=GBP_CID_HERE",
      "openingHoursSpecification": [{
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }],
      "areaServed": [
        { "@type": "City", "name": "Newport, Shropshire" },
        { "@type": "City", "name": "Telford" },
        { "@type": "AdministrativeArea", "name": "Shropshire" },
        { "@type": "Country", "name": "United Kingdom" }
      ],
      "employee": { "@id": "https://newporthomeopathy.com/about-kavita-batchu/#person" },
      "sameAs": [
        "GOOGLE_BUSINESS_PROFILE_URL",
        "FACEBOOK_URL",
        "INSTAGRAM_URL",
        "PROFESSIONAL_REGISTER_LISTING_URL"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://newporthomeopathy.com/#website",
      "url": "https://newporthomeopathy.com/",
      "name": "Newport Homeopathy Clinic",
      "inLanguage": "en-GB",
      "publisher": { "@id": "https://newporthomeopathy.com/#clinic" }
    }
  ]
}
```

Remove any `sameAs` URL that doesn't exist yet. Never publish placeholder values (`GBP_CID_HERE`, `GOOGLE_BUSINESS_PROFILE_URL`, etc.). Omit the property instead.

### About page: Person

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://newporthomeopathy.com/about-kavita-batchu/#person",
  "name": "Kavita Batchu",
  "jobTitle": "Homeopath",
  "url": "https://newporthomeopathy.com/about-kavita-batchu/",
  "image": "https://newporthomeopathy.com/assets/img/kavita-batchu.jpg",
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "degree",
    "name": "Bachelor of Homoeopathic Medicine and Surgery (BHMS)"
  },
  "memberOf": { "@type": "Organization", "name": "CONFIRMED_PROFESSIONAL_BODY", "url": "BODY_URL" },
  "worksFor": { "@id": "https://newporthomeopathy.com/#clinic" },
  "sameAs": ["PROFESSIONAL_REGISTER_LISTING_URL"]
}
```

Omit `memberOf` and `sameAs` until the professional body is confirmed.

### Consultation and Fees pages: Service + Offer

Repeat for the online service, with `availableChannel` describing online delivery and `areaServed` set to the United Kingdom.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://newporthomeopathy.com/homeopathy-consultations/#service",
  "name": "Homeopathy consultation (in person)",
  "serviceType": "Homeopathy consultation",
  "provider": { "@id": "https://newporthomeopathy.com/#clinic" },
  "areaServed": { "@type": "AdministrativeArea", "name": "Shropshire" },
  "offers": [
    { "@type": "Offer", "name": "Initial consultation (30–90 minutes)", "price": "50.00", "priceCurrency": "GBP" },
    { "@type": "Offer", "name": "Follow-up consultation", "price": "30.00", "priceCurrency": "GBP" }
  ]
}
```

### BreadcrumbList (example for the Fees page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://newporthomeopathy.com/" },
    { "@type": "ListItem", "position": 2, "name": "Consultation Fees", "item": "https://newporthomeopathy.com/consultation-fees/" }
  ]
}
```

### FAQPage

Generate it from the same data that renders the visible FAQ, so the two can never drift apart. Google now rarely shows FAQ rich results for sites like this, but the markup still helps machines read the page.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a homeopathy consultation cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "An initial consultation costs £50 and lasts 30–90 minutes. Follow-up consultations cost £30." }
    }
  ]
}
```

### Blog posts

`BlogPosting` with `headline`, `datePublished`, `dateModified`, `author` (`@id` of the Person), `publisher` (`@id` of the clinic), `image` and `mainEntityOfPage`.

### Validation

Every template must pass the Schema Markup Validator and Google's Rich Results Test with zero errors before launch.

---

## PART 8: Performance and accessibility (P1)

Target: all Core Web Vitals in the 'good' range on mobile and a Lighthouse score of 90+ for Performance, Accessibility, Best Practices and SEO on every template.

| Metric | Target (mobile, 75th percentile) |
|---|---|
| Largest Contentful Paint (LCP) | ≤ 2.5 s |
| Interaction to Next Paint (INP) | ≤ 200 ms |
| Cumulative Layout Shift (CLS) | ≤ 0.1 |
| Total page weight, Home | ≤ 1 MB |
| JavaScript, Home | ≤ 100 KB compressed |

### Images

- Hero: the current `hero-bgmini.jpg` is 5355x3570 px (462 KB) and loaded as a CSS background. Replace it with a `<picture>` element: AVIF + WebP + JPEG fallback, `srcset` at 640/1024/1600/1920 px wide, about 150-300 KB at 1920 px, with width/height set, `fetchpriority="high"` and no lazy-loading.
- Use real photos of the practitioner and the clinic once supplied. Until then, use a licensed stock image that makes no health claim. Never use images from other clinics' websites.
- `about.jpg` (1600 px, 141 KB): convert to WebP/AVIF, use responsive sizes, `loading="lazy"`.
- Logo: supply an SVG if available, otherwise a compressed PNG at 2x display size (current file is 447x107, 32 KB).
- Every `<img>` has width, height and meaningful alt text (decorative images use `alt=""`). Alt text follows the copy rules in Part 3.

### Fonts

- Replace the three Google Font families (Open Sans, Raleway, Poppins) with one self-hosted family in woff2, at most 3 weights.
- Preload the main weight, use `font-display: swap`, and set a matched fallback (`size-adjust`) to avoid layout shift.

### CSS and JavaScript

- Only Bootstrap (ideally a custom build with just grid, utilities and the components used), bootstrap-icons (or inline SVG icons) and the site stylesheet.
- Remove unused CSS (PurgeCSS or framework equivalent). Inline the critical CSS for above-the-fold content.
- All scripts `defer`. No jQuery, preloader, animation or carousel libraries.
- Load third-party scripts (booking widget, Turnstile, analytics) only where needed and after consent where required.

### Map

Replace the always-loaded Google Maps iframe with a static map image (or a click-to-load facade) that links to the clinic's Google Business Profile. Load the interactive map only on click.

### Accessibility (WCAG 2.2 AA)

- Colour contrast: the current brand blue `#1E90FF` on white is about 3.2:1, which fails for normal text. Use it only for large text and icons. For body links and small text use a darker blue such as `#0B6BCB` (about 5.3:1). The green `#33d80a` must not be used for text.
- Body text 16-18px, normal weight. The current 22-24px bold paragraphs go.
- One H1 per page and logical heading order (H2, then H3), with no skipped levels.
- A skip link ('Skip to main content'), `<header>`, `<nav>`, `<main>` and `<footer>` landmarks, and `aria-current` in the nav.
- Keyboard: every control reachable and operable, visible focus outline (no `outline: none`), and the mobile menu traps focus while open and closes with Esc.
- Tap targets at least 44x44 px; enough spacing between the Call/WhatsApp/Book buttons.
- Forms: visible labels, required fields marked in text (not colour only), and accessible error messages (Part 4).
- Respect `prefers-reduced-motion`; no auto-playing carousels or animation.
- Test with axe DevTools and a screen reader (VoiceOver or NVDA) on Home, Book and FAQ.

---

## PART 9: Analytics and tracking (P1)

Track actions that lead to bookings, never form contents. Use GA4 with Google Consent Mode v2 behind a UK-compliant cookie banner (Accept / Reject equally prominent; no analytics cookies before consent).

### GA4 events (mark the first five as key events)

| Event name | Fires when | Parameters |
|---|---|---|
| `click_call` | Any `tel:` link clicked | `link_location` (header, sticky_bar, footer, page) |
| `click_whatsapp` | Any `wa.me` link clicked | `link_location` |
| `click_email` | Any `mailto:` link clicked | `link_location` |
| `generate_lead` | Thank-you page loads after a successful form submit | `consultation_type`, `format` (in_person / online). No personal data |
| `booking_complete` | Booking tool confirms a booking (via its callback or redirect) | `consultation_type`, `format` |
| `click_book` | Any 'Book a consultation' button clicked | `link_location` |
| `click_directions` | Map or directions link clicked | `link_location` |

Use a single delegated click listener on `[data-track]` attributes (as in the Part 4 sticky bar) rather than inline handlers.

### Rules

- Never send names, emails, phone numbers or message text to GA4, Tag Manager or any pixel. No session recording tools.
- Exclude internal traffic (clinic and developer IPs).
- No advertising pixels (Meta, TikTok etc.) unless the clinic asks for them later. Health-related browsing data needs extra care.

### Campaign tagging

- Google Business Profile website link: `https://newporthomeopathy.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`
- GBP appointment link: `https://newporthomeopathy.com/book-appointment/?utm_source=google&utm_medium=organic&utm_campaign=gbp_booking`
- Social bio links: `utm_source=instagram` / `facebook`, `utm_medium=social`.

### AI referral tracking

Create a GA4 custom channel group 'AI assistants' matching session source by regex:

```
chatgpt\.com|chat\.openai\.com|perplexity\.ai|copilot\.microsoft\.com|gemini\.google\.com|claude\.ai
```

### Other tools

- Google Search Console and Bing Webmaster Tools (Part 6), linked to GA4.
- Optional (P2): a Looker Studio dashboard with monthly impressions, clicks, key events by source and AI referrals, shared with Articog and the clinic.

---

## PART 10: QA and acceptance checklist

The site is accepted for launch only when every item below is ticked. Test on the staging URL (set to noindex and password-protected), then repeat the items marked [Prod] on production.

### Content and compliance

- [ ] Clinic has approved all page copy, alt text, meta descriptions and structured data in writing
- [ ] A site-wide search for 'treat', 'cure', 'heal', 'effective', 'side effects', 'Dr ' and condition names (asthma, eczema, migraine, arthritis, allergy, etc.) returns no matches in page text, HTML attributes or JSON-LD
- [ ] No Lorem Ipsum, template names (Medilab, Walter White, Saul Goodman...), 'UthraDentDL' or 'Uthra' anywhere in the deployed code (`grep -ri`)
- [ ] GP statement present on Home, both consultation pages, FAQs and in the footer
- [ ] Name, address, phone, fees and hours identical on every page, in JSON-LD and in the Google Business Profile

### Booking and contact

- [ ] [Prod] Test enquiry received in the clinic inbox within 1 minute, not in spam, with Reply-To set to the patient
- [ ] [Prod] Patient acknowledgement email received
- [ ] [Prod] Booking tool test booking completes and notifies the clinic
- [ ] Validation errors shown and announced for each required field; honeypot and Turnstile block a scripted submission
- [ ] [Prod] `tel:` link dials on iOS and Android; WhatsApp link opens the chat with the pre-filled message
- [ ] SPF, DKIM and DMARC pass (check with mail-tester.com, score 9/10+)
- [ ] Old PHP scripts (`ajax.php`, `assets/forms/*.php`) return 404 or 410

### Technical SEO

- [ ] [Prod] robots.txt and sitemap.xml load; staging noindex removed on production
- [ ] [Prod] All redirects in Part 6 return a single 301 to the right URL
- [ ] Every page has a unique title, meta description, one H1 and a self-referencing canonical
- [ ] Open Graph preview correct (test with the LinkedIn Post Inspector or opengraph.xyz)
- [ ] JSON-LD passes the Schema Markup Validator and Rich Results Test with zero errors; no placeholder values left
- [ ] Custom 404 page returns HTTP 404
- [ ] [Prod] Search Console and Bing Webmaster Tools verified; sitemap submitted

### Performance and accessibility

- [ ] Lighthouse mobile 90+ in all four categories on Home, a consultation page, Book and a blog post
- [ ] LCP ≤ 2.5 s, CLS ≤ 0.1 on a throttled mobile profile; Home ≤ 1 MB
- [ ] No console errors and no 404 requests (the current `bootstrap.bundle.min.js` 404 is gone)
- [ ] axe DevTools: zero critical or serious issues; full keyboard pass; screen-reader pass on Home, Book and FAQ
- [ ] Layout checked at 360, 768, 1024 and 1440 px on Chrome, Safari (iOS) and Firefox

### Analytics and privacy

- [ ] Cookie banner blocks GA4 until consent; Reject works; Consent Mode signals visible in Tag Assistant
- [ ] All GA4 events in Part 9 fire once per action in DebugView, with no personal data in any parameter
- [ ] Privacy, cookie and booking-terms pages live and linked from the footer and the form

### Handover

- [ ] Source code in the client's or Articog's Git repository; credentials for hosting, DNS, CMS, booking tool, email service and Search Console handed over
- [ ] Short CMS guide for publishing blog posts (including the copy rules in Part 3)

---

## Open items needed from the clinic (before launch)

The developer can build every template now. The items below must be confirmed before launch. Anything marked as a placeholder in this spec must not go live until it is replaced. Mark each with `<!-- TODO(client): ... -->` in code.

| # | Item | Blocks |
|---|---|---|
| 1 | Exact name of the professional body, membership status and public register link | About page copy, Person schema, sameAs |
| 2 | Approved professional title (recommended: 'Kavita Batchu, BHMS – Homeopath') | All pages, schema, GBP |
| 3 | Written approval of all health-related copy | Launch |
| 4 | Confirmed fees, durations, payment methods and cancellation policy | Fees page, booking terms, Offer schema |
| 5 | Confirmed opening hours (including Saturdays) and holiday closures | Footer, schema, GBP |
| 6 | Online consultation format (WhatsApp video, Zoom, phone) | Online consultations page, booking tool set-up |
| 7 | Preferred booking tool, and the inbox that should receive enquiries | Part 4 |
| 8 | New domain email address, or approval for Articog to create it | Part 4, schema |
| 9 | Preferred host (with or without www) | Redirects, canonicals |
| 10 | Access: domain registrar/DNS, hosting, Google Business Profile, Search Console, existing analytics | Deployment, verification |
| 11 | Real Facebook and Instagram URLs (or confirmation there are none) | Header, footer, sameAs |
| 12 | Professional photos of the practitioner and clinic (or a shoot date) | Hero, About, OG image |
| 13 | Logo source file (SVG or high-resolution PNG) | Logo, favicon set |
| 14 | Parking, step-free access and directions for 75 Forton Road | Contact and Areas pages |
| 15 | Whether the developer credit 'Ciarpro Tech Pvt Ltd' stays in the footer | Footer |
| 16 | Confirmation the ICO data protection fee is paid, and the data-controller details for the privacy policy | Privacy policy |
