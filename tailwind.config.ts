import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          950: "#030303",
          900: "#080808",
          850: "#0D0D0D",
          800: "#141414",
          700: "#222222",
          600: "#333333",
          500: "#666666",
          400: "#999999",
          300: "#CCCCCC",
          200: "#E5E5E5",
          100: "#F5F5F5",
        },
        biga: {
          red: {
            DEFAULT: "#DC2626",
            light: "#EF4444",
            dark: "#991B1B",
            muted: "#7F1D1D",
          },
          blue: {
            DEFAULT: "#1852B4",
            light: "#2563EB",
            dark: "#1E40AF",
            navy: "#0F2942",
          },
          grey: {
            DEFAULT: "#717A88",
            light: "#E2E8F0",
            slate: "#64748B",
            dark: "#334155",
            titanium: "#1E293B",
            obsidian: "#0B0F17",
          },
        },
        metallic: {
          chrome: "#F2F4F7",
          silver: "#D1D5DB",
          graphite: "#4B5563",
          dark: "#1F2937",
        },
        luxe: {
          gold: "#C6A875",
          goldLight: "#DFC394",
          blue: "#1852B4",
          red: "#DC2626",
          titanium: "#717A88",
        }
      },
      fontFamily: {
        display: ["var(--font-syne)", "Syne", "sans-serif"],
        editorial: ["var(--font-cinzel)", "Cinzel", "serif"],
        sans: ["var(--font-geist-sans)", "Geist", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        super: "0.28em",
        ultra: "0.35em",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "pulse-subtle": "pulse-subtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
