"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { buildSourcingWhatsAppLink } from "@/lib/whatsapp";
import { t } from "@/config/i18n";
import { BigaStripe } from "@/components/ui/biga-stripe";

export function PersonalSourcing() {
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specs, setSpecs] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!model || !name || !phone) return;

    const whatsappUrl = buildSourcingWhatsAppLink({ model, name, phone, specs });
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="sourcing" className="relative w-full py-24 bg-white dark:bg-[#0B0F17] overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0E131D] p-8 sm:p-14 overflow-hidden shadow-sm">
          {/* Top Tricolor Hairline */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />

          {/* Subtle background glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1852B4]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#DC2626]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Heading and Context */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-3">
                <BigaStripe size="xs" />
                <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-slate-400">
                  {t.sourcing.tag}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-4xl font-extrabold text-neutral-950 dark:text-white uppercase tracking-tight leading-[1.15] mb-5">
                {t.sourcing.titlePart1} <br className="hidden sm:inline" />
                {t.sourcing.titlePart2}
              </h2>

              <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-600 dark:text-slate-400 mb-6 leading-relaxed">
                {t.sourcing.desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-neutral-600 dark:text-slate-400">
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full animate-pulse" />
                  <span>{t.sourcing.check1}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#1852B4] rounded-full animate-pulse" />
                  <span>{t.sourcing.check2}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 bg-[#717A88] rounded-full" />
                  <span>{t.sourcing.check3}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Sourcing Form */}
            <div className="lg:col-span-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-center flex flex-col items-center justify-center shadow-md relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
                  <CheckCircle2 size={40} strokeWidth={1.5} className="text-[#1852B4] dark:text-blue-400 mb-4" />
                  <h3 className="font-display text-xl font-bold uppercase text-neutral-950 dark:text-white tracking-wider mb-2">
                    {t.sourcing.successTitle}
                  </h3>
                  <p className="text-xs font-mono text-neutral-600 dark:text-slate-400 max-w-md mb-6">
                    {t.sourcing.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-slate-300 dark:border-slate-700 text-neutral-900 dark:text-white font-mono text-xs uppercase tracking-widest hover:border-[#1852B4] dark:hover:border-blue-400 transition-colors"
                  >
                    {t.sourcing.btnNew}
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white/80 dark:bg-slate-900/70 p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden"
                >
                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-slate-400 block mb-2">
                      {t.sourcing.labelModel}
                    </label>
                    <input
                      type="text"
                      required
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      placeholder={t.sourcing.placeholderModel}
                      className="w-full bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-600 px-4 py-3 text-xs font-mono tracking-wider focus:outline-none focus:border-[#1852B4] focus:ring-1 focus:ring-[#1852B4]/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-slate-400 block mb-2">
                      {t.sourcing.labelName}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.sourcing.placeholderName}
                      className="w-full bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-600 px-4 py-3 text-xs font-mono tracking-wider focus:outline-none focus:border-[#1852B4] focus:ring-1 focus:ring-[#1852B4]/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-slate-400 block mb-2">
                      {t.sourcing.labelPhone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.sourcing.placeholderPhone}
                      className="w-full bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-600 px-4 py-3 text-xs font-mono tracking-wider focus:outline-none focus:border-[#1852B4] focus:ring-1 focus:ring-[#1852B4]/30 transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-slate-400 block mb-2">
                      {t.sourcing.labelSpecs}
                    </label>
                    <textarea
                      rows={3}
                      value={specs}
                      onChange={(e) => setSpecs(e.target.value)}
                      placeholder={t.sourcing.placeholderSpecs}
                      className="w-full bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-slate-600 px-4 py-3 text-xs font-mono tracking-wider focus:outline-none focus:border-[#1852B4] focus:ring-1 focus:ring-[#1852B4]/30 transition-colors resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="relative w-full py-4 bg-neutral-950 text-white dark:bg-slate-900 hover:bg-[#1852B4] dark:hover:bg-[#1852B4] font-semibold text-xs font-mono tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group shadow-md border border-slate-700 overflow-hidden"
                    >
                      <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
                      <BigaStripe size="xs" />
                      <span>{t.sourcing.btnSubmit}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
