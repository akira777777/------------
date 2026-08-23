import { getTranslations } from "next-intl/server";
import { PageTransition } from "@/components/PageTransition";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <PageTransition>
      <div className="mx-auto max-w-xl px-5 py-24">
        <h1 className="font-display text-4xl">404</h1>
        <span className="tape mt-4" />
        <p className="mt-4">{t("body")}</p>
        <Link
          href="/"
          prefetch
          transitionTypes={["nav-fade"]}
          className="press mt-6 inline-flex min-h-11 items-center text-steel underline hover:text-graphite"
        >
          FixArt
        </Link>
      </div>
    </PageTransition>
  );
}
