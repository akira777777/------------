import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { BookingDialog } from "@/components/booking-dialog";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Reviews } from "@/components/reviews";
import { Services, Steps } from "@/components/services";
import { MobileDock, SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Warranty } from "@/components/warranty";
import { DICTS } from "@/lib/i18n";
import { useLang } from "@/lib/store";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const lang = useLang((state) => state.lang);
  const t = DICTS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.metaTitle;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute("content", t.metaDesc);
  }, [lang, t.metaDesc, t.metaTitle]);

  return (
    <div id="top" className="min-h-dvh overflow-x-clip pb-20 xl:pb-0">
      <SiteHeader />
      <main id="obsah" tabIndex={-1}>
        <Hero />
        <Services />
        <Steps />
        <Pricing />
        <Warranty />
        <About />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
      <MobileDock />
      <BookingDialog />
    </div>
  );
}
