# ChurchApps Brochure Site

This directory contains the HTML blocks for the ChurchApps brochure website, built using the **B1Admin Website Builder**.

## 📁 Directory Structure

```
ChurchApps/
├── HomePage/           # Homepage sections
│   ├── section-1-hero.html
│   ├── section-2-apps.html
│   ├── section-3-mission-impact.html
│   ├── section-4-supporters.html
│   └── section-5-footer.html
│
└── PartnerPage/        # Partner page sections
    ├── section-1-hero.html
    ├── section-2-impact.html
    ├── section-3-give-top.html
    └── section-3-give-bottom.html
```

---

## 🏠 HomePage

The homepage consists of **5 sections** that should be added as HTML blocks in B1Admin in this order:

### 1. **Hero Section** (`section-1-hero.html`)
- Full-width hero with gradient background
- Animated gradient text ("Free" and "Powerful")
- Three CTA buttons (Get Started, Browse Apps, Partner)
- Impact stats cards with glassmorphism effect
- **Features:**
  - Background image with overlay
  - Shimmer animations on text
  - Mobile responsive

### 2. **Apps Overview** (`section-2-apps.html`)
- Four main apps displayed with logos and descriptions
- Each app row shows: Logo (180px) + Description + CTA button
- **Apps included:**
  - B1 Church (Complete church management)
  - Lessons.church (Curriculum & attendance)
  - FreeShow (Presentation software)
  - FreePlay (Games & countdowns)
- **Features:**
  - Hover effects on logos
  - Color-coded CTA buttons per app
  - Mobile responsive with stacked layout

### 3. **Mission & Impact** (`section-3-mission-impact.html`)
- Mission statement
- Embedded YouTube video (S0ul28VRWwU)
- "How Can This Be Free?" explanation
- Impact statistics (14,000+ churches, 100+ countries, $20M+ saved)
- Call to give back
- **Features:**
  - Responsive video embed
  - Gradient text highlights
  - Stats grid with animations

### 4. **Supporters** (`section-4-supporters.html`)
- Animated horizontal logo ticker showing 17 partner churches & organizations
- "Show All Supporters" button that opens a modal
- Modal displays supporters in two categories:
  - **Partner Organizations** (6): SignPresenter, Amazing Life, High Voltage, Rock Solid, A New Name, Ozark Christian College
  - **Partner Churches** (11): All supporting churches
- CTA section to partner with ChurchApps
- **Features:**
  - Infinite scrolling logo ticker
  - Pausable on hover
  - Modal popup with categorized supporters
  - Gray card backgrounds for logo visibility
  - Uniform card sizing (200px height)
  - Mobile responsive

### 5. **Footer** (`section-5-footer.html`)
- Logo and tagline
- Four column layout:
  - Our Apps (B1 Church, Lessons.church, FreeShow, FreePlay)
  - Resources (Developer Guide, Find an Ambassador, GitHub, Report an Issue, Community)
  - Support Us (Partner With Us, GitHub Sponsors, Join Our Slack, Volunteer)
- Social media links (GitHub, Facebook, Slack)
- Tax-exempt 501(c)(3) disclosure
- **Features:**
  - Link hover effects (cyan highlight)
  - Mobile responsive single-column layout

---

## 🤝 Partner Page

The partner page consists of **4 sections** (Section 3 is split into top/bottom):

### 1. **Hero Section** (`section-1-hero.html`)
- Matches homepage hero styling
- Dark gradient background with animated text
- Three CTAs: Give Financially, Code With Us, Pray With Us
- Impact stats: $1,500 saved per church, $5,000 value, 501(c)(3) status
- **Features:**
  - Animated gradient text on "frees churches" and "Kingdom work"
  - Glassmorphism stat cards
  - Scripture verse (Matthew 10:8)

### 2. **Impact Section** (`section-2-impact.html`)
- "Your Impact Multiplied" header
- Three impact cards showing partnership options:
  - **Give Financially**: $150/mo supports 100+ churches
  - **Code With Us**: 5-10 hrs/mo makes real impact
  - **Pray With Us**: 14,000+ churches need prayers
- Ambassador program callout banner
- **Features:**
  - Color-coded gradient cards (orange, blue, green)
  - Flexbox layout for uniform cards
  - Mobile responsive
  - Smaller ambassador banner at bottom

### 3. **Give Section** (TWO blocks)

#### 3a. **Top** (`section-3-give-top.html`)
- "Give to the Ministry" header
- Description and mailing address for checks
- **⚠️ IMPORTANT**: This is where you insert your donation form blocks in B1Admin

#### 3b. **Bottom** (`section-3-give-bottom.html`)
- "Or support us through:" section
- GitHub Sponsors link
- Closing section tags and mobile styles
- **⚠️ IMPORTANT**: This must come AFTER your donation blocks

**How to use in B1Admin:**
1. Add `section-3-give-top.html` as an HTML block
2. Add your donation form blocks (credit card, ACH, etc.)
3. Add `section-3-give-bottom.html` as an HTML block

