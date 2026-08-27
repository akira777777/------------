"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send, Check, Copy, ArrowUp } from "lucide-react";

const socialLinks = [
  { name: "Telegram", handle: "@design_akira", url: "https://t.me" },
  { name: "Behance", handle: "behance.net/akira", url: "https://behance.net" },
  { name: "Dribbble", handle: "dribbble.com/akira", url: "https://dribbble.com" },
  { name: "Instagram", handle: "@akira.design", url: "https://instagram.com" },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@portfolio.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0d0d0d] scroll-mt-12">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-900/5 rounded-full blur-[140px]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-violet-900/5 rounded-full blur-[140px]" />
      </div>

      <div className="container-narrow relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium tracking-widest uppercase text-white/60">
            контакты
          </span>

          <h2 className="font-display text-4xl md:text-5xl text-white leading-tight mt-6 mb-4">
            Давайте создадим что-то выдающееся
          </h2>

          <p className="text-body max-w-md mx-auto text-white/40 leading-relaxed text-sm md:text-base">
            Напишите о вашей идее или задаче — обсудим формат, сроки и визуальную концепцию.
          </p>
        </motion.div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Direct contact card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 font-mono mb-4 block">
                Прямой контакт
              </span>
              <h3 className="font-display text-xl text-white mb-2">Электронная почта</h3>
              <p className="text-sm text-white/50 mb-6 font-light">
                Отвечаю в течение 24 часов в рабочие дни.
              </p>
            </div>

            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-between p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/5 text-white/80">
                  <Mail size={18} />
                </div>
                <span className="text-sm md:text-base font-light text-white">
                  hello@portfolio.com
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/50 group-hover:text-white transition-colors">
                {copied ? (
                  <>
                    <span className="text-emerald-400">Скопировано</span>
                    <Check size={14} className="text-emerald-400" />
                  </>
                ) : (
                  <>
                    <span>Копировать</span>
                    <Copy size={14} />
                  </>
                )}
              </div>
            </button>
          </motion.div>

          {/* Social links card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-white/40 font-mono mb-4 block">
                Мессенджеры & Сети
              </span>
              <h3 className="font-display text-xl text-white mb-2">Где меня найти</h3>
              <p className="text-sm text-white/50 mb-6 font-light">
                Оперативная связь и больше работ в социальных сетях.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {socialLinks.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:border-white/20 text-white/70 hover:text-white transition-all text-xs group"
                >
                  <span className="font-medium">{platform.name}</span>
                  <ArrowUpRight size={13} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
            <h3 className="font-display text-xl text-white mb-2">Быстрое сообщение</h3>
            <p className="text-xs text-white/40 mb-6">
              Заполните поля ниже, и я свяжусь с вами в ближайшее время.
            </p>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 font-mono">
                Ваше имя
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                placeholder="Александр"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder:text-white/20 focus:border-white/30 focus:outline-none transition-all"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 font-mono">
                Email для связи
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                placeholder="alex@company.com"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder:text-white/20 focus:border-white/30 focus:outline-none transition-all"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 font-mono">
                О проекте
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                placeholder="Расскажите о вашей задаче, пожеланиях или сроках..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-sm placeholder:text-white/20 focus:border-white/30 focus:outline-none transition-all resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!formState.name || !formState.email || isSubmitting}
              className="w-full py-3.5 rounded-xl bg-white text-black font-medium text-sm tracking-wide flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90 active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-white/5"
            >
              {isSubmitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Send size={16} />
                  </motion.span>
                  <span>Отправка...</span>
                </>
              ) : (
                <>
                  <span>Отправить заявку</span>
                  <ArrowUpRight size={16} />
                </>
              )}
            </button>

            {/* Success toast */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center"
              >
                <p className="text-emerald-400 text-sm font-medium">
                  ✓ Спасибо! Сообщение успешно отправлено.
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} PORTFOLIO. Все права защищены.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors cursor-pointer"
          >
            <span>Наверх</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
