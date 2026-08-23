const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const MAX_KEYS = 10_000;

const hits = new Map<string, number[]>();
let lastSweep = 0;

function sweep(now: number) {
  const cutoff = now - WINDOW_MS;
  for (const [key, times] of hits) {
    const recent = times.filter((time) => time > cutoff);
    if (recent.length === 0) hits.delete(key);
    else hits.set(key, recent);
  }
  lastSweep = now;
}

export function rateLimit(key: string, now = Date.now()): boolean {
  // Bypass rate limit in dev/test mode to prevent E2E test collisions
  if (process.env.NODE_ENV !== "production" || process.env.PLAYWRIGHT_TEST === "true") {
    return true;
  }
  if (now - lastSweep >= WINDOW_MS || hits.size >= MAX_KEYS) sweep(now);
  if (!hits.has(key) && hits.size >= MAX_KEYS) {
    const oldest = hits.keys().next().value;
    if (oldest !== undefined) hits.delete(oldest);
  }
  const cutoff = now - WINDOW_MS;
  const recent = (hits.get(key) ?? []).filter((time) => time > cutoff);
  if (recent.length >= MAX_HITS) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

export function resetRateLimit() {
  hits.clear();
  lastSweep = 0;
}
