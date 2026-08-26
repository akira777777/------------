import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { Toaster } from "sonner";
import { SHOP } from "@/lib/shop";
import appCss from "../styles.css?url";

const APP_NAME = "FixArt";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SHOP.name,
  description:
    "Servis elektroniky v Praze 3. Výměna baterií, displejů a zadního skla pro iPhone, Samsung a MacBook se zárukou 12 měsíců.",
  telephone: SHOP.phone,
  email: SHOP.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SHOP.address.street,
    addressLocality: SHOP.address.city,
    postalCode: SHOP.address.zip,
    addressCountry: "CZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SHOP.geo.lat,
    longitude: SHOP.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  priceRange: "1290–14990 Kč",
  sameAs: [SHOP.telegram],
  image: "/og.jpg",
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      { name: "theme-color", content: "#111114" },
      {
        name: "description",
        content:
          "Servis elektroniky v Praze 3. Výměna baterií, displejů a zadního skla pro iPhone, Samsung a MacBook se zárukou 12 měsíců.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap",
      },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="cs" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
