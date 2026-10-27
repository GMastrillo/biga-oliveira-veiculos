"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { t } from "@/config/i18n";
import { BigaStripe } from "@/components/ui/biga-stripe";

export function Footer() {
  return (
    <footer id="location" className="relative w-full bg-slate-50 dark:bg-[#070A0F] border-t border-slate-200 dark:border-slate-800 pt-20 pb-12 overflow-hidden text-neutral-600 dark:text-slate-400 transition-colors">
      {/* Top Tricolor Signature Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200 dark:border-slate-800">
          {/* Brand & Concept */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                {siteConfig.brand.logoPath && !siteConfig.brand.logoPath.includes("primeimports") && (
                  <div className="relative">
                    <img
                      src={siteConfig.brand.logoPath}
                      alt={siteConfig.brand.name}
                      className="h-12 w-12 rounded-full object-cover border border-[#1852B4]/40 dark:border-slate-700 shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 block">
                      <BigaStripe size="xs" />
                    </span>
                  </div>
                )}
                <div className="flex flex-col select-none py-1">
                  <span className="font-display font-black text-xl tracking-[0.2em] text-neutral-950 dark:text-white uppercase leading-none">
                    {siteConfig.brand.shortName}
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.3em] text-neutral-500 uppercase mt-1">
                    {siteConfig.brand.cityState}
                  </span>
                </div>
              </div>
              <p className="text-[11px] font-mono tracking-wider text-neutral-500 dark:text-slate-400 leading-relaxed mb-6">
                {siteConfig.brand.description}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-400 dark:text-slate-500 uppercase">
              <BigaStripe size="xs" />
              <span>{siteConfig.brand.cityState}</span>
            </div>
          </div>

          {/* Showroom Addresses */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-950 dark:text-white block mb-4">
              {t.footer.showroom}
            </span>
            <div className="text-xs font-mono space-y-2 text-neutral-800 dark:text-slate-300">
              {siteConfig.contact.addresses.map((address) => (
                <p key={address}>{address}</p>
              ))}
              <p className="text-neutral-500 dark:text-slate-400 pt-1">{siteConfig.contact.neighborhood}</p>
              <p className="text-neutral-500 dark:text-slate-400">{siteConfig.contact.cityStateZip}</p>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-950 dark:text-white block mb-4">
              {t.footer.privateService}
            </span>
            <div className="text-xs font-mono space-y-2 text-neutral-800 dark:text-slate-300">
              <p className="text-[#1852B4] dark:text-blue-400 font-bold text-sm tracking-wider">
                {siteConfig.contact.displayPhone}
              </p>
              <p>{siteConfig.contact.email}</p>
              <div className="pt-2 text-neutral-500 dark:text-slate-400 space-y-1">
                <p>{siteConfig.contact.businessHours.weekdays}</p>
                <p>{siteConfig.contact.businessHours.saturdays}</p>
                <p>{siteConfig.contact.businessHours.sundays}</p>
              </div>
            </div>
          </div>

          {/* Social Channels */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-neutral-950 dark:text-white block mb-4">
              {t.footer.officialChannels}
            </span>
            <div className="flex flex-col space-y-3 text-xs font-mono">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1852B4] dark:hover:text-blue-400 transition-colors flex items-center justify-between group"
                >
                  <span>Instagram</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              {siteConfig.social.tiktok && (
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1852B4] dark:hover:text-blue-400 transition-colors flex items-center justify-between group"
                >
                  <span>TikTok</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1852B4] dark:hover:text-blue-400 transition-colors flex items-center justify-between group"
                >
                  <span>YouTube</span>
                  <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500 dark:text-slate-500">
          <span>© {new Date().getFullYear()} {siteConfig.brand.name}. {t.footer.rights}</span>
          <div className="flex items-center gap-2">
            <BigaStripe size="xs" />
            <span className="tracking-widest uppercase">Showroom Digital Exclusivo · Biga Oliveira</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
