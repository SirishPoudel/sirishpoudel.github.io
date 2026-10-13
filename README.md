# Sirish Poudel — Portfolio

Personal portfolio built with Next.js (App Router, static export) and deployed to GitHub Pages.

**Live:** https://sirishpoudel.github.io

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

- Content: `src/data/site.ts`
- Styles: `src/app/globals.css`
- Profile photo: `public/images/profile.jpg`

Every push to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.
