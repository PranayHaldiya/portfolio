# portfolio

My personal site: who I am, where I've worked, and what I've built.

- Next.js 15 (App Router), Tailwind CSS 4, TypeScript.
- Every page is static. The GitHub graph refetches once a day and is skipped if the API is down.
- All content lives in `src/config/site.ts`. The resume is `public/resume.pdf`.

## Run it

```bash
bun install
bun dev          # http://localhost:3000
bun run build
```

Set `NEXT_PUBLIC_URL` to the production URL so link previews use the right domain. On Vercel it falls back to the project's production domain.

## Credits

The design started from [ramxcodes/sleek-portfolio](https://github.com/ramxcodes/sleek-portfolio) (MIT). I cut it down to one page plus a resume page and replaced its GitHub graph API, which stopped working when Deno Deploy Classic shut down.
