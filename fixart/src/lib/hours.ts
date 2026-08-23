const TZ = "Europe/Prague";

const WEEKDAY: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

type Slot = { open: number; close: number } | null;

const SCHEDULE: Slot[] = [
  null,
  { open: 9 * 60, close: 19 * 60 },
  { open: 9 * 60, close: 19 * 60 },
  { open: 9 * 60, close: 19 * 60 },
  { open: 9 * 60, close: 19 * 60 },
  { open: 9 * 60, close: 19 * 60 },
  null,
];

export type ShopStatus =
  | { open: true; until: string }
  | { open: false; dayOffset: number; weekday: number; at: string };

function pragueParts(date: Date) {
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  });
  const bag: Record<string, string> = {};
  for (const part of dtf.formatToParts(date)) {
    if (part.type !== "literal") bag[part.type] = part.value;
  }
  const weekday = WEEKDAY[bag.weekday ?? "Sun"] ?? 0;
  const hour = Number(bag.hour ?? 0);
  const minute = Number(bag.minute ?? 0);
  return { weekday, minutes: hour * 60 + minute };
}

function hhmm(total: number) {
  const h = Math.floor(total / 60);
  const m = total % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

export function getShopStatus(now = new Date()): ShopStatus {
  const { weekday, minutes } = pragueParts(now);
  const today = SCHEDULE[weekday];
  if (today && minutes >= today.open && minutes < today.close) {
    return { open: true, until: hhmm(today.close) };
  }
  if (today && minutes < today.open) {
    return { open: false, dayOffset: 0, weekday, at: hhmm(today.open) };
  }
  for (let offset = 1; offset <= 7; offset += 1) {
    const day = (weekday + offset) % 7;
    const slot = SCHEDULE[day];
    if (slot) {
      return { open: false, dayOffset: offset, weekday: day, at: hhmm(slot.open) };
    }
  }
  return { open: false, dayOffset: 1, weekday: 1, at: "09:00" };
}

export const WEEKLY_HOURS = [
  { day: 1, open: "09:00", close: "19:00" },
  { day: 2, open: "09:00", close: "19:00" },
  { day: 3, open: "09:00", close: "19:00" },
  { day: 4, open: "09:00", close: "19:00" },
  { day: 5, open: "09:00", close: "19:00" },
  { day: 6, open: null, close: null },
  { day: 0, open: null, close: null },
] as const;
