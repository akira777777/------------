import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Имя Фамилия | Графический дизайнер",
  description:
    "Портфолио графического дизайнера — визуальные истории, постерная графика, коллаж, типографика. Работы в стиле glassmorphism и глубокой эстетики.",
  keywords: ["графический дизайн", "постер", "коллаж", "типографика", "бренд"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="antialiased">
      <body
        className={`${playfair.variable} ${inter.variable} font-body bg-[#0a0a0a] text-white min-h-screen`}
      >
        {/* Noise overlay — атмосферная текстура */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Ambient background glow */}
        <div className="ambient-glow pointer-events-none" />
        <div className="ambient-glow pointer-events-none" />

        {/* Main content */}
        {children}
      </body>
    </html>
  );
}
