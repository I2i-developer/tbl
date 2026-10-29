# Thok Bajao Lead — website

Latest revision (30 October 2026): explicit Home links in desktop/mobile navigation, larger typography, balanced navbar gutters and CTA padding, and the new user-supplied logo with its checkerboard background removed. The neighbourhood section retains its original full-width layout following the user's typo clarification. The active display asset is `public/brand-logo-transparent.webp`; the transparent PNG and exact edit prompt are documented in `docs/logo-processing.md`.

A complete Next.js App Router + React + TypeScript + Tailwind CSS website for TBL, with a lavender/off-white visual system, radar-inspired hero, original company logo and 30 content pages.

`PRD.md` is the source of truth. Shared marketing context lives in `.agents/product-marketing.md`.

## WhatsApp and social link previews

The public production origin defaults to `https://thokbajaolead.vercel.app`. Set `NEXT_PUBLIC_SITE_URL` and rebuild when changing domains. All content pages include Open Graph and Twitter preview tags in their static HTML, with a page-specific description and canonical URL. The shared logo image is `public/images/tbl-social-preview-v1.jpg`, an opaque 1200 × 630 JPEG using the approved TBL artwork.

Regenerate it with `node scripts/create-social-image.mjs`. After building, verify metadata with `node scripts/check-social-metadata.mjs`. If the image changes later, change its versioned filename in `lib/metadata.ts` to avoid reusing a cached image URL. The page and image must be publicly accessible without sign-in; adding tags to a private preview cannot make it crawlable. Actual WhatsApp rendering also depends on the app's link-preview settings.

## Run locally

Use Node.js 20.9 or later (developed with Node 24).

```powershell
cd C:\Users\jalaj\Projects\tbl\website
npm ci
npm run dev
```

Open the URL printed by Next.js, normally http://localhost:3000. If another server is running, Next.js chooses another available port.

```powershell
npm run typecheck
npm run build
node scripts/check-export.mjs
npm start
```

`npm run build` creates a standalone static site in `out/`. `npm start` serves that build on port 3000. It does not run the Next.js server because the project intentionally uses static export. No database, account system or CRM is required.

## Pages and editing

- Home, about, services, how it works, locations, contact, insights, FAQ, privacy and terms.
- 3 detailed service pages, 14 market pages and 3 complete original guides.
- `lib/content.ts`: company configuration, location descriptions and spelling aliases, service content, process, FAQs and guides.
- `app/globals.css`: Tailwind import, palette, typography, components, responsive rules and reduced-motion support.
- `components/`: shared navigation, footer, CTAs, radar, market directory and enquiry form.
- `public/brand-logo-new.png`: latest user-supplied source. `brand-logo-transparent.png`: background-free logo. `brand-logo-transparent.webp`: active lightweight display asset. Earlier logo files are preserved but no longer displayed.
- Original photography is representative imagery, never a claim about client projects or delivered results. Do not add client logos, results or testimonials without supporting information and permission.

## Enquiry form

The default frontend prepares a downloadable text brief. It clearly tells visitors that their details have **not** been sent. Fields are held in React state only; no personal data is saved to localStorage. The visitor can review, edit or download their brief.

To enable delivery, copy `.env.example` to `.env.local`, set the verified values and rebuild:

```dotenv
NEXT_PUBLIC_ENQUIRY_ENDPOINT=https://your-approved-service.example/enquiries
NEXT_PUBLIC_CONTACT_EMAIL=your-verified-business-email
NEXT_PUBLIC_CONTACT_PHONE=your-verified-business-phone
NEXT_PUBLIC_SITE_URL=https://your-final-domain.example
```

The endpoint must accept JSON by POST, allow the website’s origin through CORS, validate and sanitize all input, apply spam protection/rate limits, and return a 2xx response only after accepting the enquiry. It receives `name`, `email`, `phone`, `businessType`, `company`, `market`, `budget`, `goals` and `consent`. These are public build variables: never put API secrets in them. Delivery failures preserve the form and permit retry. A configured endpoint switches the button to “Send my enquiry”. Update the privacy page with the selected processor, retention period and verified privacy contact.

Pass `?market=bangalore` (or another location slug) to preselect a market. Sitemaps use `NEXT_PUBLIC_SITE_URL`; no domain is invented when this value is absent. These variables are compiled at build time, so changing runtime hosting variables alone does not update a static build.

## Assets and licences

Photography downloaded from Unsplash, used as representative imagery under its licence:

| Local asset   | Source                                                                                         |
| ------------- | ---------------------------------------------------------------------------------------------- |
| hero.jpg      | https://images.unsplash.com/photo-1600607687939-ce8a6c25118c                                   |
| bangalore.jpg | https://images.unsplash.com/photo-1596176530529-78163a4f7af2                                   |
| mumbai.jpg    | https://images.unsplash.com/photo-1595658658481-d53d3f999875                                   |
| delhi.jpg     | https://images.unsplash.com/photo-1587474260584-136574528ed5                                   |
| jaipur.jpg    | https://images.unsplash.com/photo-1578999935853-4ec5fa6c1f60                                   |
| pune.jpg      | https://images.unsplash.com/photo-1600585154340-be6161a56a0c (generic residential inspiration) |

DM Sans is locally hosted from `@fontsource-variable/dm-sans` under the SIL Open Font License; see `public/fonts/OFL.txt`. Lucide icons use the ISC licence. The supplied logo remains TBL’s artwork.

## Launch status

Implemented: static routes and metadata, local assets/fonts, responsive layouts, mobile navigation, searchable/filterable markets, FAQ disclosures, validated enquiry preparation and optional delivery.

Outstanding company inputs: verified email/phone, production enquiry endpoint, approval of proposed service wording, any real case studies and legal review. The attached logo has been located and integrated. No tracking, fake proof or fixed service prices have been added.

Browser automation could not verify the current Windows URL and ended before visual/interactive QA. TypeScript, production build and export link/asset checks are recorded separately; they do not constitute desktop/mobile visual verification.

The Sites manifest identifies the private review deployment. A private Site requires authorized access; it is not automatically a public client-sharing link. Public launch requires an explicit audience change. The static `out/` folder may also be deployed on a hosting provider of your choice.
