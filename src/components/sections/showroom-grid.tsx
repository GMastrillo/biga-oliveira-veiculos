"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Vehicle } from "@/data/inventory";
import { buildVehicleWhatsAppLink } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { t } from "@/config/i18n";
import { BigaStripe } from "@/components/ui/biga-stripe";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface ShowroomGridProps {
  vehicles: Vehicle[];
  totalAvailable?: number;
  onOpenVehicleDetail: (vehicle: Vehicle) => void;
}

export function ShowroomGrid({ vehicles, totalAvailable, onOpenVehicleDetail }: ShowroomGridProps) {
  const pathname = usePathname();

  if (vehicles.length === 0) {
    return (
      <section id="estoque" className="max-w-7xl mx-auto px-6 sm:px-8 py-20 text-center relative">
        <div id="showroom" className="absolute -top-24 left-0 pointer-events-none" />
        <div className="py-16 px-6 border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/60 max-w-xl mx-auto">
          <p className="text-sm font-mono tracking-[0.25em] uppercase text-neutral-600 dark:text-slate-400 mb-4">
            {t.grid.empty}
          </p>
          <Link
            href="/#sourcing"
            className="inline-block px-6 py-3 bg-[#1852B4] text-white text-xs font-mono tracking-[0.2em] uppercase"
          >
            {t.nav.sourcing}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section id="estoque" className="max-w-7xl mx-auto px-6 sm:px-8 py-24 transition-colors relative">
      <div id="showroom" className="absolute -top-24 left-0 pointer-events-none" />
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-black/10 dark:border-slate-800 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BigaStripe size="xs" />
            <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-slate-400">
              {t.grid.sectionLabel}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-950 dark:text-white uppercase tracking-tight">
            {pathname === "/estoque" ? t.grid.sectionHeading : `${t.nav.inventory} ${siteConfig.brand.shortName}`}
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="max-w-md text-xs sm:text-sm font-mono tracking-wider text-neutral-600 dark:text-slate-400">
            {t.grid.sectionSub}
          </p>
          {pathname !== "/estoque" && (
            <Link
              href="/estoque"
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-700 hover:border-[#1852B4] hover:text-[#1852B4] dark:hover:border-blue-400 dark:hover:text-blue-400 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-900 dark:text-white transition-colors whitespace-nowrap"
            >
              <span>{t.grid.viewAll}</span>
              <ArrowUpRight size={13} />
            </Link>
          )}
        </div>
      </div>

      {/* Grid of Vehicles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {vehicles.map((vehicle, index) => {
          const isV8OrPerf = vehicle.tag?.includes("V8") || vehicle.tag?.includes("BENGA") || vehicle.tag?.includes("STAGE");
          const isPlacaPreta = vehicle.tag?.includes("PLACA PRETA") || vehicle.tag?.includes("RARIDADE");
          const isBlindado = vehicle.armored;

          return (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="h-full"
            >
              <SpotlightCard
                glowColor={isV8OrPerf ? "red" : isBlindado ? "blue" : "default"}
                className="group relative flex flex-col h-full bg-white dark:bg-[#0B0F17] border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-none overflow-hidden"
              >
                {/* Card Top Tricolor Accent Line (Always subtle, vibrant on hover) */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88] opacity-70 group-hover:opacity-100 group-hover:h-[3px] transition-all duration-300 z-20" />

                {/* Card Image Container */}
                <div
                  onClick={() => onOpenVehicleDetail(vehicle)}
                  className="relative w-full h-[260px] bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900/60 dark:to-slate-950 overflow-hidden cursor-pointer flex items-center justify-center p-4 transition-colors"
                >
                  {/* Armored Badge */}
                  {isBlindado && (
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 bg-[#1852B4]/90 border border-blue-400 text-white text-[10px] font-mono tracking-widest uppercase backdrop-blur-md shadow-[0_0_12px_rgba(24,82,180,0.4)]">
                      <ShieldCheck size={12} strokeWidth={1.5} />
                      <span>BLINDADO</span>
                    </div>
                  )}

                  {/* Specific Distinct Tag */}
                  {vehicle.tag && !isBlindado && (
                    <div
                      className={`absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 text-[10px] font-mono tracking-widest uppercase backdrop-blur-md shadow-sm border ${
                        isV8OrPerf
                          ? "bg-red-950/90 text-red-200 border-red-500/70 shadow-[0_0_12px_rgba(220,38,38,0.35)]"
                          : isPlacaPreta
                          ? "bg-slate-900/90 text-slate-200 border-slate-600"
                          : "bg-blue-950/90 text-blue-200 border-blue-500/70 shadow-[0_0_12px_rgba(24,82,180,0.35)]"
                      }`}
                    >
                      {isV8OrPerf ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />
                      ) : (
                        <BigaStripe size="xs" />
                      )}
                      <span>{vehicle.tag}</span>
                    </div>
                  )}

                  {/* Vehicle Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.brand} ${vehicle.model}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                    />
                  </div>

                  {/* Hover Overlay with "Ver Detalhes" */}
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="relative flex items-center gap-2 px-5 py-2.5 bg-neutral-950 text-white text-xs font-mono tracking-widest uppercase shadow-xl border border-slate-700 overflow-hidden hover:border-[#1852B4] transition-colors">
                      <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
                      <span>Ver Detalhes</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-white dark:bg-[#0B0F17]/90 transition-colors">
                  <div>
                    {/* Brand with tiny stripe */}
                    <div className="flex items-center gap-2 mb-1">
                      <BigaStripe size="xs" />
                      <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500 dark:text-slate-400 block">
                        {vehicle.brand}
                      </span>
                    </div>

                    {/* Model Title */}
                    <h3
                      onClick={() => onOpenVehicleDetail(vehicle)}
                      className="font-display text-xl font-bold text-neutral-950 dark:text-white uppercase tracking-tight group-hover:text-[#1852B4] dark:group-hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {vehicle.model}
                    </h3>

                    {/* Subtitle / Engine Version */}
                    <p className="text-[11px] font-mono tracking-wider text-neutral-500 dark:text-slate-400 uppercase truncate mt-0.5 mb-5">
                      {vehicle.version}
                    </p>

                    {/* Year & Km Details */}
                    <div className="grid grid-cols-2 gap-2 py-3 border-y border-slate-200 dark:border-slate-800 mb-5">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-slate-500 block">
                          {t.grid.yearModel}
                        </span>
                        <span className="text-xs font-semibold text-neutral-900 dark:text-slate-200 tracking-wider tabular-nums">
                          {vehicle.year}
                        </span>
                      </div>

                      <div>
                        <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-slate-500 block">
                          {t.grid.mileage}
                        </span>
                        <span className="text-xs font-semibold text-neutral-900 dark:text-slate-200 tracking-wider tabular-nums">
                          {vehicle.km}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-400 dark:text-slate-500">
                        {t.grid.price}
                      </span>
                      <span className="text-lg font-black text-[#1852B4] dark:text-blue-400 tracking-wider tabular-nums">
                        {vehicle.price}
                      </span>
                    </div>

                    <a
                      href={buildVehicleWhatsAppLink(vehicle)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-4 py-2 border border-slate-300 dark:border-slate-700 hover:border-[#1852B4] hover:bg-[#1852B4] hover:text-white dark:hover:bg-[#1852B4] dark:hover:border-[#1852B4] dark:hover:text-white text-neutral-900 dark:text-white text-[10px] font-mono tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_15px_rgba(24,82,180,0.4)]"
                    >
                      {t.grid.proposal}
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA to view full inventory when on home page */}
      {pathname !== "/estoque" && (
        <div className="mt-14 pt-8 border-t border-black/10 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BigaStripe size="xs" />
            <span className="text-xs font-mono tracking-[0.2em] uppercase text-neutral-600 dark:text-slate-400">
              Exibindo {vehicles.length} de {totalAvailable ?? vehicles.length} veículos disponíveis no estoque
            </span>
          </div>

          <Link
            href="/estoque"
            className="relative px-8 py-4 bg-neutral-950 text-white dark:bg-slate-900 hover:bg-[#1852B4] dark:hover:bg-[#1852B4] font-semibold text-xs font-mono tracking-[0.25em] uppercase transition-all duration-300 flex items-center gap-3 shadow-md border border-slate-700 hover:shadow-[0_0_25px_rgba(24,82,180,0.4)] group"
          >
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
            <BigaStripe size="xs" />
            <span>{t.grid.viewAll}</span>
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      )}
    </section>
  );
}
