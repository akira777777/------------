import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export async function SiteFooter() {
  const [t, nav] = await Promise.all([
    getTranslations("footer"),
    getTranslations("nav"),
  ]);

  return (
    <footer
      className="mt-auto border-t border-line"
      style={{ viewTransitionName: "site-footer" }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-sm text-sm text-graphite/70">{t("line")}</p>
          <p className="mt-1 font-mono text-xs text-steel">{t("prices")}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <a
            href={site.telegramUrl}
            className="hover:text-kapton"
            rel="noreferrer"
            target="_blank"
          >
            Telegram {site.telegram}
          </a>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-kapton">
            {site.phone}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-kapton">
            {site.email}
          </a>
          <p>
            {site.street}, {site.district}
          </p>
          <Link
            href="/contact"
            prefetch
            transitionTypes={["nav-fade"]}
            className="hover:text-kapton"
          >
            {nav("contact")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
