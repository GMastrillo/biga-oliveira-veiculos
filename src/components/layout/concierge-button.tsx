"use client";

import { motion } from "motion/react";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { buildConciergeGeneralWhatsAppLink } from "@/lib/whatsapp";
import { t } from "@/config/i18n";
import { BigaStripe } from "@/components/ui/biga-stripe";

interface ConciergeButtonProps {
  currentVehicleName?: string;
}

export function ConciergeButton({ currentVehicleName }: ConciergeButtonProps) {
  const whatsappUrl = buildConciergeGeneralWhatsAppLink(currentVehicleName);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-40 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 px-4 py-3.5 bg-white/95 dark:bg-[#0B0F17]/90 backdrop-blur-xl border border-slate-300 dark:border-slate-800 text-neutral-900 dark:text-white hover:border-[#1852B4] dark:hover:border-blue-500 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* Top Tricolor Line */}
        <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />

        <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:bg-[#1852B4] text-[#1852B4] dark:text-blue-400 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(24,82,180,0.6)]">
          <MessageSquare size={16} strokeWidth={1.5} />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-[#DC2626] rounded-full border-2 border-white dark:border-[#0B0F17] animate-pulse" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <BigaStripe size="xs" />
            <span className="text-[10px] font-mono tracking-[0.25em] text-neutral-500 dark:text-slate-400 uppercase">
              {t.conciergeButton.sub}
            </span>
          </div>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-neutral-950 dark:text-white group-hover:text-[#1852B4] dark:group-hover:text-blue-400 transition-colors">
            {t.conciergeButton.title}
          </span>
        </div>
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          className="text-neutral-400 group-hover:text-[#1852B4] dark:group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </motion.div>
  );
}
