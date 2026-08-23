"use client";

import {
  startTransition,
  useEffect,
  useRef,
  useState,
  ViewTransition,
  type FormEvent,
} from "react";
import { useTranslations } from "next-intl";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "fallback" | "error" | "rate";

type Props = {
  device?: string;
  repair?: string;
  locale: string;
};

export function QuoteForm({ device = "", repair = "", locale }: Props) {
  const t = useTranslations("form");
  const [status, setStatus] = useState<Status>("idle");
  const [shareUrl, setShareUrl] = useState<string>(site.telegramUrl);
  const [nameError, setNameError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "success" || status === "fallback") {
      statusRef.current?.focus();
    }
  }, [status]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const badName = name.length < 2;
    const badContact = contact.length < 3;
    setNameError(badName);
    setContactError(badContact);
    if (badName) {
      nameRef.current?.focus();
      return;
    }
    if (badContact) {
      contactRef.current?.focus();
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          device: String(data.get("device") ?? ""),
          repair: String(data.get("repair") ?? ""),
          note: String(data.get("note") ?? ""),
          website: String(data.get("website") ?? ""),
          locale,
        }),
      });
      const body = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        via?: string;
        telegram?: string;
        error?: string;
      };
      if (response.status === 429) {
        setStatus("rate");
        return;
      }
      if (body.ok && body.via === "link") {
        startTransition(() => {
          setShareUrl(body.telegram || site.telegramUrl);
          setStatus("fallback");
        });
        return;
      }
      if (body.ok) {
        startTransition(() => setStatus("success"));
        return;
      }
      if (body.error === "name") setNameError(true);
      if (body.error === "contact") setContactError(true);
      if (body.telegram) setShareUrl(body.telegram);
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <ViewTransition
      key={status === "success" || status === "fallback" ? "done" : "form"}
      enter="fade-in"
      exit="fade-out"
      default="none"
    >
      {status === "success" ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          className="border border-line bg-paper p-5 text-sm outline-none rounded-md shadow-xs"
          role="status"
          aria-live="polite"
        >
          {t("success")}
        </div>
      ) : status === "fallback" ? (
        <div
          ref={statusRef}
          tabIndex={-1}
          className="border border-line bg-paper p-5 text-sm outline-none rounded-md shadow-xs"
          role="status"
          aria-live="polite"
        >
          <p>{t("fallback")}</p>
          <a
            href={shareUrl}
            className="press mt-3 inline-flex min-h-11 items-center bg-enamel px-4 text-paper font-medium rounded-sm shadow-xs"
            rel="noreferrer"
            target="_blank"
          >
            {t("openTelegram")}
          </a>
        </div>
      ) : (
    <form
      className="relative grid gap-4"
      method="post"
      action="/api/quote"
      onSubmit={onSubmit}
      noValidate
      aria-busy={status === "sending"}
    >
      <input type="hidden" name="locale" value={locale} />
      <div aria-hidden className="absolute left-[-10000px] h-0 w-0 overflow-hidden">
        <label>
          website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{t("name")}</span>
        <input
          ref={nameRef}
          name="name"
          className="min-h-11 border border-line bg-paper px-3 py-2 rounded-md focus:border-steel focus:outline-none"
          autoComplete="name"
          placeholder={t("namePlaceholder")}
          aria-invalid={nameError}
          aria-describedby={nameError ? "quote-name-error" : undefined}
        />
        {nameError ? (
          <span id="quote-name-error" className="text-enamel text-xs font-mono">
            {t("nameError")}
          </span>
        ) : null}
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{t("contact")}</span>
        <input
          ref={contactRef}
          name="contact"
          type="text"
          inputMode="tel"
          spellCheck={false}
          className="min-h-11 border border-line bg-paper px-3 py-2 rounded-md focus:border-steel focus:outline-none"
          autoComplete="tel"
          placeholder={t("contactPlaceholder")}
          aria-invalid={contactError}
          aria-describedby={contactError ? "quote-contact-error" : undefined}
        />
        {contactError ? (
          <span id="quote-contact-error" className="text-enamel text-xs font-mono">
            {t("contactError")}
          </span>
        ) : null}
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{t("device")}</span>
        <input
          name="device"
          defaultValue={device}
          className="min-h-11 border border-line bg-paper px-3 py-2 rounded-md focus:border-steel focus:outline-none"
          placeholder={t("devicePlaceholder")}
          autoComplete="off"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{t("repair")}</span>
        <input
          key={repair}
          name="repair"
          defaultValue={repair}
          className="min-h-11 border border-line bg-paper px-3 py-2 rounded-md focus:border-steel focus:outline-none"
          placeholder={t("repairPlaceholder")}
          autoComplete="off"
        />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">{t("note")}</span>
        <textarea
          name="note"
          rows={3}
          className="min-h-11 border border-line bg-paper px-3 py-2 rounded-md focus:border-steel focus:outline-none"
          placeholder={t("notePlaceholder")}
        />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="submit"
          className="press min-h-11 inline-flex items-center justify-center gap-2 bg-enamel px-5 text-sm font-medium text-paper rounded-sm disabled:opacity-60 shadow-xs"
          disabled={status === "sending"}
        >
          {status === "sending" ? (
            <>
              <svg className="h-4 w-4 animate-spin text-paper" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>{t("sending")}</span>
            </>
          ) : (
            t("submit")
          )}
        </button>
        {status === "error" ? (
          <a href={shareUrl} className="text-sm text-steel underline hover:text-graphite" rel="noreferrer" target="_blank">
            {t("openTelegram")}
          </a>
        ) : null}
      </div>
      {status === "error" ? (
        <p className="text-sm text-enamel font-mono" role="alert">
          {t("error")}
        </p>
      ) : null}
      {status === "rate" ? (
        <p className="text-sm text-enamel font-mono" role="alert">
          {t("rateError")}
        </p>
      ) : null}
    </form>
      )}
    </ViewTransition>
  );
}
