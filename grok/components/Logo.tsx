import { Link } from "@/i18n/navigation";

export function Logo() {
  return (
    <Link
      href="/"
      prefetch
      transitionTypes={["nav-fade"]}
      className="press font-display text-[1.35rem] font-medium tracking-tight text-graphite"
    >
      <span translate="no">FixArt</span>
      <span className="ml-2 inline-block h-1.5 w-6 translate-y-[-2px] bg-kapton align-middle" />
    </Link>
  );
}
