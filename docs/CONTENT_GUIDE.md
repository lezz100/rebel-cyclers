# Content Guide — Rebel Cyclers

## Placeholder policy

Any content that is not confirmed club fact must be clearly marked as a placeholder.

- Placeholder text: write `"Placeholder — replace with [specific thing] once [approved/supplied]."`
- Placeholder images: use solid-colour rectangles or cycling stock images clearly named `placeholder-*.jpg`.
- Do **not** invent club names, dates, race results, statistics, testimonials, or member biographies.

## Verified content only

The following must never be published unless explicitly confirmed:
- Founding date and history
- Member names, roles, and biographies
- Race results and competitive achievements
- Specific distance records
- Testimonials and quotes

## Replacing placeholders

To replace a placeholder image:
1. Drop the real image into the correct `public/images/` subfolder.
2. Update the `src` field in the relevant `src/data/*.ts` file.
3. Update the `alt` text to describe the real image.

To add real member profiles:
1. Get name, role, bio, and photograph approved by the member.
2. Add an entry to `src/data/members.ts` — remove the placeholder entry.
3. Place the photograph in `public/images/members/`.

## Image specifications

| Location | Recommended size | Format |
|----------|-----------------|--------|
| Hero | 1920 × 1080 | JPEG / WebP |
| Ride card | 800 × 500 | JPEG / WebP |
| Member portrait | 400 × 400 | JPEG / WebP |
| Gallery | 1200 × 800 | JPEG / WebP |

Use `next/image` for all images. Set `width`, `height`, and meaningful `alt` text on every image.
