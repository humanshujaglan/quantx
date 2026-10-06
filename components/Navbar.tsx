"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-50 w-full overflow-hidden" style={{ top: "52px" }}>
      <div className="relative flex items-center justify-between w-full max-w-5xl mx-auto rounded-full pl-4 pr-3 py-3 bg-[#171717]/90 backdrop-blur-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.5)] transition-all">
        <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
        </div>

        {/* Logo Section */}
        <div className="flex items-center pl-2 relative z-10">
          <Link href="/">
            <img
              src="/qtx-logo.png"
              alt="QuantX AI Logo"
              className="h-10 w-auto object-contain transition-transform duration-500"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1 relative z-10">
          <button
            onClick={() => {
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 text-sm font-light text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            Home
          </button>
          <button
            onClick={() => {
              document.getElementById("how")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 text-sm font-light text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            AI Model
          </button>
          <button
            onClick={() => {
              document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 text-sm font-light text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            Metrics
          </button>
          <button
            onClick={() => {
              document.getElementById("pricing-component")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-4 py-2 text-sm font-light text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-300 whitespace-nowrap"
          >
            Roadmap
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 flex-shrink-0 relative z-10">
          <Link
            href="/launchpad"
            className="group relative overflow-hidden flex items-center gap-2 px-5 py-2 rounded-full text-sm font-light text-black bg-[#14F195] hover:bg-[#10c87b] transition-all duration-300 shadow-[0_0_15px_-3px_rgba(20,241,149,0.4)] whitespace-nowrap"
          >
            <span className="relative z-10">Launch dApp</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 w-3 h-3 group-hover:translate-x-0.5 transition-transform"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
