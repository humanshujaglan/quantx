import React from "react";
import type { Metadata } from "next";
import LaunchpadClient from "@/components/launchpad/LaunchpadClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "QuantX Launchpad ($QTX) - Dual Reinvestment Workspace",
  description:
    "Reinvest into QuantX i6 and KSN launchpads on BNB Smart Chain. Automatic sponsor detection with 10% sponsor bonus.",
};

export default function LaunchpadPage() {
  return <LaunchpadClient />;
}
