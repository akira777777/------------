import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/portfolio";
import AmbientGlow from "@/components/AmbientGlow";

const geistSans = Geist({ variable: "--font-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} — ${siteConfig.role}`, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["graphic design", "art direction", "editorial design", "Elizaveta Vakalova"],
  openGraph: { title: siteConfig.name, description: siteConfig.description, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased selection:bg-[var(--accent)] selection:text-[var(--ink)]">
        <AmbientGlow />
        {children}
      </body>
    </html>
  );
}
