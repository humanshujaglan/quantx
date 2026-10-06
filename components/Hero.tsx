import React from "react";

const htmlContent = `<link id="all-fonts-link-font-geist" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style><link id="all-fonts-link-font-roboto" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-roboto">.font-roboto { font-family: 'Roboto', sans-serif !important; }</style><link id="all-fonts-link-font-montserrat" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-montserrat">.font-montserrat { font-family: 'Montserrat', sans-serif !important; }</style><link id="all-fonts-link-font-poppins" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-poppins">.font-poppins { font-family: 'Poppins', sans-serif !important; }</style><link id="all-fonts-link-font-playfair" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap"><style id="all-fonts-style-font-playfair">.font-playfair { font-family: 'Playfair Display', serif !important; }</style><link id="all-fonts-link-font-instrument-serif" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-instrument-serif">.font-instrument-serif { font-family: 'Instrument Serif', serif !important; }</style><link id="all-fonts-link-font-merriweather" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap"><style id="all-fonts-style-font-merriweather">.font-merriweather { font-family: 'Merriweather', serif !important; }</style><link id="all-fonts-link-font-bricolage" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-bricolage">.font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }</style><link id="all-fonts-link-font-jakarta" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-jakarta">.font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }</style><link id="all-fonts-link-font-manrope" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-manrope">.font-manrope { font-family: 'Manrope', sans-serif !important; }</style><link id="all-fonts-link-font-space-grotesk" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-space-grotesk">.font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }</style><link id="all-fonts-link-font-work-sans" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-work-sans">.font-work-sans { font-family: 'Work Sans', sans-serif !important; }</style><link id="all-fonts-link-font-pt-serif" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap"><style id="all-fonts-style-font-pt-serif">.font-pt-serif { font-family: 'PT Serif', serif !important; }</style><link id="all-fonts-link-font-geist-mono" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist-mono">.font-geist-mono { font-family: 'Geist Mono', monospace !important; }</style><link id="all-fonts-link-font-space-mono" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap"><style id="all-fonts-style-font-space-mono">.font-space-mono { font-family: 'Space Mono', monospace !important; }</style><link id="all-fonts-link-font-quicksand" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-quicksand">.font-quicksand { font-family: 'Quicksand', sans-serif !important; }</style><link id="all-fonts-link-font-nunito" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap"><style id="all-fonts-style-font-nunito">.font-nunito { font-family: 'Nunito', sans-serif !important; }</style><link id="all-fonts-link-font-newsreader" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..800&amp;display=swap"><style id="all-fonts-style-font-newsreader">.font-newsreader { font-family: 'Newsreader', serif !important; }</style><link id="all-fonts-link-font-google-sans-flex" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-google-sans-flex">.font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }</style><link id="all-fonts-link-font-oswald" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-oswald">.font-oswald { font-family: 'Oswald', sans-serif !important; }</style><link id="all-fonts-link-font-dm-sans" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-dm-sans">.font-dm-sans { font-family: 'DM Sans', sans-serif !important; }</style><link id="all-fonts-link-font-cormorant" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-cormorant">.font-cormorant { font-family: 'Cormorant Garamond', serif !important; }</style><section class="z-10 gsap-reveal text-center max-w-7xl mr-auto mb-8 ml-auto pr-4 pl-4 relative" id="features">

    <h1 class="leading-[0.9] gsap-reveal animate-title md:text-8xl bg-clip-text text-transparent lg:text-6xl text-6xl font-medium tracking-tighter  bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-white via-white/50 to-white mb-10 relative" style="translate: none; rotate: none; scale: none; opacity: 0.9883; transform: translate3d(0px, 0.5876px, 0px);">
        Smart Crypto Trading with <span style="background: linear-gradient(135deg, #FFD700 0%, #d9c914f8 50%, #e5be0d 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;" class="">QuantX AI</span> <br>
        <span class="bg-clip-text text-5xl md:text-7xl font-normal italic font-instrument-serif text-transparent  bg-[#00ffc4] shadow-[rgba(0,_0,_0,_0.17)_0px_-23px_25px_0px_inset,_rgba(0,_0,_0,_0.15)_0px_-36px_30px_0px_inset,_rgba(0,_0,_0,_0.1)_0px_-79px_40px_0px_inset,_rgba(0,_0,_0,_0.06)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]" style=" font-style: italic !important;">The AI that reads the market and trades for you</span>
    </h1>

    <!-- Revolving Gold GIF Video -->
    <div class="flex gsap-reveal justify-center mb-8">
        <img src="/gold-bot.gif" alt="QuantX AI" class="w-48 sm:w-56 md:w-64 h-auto rounded-xl shadow-2xl" style="max-width: 240px; image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges; will-change: transform; transform: translateZ(0); backface-visibility: hidden;">
    </div>

    <p class="text-secondary leading-relaxed animate-fade-in delay-100 md:text-xl text-lg  max-w-2xl mr-auto mb-12 ml-auto pr-6 pl-6" style="translate: none; rotate: none; scale: none; opacity: 0.939; transform: translate3d(0px, 1.2189px, 0px)">
        Most trading bots just follow rigid rules. QuantX AI reads live market news, <br class="hidden md:block">
        understands trader sentiment, and makes smart trade decisions on its own 24/7.
    </p>

    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200 px-6 mb-8" style="translate: none; rotate: none; scale: none; opacity: 0.876; transform: translate3d(0px, 2.4803px, 0px);">
        <div class="inline-block bg-transparent">
            <style>
                @property --gradient-angle {
                    syntax: "<angle>";
                    initial-value: 0deg;
                    inherits: false;
                }

                @property --gradient-angle-offset {
                    syntax: "<angle>";
                    initial-value: 0deg;
                    inherits: false;
                }

                @property --gradient-percent {
                    syntax: "<percentage>";
                    initial-value: 20%;
                    inherits: false;
                }

                @property --gradient-shine {
                    syntax: "<color>";
                    initial-value: #00c799;
                    inherits: false;
                }

                .shiny-cta {
                    --gradient-angle: 0deg;
                    --gradient-angle-offset: 0deg;
                    --gradient-percent: 20%;
                    --gradient-shine: #00c799;
                    --shadow-size: 2px;
                    position: relative;
                    overflow: hidden;
                    border-radius: 9999px;
                    padding: 1.25rem 2.5rem;
                    font-size: 1.125rem;
                    line-height: 1.2;
                    font-weight: 500;
                    color: #ffffff;
                    background: linear-gradient(#000000, #000000) padding-box, conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #00c799 5%, var(--gradient-shine) 15%, #00c799 30%, transparent 40%, transparent 100%) border-box;
                    border: 2px solid transparent;
                    box-shadow: inset 0 0 0 1px #1a1818;
                    outline: none;
                    transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s;
                    cursor: pointer;
                    isolation: isolate;
                    outline-offset: 4px;
                    
                    z-index: 0;
                    animation: border-spin 2.5s linear infinite;
                }

                @keyframes border-spin {
                    to {
                        --gradient-angle: 360deg;
                    }
                }

                .shiny-cta:active {
                    transform: translateY(1px);
                }

                .shiny-cta::before {
                    content: '';
                    pointer-events: none;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 0;
                    --size: calc(100% - 6px);
                    --position: 2px;
                    --space: 4px;
                    width: var(--size);
                    height: var(--size);
                    background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box;
                    background-size: var(--space) var(--space);
                    background-repeat: space;
                    mask-image: conic-gradient(from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black);
                    border-radius: inherit;
                    opacity: 0.4;
                    pointer-events: none;
                }

                .shiny-cta::after {
                    content: '';
                    pointer-events: none;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 1;
                    width: 100%;
                    aspect-ratio: 1;
                    background: linear-gradient(-50deg, transparent, #00c799, transparent);
                    mask-image: radial-gradient(circle at bottom, transparent 40%, black);
                    opacity: 0.6;
                    animation: shimmer 4s linear infinite;
                    animation-play-state: running;
                }

                .shiny-cta span {
                    position: relative;
                    z-index: 2;
                    display: inline-block;
                }

                .shiny-cta span::before {
                    content: '';
                    pointer-events: none;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    z-index: -1;
                    --size: calc(100% + 1rem);
                    width: var(--size);
                    height: var(--size);
                    box-shadow: inset 0 -1ex 2rem 4px #00c799;
                    opacity: 0;
                    border-radius: inherit;
                    transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1);
                    animation: breathe 4.5s linear infinite;
                }

                @keyframes shimmer {
                    to {
                        transform: translate(-50%, -50%) rotate(360deg);
                    }
                }

                @keyframes breathe {
                    0%,
                    100% {
                        transform: translate(-50%, -50%) scale(1);
                    }

                    50% {
                        transform: translate(-50%, -50%) scale(1.20);
                    }
                }
            </style>
            <a href="/launchpad" style="text-decoration: none; display: inline-block;">
                <button class="shiny-cta focus:outline-none">
                    <span class="">Launch dApp</span>
                </button>
            </a>
        </div>
        <div class="jelly-button-component">
            <style class="">
                .jelly-btn {
                    position: relative;
                    border: none;
                    border-radius: 45px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    color: black;
                    font-weight: 600;
                    text-decoration: none;
                    background-color: rgb(0, 199, 153);
                    box-shadow: rgb(0, 230, 180) 0px 10px 10px inset, rgba(5, 5, 5, 0.21) 0px 5px 10px, rgb(0, 160, 120) 0px -10px 10px inset;
                }

                .jelly-btn::before {
                    width: 70%;
                    height: 2px;
                    position: absolute;
                    background-color: rgba(250, 250, 250, 0.678);
                    content: "";
                    filter: blur(1px);
                    top: 7px;
                    border-radius: 50%;
                }

                .jelly-btn::after {
                    width: 70%;
                    height: 2px;
                    position: absolute;
                    background-color: rgba(250, 250, 250, 0.137);
                    content: "";
                    filter: blur(1px);
                    bottom: 7px;
                    border-radius: 50%;
                }

                .jelly-btn:hover {
                    animation: jello-horizontal 0.9s both;
                    transform: translateY(-2px);
                }

                @keyframes jello-horizontal {
                    0% {
                        transform: scale3d(1, 1, 1);
                    }

                    30% {
                        transform: scale3d(1.25, 0.75, 1);
                    }

                    40% {
                        transform: scale3d(0.75, 1.25, 1);
                    }

                    50% {
                        transform: scale3d(1.15, 0.85, 1);
                    }

                    65% {
                        transform: scale3d(0.95, 1.05, 1);
                    }

                    75% {
                        transform: scale3d(1.05, 0.95, 1);
                    }

                    100% {
                        transform: scale3d(1, 1, 1);
                    }
                }
            </style>
            <a href="https://dexscreener.com/bsc/0xaac8a6396ee80afdb973fd29899a2faae831a29b" target="_blank" rel="noopener noreferrer" style="text-decoration: none; display: inline-block;">
                <button class="jelly-btn gap-2 text-lg gap-x-2 gap-y-2" style="width: 230px; height: 60px;">
                    Buy $QTX
                    <svg xmlns="http://www.w3.org/2000/svg" width="3" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 transition group-hover:scale-105">
                        <path d="M16 10a4 4 0 0 1-8 0" class=""></path>
                        <path d="M3.103 6.034h17.794"></path>
                        <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" class=""></path>
                    </svg>
                </button>
            </a>
        </div>
    </div>
</section>`;

export default function Hero() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
