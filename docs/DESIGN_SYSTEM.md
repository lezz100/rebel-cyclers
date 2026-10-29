# Design System — Rebel Cyclers

## Colour tokens

| Token | Value | Use |
|-------|-------|-----|
| Black | `#0B0B0B` | Page background |
| Charcoal | `#161616` | Cards, surfaces, nav background |
| Orange | `#FF6B00` | Accent — CTAs, icons, highlights only |
| White | `#FFFFFF` | Headings, primary text |
| Gray | `#F5F5F5` | Reserved for light-mode surfaces |
| Gray Mid | `#888888` | Muted / secondary text |

Orange is an **accent**, not a background fill. Do not use it as a section background or for large blocks of text.

## Typography

- **Headings:** Space Grotesk, 700, letter-spacing −0.02em
- **Body:** Inter, 400/500
- Scale: `text-sm` (14px) body, `text-5xl`–`text-8xl` hero headings

## Spacing

- Section vertical padding: `py-24` (desktop), `py-16` (mobile)
- Page max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card inner padding: `p-6`

## Components

### Button — Primary
```html
px-6 py-3 bg-[#FF6B00] text-white font-semibold rounded hover:bg-[#e55f00] transition-colors
```

### Button — Outline
```html
px-6 py-3 border border-white/20 text-white font-semibold rounded hover:border-white/50 hover:bg-white/5 transition-colors
```

### Card
```html
bg-[#161616] rounded border border-white/5 p-6
```

### Badge / Label
```html
text-[#FF6B00] text-xs font-semibold uppercase tracking-wider
```

## Motion

- Import from `motion/react`.
- Use `initial`, `animate`, `whileInView` for entrance animations.
- Always guard with `useReducedMotion()` from `motion/react`.
- Duration: 0.4–0.6s, ease: `easeOut`.
- No `whileHover` scale on text or nav links — only on cards and images.

## Responsive breakpoints

Tailwind defaults: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.

- Mobile: single column, full-width, 16px side gutter
- Tablet (`md`): 2 columns where appropriate
- Desktop (`lg`+): full layouts, sticky nav, sidebars
