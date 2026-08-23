import { useEffect, useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send, TrainFront, User } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitBooking } from "@/lib/booking.functions";
import { WEEKLY_HOURS } from "@/lib/hours";
import { DICTS } from "@/lib/i18n";
import { BOOKING_SERVICES, DEVICES, SHOP } from "@/lib/shop";
import { useLang } from "@/lib/store";
import { cn } from "@/lib/utils";

function serviceLabel(t: (typeof DICTS)["cs"], id: string) {
  if (id === "other") return t.contact.other;
  if (id in t.repairs) return t.repairs[id as keyof typeof t.repairs];
  if (id in t.services) {
    const value = t.services[id as keyof typeof t.services];
    return typeof value === "string" ? value : t.contact.other;
  }
  return t.contact.other;
}

function deviceLabel(t: (typeof DICTS)["cs"], device: string) {
  return device === "Jiné" ? t.contact.deviceOther : device;
}

export function BookingForm({
  defaultService = "display",
  onDone,
  idPrefix = "contact",
}: {
  defaultService?: string;
  onDone?: () => void;
  idPrefix?: string;
}) {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];
  const submit = useServerFn(submitBooking);
  const [service, setService] = useState(defaultService);
  const [sending, setSending] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    if (name.length < 2 || phone.length < 6) {
      toast.error(t.contact.error);
      return;
    }
    setSending(true);
    try {
      const result = await submit({
        data: {
          name,
          phone,
          device: String(data.get("device") ?? ""),
          service: String(data.get("service") ?? service) as (typeof BOOKING_SERVICES)[number],
          message: String(data.get("message") ?? ""),
          lang,
          company: String(data.get("company") ?? ""),
        },
      });
      if (!result.ok) {
        toast.error(
          result.error === "phone"
            ? t.contact.errorPhone
            : result.error === "rate"
              ? t.contact.errorRate
              : t.contact.errorServer,
        );
        return;
      }
      toast.success(t.contact.success);
      window.open(result.telegramUrl, "_blank", "noopener,noreferrer");
      form.reset();
      onDone?.();
    } catch {
      toast.error(t.contact.errorServer);
    } finally {
      setSending(false);
    }
  }

  if (!mounted) {
    return <div className="h-72 rounded-md bg-surface-2" aria-hidden />;
  }

  return (
    <form onSubmit={onSubmit} className="relative space-y-4">
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor={`${idPrefix}-company`}>Company</label>
        <input id={`${idPrefix}-company`} name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-name`}>{t.contact.name}</Label>
          <Input id={`${idPrefix}-name`} name="name" autoComplete="name" required minLength={2} />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-phone`}>{t.contact.phoneLabel}</Label>
          <Input
            id={`${idPrefix}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="737 500 587"
            required
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-device`}>{t.contact.device}</Label>
          <select
            id={`${idPrefix}-device`}
            name="device"
            defaultValue={DEVICES[0]}
            className="h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {DEVICES.map((device) => (
              <option key={device} value={device}>
                {deviceLabel(t, device)}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-service`}>{t.contact.service}</Label>
          <select
            id={`${idPrefix}-service`}
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {BOOKING_SERVICES.map((id) => (
              <option key={id} value={id}>
                {serviceLabel(t, id)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-message`}>{t.contact.message}</Label>
        <Textarea id={`${idPrefix}-message`} name="message" rows={3} />
      </div>
      <Button type="submit" className="w-full sm:w-auto" disabled={sending}>
        {sending ? t.contact.sending : t.contact.send}
      </Button>
    </form>
  );
}

export function Contact() {
  const lang = useLang((s) => s.lang);
  const t = DICTS[lang];

  return (
    <section id="kontakt" className="scroll-mt-24 py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-[0.22em] text-muted">{t.contact.kicker}</p>
          <h2 className="mt-3 font-semibold tracking-tight text-section">{t.contact.title}</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{t.contact.lead}</p>

          <div className="mt-6 overflow-hidden rounded-xl bg-surface p-2 shadow-[var(--shadow-border)]">
            <img
              src="/images/street.webp"
              alt={t.contact.altStreet}
              width={1400}
              height={788}
              loading="lazy"
              decoding="async"
              className="media aspect-video w-full rounded-lg object-cover"
            />
          </div>

          <dl className="mt-8 space-y-5">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-4 text-accent" />
              <div>
                <dt className="text-sm font-medium text-fg">{t.contact.address}</dt>
                <dd className="mt-1 text-sm text-muted">
                  {SHOP.address.street}
                  <br />
                  {SHOP.address.zip} {SHOP.address.city}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <TrainFront className="mt-0.5 size-4 text-accent" />
              <div>
                <dt className="text-sm font-medium text-fg">{t.contact.transit}</dt>
                <dd className="mt-1 text-sm text-muted">
                  {t.contact.stop} {SHOP.transit}
                  <br />
                  {SHOP.trams}
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 size-4 text-accent" />
              <div>
                <dt className="text-sm font-medium text-fg">{t.contact.hours}</dt>
                <dd className="mt-2 space-y-1">
                  {WEEKLY_HOURS.map((row) => (
                    <div key={row.day} className="flex justify-between gap-8 text-sm text-muted">
                      <span>{t.days[row.day]}</span>
                      <span className={cn("tabular-nums", !row.open && "text-subtle")}>
                        {row.open && row.close ? `${row.open}–${row.close}` : t.closed}
                      </span>
                    </div>
                  ))}
                  <p className="pt-2 text-sm text-subtle">{t.contact.hoursNote}</p>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 size-4 text-accent" />
              <div>
                <dt className="text-sm font-medium text-fg">{t.contact.phone}</dt>
                <dd className="mt-1">
                  <a href={SHOP.phoneHref} className="text-sm text-muted hover:text-fg">
                    {SHOP.phone}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 size-4 text-accent" />
              <div>
                <dt className="text-sm font-medium text-fg">{t.contact.email}</dt>
                <dd className="mt-1">
                  <a href={SHOP.emailHref} className="text-sm text-muted hover:text-fg">
                    {SHOP.email}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-3">
              <User className="mt-0.5 size-4 text-accent" />
              <div>
                <dt className="text-sm font-medium text-fg">{t.contact.person}</dt>
                <dd className="mt-1 text-sm text-muted">{SHOP.person}</dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
            <iframe
              title={t.contact.mapTitle}
              src={SHOP.osmEmbed}
              className="map-embed h-56 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="telegram" asChild>
              <a href={SHOP.telegram} target="_blank" rel="noreferrer">
                <Send />
                {t.contact.write}
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={SHOP.maps} target="_blank" rel="noreferrer">
                {t.contact.map}
              </a>
            </Button>
          </div>
        </div>

        <div className="rounded-xl bg-surface p-6 shadow-[var(--shadow-border)]">
          <h3 className="text-lg font-medium">{t.contact.formTitle}</h3>
          <div className="mt-6">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}