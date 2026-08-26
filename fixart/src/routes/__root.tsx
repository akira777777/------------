import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_TITLE = "FixArt — servis elektroniky Praha";

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ElectronicsRepair",
  "name": "FixArt",
  "image": "/images/mark.webp",
  "telephone": "+420737500587",
  "email": "fear75412@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Biskupcova 31",
    "addressLocality": "Praha 3 – Žižkov",
    "postalCode": "130 00",
    "addressCountry": "CZ",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.0900897,
    "longitude": 14.4719367,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "19:00",
    },
  ],
  "priceRange": "$$",
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_TITLE },
      { name: "theme-color", content: "#111114" },
      {
        name: "description",
        content:
          "Opravíme zařízení. Nové nekupujte. Výměna baterie, displeje a zadního skla iPhonů, Samsungů i MacBooků v Praze 3.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_JSONLD),
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="cs" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
          <Toaster theme="dark" position="top-center" />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
