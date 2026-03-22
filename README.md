# Happy Ending Authors

A California Boho Malibu-inspired literary website for the Happy Ending Authors community — a warm, sun-drenched home for romance authors and readers based in the Outer Banks, NC.

## 🌊 Live Site
**[https://hollywood017.github.io/happy-ending-authors/](https://hollywood017.github.io/happy-ending-authors/)**

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
├── .gitignore
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
- Subheadings / Italic: `Cormorant Garamond` (Google Fonts)

## 📱 Responsive Breakpoints
| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Full two-column hero, side-by-side layouts, 4-column book grid |
| Tablet (≤1024px) | Single-column hero, 2-column books & authors, stacked sections |
| Mobile (≤640px) | Hamburger nav drawer, stacked CTAs, single-column grids |
| Small (≤380px) | Reduced font sizes, single-column book grid |

## 🚀 Deploying Updates

The site is deployed via **GitHub Pages** from the `main` branch root.

To push changes:
```bash
cd C:\Users\PC\ClaudeProjects\happy-ending-authors
git add .
git commit -m "Your commit message here"
git push origin main
```

GitHub Pages auto-redeploys within ~60 seconds. Check status at:
**[https://github.com/hollywood017/happy-ending-authors/actions](https://github.com/hollywood017/happy-ending-authors/actions)**

## 🌐 Custom Domain (coming soon)
Once you have your domain ready:
1. Go to your repo → **Settings** → **Pages** → enter your custom domain
2. Add a `CNAME` file to this repo containing just your domain (e.g., `happyendingauthors.com`)
3. Update your DNS registrar with the following GitHub A records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
4. Allow up to 24 hours for DNS to propagate

## 🔮 Roadmap — Phase 2 (Full Functionality)
When approved, the following will be built out:

- [ ] Backend / database (author profiles, books, blog posts)
- [ ] User authentication (member accounts, login/signup)
- [ ] Working book club & community features
- [ ] Author submission & profile management
- [ ] Email list integration (newsletter signup)
- [ ] Blog / journal CMS
- [ ] Events calendar
- [ ] Search functionality
- [ ] E-commerce / book store

## ✏️ Updating Content
| What | Where |
|---|---|
| Text & page structure | `index.html` |
| Colors, fonts, spacing | `assets/css/styles.css` (CSS variables at top) |
| Animations & interactions | `assets/js/main.js` |
| Images | `assets/images/` → reference in `index.html` |

## 👩‍💻 Tech Stack (Phase 1 — Frontend)
- Pure HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Playfair Display, EB Garamond, Cormorant Garamond)
- SVG illustrations (hand-coded, no external dependencies)
- Hosted on GitHub Pages (free)
