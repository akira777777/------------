import { getTranslations } from "next-intl/server";
import { HeaderNavigation } from "./HeaderNavigation";

export async function SiteHeader() {
  const t = await getTranslations("nav");
  const links = [
    { href: "/repair" as const, label: t("repair") },
    { href: "/prices" as const, label: t("prices") },
    { href: "/about" as const, label: t("about") },
    { href: "/faq" as const, label: t("faq") },
    { href: "/contact" as const, label: t("contact") },
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
      />
    </header>
  );
}
