"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Shield, Award, Truck, Lock, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildVisitScheduleWhatsAppLink } from "@/lib/whatsapp";
import { t } from "@/config/i18n";
import { BigaStripe } from "@/components/ui/biga-stripe";

const PILLAR_ICONS = [
  <Award key="award" size={20} strokeWidth={1.5} />,
  <Lock key="lock" size={20} strokeWidth={1.5} />,
  <Truck key="truck" size={20} strokeWidth={1.5} />,
  <Shield key="shield" size={20} strokeWidth={1.5} />,
];

export function PrivateLounge() {
  const pillars = siteConfig.pillars.map((pillar, idx) => ({
    ...pillar,
    icon: PILLAR_ICONS[idx % PILLAR_ICONS.length],
  }));

  return (
    <section id="experience" className="relative w-full py-28 bg-slate-50 dark:bg-[#0B0F17] border-t border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-3">
              <BigaStripe size="xs" />
              <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-slate-400">
                {t.lounge.tag}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white uppercase tracking-tight">
              {t.lounge.title}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-600 dark:text-slate-400">
              {t.lounge.sub}
            </p>
          </div>
        </div>

        {/* Content: Showcase Photo & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Atmospheric Showroom Imagery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative w-full h-[380px] sm:h-[480px] border border-slate-300 dark:border-slate-700 overflow-hidden shadow-lg">
              <Image
                src={siteConfig.media.showroomBannerImage}
                alt={`Showroom ${siteConfig.brand.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              {/* Inscription Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-slate-300 block mb-1">
                  Private Showroom · {siteConfig.brand.cityState}
                </span>
                <p className="font-display text-lg text-white font-bold uppercase tracking-wider">
                  {siteConfig.contact.addresses.join(" / ")}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: The 4 Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const pillarColors = [
                { text: "text-[#1852B4] dark:text-blue-400", hoverBg: "group-hover:bg-[#1852B4]", shadow: "group-hover:shadow-[0_0_15px_rgba(24,82,180,0.35)]", border: "group-hover:border-[#1852B4]/50" },
                { text: "text-[#DC2626] dark:text-red-400", hoverBg: "group-hover:bg-[#DC2626]", shadow: "group-hover:shadow-[0_0_15px_rgba(220,38,38,0.35)]", border: "group-hover:border-[#DC2626]/50" },
                { text: "text-[#717A88] dark:text-slate-300", hoverBg: "group-hover:bg-[#717A88]", shadow: "group-hover:shadow-[0_0_15px_rgba(113,122,136,0.35)]", border: "group-hover:border-[#717A88]/50" },
                { text: "text-[#2563EB] dark:text-blue-400", hoverBg: "group-hover:bg-[#2563EB]", shadow: "group-hover:shadow-[0_0_15px_rgba(37,99,235,0.35)]", border: "group-hover:border-[#2563EB]/50" },
              ][idx % 4];

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 ${pillarColors.border} transition-all duration-300 flex flex-col justify-between shadow-[0_4px_15px_rgba(0,0,0,0.02)] dark:shadow-none overflow-hidden`}
                >
                  {/* Micro Tricolor Hairline on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    <div className={`p-3 w-fit border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/80 ${pillarColors.text} mb-4 transition-all duration-300 ${pillarColors.hoverBg} group-hover:text-white ${pillarColors.shadow}`}>
                      {pillar.icon}
                    </div>
                    <h3 className="font-display text-sm font-bold text-neutral-950 dark:text-white uppercase tracking-wider mb-2 group-hover:text-[#1852B4] dark:group-hover:text-blue-400 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-mono text-neutral-600 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 p-8 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] dark:shadow-none relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
          <div className="text-center sm:text-left">
            <h4 className="font-display text-lg sm:text-xl font-bold text-neutral-950 dark:text-white uppercase tracking-wide">
              {t.lounge.scheduleTitle}
            </h4>
            <p className="text-xs font-mono text-neutral-600 dark:text-slate-400 tracking-wider mt-1">
              {t.lounge.scheduleSub}
            </p>
          </div>

          <a
            href={buildVisitScheduleWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-950 text-white dark:bg-slate-900 hover:bg-[#1852B4] dark:hover:bg-[#1852B4] text-xs font-semibold tracking-widest uppercase transition-all duration-300 border border-slate-700 shadow-sm whitespace-nowrap"
          >
            <BigaStripe size="xs" />
            <span>{t.lounge.scheduleBtn}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
