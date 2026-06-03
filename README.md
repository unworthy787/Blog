# manas.life

A personal blog built with Next.js 15, Tailwind CSS, and Markdown.

## Stack

- **Framework**: Next.js 15 (App Router, static export ready)
- **Styling**: Tailwind CSS + custom CSS
- **Content**: Markdown files with frontmatter (`/posts/*.md`)
- **Deployment**: Vercel (recommended)

## Running locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Writing a new post

Create a `.md` file in `/posts/`:

```md
---
title: "Your Post Title"
subtitle: "A short subtitle"
date: "2025-07-01"
category: "thoughts"        # life | thoughts | building | general
tags: ["tag1", "tag2"]
excerpt: "One paragraph description shown in post cards."
---

Your post content here, in Markdown...
```

The post will automatically appear at `/writing/your-filename-as-slug`.

## Deployment on Vercel (5 minutes)

### Step 1 — Push to GitHub

```bash
cd manas-life
git init
git add .
git commit -m "Initial blog"
# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/manas-life.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up / Log in
2. Click **"Add New → Project"**
3. Import your `manas-life` GitHub repo
4. Leave all defaults → click **Deploy**
5. Done! You get a free `*.vercel.app` URL in ~60 seconds

### Step 3 — Connect your domain (manas.life)

1. In Vercel: Project → **Settings → Domains**
2. Add `manas.life` and `www.manas.life`
3. Vercel gives you DNS records to add at your registrar:
   - `A` record: `@` → `76.76.21.21`
   - `CNAME` record: `www` → `cname.vercel-dns.com`
4. Wait ~5 min for DNS. Vercel auto-provisions SSL.

### Publishing new posts

Just push a new `.md` file to GitHub — Vercel auto-redeploys in ~30 seconds.

## Customization

- **Your name/bio**: Edit `app/about/page.tsx`
- **Nav links**: Edit `components/Nav.tsx`
- **Colors/fonts**: Edit `tailwind.config.ts` and `app/globals.css`
- **Social links**: Edit `components/Footer.tsx`
