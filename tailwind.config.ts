import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#020408",
        surface: "#0B0F17",
        "surface-highlight": "#151B29",
        border: "#1E293B",
        primary: "#E2E8F0",
        secondary: "#94A3B8",
        accent: "#14F195",
        "accent-purple": "#9945FF",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        display: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        "instrument-serif": ["'Instrument Serif'", "serif"],
        quicksand: ["'Quicksand'", "sans-serif"],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
