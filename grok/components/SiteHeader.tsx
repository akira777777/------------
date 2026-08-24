import { getTranslations } from "next-intl/server";
import { HeaderNavigation } from "./HeaderNavigation";

export async function SiteHeader() {
  const t = await getTranslations("nav");
  const links = [
    { hash: "services", label: t("repair") },
    { hash: "pricing", label: t("prices") },
    { hash: "workshop", label: t("about") },
    { hash: "faq", label: t("faq") },
    { hash: "contact", label: t("contact") },
  ];

  return (
    <header
      className="sticky top-0 z-20 border-b border-line bg-aluminum/90 pt-[env(safe-area-inset-top)] backdrop-blur"
      style={{ viewTransitionName: "site-header" }}
    >
      <HeaderNavigation
        links={links}
        skipLabel={t("skip")}
        telegramLabel={t("telegram")}
        menuLabel={t("menu")}
        closeLabel={t("closeMenu")}
        languageLabel={t("language")}
        bookingLabel={t("booking")}
      />
    </header>
  );
}
