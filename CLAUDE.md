# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm start          # Start dev server at http://localhost:3000 (hot reload)
npm run build      # Production build to /build directory
npm test           # Run tests in watch mode (React Testing Library)
npm run deploy     # Deploy to GitHub Pages (runs build first)
```

## Architecture

This is a **single-page portfolio application** built with React 18 and Tailwind CSS 3.

### Component Structure

All components live in `/src/components/` and render sequentially in `App.js`:

- **Navbar.jsx** - Fixed navigation with scroll-triggered background change and mobile hamburger menu
- **Home.jsx** - Hero section with background image and CTA
- **Skills.jsx** - Tech stack grid with hover animations
- **Projects.jsx** - Portfolio showcase with hover overlays
- **About.jsx** - Bio section with resume download
- **Contact.jsx** - Form submitting to Getform.io + footer

### Navigation

Uses `react-scroll` for smooth scrolling between sections (not React Router). Each section is an anchor target with `id` matching nav links.

### State Management

Minimal local state only - `useState` and `useEffect` in Navbar for menu toggle and scroll position tracking. All other components are presentational.

### Styling

- Tailwind CSS utility classes throughout
- Mobile-first responsive design using `sm:`, `md:`, `lg:` breakpoints
- Custom CSS in `/src/index.css` for Tailwind directives and `.content-div` hover gradients

### External Integrations

- **Contact form**: POSTs to Getform.io endpoint
- **Deployment**: GitHub Pages at `https://DitoXD.github.io/reinaldopino`
