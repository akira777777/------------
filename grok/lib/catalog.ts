export type Locale = "cs" | "en" | "ru";

export type RepairCategory =
  | "battery"
  | "display"
  | "back-glass"
  | "charging"
  | "camera"
  | "board"
  | "other";

export type DeviceKind = "phone" | "tablet" | "laptop" | "watch" | "audio";

export type Localized = { cs: string; en: string; ru: string };

export type Repair = {
  id: string;
  category: RepairCategory;
  name: Localized;
  duration?: string;
  priceFrom?: number;
  priceTo?: number;
  exactPrice?: number;
};

export type DeviceModel = {
  id: string;
  brandId: string;
  name: string;
  kind: DeviceKind;
  schematic: DeviceKind;
  repairs: Repair[];
  image: string;
};

export type Brand = {
  id: string;
  name: string;
  models: DeviceModel[];
};

export const REPAIR_NAMES: Record<RepairCategory, Localized> = {
  battery: {
    cs: "Výměna baterie",
    en: "Battery replacement",
    ru: "Замена батареи",
  },
  display: {
    cs: "Výměna displeje",
    en: "Display replacement",
    ru: "Замена дисплея",
  },
  "back-glass": {
    cs: "Zadní sklo",
    en: "Back glass",
    ru: "Заднее стекло",
  },
  charging: {
    cs: "Nabíjecí konektor",
    en: "Charging port",
    ru: "Разъём зарядки",
  },
  camera: {
    cs: "Kamera",
    en: "Camera",
    ru: "Камера",
  },
  board: {
    cs: "Oprava desky",
    en: "Board repair",
    ru: "Ремонт платы",
  },
  other: {
    cs: "Jiná oprava",
    en: "Other repair",
    ru: "Другой ремонт",
  },
};

function repair(
  category: RepairCategory,
  prices: Pick<Repair, "priceFrom" | "priceTo" | "exactPrice" | "duration">,
  name: Localized = REPAIR_NAMES[category],
): Repair {
  return { id: category, category, name, duration: "60–90 min", ...prices };
}

function boardRepair(): Repair {
  return repair("board", { duration: "1–3 dny" });
}

function phoneSet(level: "flagship" | "mid" | "older"): Repair[] {
  // TO ≈ top Prague original/ASP quote ÷ 1.3 (iServis, Pointservis, Opraveno).
  if (level === "flagship") {
    return [
      repair("battery", { priceFrom: 2290, priceTo: 3070, duration: "45–90 min" }),
      repair("display", { priceFrom: 4990, priceTo: 11590, duration: "90–150 min" }),
      repair("back-glass", { priceFrom: 2490, priceTo: 3450, duration: "90–150 min" }),
      repair("charging", { priceFrom: 1890, priceTo: 2690, duration: "60–90 min" }),
      repair("camera", { priceFrom: 2290, priceTo: 3450, duration: "60–120 min" }),
      boardRepair(),
    ];
  }
  if (level === "mid") {
    return [
      repair("battery", { priceFrom: 1490, priceTo: 2290, duration: "45–90 min" }),
      repair("display", { priceFrom: 3990, priceTo: 6490, duration: "90–150 min" }),
      repair("back-glass", { priceFrom: 1890, priceTo: 2530, duration: "90–150 min" }),
      repair("charging", { priceFrom: 1490, priceTo: 2290, duration: "60–90 min" }),
      repair("camera", { priceFrom: 1690, priceTo: 2690, duration: "60–120 min" }),
      boardRepair(),
    ];
  }
  return [
    repair("battery", { priceFrom: 1290, priceTo: 1750, duration: "45–90 min" }),
    repair("display", { priceFrom: 2790, priceTo: 4590, duration: "90–150 min" }),
    repair("charging", { priceFrom: 1290, priceTo: 1750, duration: "60–90 min" }),
    boardRepair(),
  ];
}

function model(
  brandId: string,
  id: string,
  name: string,
  kind: DeviceKind,
  repairs: Repair[],
  imageId: string = id,
): DeviceModel {
  return {
    id,
    brandId,
    name,
    kind,
    schematic: kind,
    repairs,
    image: `/devices/${imageId}.jpg`,
  };
}

