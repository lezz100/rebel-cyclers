# Implementation Plan — Rebel Cyclers

## Status key
- ✅ Complete
- 🚧 In progress
- ⬜ Not started

---

## Milestone 01 — Foundation and project setup ✅

- ✅ Next.js 16 App Router + TypeScript + Tailwind CSS v4 scaffolded
- ✅ Motion for React installed
- ✅ `src/` directory structure created
- ✅ Global styles with design tokens (globals.css)
- ✅ Space Grotesk + Inter fonts configured
- ✅ All seven route pages created (stubs)
- ✅ Navbar (sticky, mobile menu) and Footer created
- ✅ Root layout with Navbar + Footer
- ✅ Typed data files: rides, members, gallery, achievements
- ✅ TypeScript types (src/types/index.ts)
- ✅ Documentation: AGENTS.md, CLAUDE.md, docs/ files
- ✅ tsconfig path alias `@/*` → `./src/*`

---

## Milestone 02 — Global shell and homepage ✅

- ✅ Homepage hero with gradient/SVG placeholder (real photography can replace once supplied)
- ✅ Club introduction section (`ClubIntroSection` — three pillars)
- ✅ Featured rides preview (`FeaturedRidesSection` + `RideCard`)
- ✅ Community highlights (`CommunitySection`)
- ✅ Join-us CTA section (`JoinSection`)
- ✅ Footer links all working
- ✅ Mobile nav tested
- ✅ Visual direction established — dark, orange accent, Space Grotesk headings

---

## Milestone 03 — Core content pages ✅

- ✅ About page — story, mission, values, new-rider guide
- ✅ Rides page — full RideCard components with difficulty filter (`RidesGrid`)
- ✅ Ride detail pages — stats sidebar, elevation profile, What to bring, enquiry CTA
- ✅ Members page — MemberCard components, placeholder notice
- ✅ Achievements page — vertical timeline with category badges
- ✅ Contact page — client-validated mailto form, FAQ, Suspense-wrapped
- ✅ Ride enquiry action — detail page links `/contact?ride=slug`, form reads param via useSearchParams

---

## Milestone 04 — Gallery and visual storytelling ⬜

- ⬜ Gallery page — category filters
- ⬜ Masonry-style image layout
- ⬜ Fullscreen lightbox with prev/next + keyboard
- ⬜ Achievements timeline
- ⬜ Testimonial layout (when verified content available)
- ⬜ Image optimization and lazy loading

---

## Milestone 05 — Motion and interaction polish ⬜

- ⬜ Entrance animations (Motion for React)
- ⬜ Hover states on cards and images
- ⬜ Counter animations on stats
- ⬜ `prefers-reduced-motion` respected everywhere
- ⬜ Focus indicators checked
- ⬜ Form validation UX
- ⬜ Empty state handling

---

## Milestone 06 — Testing and release preparation ⬜

- ⬜ `pnpm build` passes
- ⬜ TypeScript strict check passes
- ⬜ All routes reachable through navigation
- ⬜ Mobile, tablet, desktop tested
- ⬜ Accessibility audit (contrast, keyboard, screen reader)
- ⬜ Metadata and Open Graph tags
- ⬜ Deployment documentation
