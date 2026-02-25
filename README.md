# Website (GitHub Pages Ready)

This repository is configured as a static site for GitHub Pages.

## Files
- `index.html` - main site
- `index-tufts-blue.html` - alternate Tufts-blue version
- `styles.css` - main stylesheet
- `styles-tufts-blue.css` - Tufts-blue stylesheet
- `script.js` - small JS for footer year
- `papers/` - local PDF files
- `.nojekyll` - ensures Pages serves files directly

## Publish on GitHub Pages
1. Push this repo to GitHub.
2. In GitHub: `Settings` -> `Pages`.
3. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
4. Save and wait for deploy.

Your site will appear at:
- `https://<your-username>.github.io/<repo-name>/`

## Optional
- To make the blue version primary, replace `index.html` with `index-tufts-blue.html` content.
- For a custom domain, add a `CNAME` file with your domain name.
