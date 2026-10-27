"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { siteConfig } from "@/config/site";
import { buildConciergeGeneralWhatsAppLink } from "@/lib/whatsapp";
import { t } from "@/config/i18n";
import { BigaStripe } from "@/components/ui/biga-stripe";

interface NavbarProps {
  visible?: boolean;
}

export function Navbar({ visible = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0B0F17]/90 backdrop-blur-xl border-b border-black/10 dark:border-slate-800/80 py-3 sm:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-white/95 via-white/50 to-transparent dark:from-[#0B0F17]/90 dark:via-[#0B0F17]/40 dark:to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          {siteConfig.brand.logoPath && !siteConfig.brand.logoPath.includes("primeimports") && (
            <div className="relative">
              <img
                src={siteConfig.brand.logoPath}
                alt={siteConfig.brand.name}
                className="h-10 sm:h-12 w-10 sm:w-12 rounded-full object-cover border border-[#1852B4]/40 dark:border-slate-700 shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-1 -right-1 block">
                <BigaStripe size="xs" />
              </span>
            </div>
          )}
          <div className="flex flex-col select-none py-1">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-base sm:text-xl tracking-[0.2em] text-neutral-950 dark:text-white uppercase leading-none group-hover:text-[#1852B4] dark:group-hover:text-blue-400 transition-colors">
                {siteConfig.brand.shortName}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.3em] text-neutral-500 uppercase">
                {siteConfig.brand.cityState}
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/estoque"
            className={`text-xs uppercase tracking-[0.25em] transition-all font-medium py-1 relative ${
              pathname === "/estoque"
                ? "text-black dark:text-white font-bold"
                : "text-neutral-600 hover:text-[#1852B4] dark:text-neutral-400 dark:hover:text-blue-400"
            }`}
          >
            <span>{t.nav.inventory}</span>
            {pathname === "/estoque" && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
            )}
          </Link>
          <Link
            href="/#experience"
            className="text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-[#1852B4] dark:text-neutral-400 dark:hover:text-blue-400 transition-colors font-medium py-1"
          >
            {t.nav.experience}
          </Link>
          <Link
            href="/#sourcing"
            className="text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-[#1852B4] dark:text-neutral-400 dark:hover:text-blue-400 transition-colors font-medium py-1"
          >
            {t.nav.sourcing}
          </Link>
          <Link
            href="/#location"
            className="text-xs uppercase tracking-[0.25em] text-neutral-600 hover:text-[#1852B4] dark:text-neutral-400 dark:hover:text-blue-400 transition-colors font-medium py-1"
          >
            {t.nav.showroom}
          </Link>
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-600 hover:text-[#1852B4] dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-slate-800/60 rounded-full transition-colors border border-black/10 dark:border-slate-800"
            title={theme === "light" ? t.nav.toggleThemeLight : t.nav.toggleThemeDark}
            aria-label="Alternar Tema"
          >
            {theme === "light" ? (
              <Moon size={16} strokeWidth={1.5} />
            ) : (
              <Sun size={16} strokeWidth={1.5} />
            )}
          </button>

          {/* Concierge Button */}
          <a
            href={buildConciergeGeneralWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 bg-neutral-950 text-white hover:bg-[#1852B4] dark:bg-slate-900 dark:text-white dark:hover:bg-[#1852B4] transition-all duration-300 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-none border border-neutral-800 dark:border-slate-700 shadow-sm overflow-hidden hover:shadow-[0_0_20px_rgba(24,82,180,0.45)]"
          >
            <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />
            <BigaStripe size="xs" />
            <span>{t.nav.concierge}</span>
            <ArrowUpRight size={14} strokeWidth={1.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10"
            aria-label="Alternar Tema"
          >
            {theme === "light" ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-800 dark:text-neutral-200 border border-black/10 dark:border-white/10"
            aria-label={t.nav.menuOpen}
          >
            {mobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-2xl border-b border-black/10 dark:border-white/10 px-6 py-8 flex flex-col gap-6"
        >
          <Link
            href="/estoque"
            onClick={() => setMobileMenuOpen(false)}
            className={`text-sm uppercase tracking-[0.25em] ${
              pathname === "/estoque"
                ? "text-black dark:text-white font-bold"
                : "text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white"
            }`}
          >
            {t.nav.inventory}
          </Link>
          <Link
            href="/#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.25em] text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            {t.nav.experience}
          </Link>
          <Link
            href="/#sourcing"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.25em] text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            {t.nav.sourcing}
          </Link>
          <Link
            href="/#location"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm uppercase tracking-[0.25em] text-neutral-800 dark:text-neutral-300 hover:text-black dark:hover:text-white"
          >
            {t.nav.showroom}
          </Link>
          <div className="pt-4 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
            <a
              href={buildConciergeGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black text-xs font-semibold tracking-widest uppercase"
            >
              <span>{t.nav.concierge}</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
