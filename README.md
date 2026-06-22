# Patchwork Design System — Reference

A browsable reference for Cricut's **Patchwork** design system: tokens, typography,
color, iconography, and component sets (Desktop / iOS / Android / Mobile), with a
light/dark switch.

Open `index.html` to view it.

---

## Publish on GitHub Pages — step by step

> The page loads React from a CDN and loads its component bundles + icon data from
> the files in this repo. Because of that it must be **served over HTTP/HTTPS** — it
> will not work by double-clicking the file locally. GitHub Pages serves it over
> HTTPS, so everything works there.

### Option A — GitHub website (no command line)

1. Go to <https://github.com/new> and create a new **public** repository, e.g.
   `patchwork-reference`. Leave it empty (don't add a README from GitHub).
2. On the new repo page, click **uploading an existing file**.
3. Drag in **all** of these, keeping the folder structure intact:
   - `index.html`
   - `support.js`
   - `styles.css`
   - the entire `components/` folder
   - (optional) `Patchwork Reference.dc.html`
4. Click **Commit changes**.
5. Go to **Settings → Pages**.
6. Under **Build and deployment → Source**, choose **Deploy from a branch**.
7. Set the branch to **main** and the folder to **/ (root)**, then **Save**.
8. Wait ~1 minute. Refresh the Pages settings page — your live URL appears at the top:
   `https://<your-username>.github.io/patchwork-reference/`
9. Open that URL. Done — share it with anyone.

### Option B — Command line (git)

```bash
# from inside this project folder
git init
git add .
git commit -m "Patchwork design system reference"
git branch -M main
git remote add origin https://github.com/<your-username>/patchwork-reference.git
git push -u origin main
```

Then do **steps 5–9** from Option A to turn on Pages.

---

## What's in here

| Path | What it is |
|------|------------|
| `index.html` | The reference page (entry point) |
| `support.js` | Runtime that renders the page |
| `styles.css` | Global styles + font/token imports |
| `components/fig-tokens.css` | 285 design tokens (light + dark modes) |
| `components/patch-typography.css` | Patchwork type scale |
| `components/icons/` | 368 icon glyphs (`icon-data.js`) |
| `components/{action,input,selection,navigation,communication,containment}/` | Component bundles |

## Notes

- Fonts **Graphik** and **Euclid Circular B** are licensed and not bundled; the page
  falls back to a system sans stack. To show the real faces, host the font files and
  add `@font-face` rules to `styles.css`.
- A custom domain can be set under **Settings → Pages → Custom domain**.
