# Deployment Request: llms.txt File for AI Discoverability

**Date:** January 28, 2026
**Requested by:** Marketing/Growth Team
**Site:** b1.church
**Priority:** Medium (Marketing Initiative)

---

## What We're Deploying

A single text file: `llms.txt`

**File Location:** `/public/llms.txt` → deploys to `https://b1.church/llms.txt`
**File Size:** 4.3 KB
**File Type:** Plain text documentation file

---

## What is llms.txt?

`llms.txt` is an **emerging web standard** (similar to robots.txt or sitemap.xml) that helps AI systems like ChatGPT, Claude, Perplexity, and Google Gemini understand what your website offers.

**Think of it as:**
- A "README for AI" that explains your product/service
- Structured documentation that AI search engines can read
- Similar to schema.org markup but specifically for LLM-based search

**Standard:** https://llmstxt.org/

---

## Why We Need This

### The Problem
When people ask AI assistants questions like:
- "What's a free Planning Center alternative?"
- "Best free church giving platform?"

B1.church often **doesn't appear** in AI-generated answers, even though we have exactly what they're looking for.

### The Solution
The llms.txt file tells AI systems:
- B1.church is 100% free (no hidden fees)
- We offer church management, giving, mobile app, website builder
- How we compare to Planning Center, Tithe.ly, Breeze, etc.
- Why we're free (nonprofit mission)

### Expected Impact
- Improve visibility in AI-powered search results
- Better positioning against competitors in AI recommendations
- Help AI systems accurately describe B1.church features

---

## What's in the File?

The file contains:
- Quick facts (100% free, iOS/Android/Web)
- Feature descriptions (mobile app, giving, check-in, website builder)
- **Competitor comparisons** (B1 vs Planning Center, Pushpay, Tithe.ly, Breeze)
- Links to our other products (FreeShow, Lessons.church)
- Contact information

**No marketing fluff** - just factual information structured for AI consumption.

---

## Testing & Validation

### Current Status
✅ File created: December 24, 2025
✅ File in build output: `dist/llms.txt` (confirmed Jan 28, 2026)
❌ File not live on b1.church (returns 404)
❌ AI systems cannot access it

### Baseline Test Results
We ran a baseline test on December 26, 2025 and follow-up on January 28, 2026:
- **No improvement** in AI visibility (expected - file isn't deployed yet)
- B1.church appears in 4/6 test queries (67%)
- **Gap:** Not appearing in "Planning Center alternative" or "free giving" searches

### After Deployment
We'll test again in **30 days** (February 28, 2026) using the same 6 queries to measure impact.

---

## Deployment Steps

**Current build already includes llms.txt.** Just need to:

```bash
cd B1.church
npm run deploy-prod
```

This will:
1. Rebuild the site (`vite build`)
2. Sync to S3: `s3://b1-church-web`
3. Invalidate CloudFront cache (distribution ID: E1ZX3V10U41G91)

**Expected downtime:** None
**Risk level:** Very low (single static text file)
**Rollback:** Can delete the file from S3 if needed

---

## Technical Details

**File permissions:** Public read (same as all other public assets)
**Cache headers:** Standard (same as other static files)
**Security:** No sensitive data, no executable code
**SEO impact:** Positive (provides structured data for AI crawlers)

---

## Timeline

- ✅ **Dec 24, 2025:** llms.txt created and added to `/public`
- ✅ **Dec 26, 2025:** Baseline visibility test conducted
- ✅ **Jan 28, 2026:** Follow-up test - confirmed file not deployed
- 🔲 **Next:** Deploy to production
- 🔲 **Feb 28, 2026:** Measure impact with follow-up test

---

## Questions?

**Why now?**
We added this a month ago but it never went live. We're losing potential visibility during a critical growth period.

**Is this proven?**
The llms.txt standard is new (2024), adopted by companies like Anthropic, Cloudflare, and Vercel. Early adopters report improved AI search visibility.

**What if it doesn't work?**
Zero downside. At worst, it has no effect. Best case, it improves our organic discovery through AI search.

**Will this affect regular Google SEO?**
No impact (positive or negative). This is specifically for AI/LLM systems, not traditional search engines.

---

## Approval Request

Please approve deployment of `llms.txt` to b1.church production.

**Deployment can be done by:** DevOps/Infrastructure team
**Requested completion:** Within next week
**Follow-up testing:** February 28, 2026

---

**Contact:** [Your name/email]
**Documentation:** See `/Test LLM/baseline-2025-12-26.md` and `/Test LLM/test-results-2026-01-28.md` for test data
