# ChurchApps.org - Warm Redesign

Modern, warm, and welcoming HTML blocks for the new ChurchApps.org website.

## What's Different (Warm Version)

✅ **Warmer, friendlier design** - Less corporate, more community-focused
✅ **Live church counter** - Real-time stats from FreeShow App (14,764+ churches)
✅ **Accurate stats only** - No made-up numbers, using "billions" for industry spending
✅ **Less words** - Concise, impactful messaging
✅ **Rounded corners everywhere** - Softer, more approachable aesthetic
✅ **Softer colors** - Warmer blues, inviting oranges
✅ **Auto-updating stats** - Pulls live data from your analytics API

---

## Files Created

### Core Blocks (Use these!)
```
01-hero-WARM.html           → Hero with live counter + dual CTAs
02-apps-WARM.html           → 4 app showcase cards
03-mission-impact-WARM.html → Mission + impact stats (combined)
04-partner-WARM.html        → How it's free + partner CTAs
05-footer-WARM.html         → Footer with links
```

### Additional Files
```
live-church-counter.html    → Standalone live counter (already in hero)
README-WARM.md             → This file
```

---

## Key Features

### 1. Live Church Counter
- Pulls FreeShow App 7-day users from your analytics API
- Shows **14,764+ Churches Served**
- Auto-updates every 5 minutes
- Animates when number increases
- Falls back gracefully if API fails

### 2. Accurate Messaging
- **"Billions"** - Churches spend billions annually (safe, accurate)
- **$1,500** - Average savings per church (your verified data)
- **$5,000** - Value received (your verified data)
- **No fake stats** - Everything is honest and defensible

### 3. Warm Design Elements
- Rounded buttons (50px border-radius)
- Softer shadows (less harsh)
- Glassmorphism effects
- Warm color gradients
- Friendly typography
- Approachable spacing

---

## Image Prompts Needed

Replace placeholder sections with these images:

### Hero Background (Optional) - 1920x1080
**Prompt:** "Diverse group of church volunteers and staff collaborating together in a modern church setting, warm natural lighting, people smiling and working on laptops, authentic candid moment, inviting and community-focused atmosphere, soft focus background"

**Where to add:** Uncomment the background image div in `01-hero-WARM.html` and add your URL

### Other Recommended Images (Future)
- Church community gathering (1200x800)
- Technology serving people (800x600)
- Supporter church logos (replace text placeholders in partner section)

---

## How to Use

### In B1Admin Website Builder

1. **Import Each Block:**
   - Go to Site → Blocks
   - Click "Add Block"
   - Choose "Section(s)" as block type
   - Copy entire content from each file
   - Paste and save

2. **Add to Your Page:**
   - Go to your ChurchApps.org page in the builder
   - Drag blocks in this order:
     1. Hero
     2. Apps
     3. Mission + Impact
     4. Partner
     5. Footer

3. **The Counter Works Automatically!**
   - It fetches from: `https://analytics-dashboard-seven-ebon.vercel.app/api/stats`
   - Updates every 5 minutes
   - No configuration needed

---

## Customization

### Change Colors

**Primary Blue:** Search for `#1976d2` and replace
**Primary Orange:** Search for `#FF6B35` and replace
**Dark Navy:** Search for `#2D3E50` and replace

### Adjust Spacing

- Section padding: `padding: 100px 20px;` (top/bottom left/right)
- Card gaps: `gap: 28px;`
- Internal padding: `padding: 36px;`

### Add Your Images

1. Upload images to B1Admin file manager
2. Get the URLs
3. Replace placeholder divs or add `<img>` tags:
```html
<img src="YOUR_IMAGE_URL" alt="Description" style="width: 100%; border-radius: 20px;">
```

---

## Stats Summary

**What We're Showing:**
- **14,764+ Churches** - FreeShow App 7-day users (live from API)
- **Billions** - Industry spending (safe, accurate estimate)
- **$1,500** - Average church savings (your data)
- **$5,000** - Value received (your data)
- **100% Free** - Always true
- **4 Apps** - B1, Lessons, FreeShow, FreePlay

---

## Browser Support

✅ All modern browsers (Chrome, Firefox, Safari, Edge)
✅ Mobile responsive
✅ Tablets and desktops

---

## Need Help?

- **Live counter not working?** Check browser console for API errors
- **Stats need updating?** They auto-update from your analytics
- **Want different colors?** Search and replace hex codes
- **Need images?** Use the prompts above or let me know sizes

---

## What's Next?

1. Import blocks into B1Admin
2. Get hero background image created
3. Replace supporter logo placeholders with actual logos
4. Test on mobile
5. Launch!

---

**Built with ❤️ By The Church, For The Church**
