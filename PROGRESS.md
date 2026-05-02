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
| 2026-04-30 | PR #4 | b647b81 | Add Par Level Tracker card to `/signin` product picker (4th card → `par.wireach.tools/login`). Existing `/signin` (shipped via `71fbb7b` in SPEC-0009 sweep) predated Par Tracker launch and was missing its login entry point. Grid `repeat(3, 1fr)` → `repeat(auto-fit, minmax(200px, 1fr))`; container `maxWidth: 768px` → `1000px` for 4-card responsive layout. Out of scope: heading/subhead copy, existing 3 cards' content, footer link, layout chrome — all preserved. Verified on preview by Keon before merge. Reference: SPEC-0010 follow-up. |
| 2026-05-01 | PR #5 (open) + 4 cross-repo PRs | a9a69ef + e940aac | **Marketing-audit response session.** wri-suite-landing PR #5 addresses Critical findings from the May 1 wireach.tools audit (40/100 F): hero Loom video embed slot below subhead, "What restaurant operators are saying" testimonial section (cream `#FAFAF9` cards on dark surface with `#1C1917` text per CLAUDE.md hard rule), title + meta description + Open Graph + Twitter card metadata rewrite, footer trust signals (Privacy / Terms / Contact + `Within Reach International LLC · Memphis, TN` business line, 44px touch targets), and stub `/privacy` + `/terms` pages with visible placeholder banner. Follow-up commit `e940aac` on the same branch swapped all public-facing `withinreachintl@gmail.com` → `support@wireach.tools` (footer Contact, Privacy §6, Terms §8) and added the new **Email routing convention** section to this repo's CLAUDE.md (public surfaces use `support@wireach.tools`; `withinreachintl@gmail.com` is internal-only). The convention was then propagated as docs-only PRs across the four other suite repos in parallel: wri-restaurant-ops PR #5, wri-staff-comms PR #2, wri-restaurant-toolkit PR #3 (created CLAUDE.md fresh — repo had none), wri-par-tracker PR #5. Grep across all 5 repos confirmed **zero user-visible occurrences** of the internal address in `*.tsx`/`*.ts`/`*.jsx`/`*.js` source before the rule was committed; par-tracker's Resend shortfall-alert recipients live in `organizations.alert_emails[]` in Supabase, not in source, and are correctly classified as INTERNAL-ONLY operator monitoring. Separately, **wri-par-tracker PR #6** (`4e31533`) embedded the 45-second Par Tracker product demo video (1920×1080 H.264, 7.1 MB MP4 + 57 KB poster) into the `par.wireach.tools` landing hero — second of the audit's "no product imagery" Critical gaps closed for that product surface. The video was authored using **Remotion + Claude Code's Remotion Agent Skill** (template at sibling `wri-video-templates` project, parameterized via Composition props for future per-product re-skinning across Tip Pool / Daily Ops / Staff Comms / LP Audit), rendered locally to `wri-video-templates/out/par-tracker.mp4`, and committed inline (7.1 MB MP4 in-repo — no CDN, no external host) in the same PR as the embed code. All work in this session executed via **Claude Code on Claude.ai subscription** (not Mike on the VPS). |

---

_Last updated: 2026-05-01_
