# WRI Suite Landing Page

Main landing page for the WRI restaurant operations platform suite. Showcases all three products (Daily Ops, Staff Communications, Restaurant Toolkit) with pricing and plan options.

## Features

- Product overview cards with links to individual apps
- Bundle pricing tiers (Basic $9, Standard $29, Pro $97)
- Stripe integration for all three tiers
- Unified design system (Playfair Display, DM Sans, #1C1917/#FAFAF9 color scheme)
- Mobile responsive

## Deployment

- **Domain:** wireach.tools
- **Hosting:** Vercel
- **Team:** with-reach-tools

## Build

```bash
npm run build
```

## Environment Variables

- `NEXT_PUBLIC_APP_URL` — Base domain for the suite

## Products Linked

- Daily Ops: ops.wireach.tools
- Staff Communications: staff.wireach.tools
- Restaurant Toolkit: toolkit.wireach.tools

## Stripe Products

- **Basic Bundle** (prod_UHxDFdaIkPjBwX) — $9/mo
- **Standard Bundle** (prod_UHxDvZ3oIoCuvq) — $29/mo
- **Pro Bundle** (prod_UHxDFGeEXUnHwH) — $97/mo
