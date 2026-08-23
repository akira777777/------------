import type { MetadataRoute } from "next";
import { brands } from "@/lib/catalog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/repair",
    "/prices",
    "/about",
    "/faq",
    "/contact",
    ...brands.flatMap((brand) => [
      `/repair/${brand.id}`,
      ...brand.models.map((model) => `/repair/${brand.id}/${model.id}`),
    ]),
  ];

  return paths.flatMap((path) => {
    const cs = `${site.url}${path}`;
    return [
      { url: cs, changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.7 },
      { url: `${site.url}/en${path}`, changeFrequency: "weekly" as const, priority: 0.6 },
      { url: `${site.url}/ru${path}`, changeFrequency: "weekly" as const, priority: 0.6 },
    ];
  });
}
