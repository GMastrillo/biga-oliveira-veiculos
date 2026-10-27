"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
import { Vehicle } from "@/data/inventory";
import { buildVehicleWhatsAppLink } from "@/lib/whatsapp";
import { t } from "@/config/i18n";
import { BigaStripe } from "@/components/ui/biga-stripe";

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export function VehicleDetailModal({ vehicle, onClose }: VehicleDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!vehicle) return null;

  const whatsappUrl = buildVehicleWhatsAppLink(vehicle);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 dark:bg-black/90 backdrop-blur-2xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl bg-white dark:bg-[#0B0F17] border border-slate-300 dark:border-slate-800 overflow-hidden z-10 my-auto shadow-[0_25px_60px_rgba(0,0,0,0.2)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.9)] transition-colors"
        >
          {/* Top Tricolor Signature Hairline */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88] z-30" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-20 p-2.5 bg-white/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-700 text-neutral-600 dark:text-slate-400 hover:text-[#DC2626] dark:hover:text-red-400 hover:border-[#DC2626] dark:hover:border-red-500 transition-colors"
            aria-label={t.modal.closeAria}
          >
            <X size={20} strokeWidth={1.5} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left: Vehicle Image Showcase */}
            <div className="lg:col-span-6 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 dark:from-slate-900/60 dark:via-slate-950 dark:to-[#070A0F] p-8 sm:p-12 flex flex-col justify-between relative border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800 transition-colors">
              <div className="flex items-center gap-2.5">
                <BigaStripe size="xs" />
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500 dark:text-slate-400">
                  {vehicle.brand}
                </span>
                {vehicle.armored && (
                  <span className="px-2.5 py-0.5 border border-blue-500/40 bg-blue-600/10 text-[9px] font-mono tracking-widest text-[#1852B4] dark:text-blue-400 uppercase">
                    {t.modal.armoredBadge}
                  </span>
                )}
              </div>

              <div className="relative w-full h-[260px] sm:h-[360px] my-6 flex items-center justify-center">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 dark:text-slate-500 uppercase tracking-widest">
                <span>{t.modal.officialPhoto}</span>
                <span>{t.modal.inspected}</span>
              </div>
            </div>

            {/* Right: Technical Dossier and Negotiation */}
            <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between bg-white dark:bg-[#0B0F17] transition-colors">
              <div>
                <span className="text-[10px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-slate-400 block mb-1">
                  {t.modal.tag}
                </span>

                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white uppercase tracking-tight mb-2">
                  {vehicle.model}
                </h2>

                <p className="text-xs font-mono tracking-wider text-neutral-500 dark:text-slate-400 uppercase mb-6">
                  {vehicle.version}
                </p>

                {/* Primary Stats Grid com Acabamento Motorsport */}
                <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 mb-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-slate-500 block">
                      {t.modal.year}
                    </span>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wider tabular-nums">
                      {vehicle.year}
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                      <span className="text-[9px] font-mono uppercase text-neutral-400">Origem Biga</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-slate-500 block">
                      {t.modal.mileage}
                    </span>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wider tabular-nums">
                      {vehicle.km}
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-semibold">100% Cautelar</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-slate-500 block">
                      {t.modal.power}
                    </span>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wider tabular-nums">
                      {vehicle.power}
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1852B4]" />
                      <span className="text-[9px] font-mono uppercase text-[#1852B4] dark:text-blue-400 font-semibold">Potência Real</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-slate-500 block">
                      {t.modal.acceleration}
                    </span>
                    <span className="text-xs font-bold text-neutral-900 dark:text-white tracking-wider tabular-nums">
                      {vehicle.acceleration}
                    </span>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#717A88]" />
                      <span className="text-[9px] font-mono uppercase text-neutral-400">0 a 100 km/h</span>
                    </div>
                  </div>
                </div>

                {/* Highlight Specs */}
                {vehicle.highlightSpecs && vehicle.highlightSpecs.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-slate-400 block mb-2">
                      {t.modal.highlights}
                    </span>
                    <div className="space-y-1.5">
                      {vehicle.highlightSpecs.map((spec, i) => (
                        <div
                          key={spec.label}
                          className="flex items-center justify-between text-xs py-2 px-3 bg-slate-50/80 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/80 font-mono"
                        >
                          <span className="text-neutral-500 dark:text-slate-400 flex items-center gap-2">
                            <span className={`w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? "bg-[#1852B4]" : "bg-[#DC2626]"}`} />
                            {spec.label}
                          </span>
                          <span className="text-neutral-950 dark:text-white font-semibold">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Price & Negotiation CTA */}
              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 dark:text-slate-400">
                    {t.hero.price}
                  </span>
                  <span className="font-display text-2xl font-black text-[#1852B4] dark:text-blue-400 tracking-wider tabular-nums">
                    {vehicle.price}
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full py-4 bg-neutral-950 text-white dark:bg-slate-900 hover:bg-[#1852B4] dark:hover:bg-[#1852B4] font-semibold text-xs font-mono tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group shadow-md border border-slate-700 overflow-hidden hover:shadow-[0_0_25px_rgba(24,82,180,0.45)]"
                >
                  <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
                  <BigaStripe size="xs" />
                  <span>{t.modal.btnWa}</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
