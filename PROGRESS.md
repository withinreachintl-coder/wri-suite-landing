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

- Row 1 (3-col product cards) and Pricing grid both use `repeat(3, 1fr)` — renders cramped at iPhone width. Pre-existing condition. Queued for SPEC-0010 mobile sweep.

---

## Session Log

| Date | PR | Commit | Scope |
|------|-----|--------|-------|
| 2026-04-30 | PR #3 | 7f4670c | Par Level Tracker card + nav link + Pro tier pricing. Removes `showParTracker` env flag (card was hidden on prod). Name corrected Par Tracker → Par Level Tracker. Stripe link wired. row2 flex→auto-fit grid for mobile reflow. Nav gap 24→16px to fit 6 items. Par Level Tracker added to Pro tier features only. Screenshots verified by Keon at preview before merge. Production deployed 18:40 UTC. |

---

_Last updated: 2026-04-30_
