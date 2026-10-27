"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { SHOWCASE_VEHICLES, Vehicle } from "@/data/inventory";
import { siteConfig } from "@/config/site";
import { buildVehicleWhatsAppLink } from "@/lib/whatsapp";
import { t } from "@/config/i18n";
import { BigaStripe, BigaGradientLine } from "@/components/ui/biga-stripe";

interface HeroHybridProps {
  onOpenVehicleDetail: (vehicle: Vehicle) => void;
  onVehicleChange?: (vehicle: Vehicle) => void;
}

export function HeroHybrid({ onOpenVehicleDetail, onVehicleChange }: HeroHybridProps) {
  // Intro stages: "brand_reveal" | "done"
  const [introStage, setIntroStage] = useState<"brand_reveal" | "done">("brand_reveal");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Regra de Ouro: Sempre e somente os 3 melhores veículos no carrossel hero
  const showcaseVehicles = SHOWCASE_VEHICLES.slice(0, 3);
  const currentVehicle = showcaseVehicles[currentIndex] || showcaseVehicles[0];

  // Notify parent of vehicle change for concierge message contextualization
  useEffect(() => {
    if (onVehicleChange) {
      onVehicleChange(currentVehicle);
    }
  }, [currentIndex, currentVehicle, onVehicleChange]);

  // Check if intro has already been shown in this browser session
  useEffect(() => {
    if (typeof window !== "undefined") {
      const alreadyShown = sessionStorage.getItem("prime_intro_shown");
      if (alreadyShown === "true") {
        setIntroStage("done");
        document.documentElement.classList.remove("intro-pending");
        document.documentElement.classList.add("intro-done");
      } else {
        document.documentElement.classList.add("intro-pending");
        document.documentElement.classList.remove("intro-done");
      }
    }
  }, []);

  const finishIntro = () => {
    setIntroStage("done");
    if (typeof window !== "undefined") {
      sessionStorage.setItem("prime_intro_shown", "true");
      document.documentElement.classList.remove("intro-pending");
      document.documentElement.classList.add("intro-done");
    }
  };

  // When brand_reveal stage is reached, hold the screen for ~2.5s then smoothly transition to main showcase
  useEffect(() => {
    if (introStage === "brand_reveal") {
      const timer = setTimeout(() => {
        finishIntro();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [introStage]);

  // Showcase slide automatic progress timer (6 seconds per slide)
  useEffect(() => {
    if (introStage !== "done" || isPaused) return;

    const interval = 60;
    const duration = 6000;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((idx) => (idx + 1) % showcaseVehicles.length);
          return 0;
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [introStage, isPaused, currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? showcaseVehicles.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseVehicles.length);
    setProgress(0);
  };

  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-black transition-colors duration-500 overflow-hidden flex flex-col justify-between pt-24 pb-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0 intro-hide transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-[#080B11] dark:to-black opacity-95" />
        
        {/* Cinematic Motorsport Ambience Cones (BMW M / Porsche Inspired) */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#1852B4]/10 dark:bg-[#1852B4]/18 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#DC2626]/8 dark:bg-[#DC2626]/12 rounded-full blur-[130px] pointer-events-none translate-x-1/4" />
        <div className="absolute bottom-10 left-1/2 w-[800px] h-[250px] bg-gradient-to-t from-[#1852B4]/10 via-transparent to-transparent blur-[90px] pointer-events-none -translate-x-1/2" />
        
        {/* Avantgarde-style Brand Emblem Watermark aligned with left typography */}
        {currentVehicle.watermarkLogo && (
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full w-full flex items-center">
              <div className="w-full lg:w-5/12 flex items-center justify-start">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentVehicle.id}
                    initial={{ opacity: 0, scale: 0.92, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 1.04, x: -10 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[540px] lg:h-[540px] -left-6 sm:-left-10 lg:-left-14 opacity-[0.15] dark:opacity-[0.08] dark:brightness-0 dark:invert transition-all"
                  >
                    <Image
                      src={currentVehicle.watermarkLogo}
                      alt={`${currentVehicle.brand} Emblem`}
                      fill
                      priority
                      sizes="(max-width: 768px) 320px, (max-width: 1200px) 440px, 540px"
                      className="object-contain object-left"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* INTRO EDITORIAL EM TEXTO (Executa uma única vez por sessão do navegador) */}
      <AnimatePresence>
        {introStage !== "done" && (
          <motion.div
            id="intro-overlay-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#0B0F17] flex items-center justify-center overflow-hidden"
          >
            {/* BRAND REVEAL SCREEN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 text-center px-6 max-w-4xl flex flex-col items-center"
            >
              {siteConfig.brand.logoPath && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6 relative p-1 rounded-full border border-slate-700/80 bg-slate-900/80 shadow-[0_0_35px_rgba(24,82,180,0.3)]"
                >
                  <img
                    src={siteConfig.brand.logoPath}
                    alt={siteConfig.brand.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1">
                    <BigaStripe size="sm" />
                  </div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-3"
              >
                <BigaStripe size="xs" />
                <span className="text-[11px] sm:text-xs font-mono tracking-[0.4em] uppercase text-slate-400">
                  {siteConfig.brand.cityState}
                </span>
                <BigaStripe size="xs" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-[0.16em] uppercase mb-4"
              >
                {siteConfig.brand.shortName}
              </motion.h1>

              {/* Signature Tricolor Line */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-32 mb-5"
              >
                <BigaGradientLine />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-slate-400 max-w-lg"
              >
                {siteConfig.brand.tagline}
              </motion.p>
            </motion.div>

            {/* [ PULAR ] BUTTON */}
            <button
              onClick={finishIntro}
              className="absolute bottom-8 right-8 z-20 px-3.5 py-1.5 border border-slate-700 bg-slate-900/80 backdrop-blur-md text-slate-300 hover:text-white text-[10px] font-mono tracking-[0.3em] uppercase transition-all hover:border-[#1852B4]"
            >
              [ PULAR ]
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SHOWCASE INTERATIVO ESTILO AVANTGARDE */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col justify-between my-auto intro-hide transition-opacity duration-700"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Center Stage: Split between Car Visual and Technical Telemetry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6 sm:py-10">
          {/* Left Column: Brand, Title, Slogan and Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
              >
                {/* Brand */}
                <div className="flex items-center gap-3 mb-2">
                  <BigaStripe size="xs" />
                  <span className="text-xs font-mono tracking-[0.35em] uppercase text-neutral-500 dark:text-slate-400">
                    {currentVehicle.brand}
                  </span>
                  <div className="h-[1px] w-8 bg-neutral-300 dark:bg-slate-700" />
                </div>

                {/* Model Title */}
                <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight text-neutral-950 dark:text-white uppercase leading-none mb-3">
                  {currentVehicle.model}
                </h2>

                {/* Slogan */}
                <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-neutral-600 dark:text-slate-400 uppercase mb-6">
                  {currentVehicle.slogan}
                </p>

                {/* Telemetry Grid (Ano, Km, Potência, Valor) com Estilo Motorsport HUD */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4 p-5 bg-slate-50/95 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 backdrop-blur-md mb-8 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
                  
                  {/* Ano */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 dark:text-slate-400 uppercase">
                        {t.hero.year}
                      </span>
                      <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-wider block mt-0.5 tabular-nums">
                        {currentVehicle.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
                      <span className="text-[9px] font-mono tracking-wider uppercase text-neutral-500 dark:text-slate-400 truncate">
                        {currentVehicle.tag || "Estoque Biga"}
                      </span>
                    </div>
                  </div>

                  {/* Quilometragem */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 dark:text-slate-400 uppercase">
                        {t.hero.mileage}
                      </span>
                      <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-wider block mt-0.5 tabular-nums">
                        {currentVehicle.km}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] font-mono tracking-wider uppercase text-emerald-600 dark:text-emerald-400 font-semibold">
                        Laudo Aprovado
                      </span>
                    </div>
                  </div>

                  {/* Potência com Barra Visual de Telemetria */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 dark:text-slate-400 uppercase">
                        {t.hero.power}
                      </span>
                      <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-wider block mt-0.5 tabular-nums">
                        {currentVehicle.power}
                      </span>
                    </div>
                    <div className="w-full h-1 bg-slate-200 dark:bg-slate-800 rounded-full mt-2.5 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#1852B4] via-[#2563EB] to-[#DC2626] rounded-full shadow-[0_0_6px_rgba(24,82,180,0.6)]" style={{ width: '84%' }} />
                    </div>
                  </div>

                  {/* Preço com Destaque Azul Motorsport */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 dark:text-slate-400 uppercase">
                        {t.hero.price}
                      </span>
                      <span className="text-base font-black text-[#1852B4] dark:text-blue-400 tracking-wider block mt-0.5 tabular-nums">
                        {currentVehicle.price}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1852B4]" />
                      <span className="text-[9px] font-mono tracking-wider uppercase text-[#1852B4] dark:text-blue-400 font-semibold">
                        Showroom Físico
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions com Brilho de Borda */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenVehicleDetail(currentVehicle)}
                    className="relative px-8 py-4 bg-neutral-950 text-white dark:bg-slate-900 dark:text-white font-semibold text-xs tracking-[0.25em] uppercase hover:bg-[#1852B4] dark:hover:bg-[#1852B4] hover:shadow-[0_0_25px_rgba(24,82,180,0.4)] transition-all duration-300 flex items-center gap-2.5 group shadow-md border border-neutral-800 dark:border-slate-700 overflow-hidden"
                  >
                    <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
                    <BigaStripe size="xs" />
                    <span>{t.hero.discover}</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </button>

                  <a
                    href={buildVehicleWhatsAppLink(currentVehicle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 border border-slate-300 dark:border-slate-700 hover:border-[#DC2626] hover:bg-[#DC2626]/10 hover:text-[#DC2626] dark:hover:border-red-500 dark:hover:text-red-400 text-neutral-900 dark:text-white font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                  >
                    {t.hero.negotiate}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Supercar Photography */}
          <div className="lg:col-span-7 relative flex items-center justify-center min-h-[320px] sm:min-h-[460px] order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVehicle.id}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-[320px] sm:h-[460px] flex items-center justify-center"
              >
                <div className="relative w-full h-full max-w-[680px]">
                  <Image
                    src={currentVehicle.image}
                    alt={`${currentVehicle.brand} ${currentVehicle.model}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 680px"
                    className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
                  />
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[90%] h-12 bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Navigation: Avantgarde Linear Progress Bars & Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-black/10 dark:border-slate-800">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            {showcaseVehicles.map((vehicle, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={vehicle.id}
                  onClick={() => goToSlide(idx)}
                  className={`group flex flex-col gap-1.5 flex-1 sm:w-44 text-left py-1.5 px-2 transition-all duration-300 ${
                    isActive
                      ? "bg-slate-100/90 dark:bg-slate-900/70 border border-slate-300 dark:border-slate-700/80 shadow-[0_0_15px_rgba(24,82,180,0.12)]"
                      : "hover:bg-slate-50 dark:hover:bg-slate-900/30 border border-transparent"
                  }`}
                >
                  <div className={`flex items-center justify-between text-[10px] font-mono tracking-widest transition-colors ${
                    isActive ? "text-[#1852B4] dark:text-blue-400 font-bold" : "text-neutral-500 dark:text-slate-400 group-hover:text-black dark:group-hover:text-white"
                  }`}>
                    <span className="flex items-center gap-1.5">
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-pulse" />}
                      <span>0{idx + 1}</span>
                    </span>
                    <span className="uppercase">{vehicle.brand}</span>
                  </div>

                  <div className="w-full h-[3px] bg-slate-200 dark:bg-slate-800 overflow-hidden relative rounded-full">
                    <div
                      className="h-full bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88] transition-all duration-75 shadow-[0_0_8px_rgba(24,82,180,0.5)]"
                      style={{
                        width: isActive ? `${progress}%` : idx < currentIndex ? "100%" : "0%",
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="p-3 border border-black/15 dark:border-slate-800 text-neutral-600 dark:text-slate-400 hover:text-[#1852B4] dark:hover:text-blue-400 hover:border-[#1852B4] dark:hover:border-blue-400 hover:shadow-[0_0_15px_rgba(24,82,180,0.25)] transition-all active:scale-95"
              aria-label="Veículo Anterior"
            >
              <ChevronLeft size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 border border-black/15 dark:border-slate-800 text-neutral-600 dark:text-slate-400 hover:text-[#1852B4] dark:hover:text-blue-400 hover:border-[#1852B4] dark:hover:border-blue-400 hover:shadow-[0_0_15px_rgba(24,82,180,0.25)] transition-all active:scale-95"
              aria-label="Próximo Veículo"
            >
              <ChevronRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
