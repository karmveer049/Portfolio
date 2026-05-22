# Karmveer Kumar — Portfolio

A warm, cinematic, library-themed personal portfolio website for Karmveer Kumar — Full-Stack Developer.

**Design direction:** The Warm Library — dark walnut + amber palette, DM Serif Display + Plus Jakarta Sans typography, illustrated motifs, scroll-triggered animations.

## Tech Stack

- **React 18** + Vite
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Google Fonts** — DM Serif Display, Plus Jakarta Sans, JetBrains Mono

## Getting Started

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Framework: **Vite** (auto-detected)
5. Click Deploy — done.

## Deploy to GitHub Pages

Add to `vite.config.js`:
```js
base: '/your-repo-name/',
```

Then:
```bash
npm run build
# Push the dist/ folder to gh-pages branch
```

## Project Structure

```
src/
  components/
    Navbar.jsx       # Fixed nav with mobile menu
    Hero.jsx         # Cinematic hero with ambient particles
    About.jsx        # About + stats + bookshelf illustration
    Skills.jsx       # Chapter-style skill cards + terminal
    Projects.jsx     # Project cards with live links
    Experience.jsx   # Work + education timeline
    Contact.jsx      # Contact cards + what I'm looking for
    Footer.jsx       # Footer with links
  App.jsx
  main.jsx
  index.css          # Tailwind + custom utilities
```

## Customization

- Colors: edit CSS variables in `index.css` and `tailwind.config.js`
- Fonts: swap Google Fonts import in `index.html`
- Content: all content lives in each component file — no external CMS
- Resume: update the email link in `Contact.jsx`
