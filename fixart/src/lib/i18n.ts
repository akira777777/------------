import type { Language } from "./store";

// ============================================================================
// Typed Translation Keys Interface
// Extracts all valid keys from the monolithic dictionary for compile-time validation
// ============================================================================

export interface TranslationKeys {
  // General UI strings
  book: "book";
  hero: {
    from: "hero.from";
    minutes: "hero.minutes";
  };
  pricing: {
    kicker: "pricing.kicker";
    title: "pricing.title";
    lead: "pricing.lead";
    included: "pricing.included";
    note: "pricing.note";
    extrasTitle: "pricing.extrasTitle";
    extrasLead: "pricing.extrasLead";
    na: "pricing.na";
    groups: {
      iphone: "pricing.groups.iphone";
      samsung: "pricing.groups.samsung";
      huawei: "pricing.groups.huawei";
      other: "pricing.groups.other";
    };
    alts: {
      iphone: "pricing.alts.iphone";
      samsung: "pricing.alts.samsung";
      huawei: "pricing.alts.huawei";
      other: "pricing.alts.other";
    };
    colBattery: "pricing.colBattery";
    colDisplay: "pricing.colDisplay";
    colGlass: "pricing.colGlass";
    colPort: "pricing.colPort";
    colTime: "pricing.colTime";
  };
  services: {
    kicker: "services.kicker";
    title: "services.title";
    lead: "services.lead";
    battery: "services.battery";
    display: "services.display";
    glass: "services.glass";
    port: "services.port";
    macbook: "services.macbook";
    diagnostics: "services.diagnostics";
  };
  repairs: {
    battery: "repairs.battery";
    display: "repairs.display";
    glass: "repairs.glass";
    port: "repairs.port";
    macbook: "repairs.macbook";
    diagnostics: "repairs.diagnostics";
  };
  extras: {
    battery: "extras.battery";
    display: "extras.display";
    glass: "extras.glass";
    port: "extras.port";
  };
  steps: {
    kicker: "steps.kicker";
    title: "steps.title";
    s1t: "steps.s1t";
    s1d: "steps.s1d";
    s2t: "steps.s2t";
    s2d: "steps.s2d";
    s3t: "steps.s3t";
    s3d: "steps.s3d";
  };
}

// ============================================================================
// Translation Dictionary Type
// Maps language codes to their respective translation objects with typed keys
// ============================================================================

export type TranslationDict = {
  [K in keyof TranslationKeys]: string;
};

type LanguageDictionaries = Record<Language, TranslationDict>;

// ============================================================================
// Translation Resolver Interface
// Centralizes all translation resolution logic with runtime validation
// ============================================================================

export interface TranslationResolver {
  t: (key: string) => string;
}

// ============================================================================
// Default Translation Dictionary
// The monolithic dictionary is now mapped to typed keys for compile-time safety
// ============================================================================

const DEFAULT_DICTIONARY: LanguageDictionaries = {
  cs: {
    book: "Rezervovat",
    hero: {
      from: "od",
      minutes: "min",
    },
    pricing: {
      kicker: "CENÍK SLUŽEB",
      title: "Ceník oprav",
      lead: "Profesionální opravy a úpravy vašeho zařízení. Všechny ceny jsou včetně DPH.",
      included: "Všechny uvedené ceny zahrnují materiál, práci a záruku.",
      note: "Délka opravy se může lišit v závislosti na dostupnosti dílů.",
      extrasTitle: "Příplatkové služby",
      extrasLead: "Rozšířené možnosti pro vaše zařízení.",
      na: "--",
      groups: {
        iphone: "iPhone",
        samsung: "Samsung",
        huawei: "Huawei",
        other: "Ostatní",
      },
      alts: {
        iphone: "iPhone 15 Pro Max",
        samsung: "Galaxy S24 Ultra",
        huawei: "Pura 70 Ultra",
        other: "Google Pixel 9 Pro XL",
      },
      colBattery: "Baterie",
      colDisplay: "Displej",
      colGlass: "Sklo",
      colPort: "Port",
      colTime: "Doba",
    },
    services: {
      kicker: "SLUŽBY",
      title: "Opravy a úpravy",
      lead: "Kompletní servisní služby pro vaše oblíbené značky.",
      battery: "Baterie",
      display: "Displej",
      glass: "Sklo",
      port: "Porty",
      macbook: "MacBook",
      diagnostics: "Diagnostika",
    },
    repairs: {
      battery: "Výměna baterie",
      display: "Výměna displeje",
      glass: "Výměna skla",
      port: "Oprava portu",
      macbook: "Opravy MacBooků",
      diagnostics: "Rychlá diagnostika",
    },
    extras: {
      battery: "Baterie",
      display: "Displej",
      glass: "Sklo",
      port: "Porty",
    },
    steps: {
      kicker: "JAK TO FUNGUJE",
      title: "Postup při opravě",
      s1t: "1. Diagnostika",
      s1d: "Provedeme kompletní diagnostiku vašeho zařízení a určíme potřebné opravy.",
      s2t: "2. Schválení",
      s2d: "Schválíme s vámi náklady na díly i práci před zahájením oprav.",
      s3t: "3. Oprava",
      s3d: "Vaše zařízení bude opraveno profesionálně a rychle podle našich standardů.",
    },
  },
  en: {
    book: "Book",
    hero: {
      from: "from",
      minutes: "min",
    },
    pricing: {
      kicker: "PRICING",
      title: "Repair Pricing",
      lead: "Professional repairs and upgrades for your device. All prices include VAT.",
      included: "All listed prices include materials, labor, and warranty.",
      note: "Repair time may vary depending on parts availability.",
      extrasTitle: "Add-on Services",
      extrasLead: "Extended options for your device.",
      na: "--",
      groups: {
        iphone: "iPhone",
        samsung: "Samsung",
        huawei: "Huawei",
        other: "Other",
      },
      alts: {
        iphone: "iPhone 15 Pro Max",
        samsung: "Galaxy S24 Ultra",
        huawei: "Pura 70 Ultra",
        other: "Google Pixel 9 Pro XL",
      },
      colBattery: "Battery",
      colDisplay: "Display",
      colGlass: "Glass",
      colPort: "Port",
      colTime: "Time",
    },
    services: {
      kicker: "SERVICES",
      title: "Repairs & Upgrades",
      lead: "Complete repair services for your favorite brands.",
      battery: "Battery",
      display: "Display",
      glass: "Glass",
      port: "Ports",
      macbook: "MacBook",
      diagnostics: "Diagnostics",
    },
    repairs: {
      battery: "Battery Replacement",
      display: "Display Replacement",
      glass: "Glass Replacement",
      port: "Port Repair",
      macbook: "MacBook Repairs",
      diagnostics: "Quick Diagnostics",
    },
    extras: {
      battery: "Battery",
      display: "Display",
      glass: "Glass",
      port: "Ports",
    },
    steps: {
      kicker: "HOW IT WORKS",
      title: "Repair Process",
      s1t: "1. Diagnostics",
      s1d: "We perform a complete diagnostics of your device and determine needed repairs.",
      s2t: "2. Approval",
      s2d: "We approve costs for parts and labor with you before starting repairs.",
      s3t: "3. Repair",
      s3d: "Your device will be professionally repaired quickly according to our standards.",
    },
  },
};

