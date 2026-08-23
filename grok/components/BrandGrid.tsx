import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SharedTitle } from "@/components/SharedTitle";
import { brands } from "@/lib/catalog";

export async function BrandGrid() {
  const t = await getTranslations("repair");
  const apple = brands[0];
  const rest = brands.slice(1);

  return (
    <div className="grid gap-12">
      <section>
        <p className="font-mono text-xs uppercase tracking-widest text-kapton">
          {t("appleFirst")}
        </p>
        <Link
          href={`/repair/${apple.id}`}
          prefetch={false}
          transitionTypes={["nav-forward"]}
          className="press mt-3 block border border-line bg-paper p-8 hover:border-graphite"
        >
          <SharedTitle name={`brand-${apple.id}`}>
            <h2 className="font-display text-3xl">{apple.name}</h2>
          </SharedTitle>
          <p className="mt-2 font-mono text-sm text-steel">
            {apple.models.length} {t("models")}
          </p>
        </Link>
      </section>
      <section>
        <p className="font-mono text-xs uppercase tracking-widest text-steel">
          {t("others")}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {rest.map((brand) => (
            <Link
              key={brand.id}
              href={`/repair/${brand.id}`}
              prefetch={false}
              transitionTypes={["nav-forward"]}
              className="press border border-line bg-paper p-6 hover:border-graphite"
            >
              <SharedTitle name={`brand-${brand.id}`}>
                <h2 className="font-display text-2xl">{brand.name}</h2>
              </SharedTitle>
              <p className="mt-2 font-mono text-sm text-steel">
                {brand.models.length} {t("models")}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
