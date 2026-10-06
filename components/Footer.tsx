import React from "react";

const htmlContent = `<footer class="relative z-20 max-w-7xl sm:px-6 mt-10 mr-auto mb-12 ml-auto pr-4 pl-4">
    <div class="relative sm:mt-12 overflow-hidden shadow-[0px_0px_0px_1px_rgba(255,255,255,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.3),0px_12px_24px_-12px_rgba(0,0,0,0.5)] bg-black border-white/10 border rounded-[40px]">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
      </div>

      <div class="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
        <div class="grid lg:grid-cols-4 gap-x-10 gap-y-10">
          <!-- Brand / intro -->
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <a href="/">
                <img src="/qtx-logo.png" alt="QuantX AI Logo" class="h-10 w-auto object-contain" />
              </a>
            </div>
            <p class="text-sm leading-relaxed text-neutral-400 tracking-wide font-sans font-light">
              Autonomous quantitative trading intelligence capable of self-directed market reasoning, sentiment synthesis, and dynamic execution.
            </p>
          </div>

          <!-- Column: Ecosystem -->
          <div class="">
            <h4 class="uppercase text-xs text-neutral-300 tracking-wide font-sans font-light">Ecosystem</h4>
            <ul class="mt-3 space-y-2">
              <li><a href="/launchpad" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">Launchpad dApp</a></li>
              <li><a href="https://dexscreener.com/bsc/0xaac8a6396ee80afdb973fd29899a2faae831a29b" target="_blank" rel="noopener noreferrer" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">DexScreener Chart</a></li>
              <li><a href="https://bscscan.com/token/0x60bAF3f1082004601eA9518588D073e4bC29CB31" target="_blank" rel="noopener noreferrer" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">BSCScan Contract</a></li>
            </ul>
          </div>

          <!-- Column: Protocol Architecture -->
          <div class="">
            <h4 class="text-xs text-neutral-300 uppercase tracking-wide font-sans font-light">Protocol</h4>
            <ul class="mt-3 space-y-2">
              <li><a href="#features" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">Neural Core</a></li>
              <li><a href="#how" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">AI Models</a></li>
              <li><a href="#testimonials" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">Trading Engine</a></li>
              <li><a href="#pricing-component" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">Roadmap</a></li>
            </ul>
          </div>

          <!-- Column: Launchpads -->
          <div class="">
            <h4 class="text-xs text-neutral-300 uppercase tracking-wide font-sans font-light">Launchpads</h4>
            <ul class="mt-3 space-y-2">
              <li><a href="/launchpad" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">i6 Launchpad</a></li>
              <li><a href="/launchpad" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">KSN Launchpad</a></li>
              <li><a href="https://bscscan.com/token/0x60bAF3f1082004601eA9518588D073e4bC29CB31" target="_blank" rel="noopener noreferrer" class="text-sm text-neutral-300 hover:text-white tracking-wide font-sans font-light">Verified Smart Contract</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
          <nav class="flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-neutral-400 font-instrument-serif tracking-wide">
            <a href="/launchpad" class="hover:text-neutral-200 tracking-wide font-sans font-light">Launchpad</a>
            <span class="text-neutral-700 tracking-wide font-sans font-light">|</span>
            <a href="https://dexscreener.com/bsc/0xaac8a6396ee80afdb973fd29899a2faae831a29b" target="_blank" rel="noopener noreferrer" class="hover:text-neutral-200 tracking-wide font-sans font-light">Live Chart</a>
            <span class="text-neutral-700 tracking-wide font-sans font-light">|</span>
            <a href="https://bscscan.com/token/0x60bAF3f1082004601eA9518588D073e4bC29CB31" target="_blank" rel="noopener noreferrer" class="hover:text-neutral-200 tracking-wide font-sans font-light">BSCScan</a>
          </nav>
          <div class="text-[11px] text-neutral-500 tracking-wide font-sans font-light">© 2026 QuantX AI ($QTX). All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>`;

export default function Footer() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
