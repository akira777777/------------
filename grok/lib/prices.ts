function first(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export type PriceFilters = {
  brandId: string;
  category: string;
  query: string;
  page: number;
};

export type PriceRow = {
  id: string;
  brandId: string;
  brandName: string;
  modelName: string;
  repairId: string;
  repairName: string;
  price: string;
  href: string;
};

function pageNumber(value?: string | string[]) {
  const parsed = Number.parseInt(first(value) ?? "", 10);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : 1;
}

export function parsePriceFilters(
  input: {
    brand?: string | string[];
    repair?: string | string[];
    q?: string | string[];
    page?: string | string[];
  },
  allowed: { brands: ReadonlySet<string>; repairs: ReadonlySet<string> },
): PriceFilters {
  const brand = first(input.brand);
  const repair = first(input.repair);
  const q = first(input.q)?.trim() || "";
  return {
    brandId: brand && allowed.brands.has(brand) ? brand : "all",
    category: repair && allowed.repairs.has(repair) ? repair : "all",
    query: q,
    page: pageNumber(input.page),
  };
}