const apple: Brand = {
  id: "apple",
  name: "Apple",
  models: [
    model("apple", "iphone-16-pro-max", "iPhone 16 Pro Max", "phone", phoneSet("flagship"), "iphone-16-pro"),
    model("apple", "iphone-16-pro", "iPhone 16 Pro", "phone", phoneSet("flagship")),
    model("apple", "iphone-16-plus", "iPhone 16 Plus", "phone", phoneSet("flagship"), "iphone-16"),
    model("apple", "iphone-16", "iPhone 16", "phone", phoneSet("flagship")),
    model("apple", "iphone-15-pro", "iPhone 15 Pro", "phone", phoneSet("flagship")),
    model("apple", "iphone-15-plus", "iPhone 15 Plus", "phone", phoneSet("mid"), "iphone-15"),
    model("apple", "iphone-15", "iPhone 15", "phone", phoneSet("mid")),
    model("apple", "iphone-14", "iPhone 14", "phone", phoneSet("mid")),
    model("apple", "iphone-13", "iPhone 13", "phone", phoneSet("older")),
    model("apple", "iphone-12", "iPhone 12", "phone", phoneSet("older"), "iphone-13"),
    model("apple", "ipad-pro", "iPad Pro", "tablet", [
      repair("battery", { priceFrom: 2490, priceTo: 3990, duration: "90–150 min" }),
      repair("display", { priceFrom: 5990, priceTo: 11590, duration: "2–4 h" }),
      repair("charging", { priceFrom: 1890, priceTo: 2690 }),
      boardRepair(),
    ]),
    model("apple", "ipad-air", "iPad Air", "tablet", [
      repair("battery", { priceFrom: 1890, priceTo: 2530 }),
      repair("display", { priceFrom: 4490, priceTo: 7690 }),
      repair("charging", { priceFrom: 1490, priceTo: 2290 }),
    ]),
    model("apple", "macbook-air", "MacBook Air", "laptop", [
      repair("battery", { priceFrom: 3490, priceTo: 4590, duration: "2–3 h" }),
      repair("display", { priceFrom: 7990, priceTo: 11590, duration: "1–3 dny" }),
      repair(
        "other",
        { priceFrom: 2490, priceTo: 3840, duration: "2–4 h" },
        { cs: "Klávesnice", en: "Keyboard", ru: "Клавиатура" },
      ),
      boardRepair(),
    ]),
    model("apple", "macbook-pro", "MacBook Pro", "laptop", [
      repair("battery", { priceFrom: 3990, priceTo: 5190, duration: "2–3 h" }),
      repair("display", { priceFrom: 12990, priceTo: 19290, duration: "1–3 dny" }),
      boardRepair(),
    ]),
    model("apple", "watch", "Apple Watch", "watch", [
      repair("battery", { priceFrom: 1490, priceTo: 2530, duration: "60–90 min" }),
      repair("display", { priceFrom: 2490, priceTo: 4590, duration: "90–150 min" }),
      repair(
        "other",
        { priceFrom: 1490, priceTo: 2290 },
        { cs: "Zadní víko", en: "Back cover", ru: "Задняя крышка" },
      ),
    ]),
    model("apple", "airpods", "AirPods", "audio", [
      repair(
        "battery",
        { priceFrom: 1490, priceTo: 2290, duration: "45–90 min" },
        { cs: "Baterie pouzdra", en: "Case battery", ru: "Батарея кейса" },
      ),
      repair(
        "other",
        { priceFrom: 1890, priceTo: 2690 },
        { cs: "Sluchátko", en: "Earbud", ru: "Наушник" },
      ),
    ]),
  ],
};

const samsung: Brand = {
  id: "samsung",
  name: "Samsung",
  models: [
    model("samsung", "galaxy-s25-ultra", "Galaxy S25 Ultra", "phone", phoneSet("flagship"), "galaxy-s24-ultra"),
    model("samsung", "galaxy-s25", "Galaxy S25", "phone", phoneSet("flagship"), "galaxy-s24"),
    model("samsung", "galaxy-s24-ultra", "Galaxy S24 Ultra", "phone", phoneSet("flagship")),
    model("samsung", "galaxy-s24", "Galaxy S24", "phone", phoneSet("flagship")),
    model("samsung", "galaxy-a55", "Galaxy A55", "phone", phoneSet("mid")),
    model("samsung", "galaxy-a35", "Galaxy A35", "phone", phoneSet("older"), "galaxy-a55"),
    model("samsung", "tab-s9", "Galaxy Tab S9", "tablet", [
      repair("battery", { priceFrom: 1890, priceTo: 2530 }),
      repair("display", { priceFrom: 4490, priceTo: 6890 }),
    ]),
  ],
};

const xiaomi: Brand = {
  id: "xiaomi",
  name: "Xiaomi",
  models: [
    model("xiaomi", "14", "Xiaomi 14", "phone", phoneSet("mid")),
    model("xiaomi", "redmi-note-13", "Redmi Note 13", "phone", phoneSet("older")),
  ],
};

const google: Brand = {
  id: "google",
  name: "Google",
  models: [
    model("google", "pixel-8-pro", "Pixel 8 Pro", "phone", phoneSet("flagship")),
    model("google", "pixel-8", "Pixel 8", "phone", phoneSet("mid")),
  ],
};

const huawei: Brand = {
  id: "huawei",
  name: "Huawei",
  models: [
    model("huawei", "pura-70", "Pura 70", "phone", phoneSet("mid")),
    model("huawei", "p30", "P30", "phone", phoneSet("older")),
  ],
};

export const brands: Brand[] = [apple, samsung, xiaomi, google, huawei];

const brandById = new Map(brands.map((brand) => [brand.id, brand]));
const modelByKey = new Map(
  brands.flatMap((brand) =>
    brand.models.map((item) => [`${brand.id}/${item.id}`, item] as const),
  ),
);

export function getBrand(id: string): Brand | undefined {
  return brandById.get(id);
}

export function getModel(
  brandId: string,
  modelId: string,
): DeviceModel | undefined {
  return modelByKey.get(`${brandId}/${modelId}`);
}

export function getRepair(
  model: DeviceModel,
  repairId: string,
): Repair | undefined {
  return model.repairs.find((item) => item.id === repairId);
}
