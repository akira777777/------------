import { getTranslation } from "@/lib/i18n";
import type { Language } from "@/lib/store";

export function Hero({ lang }: { lang: Language }) {
  const t = getTranslation(lang);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
          FixArt
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Premium repair services for your{" "}
          <span className="font-semibold text-purple-400">{t("hero.from")}</span>{" "}
          {t("hero.minutes")}
        </p>

        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30 hover:border-purple-400 transition-colors">
            <div className="text-3xl font-bold text-purple-400 mb-1">98%</div>
            <div className="text-sm text-gray-400">Success Rate</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-blue-500/30 hover:border-blue-400 transition-colors">
            <div className="text-3xl font-bold text-blue-400 mb-1">&lt;2h</div>
            <div className="text-sm text-gray-400">Avg Repair Time</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30 hover:border-pink-400 transition-colors">
            <div className="text-3xl font-bold text-pink-400 mb-1">2yr</div>
            <div className="text-sm text-gray-400">Warranty</div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-12 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-purple-500/30 transition-all duration-300 transform hover:scale-105">
          Book Now
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
