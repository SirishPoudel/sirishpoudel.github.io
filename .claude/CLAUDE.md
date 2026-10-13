# Personal portfolio (Next.js 15, App Router, TypeScript, plain CSS)

- All personal content lives in `src/data/site.ts`; components only render it.
- Styling: `src/app/globals.css` (dark theme, orange accent, tokens on `:root`). No Tailwind.
- Profile photo: `public/images/profile.jpg`.
- SEO: metadata + JSON-LD in `src/app/layout.tsx`, `sitemap.ts`, `robots.ts`, `manifest.ts`; share image is `public/og.png`.
- Static export (`output: "export"`), deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to main.
- Site URL comes from `NEXT_PUBLIC_SITE_URL` (live: https://sirishpoudel.github.io).
