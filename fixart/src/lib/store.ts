import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Lang } from "./i18n";

function detectInitialLang(): Lang {
  if (typeof navigator === "undefined") return "cs";
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("ru")) return "ru";
  if (lang.startsWith("en")) return "en";
  return "cs";
}

type LangState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useLang = create<LangState>()(
  persist(
    (set) => ({
      lang: detectInitialLang(),
      setLang: (lang) => set({ lang }),
    }),
    {
      name: "fixart-lang",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

type BookingState = {
  open: boolean;
  service: string;
  setOpen: (open: boolean) => void;
  openWith: (service?: string) => void;
};

export const useBooking = create<BookingState>((set) => ({
  open: false,
  service: "display",
  setOpen: (open) => set({ open }),
  openWith: (service) => set({ open: true, service: service ?? "display" }),
}));
