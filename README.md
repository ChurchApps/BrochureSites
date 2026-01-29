# BrochureSites
Contains multiple website projects for simple brochure sites that are typically one page.

## Common Deployment Issues & How to Avoid Them

### CSS @import Ordering (December 24, 2025 Production Issue)

**What happened:**
When deploying the AI/LLM discoverability improvements (commit 41e16ca), the build caused production errors due to incorrect CSS import ordering in `src/index.css`.

**The Problem:**
The `@import` statement for Google Fonts was placed AFTER `@tailwind` directives:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'); /* ❌ WRONG */
```

**Why it breaks:**
According to CSS specifications, `@import` statements MUST come before all other CSS rules (except `@charset` or empty `@layer`). Violating this causes:
- Build failures in production environments with strict CSS parsers
- Font loading issues
- Vite build warnings that may escalate to errors in CI/CD

**The Fix:**
Always place `@import` statements at the very top of CSS files:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'); /* ✅ CORRECT */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Prevention:**
- Before committing CSS changes, run `npm run build` locally and check for warnings
- If you see `[vite:css] @import must precede all other statements`, fix it before pushing
- Test the production build, not just the dev server (`npm run dev`)
