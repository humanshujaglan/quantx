import React from "react";

const htmlContent = `<div class="py-24 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="lg:p-16 gsap-reveal bg-black border-white/10 border rounded-3xl pt-12 pr-12 pb-12 pl-12 relative">
        <div class="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
        </div>
        <div class="relative text-center mb-16">
          <p class="uppercase text-sm text-white/40 tracking-wide mb-3 font-sans font-light">Support</p>
          <h3 class="lg:text-4xl text-3xl text-white mb-6 font-sans font-light">Frequently Asked Questions</h3>
          <p class="text-lg text-white/60 max-w-3xl mr-auto ml-auto font-sans font-light">
            Everything you need to know about the QuantX AI trading architecture, execution models, and Launchpad ecosystem.
          </p>
        </div>
        <div class="relative max-w-4xl mx-auto space-y-6">
          <div class="rounded-2xl border border-white/10 overflow-hidden" style="background: rgba(255, 255, 255, 0.02);">
            <button class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="window.toggleFaq(this)">
              <span class="text-lg text-white font-sans font-light">How does QuantX AI analyze market sentiment and macro news?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/60 transform transition-transform duration-300">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div class="px-8 pb-6 hidden">
              <p class="text-white/70 leading-relaxed font-sans font-light">
                QuantX utilizes proprietary natural language processing (NLP) models integrated with live feeds from Bloomberg, Reuters, LunarCrush, and Santiment to synthesize sentiment in milliseconds before initiating trades.
              </p>
            </div>
          </div>
          <div class="rounded-2xl border border-white/10 overflow-hidden" style="background: rgba(255, 255, 255, 0.02);">
            <button class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="window.toggleFaq(this)">
              <span class="text-lg text-white font-sans font-light">What execution speed and networks does the trading engine run on?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/60 transform transition-transform duration-300">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div class="px-8 pb-6 hidden">
              <p class="text-white/70 leading-relaxed font-sans font-light">
                Our sub-millisecond execution engine is built natively for BNB Smart Chain (BSC) with multi-node redundant RPC infrastructure, achieving sub-second trade settlement with minimal slippage.
              </p>
            </div>
          </div>
          <div class="rounded-2xl border border-white/10 overflow-hidden" style="background: rgba(255, 255, 255, 0.02);">
            <button class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="window.toggleFaq(this)">
              <span class="text-lg text-white font-sans font-light">What risk management and capital preservation controls are deployed?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/60 transform transition-transform duration-300">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div class="px-8 pb-6 hidden">
              <p class="text-white/70 leading-relaxed font-sans font-light">
                Each trade is governed by non-custodial smart contracts featuring strict 1% risk per position, dynamic trailing stops, automated circuit breakers for volatility spikes, and flash-crash safeguards.
              </p>
            </div>
          </div>
          <div class="rounded-2xl border border-white/10 overflow-hidden" style="background: rgba(255, 255, 255, 0.02);">
            <button class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300" onclick="window.toggleFaq(this)">
              <span class="text-lg text-white font-sans font-light">How do the Launchpad pools work?</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white/60 transform transition-transform duration-300">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <div class="px-8 pb-6 hidden">
              <p class="text-white/70 leading-relaxed font-sans font-light">
                Users can connect their Web3 wallet (MetaMask, Trust Wallet, Binance Web3 Wallet) to participate in both the i6 Launchpad and KSN Launchpad pools directly using native BNB with instant on-chain verification.
              </p>
            </div>
          </div>
        </div>
        <div class="relative text-center mt-16 pt-12 border-t border-white/10">
          <p class="text-sm text-white/60 mb-6 font-sans font-light">
            Still have questions? Explore the QuantX decentralized trading terminal and launchpad.
          </p>
          <a href="/launchpad" class="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm text-white border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 font-sans font-light" style="background: rgba(59, 130, 246, 0.15); text-decoration: none;">
            Launch dApp
          </a>
        </div>
      </div>
    </div>
  </div>`;

export default function Faq() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
