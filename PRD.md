# Thok Bajao Lead (TBL) — Product requirements

Version 1.2 · 30 October 2026 · Source of truth for the frontend release

Current requirements: increase reading and interface font sizes across desktop and mobile, provide consistent navbar gutters and CTA strip padding, and replace the original displayed logo with a background-free version of the user-provided `public/brand-logo-new.png`. Use `public/brand-logo-transparent.webp` in navigation/footer and the matching PNG favicon. Body text is 16–18px; form inputs are at least 16px on mobile. Supporting labels generally use 12–15px, with small decorative radar annotations remaining compact. Keep the complete logo visible with contain sizing.

Revision 1.2: the user clarified that “neighbour” meant “navbar”. Include an explicit Home link in desktop and mobile navigation, with the Home active state restricted to the homepage. Restore the neighbourhood section's original full-width layout and responsive spacing. Keep the larger typography, corrected CTA spacing and replacement logo.

## 1. Purpose and outcome

Create a polished, client-facing website for an Indian company that generates and provides leads to real estate businesses. Explain the offering, establish credibility through the supplied 15 years of experience, show familiarity with 14 supplied markets, and help prospects prepare an actionable project enquiry. Deliver a complete Next.js and Tailwind implementation, responsive pages, reusable content, accessible interactions and a deployable static build.

## 2. Confirmed facts and content policy

- Company name: Thok Bajao Lead. Short name: TBL (confirmed by user).
- Business: lead generation and lead provision for real estate businesses.
- Experience: 15 years (user supplied; do not imply an independently audited figure or invent a founding year).
- Markets: Bangalore, Karnataka, Andhra Pradesh, Mumbai, Pune, Nashik, Delhi NCR, Lucknow, Gorakhpur, Bihar (Patna), Jaipur, Chhattisgarh, Kanpur and Bareilly. Standardize the user's alternate spellings; retain aliases in search.
- Active logo: the replacement supplied at `public/brand-logo-new.png`, with the checkerboard removed into `public/brand-logo-transparent.png` and an optimized WebP used in navigation/footer. Earlier logo files remain preserved but are not displayed. Palette follows the supplied artwork's lavender and off-white colours.
- Do not fabricate customer identities, testimonials, lead counts, revenue, conversion rates, office addresses, awards, delivery guarantees, certifications, pricing, or integrations.
- Service categories and workflow are proposed marketing descriptions; obtain company review before a public launch. Describe intended engagement scope, not an already implemented SaaS product. Visual sample briefs are explicitly illustrative.

## 3. Audience and jobs

Primary: developers and builders marketing residential projects; brokers and channel partners seeking relevant enquiries; real estate sales/marketing heads expanding into a market. Visitors need to understand market coverage, find the right service, evaluate the approach, and share project, geography, budget and contact details. Avoid a consumer property-search experience.

## 4. Scope and sitemap

P0: Home (/), Services (/services), service detail pages (/services/real-estate-leads, /services/project-launches, /services/channel-partner-growth), Locations (/locations), 14 market detail pages (/locations/[slug]), How it works (/how-it-works), About (/about), Contact (/contact).
P1: Resources (/resources), three original practical guides (/resources/[slug]), FAQ (/faq), Privacy (/privacy), Terms (/terms), custom 404. Approximately 31 authored content pages plus framework pages. Every route must have useful original content and a clear next action; no empty placeholder destinations.
Home progression: announcement, navigation, radar hero, verified experience and market summary, selected market cards, service overview, four-step process, expertise section, FAQs, closing CTA, comprehensive footer.

## 5. Conversion and interactions

Primary action: “Let's talk growth” / “Plan my campaign” to contact. Secondary: explore services and markets. Locations include searchable/filterable directory with regional filters and linked market pages. Header includes mobile menu with keyboard-accessible native buttons. FAQ uses native details/summary. Resources link to complete articles. No fake login, client portal, live activity, or dashboard metrics.
Contact collects name, business email, phone, business type, market, company/project, goals and contact consent. Native browser validation plus whitespace checks; selected location may be populated from URL. Explain how information is used. When NEXT_PUBLIC_ENQUIRY_ENDPOINT is configured, POST JSON and show success only after HTTP success; handle network/server errors and allow retry. Without endpoint, explicitly say no enquiry has been sent, present a review and offer a downloadable text brief. Do not store personal details in localStorage. Do not imply a booked meeting or guaranteed response time. Add optional verified email/phone only via configuration.

