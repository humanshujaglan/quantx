import React from "react";

const htmlContent = `<section class="sm:px-6 lg:px-8 lg:ml-auto lg:mr-auto lg:mt-35 lg:mb-35 lg:pt-20 max-w-7xl mt-10 mr-auto mb-20 ml-auto pt-20 pr-4 pl-4">
    <!-- Heading + side CTA -->
    <div class="flex flex-col lg:flex-row lg:items-end gap-x-4 gap-y-4 justify-between">
      <h2 class="leading-tight gsap-reveal animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.05s_both] sm:text-5xl lg:text-8xl text-3xl font-light text-white tracking-tighter" style="">
        Proof, Not Promises
      </h2>
      <div class="max-w-sm animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
        <p class="text-xs gsap-reveal sm:text-sm text-neutral-400 leading-relaxed" style="">
          Real numbers. Real performance. Every release is backed by measurable outcomes and rigorous validation.
        </p>
        <div class="mt-3">
          <a href="https://dexscreener.com/bsc/0xaac8a6396ee80afdb973fd29899a2faae831a29b" target="_blank" rel="noopener noreferrer" class="btn-wrapper" style="--dot-size: 8px; --line-weight: 1px; --line-distance: 0.8rem 1rem; --animation-speed: 0.35s; --dot-color: #fffa; --line-color: #fffa; --grid-color: #fff3; position: relative; display: inline-flex; justify-content: center; align-items: center; width: auto; height: auto; padding: var(--line-distance); background-color: rgba(0, 0, 0, 0); user-select: none">
            <div class="line horizontal top"></div>
            <div class="line vertical right"></div>
            <div class="line horizontal bottom"></div>
            <div class="line vertical left"></div>
            <div class="dot top left"></div>
            <div class="dot top right"></div>
            <div class="dot bottom right"></div>
            <div class="dot bottom left"></div>
            <button class="btn bg-transparent">
            <span class="btn-text text-slate-50" style="">Live DexScreener Chart</span>
          </button>
          </a>
        </div>
      </div>
    </div>

    <!-- KPI Cards -->
    <div class="sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mt-6 gap-x-3 gap-y-3">
      <!-- Big green gradient card -->
      <div class="border-gradient gsap-reveal animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.05s_both] sm:rounded-[28px] sm:p-6 md:col-span-2 text-neutral-900 bg-gradient-to-br from-emerald-400 to-[#0d5428] rounded-[20px] px-4 py-4">
        <div class="flex items-baseline gap-2">
          <p class="sm:text-6xl text-4xl font-light tracking-tight">89% Accuracy</p>
          <span class="text-base sm:text-lg" style="">We trade safely</span>
        </div>
        <p class="mt-3 text-xs sm:text-sm text-neutral-900/80 leading-relaxed" style="">
          We trade based on your techinical analysis thus we have a high accuracy rate in our trades.
        </p>
      </div>

      <!-- White card -->
      <div class="border-gradient gsap-reveal animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] bg-white text-neutral-900 rounded-[20px] sm:rounded-[28px] p-4 sm:p-6">
        <div class="flex items-baseline gap-1">
          <p class="text-4xl sm:text-6xl tracking-tight font-light" style="">20+ trades</p>
          <span class="text-2xl sm:text-4xl font-medium"></span>
        </div>
        <p class="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed" style="">
          We execute over 20 trades each month, leveraging market opportunities to maximize returns.
        </p>
      </div>

      <!-- Dark card -->
      <div class="border-gradient gsap-reveal animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.15s_both] bg-neutral-900 rounded-[20px] sm:rounded-[28px] p-4 sm:p-6">
        <div class="flex items-baseline gap-1">
          <p class="text-4xl sm:text-6xl tracking-tight text-white font-light" style="">8% return</p>
          <span class="text-2xl sm:text-4xl font-medium text-white/90">+</span>
        </div>
        <p class="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed" style="">
          Our trading strategies consistently deliver strong returns, demonstrating effective risk management and market insight.
        </p>
      </div>

      <!-- Monotone big card -->
      <div class="border-gradient gsap-reveal animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] sm:rounded-[28px] sm:p-6 md:col-span-2 md:pl-6 md:pr-6 md:pt-6 md:pb-20 text-white bg-neutral-900 rounded-[20px] pt-6 pr-6 pb-20 pl-6">
        <div class="flex items-baseline gap-2">
          <p class="text-4xl sm:text-6xl tracking-tight font-light" style="">1,200 pips/month</p>
          <span class="text-base sm:text-lg font-medium text-white/90"></span>
        </div>
        <p class="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed" style="">
          We consistently achieve an average of 1,200 pips each month through our strategic trading approaches.
        </p>
      </div>
    </div>
  </section>`;

export default function Results() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
