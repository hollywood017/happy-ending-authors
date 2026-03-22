# Happy Ending Authors

A California Boho Malibu-inspired literary website for the Happy Ending Authors community — a warm, sun-drenched home for romance authors and readers.

## 🌊 Live Site
Deployed via GitHub Pages: [https://YOUR-USERNAME.github.io/happy-ending-authors](https://YOUR-USERNAME.github.io/happy-ending-authors)

## 📁 Project Structure

```
happy-ending-authors/
├── index.html              ← Main HTML page
├── assets/
│   ├── css/
│   │   └── styles.css      ← All styles & theme variables
│   ├── js/
│   │   └── main.js         ← Scroll animations & interactions
│   └── images/             ← Add photos here when ready
└── README.md
```

## 🎨 Design System

**Color Palette**
- `--cream` / `--ivory` / `--warm-white` — Base backgrounds
- `--sand` — Borders and dividers
- `--teal` / `--seafoam` / `--sky` — Ocean-inspired accents
- `--sage` / `--sage-light` — Botanical greens
- `--blush` / `--terracotta` — Warm call-to-action tones
- `--navy` — Deep contrast (nav, footer, quote section)
- `--gold` — Highlight accent

**Typography**
- Headings: `Playfair Display` (Google Fonts)
- Body: `EB Garamond` (Google Fonts)
- Subheadings/Italic: `Cormorant Garamond` (Google Fonts)

## 🚀 Deploying to GitHub Pages

1. Create a new GitHub repo named `happy-ending-authors`
2. Push this folder to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Happy Ending Authors website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/happy-ending-authors.git
   git push -u origin main
   ```
3. Go to your repo on GitHub → **Settings** → **Pages**
4. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`
5. Click **Save** — your site will be live in ~60 seconds at:
   `https://YOUR-USERNAME.github.io/happy-ending-authors`

## 🌐 Custom Domain (when ready)
Once you have your domain:
1. In GitHub Pages settings, enter your custom domain
2. Add a `CNAME` file to this repo containing just your domain name (e.g., `happyendingauthors.com`)
3. Update your DNS registrar with GitHub's nameservers or A records

## ✏️ Updating Content
- **Site name / copy** → edit `index.html`
- **Colors / fonts** → edit `assets/css/styles.css` (CSS variables at the top)
- **Animations / behavior** → edit `assets/js/main.js`
- **Images** → drop photos into `assets/images/` and reference them in `index.html`
