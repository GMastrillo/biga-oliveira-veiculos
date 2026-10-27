"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { t } from "@/config/i18n";
import { BigaStripe } from "@/components/ui/biga-stripe";

interface FilterBarProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  totalResults: number;
}

const BRANDS = [
  "VOLKSWAGEN",
  "CHEVROLET",
  "FORD",
  "RENAULT",
  "TOYOTA",
  "MITSUBISHI",
  "JEEP",
  "LAND ROVER",
  "RAM",
  "SUZUKI",
  "TROLLER",
  "HYUNDAI",
  "CHRYSLER",
];

export function FilterBar({
  selectedCategory,
  onSelectCategory,
  selectedBrand,
  onSelectBrand,
  searchTerm,
  onSearchChange,
  totalResults,
}: FilterBarProps) {
  const categories = [
    { key: "TODOS", label: t.filters.all },
    { key: "SUPERESPORTIVOS", label: t.filters.supersports },
    { key: "SUVS DE LUXO", label: t.filters.luxurySuvs },
    { key: "BLINDADOS", label: t.filters.armored },
    { key: "0 KM", label: t.filters.zeroKm },
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 -mt-6">
      <div className="bg-white/95 dark:bg-[#0B0F17]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-colors relative overflow-hidden">
        {/* Top Tricolor Hairline */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />

        {/* Top: Category Tabs */}
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-black/10 dark:border-slate-800 flex-wrap">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const isActive =
                cat.key === "TODOS"
                  ? selectedCategory === "TODOS"
                  : selectedCategory.toLowerCase() === cat.key.toLowerCase();

              return (
                <button
                  key={cat.key}
                  onClick={() => onSelectCategory(cat.key)}
                  className={`px-4 py-2 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-200 whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? "bg-neutral-950 text-white dark:bg-slate-900 dark:text-white font-bold shadow-sm border-b-2 border-[#1852B4]"
                      : "bg-slate-100 dark:bg-slate-900/40 text-neutral-600 dark:text-slate-400 hover:text-[#1852B4] dark:hover:text-blue-400 hover:bg-slate-200 dark:hover:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800/60"
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full inline-block" />}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.25em] text-neutral-500 dark:text-slate-400 uppercase">
            <BigaStripe size="xs" />
            <span>{totalResults} {totalResults === 1 ? t.filters.countSingular : t.filters.countPlural}</span>
          </div>
        </div>

        {/* Bottom: Search Input & Brand Selector */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-5 items-center">
          {/* Search Input */}
          <div className="md:col-span-7 relative">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-slate-500"
            />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder={t.filters.searchPlaceholder}
              className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-slate-500 pl-11 pr-4 py-3 text-xs tracking-wider font-mono focus:outline-none focus:border-[#1852B4] focus:ring-2 focus:ring-[#1852B4]/30 shadow-inner transition-all"
            />
          </div>

          {/* Brand Selector */}
          <div className="md:col-span-5 relative">
            <div className="relative">
              <select
                value={selectedBrand}
                onChange={(e) => onSelectBrand(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-neutral-900 dark:text-white pl-4 pr-10 py-3 text-xs tracking-[0.2em] font-mono uppercase appearance-none focus:outline-none focus:border-[#1852B4] focus:ring-2 focus:ring-[#1852B4]/30 cursor-pointer transition-all"
              >
                <option value="TODAS AS MARCAS" className="bg-white dark:bg-slate-900 text-neutral-900 dark:text-white">
                  {t.filters.allBrands}
                </option>
                {BRANDS.map((brand) => (
                  <option key={brand} value={brand} className="bg-white dark:bg-slate-900 text-neutral-900 dark:text-white">
                    {brand}
                  </option>
                ))}
              </select>
              <SlidersHorizontal
                size={14}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-slate-400 pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Quick Brand Telemetry Pills (Porsche Finder / Awwwards Inspired) */}
        <div className="flex items-center gap-2 pt-4 mt-2 border-t border-slate-100 dark:border-slate-800/80 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-slate-500 whitespace-nowrap">
            Filtro Rápido:
          </span>
          {["VOLKSWAGEN", "CHEVROLET", "FORD", "JEEP", "RENAULT", "MITSUBISHI"].map((brand) => {
            const isBrandActive = selectedBrand.toUpperCase() === brand;
            return (
              <button
                key={brand}
                onClick={() => onSelectBrand(isBrandActive ? "TODAS AS MARCAS" : brand)}
                className={`px-2.5 py-1 text-[10px] font-mono tracking-wider uppercase transition-all duration-200 whitespace-nowrap border ${
                  isBrandActive
                    ? "bg-[#1852B4] text-white border-[#1852B4] shadow-[0_0_12px_rgba(24,82,180,0.5)] font-bold"
                    : "bg-slate-50 dark:bg-slate-900/50 text-neutral-600 dark:text-slate-400 border-slate-200 dark:border-slate-800 hover:border-[#1852B4] hover:text-[#1852B4] dark:hover:border-blue-400 dark:hover:text-blue-400"
                }`}
              >
                {brand}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
