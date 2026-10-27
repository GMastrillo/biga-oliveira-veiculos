import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.brand.name} · ${siteConfig.brand.tagline}`,
  description: siteConfig.brand.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.brand.name }],
  openGraph: {
    title: `${siteConfig.brand.name} · ${siteConfig.brand.tagline}`,
    description: siteConfig.brand.description,
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.brand.name,
    locale: siteConfig.language === "en" ? "en_US" : "pt_BR",
    type: "website",
  },
  icons: {
    icon: siteConfig.brand.faviconPath,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const htmlLang = siteConfig.language === "en" ? "en" : "pt-BR";
  return (
    <html lang={htmlLang} className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Synchronous zero-FOUC intro shield: locks viewport to pure black before body paints if intro is pending */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var isHome = window.location.pathname === '/' || window.location.pathname === '';
                if (isHome && sessionStorage.getItem('prime_intro_shown') !== 'true') {
                  document.documentElement.classList.add('intro-pending');
                } else {
                  document.documentElement.classList.remove('intro-pending');
                  document.documentElement.classList.add('intro-done');
                }
              } catch (e) {}
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html.intro-pending,
              html.intro-pending body,
              html.intro-pending main,
              html.intro-pending section {
                background-color: #0B0F17 !important;
                background-image: none !important;
              }
              html.intro-pending body {
                overflow: hidden !important;
              }
              html.intro-pending .intro-hide {
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
              }
              html.intro-done #intro-overlay-container {
                display: none !important;
              }
            `,
          }}
        />
      </head>
      <body className="bg-[#0B0F17] text-white light:bg-white light:text-neutral-900 antialiased min-h-screen">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
