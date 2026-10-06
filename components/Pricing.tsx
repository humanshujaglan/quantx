"use client";

import React from "react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div
      className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative"
      id="pricing-component"
    >
      {/* Header */}
      <div className="relative gsap-reveal text-center max-w-4xl mx-auto">
        <h2 className="sm:text-5xl lg:text-6xl text-4xl text-white tracking-tight font-light">
          Development Roadmap
        </h2>
        <p className="sm:text-lg lg:text-xl leading-relaxed text-base text-slate-400 mt-6 tracking-wide font-light">
          QuantX architectural progression across neural reasoning, dual launchpad scaling, and institutional quant execution.
        </p>

        {/* Milestone Indicator Pills */}
        <div className="mt-8 inline-flex items-center rounded-full bg-white/5 p-1 backdrop-blur-sm">
          <span className="text-sm font-light text-white tracking-wide bg-white/10 rounded-full pt-2 pr-5 pb-2 pl-5">
            Mainnet Phases
          </span>
          <span className="text-sm font-light text-slate-400 tracking-wide rounded-full pt-2 pr-5 pb-2 pl-5">
            Future Trajectory
          </span>
        </div>
      </div>

      {/* 4 Cards Grid - identical dimensions and volume */}
      <div className="relative gsap-reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {/* Card 1: Phase 1 */}
        <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.25), rgba(16,185,129,0.08) 40%, transparent 75%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="group-hover:text-emerald-50 transition-colors duration-300 sm:text-2xl text-xl text-white font-light">
                  Phase 01
                </h3>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] text-emerald-300 bg-emerald-500/15 tracking-wide font-light">
                  Completed
                </span>
              </div>

              <p className="group-hover:text-slate-200 transition-colors duration-300 font-light text-slate-300 tracking-wide text-sm mb-3">
                Neural Core & Sentiment Engine
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                <span className="font-light text-slate-300 tracking-wide">
                  Q1 – Q2 2026 · Verified Live
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-white text-3xl sm:text-4xl font-light tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
                  V1.2
                </span>
                <span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 tracking-wide font-light text-sm">
                  / Core Engine
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs">
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 group-hover:bg-emerald-400/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Sentiment & News NLP Reasoning
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 group-hover:bg-emerald-400/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Sub-millisecond Execution Engine on BSC
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 group-hover:bg-emerald-400/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Non-custodial Smart Contract Infrastructure
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 group-hover:bg-emerald-400/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Security Audits & Slippage Safeguards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/15 group-hover:bg-emerald-400/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-emerald-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Continuous Reinforcement Learning Pipeline
                  </span>
                </li>
              </ul>
            </div>

            <a href="https://bscscan.com/token/0x60bAF3f1082004601eA9518588D073e4bC29CB31" target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-black bg-emerald-400/95 hover:bg-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] tracking-wide font-light transition-all">View QTX Contract</a>
          </div>
        </div>

        {/* Card 2: Phase 2 (Current / In Progress) */}
        <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(120% 120% at 90% 10%, rgba(20,241,149,0.3), rgba(20,241,149,0.1) 40%, transparent 75%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#14F195]/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="group-hover:text-emerald-50 transition-colors duration-300 sm:text-2xl text-xl text-white font-light">
                  Phase 02
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] text-[#14F195] bg-[#14F195]/15 tracking-wide font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14F195] animate-pulse"></span>
                  In Progress
                </span>
              </div>

              <p className="group-hover:text-slate-200 transition-colors duration-300 font-light text-slate-300 tracking-wide text-sm mb-3">
                Dual Launchpad & Token Rewards
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                <span className="font-light text-slate-300 tracking-wide">
                  Q3 2026 · Active Deployment
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-white text-3xl sm:text-4xl font-light tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
                  Dual DApp
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs">
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#14F195]/20 group-hover:bg-[#14F195]/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#14F195]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Dual Reinvestment Workspace (i6 & KSN)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#14F195]/20 group-hover:bg-[#14F195]/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#14F195]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Automated On-Chain Sponsor Validation
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#14F195]/20 group-hover:bg-[#14F195]/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#14F195]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    10% Instant Sponsor Bonus Routing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#14F195]/20 group-hover:bg-[#14F195]/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#14F195]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Anti-MEV Transaction Safeguards
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#14F195]/20 group-hover:bg-[#14F195]/30 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#14F195]"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Wagmi & Reown Web3 Authentication
                  </span>
                </li>
              </ul>
            </div>

            <Link
              href="/launchpad"
              className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-[#07080a] bg-[#14F195] hover:bg-[#10c87b] shadow-[0_0_20px_rgba(20,241,149,0.35)] tracking-wide font-light transition-all"
            >
              Enter Launchpad
            </Link>
          </div>
        </div>

        {/* Card 3: Phase 3 */}
        <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(120% 120% at 90% 10%, rgba(99,102,241,0.2), rgba(99,102,241,0.06) 40%, transparent 75%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="group-hover:text-emerald-50 transition-colors duration-300 sm:text-2xl text-xl text-white font-light">
                  Phase 03
                </h3>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] text-indigo-300 bg-indigo-500/15 tracking-wide font-light">
                  Scheduled
                </span>
              </div>

              <p className="group-hover:text-slate-200 transition-colors duration-300 font-light text-slate-300 tracking-wide text-sm mb-3">
                Cross-DEX Autonomous Execution
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                <span className="font-light text-slate-300 tracking-wide">
                  Q4 2026 · Testnet Roll-Out
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-white text-3xl sm:text-4xl font-light tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
                  Cross-Chain
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs">
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-400/15 group-hover:bg-indigo-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Multi-Chain Routing (Arbitrum, Solana, Ethereum)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-400/15 group-hover:bg-indigo-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Dynamic Hedging & Adaptive Risk Sizing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-400/15 group-hover:bg-indigo-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Public Telemetry with On-Chain Trade Proof
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-400/15 group-hover:bg-indigo-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Hands-Free Neural Compounding Vaults
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-indigo-400/15 group-hover:bg-indigo-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Automated Flash-Crash Capital Preservation
                  </span>
                </li>
              </ul>
            </div>

            <Link href="/launchpad" className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-slate-300 bg-white/10 hover:bg-white/15 tracking-wide font-light transition-all">Launch dApp</Link>
          </div>
        </div>

        {/* Card 4: Phase 4 */}
        <div className="relative rounded-3xl bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 group cursor-pointer flex flex-col justify-between">
          <div
            className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(120% 120% at 90% 10%, rgba(148,163,184,0.18), rgba(148,163,184,0.05) 40%, transparent 75%)",
            }}
          />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/20 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="sm:p-8 pt-6 pr-6 pb-6 pl-6 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="group-hover:text-emerald-50 transition-colors duration-300 sm:text-2xl text-xl text-white font-light">
                  Phase 04
                </h3>
                <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] text-slate-400 bg-slate-800/80 tracking-wide font-light">
                  Upcoming
                </span>
              </div>

              <p className="group-hover:text-slate-200 transition-colors duration-300 font-light text-slate-300 tracking-wide text-sm mb-3">
                Institutional Nodes & SDK
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                <span className="font-light text-slate-300 tracking-wide">
                  2027 · Network Expansion
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-white text-3xl sm:text-4xl font-light tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
                  HFT Nodes
                </span>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs">
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-400/15 group-hover:bg-slate-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Dedicated Institutional Execution Nodes
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-400/15 group-hover:bg-slate-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Decentralized Parameter & Fee Governance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-400/15 group-hover:bg-slate-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Automated Cross-Chain Portfolio Rebalancing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-400/15 group-hover:bg-slate-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    Developer SDK & Quant Strategy Open API
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-400/15 group-hover:bg-slate-400/25 transition-all duration-300 mt-0.5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-400"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300 tracking-wide font-light leading-tight">
                    24/7 Dedicated Engineering Telemetry
                  </span>
                </li>
              </ul>
            </div>

            <a href="https://dexscreener.com/bsc/0xaac8a6396ee80afdb973fd29899a2faae831a29b" target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-xs text-slate-400 bg-white/5 hover:bg-white/10 tracking-wide font-light transition-all">Buy on DexScreener</a>
          </div>
        </div>
      </div>
    </div>
  );
}
