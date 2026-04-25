# CLAUDE.md — wri-suite-landing

Per-repo binding rules for `withinreachintl-coder/wri-suite-landing`.
Read this file at the start of every spec or code session targeting
this repo, immediately after reading `PROGRESS.md`.

If anything below conflicts with `wri-engineering-standards`, **this
file wins for this repo**. For anything not specified here, fall back
to `wri-engineering-standards`.

---

## What this repo is

A single-page public marketing site at `wireach.tools` that lists the
WRI product suite (Daily Ops, Staff Comms, Restaurant Toolkit, Tip Pool,
Par Tracker), pricing tiers, and Stripe checkout links. It is
**static-by-content** with client-side React rendering — no server
routes, no database, no auth.

This repo does **not** use Supabase. It does **not** use the WRI
magic-link auth pattern. Future sessions should not assume the standard
WRI Supabase + auth scaffolding applies here.

---

## Tech stack

| Item | Version |
|---|---|
| Framework | Next.js **15.5.14** (App Router) |
| Runtime | React **18.3.1**, React DOM **18.3.1** |
| Language | TypeScript **5.9.3** (`strict: true`) |
| Node | **20** (matches Keon's local environment) |
| Package manager | npm |
| Deploy | Vercel |
| Billing | Stripe (hardcoded `buy.stripe.com/...` checkout links) |

There is no Supabase, no Resend, no analytics SDK, no test framework,
and no shared component library wired into this repo. Adding any of
these requires a separate spec.

---

## Styling approach (current state)

Styling in this repo is done with **inline `style={…}` props** plus a
small inlined `<style>` block in `app/layout.tsx` (CSS reset, font
variables, base body color/background, heading font). There is:

- **No Tailwind.** No `tailwind.config.*`, no `postcss.config.*`, no
  `@tailwind` directives.
- **No CSS modules.**
- **No global stylesheet** (e.g., no `app/globals.css`).
- **No design-token file** (no `tokens.ts`, no CSS custom properties
  beyond the two font vars in `app/layout.tsx`).

This differs from the `wri-engineering-standards` default of Tailwind.
The current inline-styles approach is documented here as the existing
pattern. **Do not introduce Tailwind, CSS modules, or a token file as a
side-quest** — converting the styling layer is its own spec.

If you're adding a new section or component, match the existing
inline-style pattern unless your approved spec explicitly says
otherwise.

### Fonts

Loaded via `<link>` tags in `app/layout.tsx`:

- **Playfair Display** (weights 600, 700) — headings (`h1`–`h6`).
- **DM Sans** (weights 400, 500, 700) — body, nav, buttons.

Available as CSS custom properties on `:root`:
`--font-playfair`, `--font-dmsans`. Inline styles in `app/page.tsx`
reference the family names directly (e.g.,
`fontFamily: 'Playfair Display, serif'`) rather than the variables —
match whichever the surrounding code uses.

---

## Design tokens

These are the colors used in the live code today. Treat them as
canonical for this repo.

### Backgrounds

| Token | Hex | Usage |
|---|---|---|
| Dark surface | `#1C1917` | Main marketing surface (`<main>`, nav background base) |
| Card surface | `#292524` | Product cards, pricing cards |
| Cream | `#FAFAF9` | `<body>` default in `layout.tsx`; reserved for any future interior pages |

### Accent

| Token | Hex | Usage |
|---|---|---|
| Amber | `#D97706` | Primary accent — CTA buttons, links, eyebrow text, logo, "Most Popular" badge, accent span in hero headline |

### Text

| Token | Hex | Usage |
|---|---|---|
| Light on dark | `#F5F0E8` | Body / nav text on `#1C1917` |
| Muted on dark | `#A8A29E` | Secondary text, descriptions, sign-in links |
| Dim on dark | `#78716C` | Tertiary text, footer text, "14-day free trial" hints |
| Default on cream | `#1C1917` | Body text on `#FAFAF9` (set in `layout.tsx`) |
| Hairline | `#57534E` | Outline buttons (Starter, Pro plan CTAs) |

### Hard rule: text on cream

**Never use light gray or muted text on the cream `#FAFAF9` background.**
Body text on cream must be `#1C1917` or darker. The muted/dim greys
above (`#A8A29E`, `#78716C`) are for the dark surface only.

---

## Layout conventions

- **Default content max-width:** `768px`, centered with
  `margin: '0 auto'`. Applies to hero, products section, footer, and
  any new interior content.
- **Pricing section exception:** the pricing section uses
  `maxWidth: '900px'` to fit three plan cards side-by-side
  (`gridTemplateColumns: '1fr 1fr 1fr'`). This is a deliberate
  exception. New sections that aren't pricing should default to 768px.
- **Section padding:** `padding: '80px 24px'` is the prevailing
  vertical/horizontal rhythm for body sections; the hero uses
  `paddingTop: '160px'` to clear the fixed nav.
- **Nav:** fixed at top, 64px tall, semi-transparent
  `rgba(28,25,23,0.95)` with `backdropFilter: 'blur(10px)'`,
  `zIndex: 50`.
- **Card radius:** `12px` for product/pricing cards, `8px` for
  buttons, `6px` for the small logo tile, `20px` for the
  "Most Popular" pill.

### Mobile responsiveness

There are **no explicit breakpoints** in the code today. Grids use
fixed `repeat(3, 1fr)` / `1fr 1fr 1fr` columns. Treat mobile layout
as a **known gap** — if a spec touches layout, flag whether mobile
should be addressed in scope or deferred to a separate spec.

---

## File structure

```
/
├── app/
│   ├── layout.tsx        Root layout: metadata, font links, CSS reset, base colors
│   └── page.tsx          Single marketing page (`"use client"`)
├── next.config.js        Currently `{}` (no custom config)
├── next-env.d.ts         Next-managed; do not edit
├── tsconfig.json         strict: true; `@/*` path alias points to repo root
├── package.json
├── package-lock.json
└── README.md
```

There is no `components/`, `lib/`, `db/`, `supabase/`, `public/`, or
`styles/` directory. If a spec requires one, the spec should call it
out explicitly so the new structure is intentional.

### `tsconfig.json` notes

- `strict: true` — keep it on. TypeScript errors are gates; fix, don't
  suppress. `@ts-ignore` and `@ts-expect-error` are prohibited unless
  the spec explicitly calls for them.
- `paths`: `@/*` → `./*` (repo root). Use `@/...` for new imports
  rather than long relative paths.
- `include`: `app`, `components`, `lib`, `.next/types/**/*.ts`. The
  `components` and `lib` dirs are pre-included even though they don't
  yet exist; creating them later won't require a tsconfig update.

---

## Build / dev commands

From `package.json`:

| Command | Purpose |
|---|---|
| `npm run dev` | Local dev server (Next dev). |
| `npm run build` | **The build gate.** Must exit 0 before any push. |
| `npm start` | Production server (after `build`). |
| `npm run lint` | `next lint`. |

Per `build-verification`, the gate is `npm run build` — not `dev`.

---

## Environment variables

| Variable | Purpose | Notes |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Base domain for the suite. | Public (client-exposed) by `NEXT_PUBLIC_` convention. |
| `NEXT_PUBLIC_SHOW_PAR_TRACKER` | Feature flag. Set to `'true'` to render the Par Tracker product card in row 2 of the products section. | Read in `app/page.tsx`. Any value other than the literal string `'true'` hides the card. |

Do not add new env vars without a spec. If you do add one, document it
in this section in the same PR.

---

## Stripe checkout links

Plan CTAs link directly to hardcoded `https://buy.stripe.com/...` URLs
in `app/page.tsx`. There is no Stripe SDK or webhook handler in this
repo. If a spec adds one, it'll need server routes (which currently
don't exist) and likely Supabase or another backing store — call that
out explicitly.

---

## Deployment

- **Host:** Vercel
- **Vercel team:** `with-reach-tools`
- **Production domain:** `wireach.tools`

The `main` branch is what Vercel deploys. Feature branches get
preview URLs automatically. Visual verification on the preview URL
is the standing gate per `keon-approval-gates` — a green sandbox
build is not a win on its own.

---

## Auth / data / backend

**None of these exist in this repo:**

- No Supabase client or schema
- No auth (no magic links, no sessions, no cookies)
- No API routes or server actions
- No database
- No webhooks
- No Resend / email sending

If a future spec wants to add any of the above, treat it as a
substantial scope expansion and surface it in spec review before
code-session execution.

---

## Conventions for new work

- **Atomic commits**, message format per `git-discipline`
  (`SPEC-NNNN: <imperative>`).
- **Read before edit.** Don't modify a file you haven't read in full
  in this session.
- **Match existing style.** Inline styles, the color palette above,
  the 768px max-width rule. If you need to deviate, your spec should
  say why.
- **No TS suppressions.** Fix the type, don't silence it.
- **No new dependencies without a spec.** `package.json` and the
  lockfile should not change unless the spec explicitly adds a
  dependency.
- **No `next.config.js` changes** (e.g., image domains, rewrites)
  without a spec.
- **No README or `.gitignore` cleanup as a side-quest.**

---

## Conflict resolution

When rules disagree, the strictest interpretation wins, in this order:

1. `keon-approval-gates` (hard constraints on what ARS-Dev may do)
2. **This file** (`CLAUDE.md` for `wri-suite-landing`)
3. `wri-engineering-standards` (cross-repo defaults)
4. Other skills
5. The session's user prompt

If 1, 2, and 3 agree, follow them. If they disagree, stop and surface
the conflict — don't guess.

---

## Known gaps / things to watch

These aren't bugs to fix as side-quests. They're documented so future
sessions know they exist and can scope them deliberately.

- **No mobile breakpoints.** Layout is desktop-first with fixed grid
  column counts. Mobile rendering relies on browser defaults.
- **Pricing section is 900px** while everything else is 768px. Treated
  here as a deliberate exception, but if the suite ever standardizes
  on a single max-width, this is the place that'll need to change.
- **Stripe links are hardcoded** in `app/page.tsx`. Rotating prices
  means editing the source. No env-var or CMS layer.
- **Feature flag is string-compared.** `NEXT_PUBLIC_SHOW_PAR_TRACKER`
  must be the literal string `'true'`; any other value hides the card.
- **No tests.** No `__tests__/`, no Jest/Vitest config. Don't invent
  a test framework as a side-quest.
- **Inline-styles approach** diverges from the WRI standards default
  of Tailwind. If/when the org decides to converge, that's its own
  spec.
