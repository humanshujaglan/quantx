import type { Metadata } from "next";
import "./globals.css";
import Web3Provider from "@/context/Web3Provider";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "QuantX AI ($QTX) - Autonomous Quantitative Trading AI",
  description:
    "QuantX AI ($QTX) is an autonomous quantitative trading intelligence capable of self-directed market reasoning, real-time news & sentiment synthesis, and dynamic execution.",
  icons: {
    icon: "/qtx-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/qtx-logo.png" type="image/png" />
        <link
          rel="preload"
          href="/fonts/PlusJakartaSans-400.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/PlusJakartaSans-300.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&family=Quicksand:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      background: '#020408',
                      surface: '#0B0F17',
                      'surface-highlight': '#151B29',
                      border: '#1E293B',
                      primary: '#E2E8F0',
                      secondary: '#94A3B8',
                      accent: '#14F195',
                      'accent-purple': '#9945FF',
                    },
                    fontFamily: {
                      sans: ["'Inter'", "sans-serif"],
                      display: ["'Space Grotesk'", "sans-serif"],
                      mono: ["'JetBrains Mono'", "monospace"],
                      quicksand: ["'Quicksand'", "sans-serif"],
                      'instrument-serif': ["'Instrument Serif'", "serif"],
                      jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
                    }
                  }
                },
                plugins: [
                  function({ addUtilities }) {
                    const rotateXUtilities = {};
                    const rotateYUtilities = {};
                    const rotateZUtilities = {};
                    const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
                    rotateValues.forEach((value) => {
                      rotateXUtilities['.rotate-x-' + value] = {
                        '--tw-rotate-x': value + 'deg',
                        transform: 'translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))'
                      };
                      if (value !== 0) {
                        rotateXUtilities['.-rotate-x-' + value] = {
                          '--tw-rotate-x': '-' + value + 'deg',
                          transform: 'translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))'
                        };
                      }
                    });
                    rotateValues.forEach((value) => {
                      rotateYUtilities['.rotate-y-' + value] = {
                        '--tw-rotate-y': value + 'deg',
                        transform: 'translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))'
                      };
                      if (value !== 0) {
                        rotateYUtilities['.-rotate-y-' + value] = {
                          '--tw-rotate-y': '-' + value + 'deg',
                          transform: 'translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))'
                        };
                      }
                    });
                    rotateValues.forEach((value) => {
                      rotateZUtilities['.rotate-z-' + value] = {
                        '--tw-rotate-z': value + 'deg',
                        transform: 'translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))'
                      };
                      if (value !== 0) {
                        rotateZUtilities['.-rotate-z-' + value] = {
                          '--tw-rotate-z': '-' + value + 'deg',
                          transform: 'translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))'
                        };
                      }
                    });
                    const custom3DUtilities = {
                      '.transform-style-preserve-3d': { 'transform-style': 'preserve-3d' },
                      '.transform-style-flat': { 'transform-style': 'flat' },
                      '.perspective-none': { perspective: 'none' },
                      '.perspective-sm': { perspective: '250px' },
                      '.perspective-md': { perspective: '500px' },
                      '.perspective-lg': { perspective: '1000px' },
                      '.perspective-xl': { perspective: '2000px' },
                    };
                    addUtilities({ ...rotateXUtilities, ...rotateYUtilities, ...rotateZUtilities, ...custom3DUtilities });
                  }
                ]
              };
            `,
          }}
        />

        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
        <script src="https://unpkg.com/lenis@1.0.45/dist/lenis.min.js"></script>
      </head>

      <body className="relative font-sans bg-[#020408] text-primary antialiased">
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
