---
name: fixart
description: >
  Work on the FixArt Prague electronics repair site in this repo. Use for
  FixArt, прайс FixArt, цены сервиса Прага, marketing copy ru/cs/en,
  catalog prices, /fixart, or deploy of the fixart Vercel project.
---

# FixArt

## Layout

- App: Next.js under this repo root (`package.json` name `fixart`)
- Prices: `lib/catalog.ts` (`phoneSet` + per-device repairs)
- Copy: `messages/{ru,cs,en}.json`
- Money helpers: `lib/money.ts`
- Linked Vercel project: `fixart` (scope `akirtas-projects`)
- Preview deploy: `vercel deploy -y --no-wait --scope akirtas-projects` from this directory
- Production only if the user explicitly asks for prod

## Pricing rule (current)

Upper end of ranges ≈ **top Prague original/ASP quote ÷ 1.3** (benchmarks used: iServis, Pointservis, Opraveno ASP). Keep `…90` endings. Board repairs stay on-request.

Marketing claim in UI: roughly **30% under premium Prague shops** for the same job — keep ru/cs/en in sync when changing that number.

## When changing prices or copy

1. Edit `lib/catalog.ts` and/or `messages/*.json`
2. Run `npm run test:unit`
3. If UI/copy changed, verify in browser: `/`, `/prices`, a flagship device page, `/faq`
4. Do not invent competitor prices without a fresh check

## Git note

Parent Desktop folder may be the git root; this app directory can be untracked there. Prefer CLI `vercel deploy` over `git push` unless the user confirms a clean FixArt remote.
