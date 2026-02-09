# FreePlay React Website

A modern, responsive React website for FreePlay - The Future of Church Curriculum.

## Features

- ⚛️ Built with React 18 + Vite
- 🎨 Styled with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Single-page application with smooth scrolling
- 🚀 Optimized for performance

## Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+ (currently works with 20.17.0 with warnings)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
freeplay-react/
├── public/
│   └── images/
│       ├── hero-bg.jpg
│       ├── hero-classroom.png
│       ├── badges/
│       ├── logos/
│       ├── providers/
│       └── screenshots/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Providers.jsx
│   │   ├── CTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Components

- **Navigation** - Fixed header with smooth scroll and mobile menu
- **Hero** - Full-screen hero section with video preview and app store badges
- **HowItWorks** - Three-step guide with screenshots
- **Providers** - Content provider logos with hover effects
- **CTA** - Call-to-action section with download links
- **Footer** - Simple footer with branding

## Customization

### Colors

The color palette is defined in `tailwind.config.js`:
- Pink Primary: `#EC008C`
- Purple Dark: `#2d1b3d`
- Purple Mid: `#4a1942`

### Images

All images are stored in `public/images/` and can be easily replaced.

## Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your Git repository for automatic deployments
- **Netlify**: Drag and drop the `dist/` folder or connect Git
- **GitHub Pages**: Use the `gh-pages` package
- **Any web server**: Upload the `dist/` folder contents

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2026 FreePlay. All rights reserved.
Provided by ChurchApps.org
