"use client";

import {
  startTransition,
  useEffect,
  useMemo,
  useOptimistic,
  useRef,
  useState,
  ViewTransition,
} from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import {
  brands,
  REPAIR_NAMES,
  type RepairCategory,
} from "@/lib/catalog";
import { formatRepairPrice, type Locale } from "@/lib/money";
import {
  parsePriceFilters,
  type PriceFilters,
  type PriceRow,
} from "@/lib/prices";

const PAGE_SIZE = 25;

type Option = { id: string; name: string };

const BRAND_OPTIONS: Option[] = brands.map(({ id, name }) => ({ id, name }));

export function PriceExplorer({ locale }: { locale: Locale }) {
  const t = useTranslations("prices");
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const rows = useMemo<PriceRow[]>(
    () =>
      brands.flatMap((brand) =>
        brand.models.flatMap((model) =>
          model.repairs.map((repair) => ({
            id: `${brand.id}-${model.id}-${repair.id}`,
            brandId: brand.id,
            brandName: brand.name,
            modelName: model.name,
            repairId: repair.id,
            repairName: repair.name[locale],
            price: formatRepairPrice(repair, locale),
            href: `/repair/${brand.id}/${model.id}`,
          })),
        ),
      ),
    [locale],
  );
  const repairOptions = useMemo(
    () =>
      (Object.keys(REPAIR_NAMES) as RepairCategory[]).map((id) => ({
        id,
        name: REPAIR_NAMES[id][locale],
      })),
    [locale],
  );
  const allowed = useMemo(
    () => ({
      brands: new Set(BRAND_OPTIONS.map((option) => option.id)),
      repairs: new Set(repairOptions.map((option) => option.id)),
    }),
    [repairOptions],
  );
  const filters = useMemo(
    () =>
      parsePriceFilters(
        {
          brand: searchParams.get("brand") ?? undefined,
          repair: searchParams.get("repair") ?? undefined,
          q: searchParams.get("q") ?? undefined,
          page: searchParams.get("page") ?? undefined,
        },
        allowed,
      ),
    [allowed, searchParams],
  );
  const [optimistic, setOptimistic] = useOptimistic(filters);
  const [searchTerm, setSearchTerm] = useState(filters.query);
  const [previousQuery, setPreviousQuery] = useState(filters.query);

  if (previousQuery !== filters.query) {
    setPreviousQuery(filters.query);
    setSearchTerm(filters.query);
  }

  useEffect(() => () => clearTimeout(searchTimer.current), []);

  const filteredRows = useMemo(() => {
    const query = searchTerm.toLocaleLowerCase().trim();
    return rows.filter((row) => {
      if (optimistic.brandId !== "all" && row.brandId !== optimistic.brandId) {
        return false;
      }
      if (optimistic.category !== "all" && row.repairId !== optimistic.category) {
        return false;
      }
      return (
        !query ||
        row.brandName.toLocaleLowerCase().includes(query) ||
        row.modelName.toLocaleLowerCase().includes(query) ||
        row.repairName.toLocaleLowerCase().includes(query)
      );
    });
  }, [optimistic.brandId, optimistic.category, rows, searchTerm]);

  const pageCount = Math.max(1, Math.ceil(filteredRows.length / PAGE_SIZE));
  const currentPage = Math.min(optimistic.page, pageCount);
  const visibleRows = filteredRows.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  function navigate(next: PriceFilters) {
    const query: Record<string, string> = {};
    if (next.brandId !== "all") query.brand = next.brandId;
    if (next.category !== "all") query.repair = next.category;
    if (next.query) query.q = next.query;
    if (next.page > 1) query.page = String(next.page);

    startTransition(() => {
      setOptimistic(next);
      router.replace({ pathname: "/prices", query }, { scroll: false });
    });
  }

  function apply(next: Partial<PriceFilters>) {
    navigate({ ...optimistic, query: searchTerm.trim(), ...next });
  }

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    clearTimeout(searchTimer.current);
    searchTimer.current = setTimeout(() => {
      navigate({ ...optimistic, query: value.trim(), page: 1 });
    }, 250);
  }

  function resetAll() {
    clearTimeout(searchTimer.current);
    setSearchTerm("");
    navigate({ brandId: "all", category: "all", query: "", page: 1 });
  }

  const isFiltered =
    optimistic.brandId !== "all" ||
    optimistic.category !== "all" ||
    !!searchTerm.trim();

  return (
    <div>
      <div className="flex flex-wrap items-end gap-4 rounded-lg border border-line bg-paper/60 p-4">
        <label className="grid gap-1.5 text-sm font-medium">
          <span>{t("brandLabel")}</span>
          <select
            aria-label={t("allBrands")}
            className="min-h-11 border border-line bg-paper px-3 py-2 text-graphite rounded-md focus:border-steel focus:outline-none"
            value={optimistic.brandId}
            onChange={(event) => apply({ brandId: event.target.value, page: 1 })}
          >
            <option value="all">{t("allBrands")}</option>
            {BRAND_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-1.5 text-sm font-medium">
          <span>{t("repairLabel")}</span>
          <select
            aria-label={t("allRepairs")}
            className="min-h-11 border border-line bg-paper px-3 py-2 text-graphite rounded-md focus:border-steel focus:outline-none"
            value={optimistic.category}
            onChange={(event) => apply({ category: event.target.value, page: 1 })}
          >
            <option value="all">{t("allRepairs")}</option>
            {repairOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid flex-1 gap-1.5 text-sm font-medium min-w-[200px]">
          <span>{t("searchLabel")}</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => handleSearchChange(event.target.value)}
            placeholder={t("searchPlaceholder")}
            className="min-h-11 border border-line bg-paper px-3 py-2 text-graphite rounded-md focus:border-steel focus:outline-none"
          />
        </label>

        {isFiltered ? (
          <button
            type="button"
            onClick={resetAll}
            className="press min-h-11 px-3 text-sm text-steel underline hover:text-graphite"
          >
            {t("resetFilters")}
          </button>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between font-mono text-xs text-steel">
        <p>{t("resultsCount", { count: filteredRows.length })}</p>
        {pageCount > 1 ? (
          <p>{t("pageCount", { page: currentPage, pages: pageCount })}</p>
        ) : null}
      </div>

      {filteredRows.length === 0 ? (
        <div className="mt-8 rounded-lg border border-line bg-paper/40 p-8 text-center">
          <p className="text-sm text-graphite/70">{t("empty")}</p>
          {isFiltered ? (
            <button
              type="button"
              onClick={resetAll}
              className="press mt-4 inline-flex min-h-11 items-center bg-enamel px-4 text-sm text-white"
            >
              {t("resetFilters")}
            </button>
          ) : null}
        </div>
      ) : (
        <>
          <div className="mt-6 overflow-x-auto rounded-lg border border-line bg-paper/80 shadow-xs">
            <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-line font-mono text-xs uppercase tracking-wider text-steel bg-paper">
                  <th className="py-3 px-4 font-medium">{t("colBrand")}</th>
                  <th className="py-3 px-4 font-medium">{t("colModel")}</th>
                  <th className="py-3 px-4 font-medium">{t("colRepair")}</th>
                  <th className="py-3 px-4 font-medium">{t("colPrice")}</th>
                  <th className="py-3 px-4 font-medium">
                    <span className="sr-only">{t("open")}</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {visibleRows.map((row) => (
                  <ViewTransition key={row.id}>
                    <tr className="cv-row hover:bg-aluminum/40 transition-colors">
                      <td className="py-3.5 px-4 font-medium">{row.brandName}</td>
                      <td className="py-3.5 px-4">{row.modelName}</td>
                      <td className="py-3.5 px-4">{row.repairName}</td>
                      <td className="price-num py-3.5 px-4 font-mono font-semibold text-kapton">
                        {row.price}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <Link
                          href={row.href}
                          prefetch={false}
                          transitionTypes={["nav-forward"]}
                          className="inline-flex items-center text-steel font-mono text-xs hover:text-graphite underline"
                        >
                          {t("open")} →
                        </Link>
                      </td>
                    </tr>
                  </ViewTransition>
                ))}
              </tbody>
            </table>
          </div>

          {pageCount > 1 ? (
            <nav
              className="mt-6 flex items-center justify-center gap-3"
              aria-label={t("pagination")}
            >
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => apply({ page: currentPage - 1 })}
                className="press inline-flex min-h-11 items-center border border-line bg-paper px-4 text-sm disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← {t("previous")}
              </button>
              <button
                type="button"
                disabled={currentPage === pageCount}
                onClick={() => apply({ page: currentPage + 1 })}
                className="press inline-flex min-h-11 items-center border border-line bg-paper px-4 text-sm disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t("next")} →
              </button>
            </nav>
          ) : null}
        </>
      )}
    </div>
  );
}
