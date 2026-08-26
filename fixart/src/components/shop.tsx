import { getTranslation } from "@/lib/i18n";
import type { Language } from "@/lib/store";

export function Shop() {
  const t = getTranslation("en"); // TODO: Add language selector later

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full space-y-6">
        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            {t("shop.title")}
          </h1>
          <p className="text-xl text-gray-200">{t("shop.subtitle")}</p>
        </header>

        {/* Navigation */}
        <nav className="bg-white/5 backdrop-blur-lg rounded-xl p-4 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">{t("shop.nav.categories")}</h2>
            <button className="px-3 py-1.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity">
              {t("shop.nav.view_all")}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {/* Category 1 */}
            <button className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl p-3 text-left hover:bg-white/5 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden">
                <span className="text-3xl">{t("shop.nav.art.icon")}</span>
              </div>
              <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">
                {t("shop.nav.art.title")}
              </h3>
            </button>

            {/* Category 2 */}
            <button className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl p-3 text-left hover:bg-white/5 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden">
                <span className="text-3xl">{t("shop.nav.prints.icon")}</span>
              </div>
              <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">
                {t("shop.nav.prints.title")}
              </h3>
            </button>

            {/* Category 3 */}
            <button className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl p-3 text-left hover:bg-white/5 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden">
                <span className="text-3xl">{t("shop.nav.commissions.icon")}</span>
              </div>
              <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">
                {t("shop.nav.commissions.title")}
              </h3>
            </button>

            {/* Category 4 */}
            <button className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-3 text-left hover:bg-white/5 transition-all group">
              <div className="aspect-square bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg mb-2 flex items-center justify-center relative overflow-hidden">
                <span className="text-3xl">{t("shop.nav.custom.icon")}</span>
              </div>
              <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">
                {t("shop.nav.custom.title")}
              </h3>
            </button>
          </div>
        </nav>

        {/* Featured Collections */}
        <section className="bg-white/5 backdrop-blur-lg rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">{t("shop.collections")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Collection 1 */}
            <button className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl p-4 text-left hover:bg-white/5 transition-all group">
              <div className="aspect-video bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden cursor-pointer">
                <span className="text-4xl">{t("shop.collections.artworks.icon")}</span>
              </div>
              <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">
                {t("shop.collections.artworks.title")}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{t("shop.collections.artworks.description")}</p>
            </button>

            {/* Collection 2 */}
            <button className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-xl p-4 text-left hover:bg-white/5 transition-all group">
              <div className="aspect-video bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden cursor-pointer">
                <span className="text-4xl">{t("shop.collections.prints.icon")}</span>
              </div>
              <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">
                {t("shop.collections.prints.title")}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{t("shop.collections.prints.description")}</p>
            </button>

            {/* Collection 3 */}
            <button className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-xl p-4 text-left hover:bg-white/5 transition-all group">
              <div className="aspect-video bg-gradient-to-br from-indigo-500/30 to-blue-500/30 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden cursor-pointer">
                <span className="text-4xl">{t("shop.collections.commissions.icon")}</span>
              </div>
              <h3 className="font-bold text-white group-hover:text-pink-400 transition-colors">
                {t("shop.collections.commissions.title")}
              </h3>
              <p className="text-sm text-gray-400 mt-1">{t("shop.collections.commissions.description")}</p>
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 pt-4 border-t border-white/10">
          <p>{t("shop.footer")}</p>
        </footer>
      </div>
    </div>
  );
}
