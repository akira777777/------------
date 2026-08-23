"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function ErrorView({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("error");

  useEffect(() => {
    // Log exception to diagnostic console in non-production environments
    if (process.env.NODE_ENV !== "production") {
      console.error("FixArt Application Error:", error);
    }
  }, [error]);

  return (
    <div className="mx-auto max-w-xl px-5 py-24" role="alert">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <span className="tape mt-4" />
      <p className="mt-4 text-graphite/80">{t("body")}</p>
      <button
        type="button"
        className="press mt-6 min-h-11 bg-enamel px-4 text-paper font-medium rounded-sm shadow-xs"
        onClick={() => reset()}
      >
        {t("retry")}
      </button>
    </div>
  );
}
