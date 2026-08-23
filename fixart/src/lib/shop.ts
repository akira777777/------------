export const SHOP = {
  name: "FixArt",
  person: "Artem Mikhailov",
  telegram: "https://t.me/liltrafficRUS",
  telegramHandle: "@liltrafficRUS",
  phone: "+420 737 500 587",
  phoneHref: "tel:+420737500587",
  email: "fear75412@gmail.com",
  emailHref: "mailto:fear75412@gmail.com",
  maps: "https://www.google.com/maps/search/?api=1&query=50.0900897%2C14.4719367",
  transit: "Biskupcova",
  trams: "9, 10, 11, 16, 19, 26",
  geo: { lat: 50.0900897, lng: 14.4719367 },
  osmEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=14.4669%2C50.0871%2C14.4770%2C50.0931&layer=mapnik&marker=50.0900897%2C14.4719367",
  address: {
    street: "Biskupcova 31",
    zip: "130 00",
    city: "Praha 3 – Žižkov",
    country: "Česko",
  },
} as const;

export const NAV = [
  { id: "opravy", href: "#opravy" },
  { id: "cenik", href: "#cenik" },
  { id: "garance", href: "#garance" },
  { id: "onas", href: "#o-nas" },
  { id: "otazky", href: "#otazky" },
  { id: "kontakt", href: "#kontakt" },
] as const;

export type RepairId = "battery" | "display" | "glass";
export type PriceGroupId = "iphone" | "samsung" | "macbook";

export const HERO_REPAIRS: {
  id: RepairId;
  image: string;
  fromPrice: number;
  minutes: number;
}[] = [
  { id: "battery", image: "/images/hero-battery.webp", fromPrice: 1290, minutes: 45 },
  { id: "display", image: "/images/hero-exploded.webp", fromPrice: 2790, minutes: 90 },
  { id: "glass", image: "/images/hero-glass.webp", fromPrice: 1890, minutes: 120 },
];

export const FEATURED_SERVICES: {
  id: RepairId;
  image: string;
  fromPrice: number;
}[] = [
  { id: "battery", image: "/images/battery.webp", fromPrice: 1290 },
  { id: "display", image: "/images/display.webp", fromPrice: 2790 },
  { id: "glass", image: "/images/glass.webp", fromPrice: 1890 },
];

export const MORE_SERVICES = [
  { id: "port", image: "/images/port.webp" },
  { id: "macbook", image: "/images/macbook.webp" },
  { id: "diagnostics", image: "/images/diagnostics.webp" },
] as const;

export const PRICE_GROUPS: {
  id: PriceGroupId;
  image: string;
  rows: {
    model: string;
    battery: number;
    display: number;
    glass: number | null;
    port: number | null;
    minutes: number;
  }[];
}[] = [
  {
    id: "iphone",
    image: "/images/pricing-iphone.webp",
    rows: [
      { model: "iPhone SE / 11", battery: 1290, display: 2790, glass: 1890, port: 1490, minutes: 45 },
      { model: "iPhone 12 / 12 Pro", battery: 1490, display: 3990, glass: 2490, port: 1690, minutes: 50 },
      { model: "iPhone 13 / 13 mini", battery: 1490, display: 3990, glass: 2490, port: 1690, minutes: 50 },
      { model: "iPhone 13 Pro / Max", battery: 1690, display: 5490, glass: 2890, port: 1790, minutes: 60 },
      { model: "iPhone 14 / 14 Plus", battery: 1890, display: 4990, glass: 2990, port: 1890, minutes: 60 },
      { model: "iPhone 14 Pro / Max", battery: 1990, display: 6990, glass: 3490, port: 1990, minutes: 75 },
      { model: "iPhone 15 / 15 Plus", battery: 2090, display: 5990, glass: 3290, port: 1990, minutes: 60 },
      { model: "iPhone 15 Pro / Max", battery: 2190, display: 7990, glass: 3790, port: 2090, minutes: 75 },
      { model: "iPhone 16 / 16 Plus", battery: 2190, display: 7490, glass: 3990, port: 2090, minutes: 70 },
      { model: "iPhone 16 Pro / Max", battery: 2390, display: 8990, glass: 4490, port: 2190, minutes: 90 },
    ],
  },
  {
    id: "samsung",
    image: "/images/pricing-samsung.webp",
    rows: [
      { model: "Galaxy A / A54", battery: 1190, display: 2990, glass: 1790, port: 1290, minutes: 50 },
      { model: "Galaxy S21", battery: 1290, display: 3490, glass: 1990, port: 1490, minutes: 55 },
      { model: "Galaxy S22 / S23", battery: 1690, display: 4990, glass: 2690, port: 1690, minutes: 70 },
      { model: "Galaxy S24 / S25", battery: 1890, display: 6290, glass: 3190, port: 1890, minutes: 80 },
    ],
  },
  {
    id: "macbook",
    image: "/images/pricing-macbook.webp",
    rows: [
      { model: "MacBook Air M1 / M2", battery: 4490, display: 8990, glass: null, port: 2490, minutes: 120 },
      { model: "MacBook Air M3", battery: 4990, display: 9990, glass: null, port: 2490, minutes: 120 },
      { model: "MacBook Pro 14\"", battery: 5490, display: 12990, glass: null, port: 2890, minutes: 150 },
      { model: "MacBook Pro 16\"", battery: 5990, display: 14990, glass: null, port: 2890, minutes: 180 },
    ],
  },
];

export const EXTRA_SERVICES = [
  { id: "cameraRear", price: 1990, minutes: 60, image: "/images/extra-camera.webp" },
  { id: "cameraFront", price: 1490, minutes: 45, image: "/images/extra-camera-front.webp" },
  { id: "speaker", price: 990, minutes: 40, image: "/images/extra-speaker.webp" },
  { id: "keyboard", price: 3490, minutes: 180, image: "/images/extra-keyboard.webp" },
  { id: "water", price: 890, minutes: 90, image: "/images/extra-water.webp" },
  { id: "express", price: 490, minutes: 0, image: "/images/extra-express.webp" },
] as const;

export const DEVICES = [
  "iPhone 12 / 13",
  "iPhone 14 / 15",
  "iPhone 16",
  "Samsung Galaxy",
  "MacBook",
  "Jiné",
] as const;

export const BOOKING_SERVICES = [
  "battery",
  "display",
  "glass",
  "port",
  "macbook",
  "diagnostics",
  "other",
] as const;
