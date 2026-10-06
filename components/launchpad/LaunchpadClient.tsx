"use client";

import dynamic from "next/dynamic";
import React from "react";

const LaunchpadDapp = dynamic(() => import("./LaunchpadDapp"), {
  ssr: false,
  loading: () => (
    <div
      className="min-h-screen bg-[#07080a] flex items-center justify-center text-neutral-400 text-xs font-light"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <div className="flex flex-col items-center gap-3">
        <img src="/qtx-logo.png" alt="QuantX Logo" className="h-8 w-auto animate-pulse" />
        <span className="text-neutral-500 text-xs font-light">Loading launchpad...</span>
      </div>
    </div>
  ),
});

export default function LaunchpadClient() {
  return <LaunchpadDapp />;
}
