"use client";

import { Link, usePathname } from "@/i18n/navigation";

type Item = { href: "/repair" | "/prices" | "/about" | "/faq" | "/contact"; label: string };

export function NavLinks({ links }: { links: Item[] }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm sm:gap-x-5">
      {links.map((link) => {
        const active =
          pathname === link.href || pathname.startsWith(`${link.href}/`);
        return (
          <Link
            key={link.href}
            href={link.href}
            prefetch
            transitionTypes={["nav-fade"]}
            className={
              active
                ? "inline-flex min-h-11 items-center border-b-2 border-kapton text-graphite"
                : "press inline-flex min-h-11 items-center text-graphite/80 hover:text-graphite"
            }
            aria-current={active ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
