"use client";

import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { createAppKit } from "@reown/appkit/react";
import { bsc } from "@reown/appkit/networks";
import { config, projectId, wagmiAdapter } from "@/config/wagmi";

const metadata = {
  name: "QuantX Launchpad",
  description: "QuantX Dual Launchpad (i6 & KSN) Reinvestment dApp",
  url: "https://quantx.trade",
  icons: ["/logo.png"],
};

// Initialize AppKit modal (works in both SSR and client environments)
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [bsc],
  defaultNetwork: bsc,
  metadata,
  features: {
    analytics: false,
  },
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#14F195",
    "--w3m-border-radius-master": "12px",
  },
});

export default function Web3Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