---

## 🎨 Design System

### Colors
- **Primary Orange**: `#FF6B35` (CTAs, accents)
- **Primary Blue**: `#1976d2` (Code/Dev theme)
- **Primary Green**: `#10B981` (Pray theme)
- **Dark Gray**: `#2D3E50` (Headers, text)
- **Medium Gray**: `#5A6C7D` (Body text)
- **Light Gray**: `#F8FAFC` (Backgrounds)
- **Border Gray**: `#E8EDF2`
- **Modal Card Gray**: `#E5E7EB` (Supporter cards)

### Typography
- **Headings**: 800 weight, -0.01em to -0.02em letter spacing
- **Body**: 400-600 weight
- **Font sizes**: Responsive using `clamp()` for fluid scaling

### Effects
- **Gradients**: 135deg diagonal gradients
- **Hover**: `translateY()` lifts + shadow enhancement
- **Glassmorphism**: `backdrop-filter: blur()` with transparency
- **Animations**: Shimmer, fadeInUp, scroll (ticker)

---

## 📱 Mobile Responsive

All sections include mobile responsive styles with breakpoints at:
- **968px**: Tablet adjustments
- **768px**: Mobile layout changes (grid → single column)
- **480px**: Small mobile optimizations

### Key Mobile Changes:
- Font sizes reduce using `clamp()`
- Grids collapse to single column
- Padding reduces
- Logo ticker speeds up
- CTA buttons stack vertically

---

## 🔧 How to Use in B1Admin

### Step 1: Create the Pages
1. In B1Admin, create two pages:
   - **Homepage** (/)
   - **Partner** (/partner)

### Step 2: Add HTML Blocks

#### For Homepage:
1. Add HTML block → Paste contents of `HomePage/section-1-hero.html`
2. Add HTML block → Paste contents of `HomePage/section-2-apps.html`
3. Add HTML block → Paste contents of `HomePage/section-3-mission-impact.html`
4. Add HTML block → Paste contents of `HomePage/section-4-supporters.html`
5. Add HTML block → Paste contents of `HomePage/section-5-footer.html`

#### For Partner Page:
1. Add HTML block → Paste contents of `PartnerPage/section-1-hero.html`
2. Add HTML block → Paste contents of `PartnerPage/section-2-impact.html`
3. Add HTML block → Paste contents of `PartnerPage/section-3-give-top.html`
4. **Add your donation form blocks here** (credit card, ACH, etc.)
5. Add HTML block → Paste contents of `PartnerPage/section-3-give-bottom.html`

### Step 3: Verify Links
Make sure these external links work:
- App websites (b1.church, lessons.church, freeshow.app, freeplay.church)
- Developer resources (churchapps.org/dev, churchapps.org/ambassadors)
- Social media (GitHub, Facebook, Slack)
- Supporter websites (17 church/org links)
- GitHub Sponsors

---

## 🎯 Special Features

### Supporters Modal
- Located in `HomePage/section-4-supporters.html`
- Opens when user clicks "Show All Supporters"
- Displays 17 supporters in two categories
- All cards have uniform 200px height with centered logos
- Gray background (#E5E7EB) for white/black logo visibility
- Click outside modal or X button to close

### Ambassador Program
- Callout banner in `PartnerPage/section-2-impact.html`
- Links to https://churchapps.org/ambassadors
- Also in footer under Resources → "Find an Ambassador"

### YouTube Video
- Embedded in `HomePage/section-3-mission-impact.html`
- Video ID: S0ul28VRWwU
- Responsive 16:9 aspect ratio using padding-bottom technique

---

## 🔗 Important URLs

### Internal Links
- `/partner` - Partner page
- `#give` - Partner page give section
- `#pray` - Partner page pray section (if created)

### External Links
- https://b1.church
- https://lessons.church
- https://freeshow.app
- https://freeplay.church
- https://churchapps.org/dev
- https://churchapps.org/ambassadors
- https://github.com/sponsors/ChurchApps
- https://github.com/ChurchApps

---

## 📝 Maintenance Notes

### Updating Supporters
To add/remove supporters, edit `HomePage/section-4-supporters.html`:

1. **Logo Ticker** (lines ~75-110): Add logo to BOTH sets (first set and duplicate set)
2. **Modal Organizations** (lines ~210-310): Add card to organizations grid
3. **Modal Churches** (lines ~325-550): Add card to churches grid

### Updating Impact Stats
- Homepage Section 3: Lines ~80-120
- Partner Hero: Lines ~220-290

### Updating Apps
- Homepage Section 2: Four app blocks starting ~line 40

---

## 🆘 Support

For issues or questions:
- Report issues: https://github.com/ChurchApps/ChurchAppsSupport/issues
- Join Slack: https://join.slack.com/t/livechurchsolutions/shared_invite/zt-i88etpo5-ZZhYsQwQLVclW12DKtVflg
- Developer resources: https://churchapps.org/dev

---

**Built with ❤️ by the Church for the Church**
