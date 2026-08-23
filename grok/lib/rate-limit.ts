const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

const hits = new Map<string, number[]>();

export function rateLimit(key: string, now = Date.now()): boolean {
  // Bypass rate limit in dev/test mode to prevent E2E test collisions
  if (process.env.NODE_ENV !== "production" || process.env.PLAYWRIGHT_TEST === "true") {
    return true;
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
