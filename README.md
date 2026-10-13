# portfolio

My personal site, live at [pranayhaldiya.dev](https://pranayhaldiya.dev): who I am, where I've worked, and what I've built.

- Next.js 15 (App Router), Tailwind CSS 4, TypeScript.
- Every page is static. The GitHub graph refetches once a day and is skipped if the API is down.
- All content lives in `src/config/site.ts`, and tech names and icons in `src/config/tech.tsx`. The resume is `public/resume.pdf`.

## Run it

```bash
bun install
bun dev          # http://localhost:3000
bun run build
```

`NEXT_PUBLIC_URL` is set to `https://pranayhaldiya.dev` in Vercel's production environment, so link previews and the sitemap use the custom domain. Without it, the site falls back to the project's production domain.

## Credits

- The design started from [ramxcodes/sleek-portfolio](https://github.com/ramxcodes/sleek-portfolio) (MIT). I cut it down to one page plus a resume page and replaced its GitHub graph API, which stopped working when Deno Deploy Classic shut down.
- Tech icons come from [Simple Icons](https://simpleicons.org) (CC0). The OpenAI and Codex logos come from [@lobehub/icons](https://github.com/lobehub/lobe-icons) (MIT). Brand logos belong to their owners.
- The dog that chases your cursor is [oneko.js](https://github.com/adryd325/oneko.js) (MIT) with the dog sprite from [spicetify-oneko](https://github.com/kyrie25/spicetify-oneko) (MIT). It stays off on touch screens and when reduced motion is on.
