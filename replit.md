# Advan AI — Marketing Website

## Overview
B2B AI sales platform marketing site built with React + Vite + TypeScript. Fully static frontend, no backend required.

## Architecture

### Artifacts
- **advan-ai** (`/`): Main React+Vite marketing site at port 19863
- **api-server**: Express API server at port 8080 (unused by advan-ai)
- **mockup-sandbox**: Canvas component preview server at port 8081

### Routing
Uses `wouter` for client-side routing:
- `/` → HomePage (landing page)
- `/about` → AboutPage
- `/privacy` → PrivacyPage  
- `/terms` → TermsPage

## Advan AI Site Structure

### Pages
- `src/pages/HomePage.tsx` — Landing page assembling all sections
- `src/pages/AboutPage.tsx` — About page with mission, values, CTA
- `src/pages/PrivacyPage.tsx` — Privacy Policy
- `src/pages/TermsPage.tsx` — Terms of Service

### Components
- `Header.tsx` — Sticky header, mobile menu, smooth hash navigation
- `Footer.tsx` — Multi-column nav, social links
- `HeroSection.tsx` — Dark hero with animated stacked cards + Framer Motion parallax
- `NewStandardSection.tsx` — Tabbed features (AI Outbound/Reactivation/Conversion)
- `LifecycleSection.tsx` — 4-phase lifecycle (Design/Test/Scale/Optimize) with animated visuals
- `SuccessStories.tsx` — Case study + testimonial section
- `ComplianceSection.tsx` — Security certifications grid
- `FinalCTA.tsx` — Dark CTA with floating card
- `FAQSection.tsx` — Accordion FAQ using Radix UI
- `ContactSection.tsx` — Demo booking CTA

### Brand
- Primary: `#E85D04` (orange)
- Purple: `#7c3aed` (hero CTA)
- Dark: `#1a1a1a`
- Background: `#F8F7F4` (warm off-white)
- Fonts: Inter (sans) + Playfair Display (serif, via Google Fonts CDN)
- Booking URL: `https://cal.com/day-nguyen`

### Public Assets (`public/`)
43 images including hero cards, success story, lifecycle phase images, logo variants.

## Key Dependencies
- `framer-motion` — animations
- `wouter` — routing
- `lucide-react` — icons
- `@radix-ui/react-accordion` — FAQ component
- `@tanstack/react-query` — (setup, not heavily used)
- Tailwind CSS v4 with `tw-animate-css`

## Development
```bash
pnpm --filter advan-ai dev
```
Runs on PORT env variable (default 19863).
