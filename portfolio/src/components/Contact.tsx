"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0d0d0d]">
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
            Есть вопрос?
          </h2>

          <p className="text-body max-w-md mx-auto text-white/40 leading-relaxed">
            Напишите — обсудим проект. Даже если это не сотрудничество, всегда интересно поговорить о визуальном.
          </p>
        </motion.div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Direct contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel p-8 md:p-10 hover:border-white/20 transition-all duration-500"
          >
            <h3 className="font-display text-xl text-white mb-4">Прямая связь</h3>
            <a
              href="mailto:hello@portfolio.com"
              className="flex items-center gap-4 text-white/70 hover:text-white transition-colors group"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                <Mail size={20} />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</div>
                <div className="text-lg font-light text-white group-hover:text-white/90 transition-colors">
                  hello@portfolio.com
                </div>
              </div>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-8 md:p-10 hover:border-white/20 transition-all duration-500"
          >
            <h3 className="font-display text-xl text-white mb-4">Соцсети</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "Behance", url: "https://behance.net" },
                { name: "Telegram", url: "https://t.me" },
                { name: "Instagram", url: "https://instagram.com" },
                { name: "Dribbble", url: "https://dribbble.com" },
              ].map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all text-sm font-medium"
                >
                  {platform.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="font-display text-2xl text-white mb-6 text-center">Написать сообщение</h3>

          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="glass-panel rounded-2xl p-6 md:p-8 space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">
                  Имя или псевдоним
                </label>
                <input
                  id="name"
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                  placeholder="Ваше имя или псевдоним"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:outline-none focus:ring-0 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                  placeholder="hello@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:outline-none focus:ring-0 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Расскажите о проекте..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-white/20 focus:border-white/30 focus:outline-none focus:ring-0 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={!formState.name || !formState.email || isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-white text-black font-medium tracking-wide flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/90 transition-all"
              >
                {isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Send size={18} />
                    </motion.span>
                    Отправка...
                  </>
                ) : (
                  <>
                    Написать сообщение
                    <ArrowUpRight size={18} />
                  </>
                )}
              </motion.button>
            </div>

            {/* Success message */}
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center"
              >
                <p className="text-green-400 font-medium">Спасибо! Ваше сообщение отправлено.</p>
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 text-center text-white/20 text-xs tracking-wide"
        >
          Все поля в форме — условные. На самом деле просто email выше.
        </motion.p>
      </div>
    </section>
  );
}
