---
name: fixart-ship
description: >
  Verify and deploy the FixArt site (preview by default). Use for /fixart-ship,
  "задеплой fixart", "выложи превью", or ship after price/copy changes.
---

# FixArt ship

Work from the FixArt app root (`package.json` name `fixart`).

## Steps

1. Unit tests:
   ```bash
   npm run test:unit
   ```
2. Optional typecheck if types changed:
   ```bash
   npm run typecheck
   ```
3. Preview deploy (default):
   ```bash
   vercel deploy -y --no-wait --scope akirtas-projects
   ```
4. Poll readiness:
   ```bash
   vercel inspect <url> --scope akirtas-projects
   ```
5. Give the user Preview + Inspect URLs. Do **not** curl the live site to "verify".

## Production

Only if the user explicitly says production / prod / `fixart.vercel.app`:

```bash
vercel deploy --prod -y --no-wait --scope akirtas-projects
```

## Notes

- Linked project: `.vercel/project.json` → `fixart`
- Parent Desktop git may not track this folder; prefer CLI deploy over `git push`
- For pricing/copy context use the `fixart` skill
