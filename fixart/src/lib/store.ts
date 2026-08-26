import { create } from "zustand";
import type { Lang } from "./i18n";

type LangState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useLang = create<LangState>((set) => ({
  lang: "cs",
  setLang: (lang) => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("fixart_lang", lang);
      }
    } catch {
      // Storage unavailable
    }
    set({ lang });
  },
}));

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