// ============================================================================
// Translation Resolver Implementation
// Provides typed access to translations with runtime key validation
// ============================================================================

class DefaultTranslationResolver implements TranslationResolver {
  private dictionary: LanguageDictionaries;

  constructor(dictionary?: LanguageDictionaries) {
    this.dictionary = dictionary ?? DEFAULT_DICTIONARY;
  }

  /**
   * Get translation for a given language code and key.
   * @param lang - Language code (e.g., 'cs', 'en')
   * @param key - Translation key path (e.g., 'pricing.title')
   * @returns Translated string or original key if not found
   */
  public getTranslation(lang: Language, key: string): string {
    const dict = this.dictionary[lang];
    if (!dict) {
      console.warn(`[i18n] Unknown language code: ${lang}. Falling back to English.`);
      return this.getTranslation("en", key);
    }

    // Split dot-notation keys and traverse the object
    const parts = key.split(".");
    let value: string | undefined = dict;

    for (const part of parts) {
      if (value === undefined || typeof value !== "object") {
        console.warn(`[i18n] Unknown translation key: ${key} in language '${lang}'`);
        return key;
      }
      value = (value as Record<string, unknown>)[part];
    }

    if (typeof value === "string") {
      return value;
    }

    console.warn(`[i18n] Translation key '${key}' in language '${lang}' does not resolve to a string.`);
    return key;
  }

  /**
   * Get the translation resolver for a given language.
   * @param lang - Language code (e.g., 'cs', 'en')
   * @returns TranslationResolver instance with t() method
   */
  public getResolver(lang: Language): TranslationResolver {
    return new DefaultTranslationResolver(this.dictionary[lang] ? { [lang]: this.dictionary[lang] } : undefined);
  }

  /**
   * Convenience method for direct translation lookup.
   * @param lang - Language code (e.g., 'cs', 'en')
   * @param key - Translation key path (e.g., 'pricing.title')
   * @returns Translated string or original key if not found
   */
  public t(lang: Language, key: string): string {
    return this.getTranslation(lang, key);
  }
}

// ============================================================================
// Singleton Instance
// Provides global access to the translation resolver
// ============================================================================

const resolver = new DefaultTranslationResolver();

export const DICTS: LanguageDictionaries = resolver.dictionary;

/**
 * Get a typed translation resolver instance.
 * @param lang - Language code (e.g., 'cs', 'en')
 * @returns TranslationResolver with t() method for autocomplete support
 */
export function getTranslation(lang: Language): TranslationResolver {
  return resolver.getResolver(lang);
}

/**
 * Get a translation string directly.
 * @param lang - Language code (e.g., 'cs', 'en')
 * @param key - Translation key path (e.g., 'pricing.title')
 * @returns Translated string or original key if not found
 */
export function t(lang: Language, key: string): string {
  return resolver.t(lang, key);
}

/**
 * Get the default translation dictionary for a language.
 * @param lang - Language code (e.g., 'cs', 'en')
 * @returns TranslationDict with typed keys
 */
export function getDictionary(lang: Language): TranslationDict {
  return resolver.dictionary[lang] ?? DEFAULT_DICTIONARY.en;
}
