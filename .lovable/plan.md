# Qurat-Al-Ain Bashar Foundation — Build Plan

A premium, editorial, women-led NGO site across 7 routes. All copy will be embedded **verbatim** from the brief. No paraphrasing, no filler.

## Design System

- **Palette (light, warm editorial):**
  - Background: warm ivory `oklch(0.98 0.012 85)`
  - Foreground/ink: deep charcoal `oklch(0.20 0.02 40)`
  - Primary accent: terracotta `oklch(0.62 0.16 40)`
  - Secondary accent: amber gold `oklch(0.75 0.13 75)`
  - Muted cream: `oklch(0.94 0.02 80)`
- **Typography:** Fraunces (editorial serif) for headings + Inter for body, loaded via `<link>` in `__root.tsx`. Generous tracking on display, tight leading on body.
- **Motion:** Framer Motion (already fine in this stack) — fade-up on scroll, subtle parallax on hero images, no gimmicks. Consistent 500ms ease-out.
- **Chrome:** Sticky nav — transparent over hero, glass (backdrop-blur + border) once scrolled. Soft rounded-2xl cards, subtle shadows.

## Assets

- **Logo:** Import `user-uploads://logo.png` via `lovable-assets create`, then use `imagegen--edit_image` (or transparent regen) to strip the white background → save as `src/assets/logo.png` for use in nav/footer.
- **Hero + section imagery:** Generate warm, cinematic photos with `imagegen` (art studio, women athletes in motion, community volunteering, editorial portraits). Save under `src/assets/`.

## Routes (TanStack file-based, each with own `head()` meta)

```
src/routes/
  __root.tsx        → shared nav + footer + fonts + global meta
  index.tsx         → Home (hero only, per brief)
  about.tsx         → About + Founder's letter
  leadership.tsx    → Women's Leadership
  model.tsx         → Our Model (Art / Athleticism / Altruism)
  get-involved.tsx  → Get Involved + join roles + Application Form button
  gallery.tsx       → Our Work / Gallery (17 talent categories as cards)
  contact.tsx       → Contact form + socials
```

Nav order matches brief: Home · About · Women's Leadership · Our Model · Get Involved · Our Work / Gallery · Contact.

## Page-by-page structure (content unchanged)

1. **Home** — Full-bleed hero image (Bashar Art Houz vibe), site title `Qurat-Al-Ain Bashar Foundation — The art of giving` above, sub-nav `Home · About · Studio · Cafe · Gallery · Contact`, social icons top-right, overlay text exactly as given. Nothing else.
2. **About** — Heading + all paragraphs verbatim, ending with a distinct letter-style Founder section (cream background, serif, pull-quote for *"I did not establish this organization because I saw limitations. I founded it because I saw possibilities."*), signed `Shifa Sultana, Founder`.
3. **Women's Leadership** — Heading, sub-heading, all paragraphs verbatim. Closing full-width banner: *Built by Women. Led by Women. Serving Humanity.*
4. **Our Model** — Heading + sub-heading + intro verbatim. Three alternating full-width sections (Art / Athleticism / Altruism) each with own accent tint; every bullet/paragraph preserved. Closing line + CTA button linking to the (future) Art Houz section on Home.
5. **Get Involved** — Intro paragraphs verbatim, 8 role cards (Artist, Athlete, Altruist, Educator, Creative Thinker, Volunteer, Mentor, Partner), `Application Form` button (placeholder link).
6. **Our Work / Gallery** — Heading, "We have" intro, 17 talent categories as image-placeholder cards in a responsive grid (masonry-ish).
7. **Contact** — Heading, contact form (Name, Email, Subject, Message — non-functional submit, toast confirmation), social icons, placeholder block for address/email/phone.

## Shared

- **Footer:** org name + tagline, nav links, social icons — consistent across all pages.
- **SEO:** Each route sets its own `title`, `description`, `og:title`, `og:description`. Root sets defaults + favicon + fonts. `og:image` only on leaves where a hero exists.
- **Accessibility:** Semantic h1/h2 hierarchy, alt text on all images, WCAG AA contrast on ivory/charcoal/terracotta.

## Technical notes

- Tailwind v4 tokens in `src/styles.css` under `@theme inline` + `:root` (oklch).
- Fonts loaded via `<link>` in `__root.tsx` head (not `@import`).
- No backend, no auth, no DB — pure frontend/presentation.
- Contact form is client-only (no submission wiring) unless you later want Lovable Cloud.

## Out of scope (ask if you want them)

- Working contact form submission / email delivery
- Real Application Form (currently a placeholder button)
- CMS for gallery images
