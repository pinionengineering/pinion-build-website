# Pinion Website

This is the static website for Pinion (pinion.build), an IPFS infrastructure platform.

## About Pinion

Pinion provides modern IPFS infrastructure for developers. The hero line is: "When your problem turns on X, turn on Pinion" where X rotates through IPFS features: Permanence, Durability, Resiliancy, Availability, Uptime, Performance, Content-Addressing, Trustless Verification, Scalability.

## Project Setup

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: GitHub Pages (static export)
- **Domain**: https://pinion.build

## Architecture

- Static site generator configured for GitHub Pages
- OAuth authentication ready (login/signup pages created)
- Advertising areas integrated into layout
- Responsive design with sidebar for ads

## Key Files

- `next.config.ts` - Configured for static export with `output: 'export'`
- `src/app/page.tsx` - Homepage with Pinion branding
- `src/app/auth/login/page.tsx` - OAuth-ready login page
- `src/app/docs/page.tsx` - Documentation page
- `.github/workflows/deploy.yml` - Auto-deployment to GitHub Pages

## Development Commands

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build static site to `out/` directory
- `npm run lint` - Run ESLint

## Deployment

The site auto-deploys to GitHub Pages via GitHub Actions when pushing to main branch. The workflow builds the static site and deploys the `out/` directory.

## Next Steps

- Add OAuth providers (NextAuth.js)
- Integrate advertising networks
- Add actual Pinion product content
- Configure custom domain (pinion.build)