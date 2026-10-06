import React from "react";

const htmlContent = `<style>
.rotate-x-3 {
  transform: translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(3deg);
}
.-rotate-y-6 {
  transform: translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateY(-6deg);
}
.transform-style-preserve-3d {
  transform-style: preserve-3d;
}
.perspective-1000 {
  perspective: 1000px;
}
</style>

<div class="sm:px-6 lg:px-8 max-w-7xl mt-20 mr-auto mb-20 ml-auto pr-4 pl-4" id="how">
    <div class="group max-w-7xl mx-auto relative perspective-1000 mt-12 mb-12">
      <!-- 3D Transform Wrapper -->
      <div class="relative transform-style-preserve-3d -rotate-y-6 rotate-x-3 hover:rotate-x-0 hover:rotate-y-0 transition-transform duration-700 ease-out w-full">
        <!-- Container Window -->
        <div class="overflow-hidden [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll w-full z-10 border-0 rounded-none pt-0 pr-0 pb-0 pl-0 relative shadow-2xl">
          <!-- Features Grid Content -->
          <div class="gsap-reveal z-10 grid md:grid-cols-2 gap-6 relative gap-x-6 gap-y-6">
            <!-- Card 1: 3D Creativity -->
            <div class="group spotlight-card overflow-hidden md:p-10 transition-all duration-500 hover:border-white/10 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] bg-[#0A0A0A] border-white/5 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl" style="--mouse-x: 140px; --mouse-y: 9.7px">
              <!-- Flashlight Effects -->
              <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%); z-index: 1;">
              </div>
              <div class="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px; z-index: 50;">
              </div>

              <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_100%_100%,black_40%,transparent_100%)] pointer-events-none">
              </div>

              <div class="max-w-sm z-10 relative">
                <h3 class="text-2xl text-white tracking-tight font-sans font-light">
                  Master Precision with LIVE Trading Tools
                </h3>
                <p class="leading-relaxed font-geist mt-3 text-gray-400">
                  Execute trades with high-precision accuracy through daily interactive live sessions.
                </p>

                <ul class="mt-8 space-y-3">
                  <li class="flex items-center gap-3 text-sm font-medium font-geist text-gray-300">
                    <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Sniper Entry Precision
                  </li>
                  <li class="flex items-center gap-3 text-sm font-medium font-geist text-gray-300">
                    <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Daily LIVE Sessions
                  </li>
                  <li class="flex items-center gap-3 text-sm font-medium font-geist text-gray-300">
                    <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Personalized Trade Plans
                  </li>
                </ul>
              </div>

              <!-- Illustration: Gizmo Cube -->
              <div class="absolute bottom-0 right-0 translate-x-12 translate-y-8 w-64 h-64 opacity-90 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:-translate-y-4 group-hover:-translate-x-2">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="drop-shadow-2xl w-[256px] h-[256px]" stroke-width="2" style="color: rgb(0, 0, 0); width: 256px; height: 256px;">
                  <path d="M0 100 L200 0 L400 100 L200 200 Z" fill="url(#grid-gradient)" opacity="0.1" transform="translate(-100, 50) scale(2, 1)"></path>

                  <g class="transition-transform duration-700 ease-out group-hover:rotate-3 origin-center">
                    <path d="M100 130 L50 105 V65 L100 90 Z" fill="#27272a" class="transition-colors duration-500 group-hover:fill-[#3f3f46]"></path>
                    <path d="M100 130 L150 105 V65 L100 90 Z" fill="#3f3f46" class="transition-colors duration-500 group-hover:fill-[#52525b]"></path>
                    <path d="M100 90 L150 65 L100 40 L50 65 Z" fill="#52525b" class="transition-colors duration-500 group-hover:fill-[#71717a]"></path>
                  </g>

                  <g class="transition-transform duration-700 ease-out group-hover:-translate-y-2">
                    <rect x="97" y="20" width="6" height="24" rx="3" fill="#10b981" class="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"></rect>
                  </g>
                  <g class="transition-transform duration-700 ease-out group-hover:translate-x-2 group-hover:translate-y-1">
                    <rect x="140" y="115" width="6" height="24" rx="3" transform="rotate(-60 140 115)" fill="#3b82f6" class="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"></rect>
                  </g>
                  <g class="transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:translate-y-1">
                    <rect x="50" y="120" width="6" height="24" rx="3" transform="rotate(60 50 120)" fill="#ef4444" class="drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]"></rect>
                  </g>
                </svg>
              </div>
            </div>

            <!-- Card 2: Materials -->
            <div class="group spotlight-card overflow-hidden md:p-10 bg-[#0A0A0A] border-white/5 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl transition-all duration-500 hover:border-white/10" style="--mouse-x: 193.6px; --mouse-y: 23.7px;">
              <!-- Flashlight Effects -->
              <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%); z-index: 1;">
              </div>
              <div class="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px; z-index: 50;">
              </div>

              <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_100%_100%,black_40%,transparent_100%)] pointer-events-none">
              </div>

              <div class="max-w-xs z-10 relative">
                <h3 class="text-2xl text-white tracking-tight font-sans font-light">
                  In-Depth Professional Education
                </h3>
                <p class="leading-relaxed font-geist mt-3 text-gray-400">
                  Build a professional foundation or refine your existing strategy with a comprehensive curriculum.
                </p>
              </div>

              <!-- Illustration: Layers -->
              <div class="absolute bottom-0 right-0 translate-x-16 translate-y-16 w-72 h-72 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-x-4 group-hover:-translate-y-4">
                <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                  <g class="transition-transform duration-700 ease-out group-hover:translate-y-4 group-hover:opacity-60">
                    <path d="M150 240 L50 190 L150 140 L250 190 Z" fill="#18181b" stroke="#27272a" stroke-width="2"></path>
                    <path d="M50 190 V210 L150 260 L250 210 V190" fill="#18181b" fill-opacity="0.5"></path>
                  </g>

                  <path d="M150 200 L50 150 L150 100 L250 150 Z" fill="#27272a" stroke="#3f3f46" stroke-width="2" opacity="0.8" class="transition-transform duration-700 ease-out group-hover:translate-y-0"></path>

                  <g filter="url(#blue-glow)" class="transition-transform duration-700 ease-out group-hover:-translate-y-6">
                    <path d="M150 160 L210 130 L270 160 L210 190 Z" fill="#3b82f6" class="transition-colors duration-500 group-hover:fill-[#60a5fa]"></path>
                    <path d="M210 190 V200 L270 170 V160" fill="#2563eb"></path>
                    <path d="M150 160 V170 L210 200 V190" fill="#1d4ed8"></path>
                  </g>
                  <defs></defs>
                </svg>
              </div>
            </div>

            <!-- Card 3: Interactivity -->
            <div class="group spotlight-card relative overflow-hidden rounded-[32px] border border-white/5 bg-[#0A0A0A] p-8 md:p-10 shadow-2xl transition-all duration-500 hover:border-white/10" style="--mouse-x: 297px; --mouse-y: 38.3px;">
              <!-- Flashlight Effects -->
              <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%); z-index: 1;">
              </div>
              <div class="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px; z-index: 50;">
              </div>

              <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_100%_100%,black_40%,transparent_100%)] pointer-events-none">
              </div>

              <div class="max-w-sm z-10 relative">
                <h3 class="text-2xl text-white tracking-tight font-sans font-light">
                  Private Signal Access – Copy & Execute
                </h3>
                <p class="leading-relaxed font-geist mt-3 text-gray-400">
                  Bring your account to life with high-probability setups delivered directly to your device.
                </p>

                <ul class="mt-8 space-y-3">
                  <li class="flex items-center gap-3 text-sm font-medium font-geist text-gray-300">
                    <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Verified Signal Accuracy
                  </li>
                  <li class="flex items-center gap-3 text-sm font-medium font-geist text-gray-300">
                    <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    High-Volume Targets
                  </li>
                  <li class="flex items-center gap-3 text-sm font-medium font-geist text-gray-300">
                    <svg class="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Strict Setup Quality
                  </li>
                </ul>
              </div>

              <!-- Illustration: Switch -->
              <div class="absolute bottom-0 right-0 translate-x-10 translate-y-10 w-64 h-64 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:-translate-x-2">
                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
                  <path d="M100 160 L40 130 V100 L100 130 Z" fill="#18181b"></path>
                  <path d="M100 160 L160 130 V100 L100 130 Z" fill="#27272a"></path>
                  <path d="M100 130 L160 100 L100 70 L40 100 Z" fill="#3f3f46"></path>

                  <!-- Button Group -->
                  <g class="transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) group-hover:translate-x-6 group-hover:-translate-y-3">
                    <circle cx="100" cy="100" r="30" transform="scale(1.7 0.85)" fill="#18181b" class="shadow-xl"></circle>
                    <circle cx="100" cy="95" r="30" transform="scale(1.7 0.85)" fill="#27272a" stroke="#52525b" class="transition-colors duration-300 group-hover:fill-[#3b82f6] group-hover:stroke-[#60a5fa]"></circle>
                    <g class="transition-opacity duration-300 group-hover:opacity-100">
                      <path d="M90 80a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" fill="white" fill-opacity="0.9"></path>
                      <rect x="102" y="82" width="12" height="2" rx="1" fill="white" fill-opacity="0.9"></rect>
                      <rect x="102" y="87" width="12" height="2" rx="1" fill="white" fill-opacity="0.9"></rect>
                    </g>
                  </g>
                </svg>
              </div>
            </div>

            <!-- Card 4: Variables -->
            <div class="group spotlight-card overflow-hidden md:p-10 transition-all duration-500 hover:border-white/10 bg-[#0A0A0A] border-white/5 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl" style="--mouse-x: 155.6px; --mouse-y: 62.5px;">
              <!-- Flashlight Effects -->
              <div class="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%); z-index: 1;">
              </div>
              <div class="pointer-events-none absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style="background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.4), transparent 40%); mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); mask-composite: exclude; -webkit-mask-composite: xor; padding: 1px; z-index: 50;">
              </div>

              <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_100%_100%,black_40%,transparent_100%)] pointer-events-none">
              </div>

              <div class="max-w-xs z-10 relative">
                <h3 class="text-2xl text-white tracking-tight font-sans font-light">
                  Managed Growth – True Passive Income
                </h3>
                <p class="leading-relaxed font-geist mt-3 text-gray-400">
                  Connect your capital to a professional management system for dynamic, responsive account scaling.
                </p>
              </div>

              <!-- Illustration: 3D Data Object -->
              <div class="absolute bottom-0 right-0 w-full h-full pointer-events-none overflow-hidden">
                <div class="absolute bottom-0 right-0 translate-x-16 translate-y-12 w-80 h-80 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:translate-x-8 group-hover:translate-y-4">
                  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full drop-shadow-2xl">
                    <path d="M100 160 L30 125 L100 90 L170 125 Z" fill="#18181b" stroke="#27272a" stroke-width="1" class="transition-colors duration-500 group-hover:fill-[#27272a] group-hover:stroke-[#3f3f46]">
                    </path>
                    <path d="M30 125 V140 L100 175 L170 140 V125" fill="#18181b" fill-opacity="0.6"></path>

                    <path d="M100 90 V160" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4 4" opacity="0.3" class="transition-opacity duration-500 group-hover:opacity-60"></path>
                    <circle cx="100" cy="125" r="30" stroke="#3f3f46" stroke-width="1" opacity="0.3" transform="scale(1 0.5)"></circle>

                    <g class="transition-transform duration-700 ease-out group-hover:-translate-y-6 group-hover:rotate-3 origin-center">
                      <path d="M100 80 L60 60 L100 40 L140 60 Z" fill="#2563eb" class="transition-colors duration-500 group-hover:fill-[#3b82f6]"></path>
                      <path d="M60 60 V90 L100 110 V80 L60 60 Z" fill="#1d4ed8" class="transition-colors duration-500 group-hover:fill-[#2563eb]"></path>
                      <path d="M140 60 V90 L100 110 V80 L140 60 Z" fill="#1e40af" class="transition-colors duration-500 group-hover:fill-[#1d4ed8]"></path>
                      <path d="M100 40 L140 60 L100 80 L60 60 Z" fill="url(#blue-gradient-3d)" opacity="0.4"></path>
                    </g>

                    <circle cx="150" cy="50" r="4" fill="#60a5fa" class="transition-transform duration-1000 ease-in-out group-hover:translate-y-2 group-hover:-translate-x-2" opacity="0.8"></circle>
                    <circle cx="50" cy="100" r="3" fill="#3b82f6" class="transition-transform duration-1000 ease-in-out group-hover:-translate-y-4 group-hover:translate-x-2" opacity="0.6"></circle>
                    <defs></defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

export default function Services() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
