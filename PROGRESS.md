# PROGRESS.md — wri-suite-landing

## Product
**WRI Suite Landing** — wireach.tools homepage. Showcases all WRI restaurant tools, suite pricing, and sign-in routing.

## URLs & Infrastructure

| | |
|---|---|
| **Live URL** | https://wireach.tools |
| **Repo** | [withinreachintl-coder/wri-suite-landing](https://github.com/withinreachintl-coder/wri-suite-landing) (public) |
| **Vercel project** | `wri-suite-landing` (team: with-reach-tools) |

---

## Current State (as of 2026-04-30)

### Products on homepage
1. Daily Ops — https://ops.wireach.tools
2. Staff Comms — https://staff.wireach.tools
3. Restaurant Toolkit — https://toolkit.wireach.tools
4. Tip Pool Calculator — https://tip.wireach.tools
5. Par Level Tracker — https://par.wireach.tools *(added PR #3, Apr 30 2026)*

### Pricing tiers
- **Starter $19/mo** — Daily Ops Checklist, Photo Documentation, 30-day History
- **Standard $39/mo** — Everything in Starter + Announcements, Shift Swaps, Read Receipts
- **Pro $99/mo** — Everything in Standard + LP Audits, Repair Tracking, Shift Handoffs, Daily Summaries, Par Level Tracker

---

## Known Issues

- ~~Row 1 (3-col product cards) and Pricing grid both use `repeat(3, 1fr)` — renders cramped at iPhone width.~~ **Fixed in PR #6 (2026-05-06).** Both grids now `repeat(auto-fit, minmax(240px, 1fr))`; nav collapses to hamburger <600px.
- Color contrast on `#D97706` (~3.4:1 on `#1C1917`) and `#78716C` (~3.5:1) still fails WCAG AA for body/eyebrow text. Touches design tokens — separate PR.
- Bundle Stripe wiring fan-out across per-app deployments still undefined. Blocked on SPEC-0015.

---

## Session Log

| Date | PR | Commit | Scope |
|------|-----|--------|-------|
| 2026-04-30 | PR #3 | 7f4670c | Par Level Tracker card + nav link + Pro tier pricing. Removes `showParTracker` env flag (card was hidden on prod). Name corrected Par Tracker → Par Level Tracker. Stripe link wired. row2 flex→auto-fit grid for mobile reflow. Nav gap 24→16px to fit 6 items. Par Level Tracker added to Pro tier features only. Screenshots verified by Keon at preview before merge. Production deployed 18:40 UTC. |
| 2026-04-30 | PR #4 | b647b81 | Add Par Level Tracker card to `/signin` product picker (4th card → `par.wireach.tools/login`). Existing `/signin` (shipped via `71fbb7b` in SPEC-0009 sweep) predated Par Tracker launch and was missing its login entry point. Grid `repeat(3, 1fr)` → `repeat(auto-fit, minmax(200px, 1fr))`; container `maxWidth: 768px` → `1000px` for 4-card responsive layout. Out of scope: heading/subhead copy, existing 3 cards' content, footer link, layout chrome — all preserved. Verified on preview by Keon before merge. Reference: SPEC-0010 follow-up. |
| 2026-05-06 | PR #6 (open) | 9262153 | **SPEC-landing-mobile-a11y — structural mobile + a11y sweep.** Addresses HIGH/Quick findings from `AUDIT-landing.md` (2026-05-05). (1) `app/layout.tsx`: added `export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#D97706' }` — fixes iOS Safari shrink-to-fit that rendered body copy at ~7-8px. (2) New `app/globals.css` (40 lines, imported in `layout.tsx`): `:focus-visible { outline: 2px solid #D97706; outline-offset: 2px; }` site-wide (WCAG 2.4.7), plus a single `@media (max-width: 599px)` block driving the nav collapse. Inline-style architecture preserved everywhere else per `CLAUDE.md`. (3) `app/page.tsx`: pricing grid `gridTemplateColumns: '1fr 1fr 1fr'` (line 256) and products row 1 `'repeat(3, 1fr)'` (line 223) both → `'repeat(auto-fit, minmax(240px, 1fr))'`, mirroring the row-2 pattern that already worked. (4) Mobile nav: 6-link horizontal nav collapses to a hamburger button below 600px. `useState` toggle, `useEffect` Escape-to-close handler, full a11y semantics (`aria-label="Open/Close navigation"`, `aria-expanded`, `aria-controls="primary-nav-links"`). Toggle button and Sign In CTA both 44px tap target. Link clicks close the menu. (5) Empty-src Loom iframe gated behind `const LOOM_URL = ''; {LOOM_URL && <iframe ... />}` — placeholder div preserved, iframe no longer renders blank-src on every load. **No new dependencies.** Build clean, zero new warnings. PR awaits Keon visual verification on Vercel preview before merge — screenshots, hamburger keyboard interaction, and Lighthouse mobile a11y delta all gated to preview. Out of scope: bundle Stripe wiring (SPEC-0015), `#D97706`/`#78716C` contrast fixes (separate PR — touches design tokens), inline-style → Tailwind migration. |
| 2026-05-01 | PR #5 (open) + 4 cross-repo PRs | a9a69ef + e940aac | **Marketing-audit response session.** wri-suite-landing PR #5 addresses Critical findings from the May 1 wireach.tools audit (40/100 F): hero Loom video embed slot below subhead, "What restaurant operators are saying" testimonial section (cream `#FAFAF9` cards on dark surface with `#1C1917` text per CLAUDE.md hard rule), title + meta description + Open Graph + Twitter card metadata rewrite, footer trust signals (Privacy / Terms / Contact + `Within Reach International LLC · Memphis, TN` business line, 44px touch targets), and stub `/privacy` + `/terms` pages with visible placeholder banner. Follow-up commit `e940aac` on the same branch swapped all public-facing `withinreachintl@gmail.com` → `support@wireach.tools` (footer Contact, Privacy §6, Terms §8) and added the new **Email routing convention** section to this repo's CLAUDE.md (public surfaces use `support@wireach.tools`; `withinreachintl@gmail.com` is internal-only). The convention was then propagated as docs-only PRs across the four other suite repos in parallel: wri-restaurant-ops PR #5, wri-staff-comms PR #2, wri-restaurant-toolkit PR #3 (created CLAUDE.md fresh — repo had none), wri-par-tracker PR #5. Grep across all 5 repos confirmed **zero user-visible occurrences** of the internal address in `*.tsx`/`*.ts`/`*.jsx`/`*.js` source before the rule was committed; par-tracker's Resend shortfall-alert recipients live in `organizations.alert_emails[]` in Supabase, not in source, and are correctly classified as INTERNAL-ONLY operator monitoring. Separately, **wri-par-tracker PR #6** (`4e31533`) embedded the 45-second Par Tracker product demo video (1920×1080 H.264, 7.1 MB MP4 + 57 KB poster) into the `par.wireach.tools` landing hero — second of the audit's "no product imagery" Critical gaps closed for that product surface. The video was authored using **Remotion + Claude Code's Remotion Agent Skill** (template at sibling `wri-video-templates` project, parameterized via Composition props for future per-product re-skinning across Tip Pool / Daily Ops / Staff Comms / LP Audit), rendered locally to `wri-video-templates/out/par-tracker.mp4`, and committed inline (7.1 MB MP4 in-repo — no CDN, no external host) in the same PR as the embed code. All work in this session executed via **Claude Code on Claude.ai subscription** (not Mike on the VPS). |

---

_Last updated: 2026-05-06_
