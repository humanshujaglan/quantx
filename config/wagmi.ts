import { cookieStorage, createStorage } from "wagmi";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { bsc } from "@reown/appkit/networks";
import { CONTRACT_CONFIG } from "./contracts";

export const projectId = CONTRACT_CONFIG.projectId;

export const networks = [bsc];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
