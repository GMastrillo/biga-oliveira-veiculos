"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { FilterBar } from "@/components/sections/filter-bar";
import { ShowroomGrid } from "@/components/sections/showroom-grid";
import { Footer } from "@/components/layout/footer";
import { ConciergeButton } from "@/components/layout/concierge-button";
import { VehicleDetailModal } from "@/components/modals/vehicle-detail-modal";
import { INVENTORY_VEHICLES, Vehicle } from "@/data/inventory";
import { ShieldCheck, Compass, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { t } from "@/config/i18n";
import { BigaStripe } from "@/components/ui/biga-stripe";

export default function EstoquePage() {
  const [selectedVehicleForModal, setSelectedVehicleForModal] = useState<Vehicle | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("intro-pending");
      document.documentElement.classList.add("intro-done");
    }
  }, []);

  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("TODOS");
  const [selectedBrand, setSelectedBrand] = useState<string>("TODAS AS MARCAS");
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Memoized Filter Logic
  const filteredVehicles = useMemo(() => {
    return INVENTORY_VEHICLES.filter((vehicle) => {
      // Category Filter
      if (selectedCategory !== "TODOS") {
        if (selectedCategory === "BLINDADOS" && !vehicle.armored) return false;
        if (selectedCategory === "0 KM" && !vehicle.tag?.includes("0 KM") && vehicle.km !== "0 km") return false;
        if (
          selectedCategory !== "BLINDADOS" &&
          selectedCategory !== "0 KM" &&
          vehicle.category.toLowerCase() !== selectedCategory.toLowerCase()
        ) {
          return false;
        }
      }

      // Brand Filter
      if (selectedBrand !== "TODAS AS MARCAS") {
        if (vehicle.brand.toLowerCase() !== selectedBrand.toLowerCase()) return false;
      }

      // Search Query
      if (searchTerm.trim() !== "") {
        const query = searchTerm.toLowerCase();
        const matchesBrand = vehicle.brand.toLowerCase().includes(query);
        const matchesModel = vehicle.model.toLowerCase().includes(query);
        const matchesVersion = vehicle.version.toLowerCase().includes(query);
        const matchesYear = vehicle.year.toLowerCase().includes(query);
        if (!matchesBrand && !matchesModel && !matchesVersion && !matchesYear) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedBrand, searchTerm]);

  return (
    <main className="relative min-h-screen bg-white text-neutral-900 dark:bg-[#0B0F17] dark:text-white transition-colors duration-500">
      {/* Luxury Navigation Bar */}
      <Navbar visible={true} />

      {/* Estoque Editorial Header */}
      <section className="relative pt-32 sm:pt-40 pb-12 sm:pb-16 bg-slate-50 dark:bg-[#070A0F] border-b border-slate-200 dark:border-slate-800 transition-colors">
        {/* Top Hairline */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] font-mono tracking-widest uppercase text-neutral-500 mb-6">
            <Link href="/" className="hover:text-[#1852B4] dark:hover:text-blue-400 transition-colors">
              {t.estoquePage.breadcrumbHome}
            </Link>
            <span>/</span>
            <span className="text-[#1852B4] dark:text-blue-400 font-semibold">{t.estoquePage.breadcrumbInventory}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <BigaStripe size="xs" />
                <span className="text-[11px] font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-slate-400">
                  {t.estoquePage.catalogTag}
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl font-black text-neutral-950 dark:text-white uppercase tracking-tight leading-none mb-4">
                {t.estoquePage.title}
              </h1>
              <p className="text-xs sm:text-sm font-mono tracking-wider text-neutral-600 dark:text-slate-400 leading-relaxed">
                {t.estoquePage.desc}
              </p>
            </div>

            {/* Quick Stats Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500 block">
                  {t.estoquePage.stat1}
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-neutral-950 dark:text-white">
                  {INVENTORY_VEHICLES.length} ({t.estoquePage.stat1Sub})
                </span>
              </div>

              <div className="p-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 mb-1">
                  <ShieldCheck size={12} strokeWidth={1.5} className="text-[#1852B4] dark:text-blue-400" />
                  <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500">
                    {t.estoquePage.stat2}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-neutral-950 dark:text-white uppercase">
                  {t.estoquePage.stat2Sub}
                </span>
              </div>

              <div className="col-span-2 sm:col-span-1 p-4 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                <span className="text-[9px] font-mono tracking-widest uppercase text-neutral-500 block">
                  {t.estoquePage.stat3}
                </span>
                <span className="font-mono text-xs font-bold text-neutral-950 dark:text-white uppercase">
                  {t.estoquePage.stat3Sub}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Engine: Seletores de Categoria & Marcas */}
      <FilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        totalResults={filteredVehicles.length}
      />

      {/* Showroom Curado da Biga Oliveira */}
      <ShowroomGrid
        vehicles={filteredVehicles}
        onOpenVehicleDetail={(vehicle) => setSelectedVehicleForModal(vehicle)}
      />

      {/* Personal Sourcing Banner for vehicles not in stock */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-20">
        <div className="relative p-8 sm:p-12 border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-col md:flex-row items-center justify-between gap-8 transition-colors overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <BigaStripe size="xs" />
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-500 dark:text-slate-400">
                {t.estoquePage.sourcingBannerTag}
              </span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-neutral-950 dark:text-white tracking-wide mb-2">
              {t.estoquePage.sourcingBannerTitle}
            </h3>
            <p className="text-xs font-mono text-neutral-600 dark:text-slate-400 leading-relaxed">
              {t.estoquePage.sourcingBannerDesc}
            </p>
          </div>

          <Link
            href="/#sourcing"
            className="relative px-6 py-3.5 bg-neutral-950 text-white dark:bg-slate-900 hover:bg-[#1852B4] dark:hover:bg-[#1852B4] font-semibold text-xs font-mono tracking-[0.2em] uppercase transition-all whitespace-nowrap flex items-center gap-2 shadow-sm border border-slate-700"
          >
            <BigaStripe size="xs" />
            <span>{t.estoquePage.sourcingBannerBtn}</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Footer Editorial com Dados Oficiais */}
      <Footer />

      {/* Botão Flutuante de Concierge WhatsApp */}
      <ConciergeButton currentVehicleName={`${t.nav.inventory} ${siteConfig.brand.shortName}`} />

      {/* Modal de Dossiê Técnico do Veículo */}
      <VehicleDetailModal
        vehicle={selectedVehicleForModal}
        onClose={() => setSelectedVehicleForModal(null)}
      />
    </main>
  );
}