## 6. Visual system

Direction: quiet confidence, editorial real estate photography, spacious B2B landing-page structure. Light purple primary (#bba1ef / #ece4fa); warm off-white secondary (#fbfaf7); charcoal text (#28252d); accessible deeper purple for links (#674390). Olive/lime accent sparingly supports radar signal indicators. Typography: locally hosted sans-serif; oversized tight headlines, readable 16px body. Navigation is compact and horizontally balanced. Sections alternate soft backgrounds, editorial split layouts and rounded photo cards. Restrained shadows, 18–28px card radii, pill CTAs. Hero uses CSS/SVG concentric radar circles, property imagery, signal markers and an explicitly illustrative campaign brief. Avoid decorative motion that obscures content.
Responsive: desktop ≥1024px split hero and 3-column market cards; tablet 2-column; mobile single-column, accessible menu and touch-friendly controls. No horizontal overflow at 360px. Respect prefers-reduced-motion; no flashing or autoplay media. Icons from lucide-react, bespoke vector radar and brand mark.

## 7. Content specifications

Write concise Indian-English B2B copy. Focus on local market context, project fit, buyer requirements and sales follow-up. Bangalore and Karnataka are separate requested market entries; Bihar represented by Patna, NCR as a regional market. Market descriptions are general positioning, not fabricated case studies or current market-price advice. Resources explain campaign planning, lead qualification and sales handover; no dated legal or financial advice. Legal pages transparently describe the implemented site behavior and need business review.

## 8. Technical architecture

Social sharing: use the public Vercel origin `https://thokbajaolead.vercel.app` by default, configurable through `NEXT_PUBLIC_SITE_URL`. Every content page must expose the approved logo image, title, description and correct page URL through Open Graph metadata in its initial static HTML. Include absolute image URLs, image dimensions/alt text, matching Twitter cards and canonical links. The preview image is an opaque 1200 × 630 JPEG; the share flow must not depend on JavaScript or authenticated access.

Next.js App Router, React, TypeScript, Tailwind CSS v4 through PostCSS. Server-rendered/static-exported pages with client islands for header, directory and form. Static data module is authoritative for locations, services and articles. Generate static params and metadata for dynamic routes, unique page titles/descriptions, robots and sitemap when site origin is configured. Static export in out/ supports commodity hosting and Sites. Native next/link navigation. Locally stored optimized images with descriptive alt text, dimensions/aspect ratios and lazy loading below fold. No secret values in browser variables.

## 9. Accessibility, privacy, quality

Semantic landmarks, one h1 per page, skip link, visible focus, explicit form labels, descriptive links, status/error live regions, keyboard-operable controls, readable contrast. Decorative radar hidden from assistive technology. No external tracking, ad pixels, cookie banner or invented cookie consent. No persistent enquiry storage in the frontend. Frontend cannot guarantee server-side security; production endpoint must validate input, prevent spam and apply retention controls.

## 10. Acceptance criteria

Production build and TypeScript check pass. All authored routes export successfully and internal links resolve. All 14 location entries are searchable, filterable and linked. Search handles supplied spelling aliases. CTAs reach relevant enquiry/service pages. Mobile menu opens, closes on navigation/Escape and remains keyboard accessible. FAQs expand. Form rejects invalid input, honors consent and never claims unconfigured delivery. Downloaded brief includes entered data. Endpoint failure preserves fields and offers retry. Representative desktop/mobile visual inspection shows no clipping/overflow. Missing routes show helpful 404. No invented proof or pricing. Document launch limitations honestly.

## 11. Delivery and release

Deliver source, PRD, README, environment example and production build. Publish a private review version if Sites is available. Public client launch requires the company to supply/approve final logo, contact details, service claims, legal text and a working enquiry delivery endpoint. Do not change Site audience without user instruction. Future: CRM integration, spam protection, verified case studies, CMS, consented analytics and multilingual content after requirements are confirmed.

## 12. Success measurement (future, not installed)

Measure contact-page visits, completed enquiries, market/service interest and qualified consultation rate after consent-aware analytics is selected. Do not set fabricated baselines or targets. Performance aim: fast static pages, stable image layout, minimal client JavaScript and responsive controls. Validate real Core Web Vitals after deployment with traffic data.
