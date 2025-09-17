# Club Analytics (Scouting-stats style)

A clean Next.js + Tailwind project inspired by scoutingstats.ai, tailored for your club.

## 1) Prereqs
- Node.js 18+
- Git
- (Optional) Vercel CLI (`npm i -g vercel`)

## 2) Install & Run
```bash
npm install
npm run dev
# open http://localhost:3000
```

## 3) Project Structure
```
app/                # App Router pages
  page.tsx          # Home
  athletes/         # Directory + profiles
  compare/          # Comparison tool
  analytics/        # Charts
components/         # UI building blocks
data/athletes.json  # Your athlete data
lib/data.ts         # Data helpers/types
app/globals.css     # Tailwind styles + tokens
tailwind.config.ts  # Theme colors (primary/accent)
```
Edit theme colors in `tailwind.config.ts` (primary maroon, accent teal).

## 4) Add Players / Stats
- Edit `data/athletes.json`
- Each athlete has `metrics` (0–100) used by radar & bar charts
- Add images in `/public/images/...` and set `image` path

## 5) Deploy to Vercel (GitHub flow)
1. Create a **new GitHub repo** (do not reuse the old one).
2. Commit all files and push:
   ```bash
   git init
   git add .
   git commit -m "initial"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```
3. On **vercel.com** → **New Project** → Import your repo.
4. Framework: Next.js (auto). Root directory: the repo root (where `package.json` is).
5. Click **Deploy**.

### Update after editing code
- Commit & push to `main`; Vercel re-deploys automatically.
- If you see an **older version**, ensure:
  - You're pushing to the same repo branch Vercel is connected to.
  - The project root in Vercel is correct.
  - Clear cache by triggering **Redeploy** in Vercel (Project → Deployments → Redeploy).

## 6) Local Production Build
```bash
npm run build
npm start
```

## 7) Common Issues
- **Tailwind PostCSS plugin error**: already fixed by using `@tailwindcss/postcss` in `postcss.config.mjs`.
- **Images not showing**: add real files under `/public/images` or switch `<div>` placeholder to `next/image` once photos are ready.
- **TypeScript errors**: this template is strict but minimal; if you add new components, type them or change `strict` in `tsconfig.json`.
