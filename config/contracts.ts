import { i6LaunchpadAbi } from "@/abis/i6-launchpad-abi";
import { ksnLaunchpadAbi } from "@/abis/ksnlaunchpad-abi";
import { i6SystemContractAbi } from "@/abis/i6systemcontractabi";
import { qtxTimelockAbi } from "@/abis/qtx-timelock-abi";
import { erc20Abi } from "viem";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000" as const;

export const CONTRACT_CONFIG = {
  projectId: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "573ebee1f3e1970f024fdd38ed4f1bb3",
  chainId: 56, // BSC Mainnet
  
  i6Launchpad: {
    address: (process.env.NEXT_PUBLIC_I6_LAUNCHPAD_ADDRESS || "0x8F0d64d3484CAFb09f6fD8BBBaeb24049E11ad16") as `0x${string}`,
    abi: i6LaunchpadAbi,
  },
  ksnLaunchpad: {
    address: (process.env.NEXT_PUBLIC_KSN_LAUNCHPAD_ADDRESS || "0x9Dc2882914433c63D2205BfdBBDA32F5B693b5a3") as `0x${string}`,
    abi: ksnLaunchpadAbi,
  },
  i6System: {
    address: (process.env.NEXT_PUBLIC_I6_SYSTEM_CONTRACT || "0x51A36b17b5dbD013C632dCb411F71E935392fe5e") as `0x${string}`,
    abi: i6SystemContractAbi,
  },
  i6Token: {
    address: (process.env.NEXT_PUBLIC_I6_TOKEN_ADDRESS || "0xd2e052c7faE5DDeD7A7B2CdDd27B5d75D18A1593") as `0x${string}`,
    symbol: "i6",
    decimals: 18,
    abi: erc20Abi,
  },
  ksnToken: {
    address: (process.env.NEXT_PUBLIC_KSN_TOKEN_ADDRESS || "0x32410FFfDb08ee162a83002e871E5Ad214B751fB") as `0x${string}`,
    symbol: "KSN",
    decimals: 18,
    abi: erc20Abi,
  },
  qtxToken: {
    address: (process.env.NEXT_PUBLIC_QTX_TOKEN_ADDRESS || "0x60bAF3f1082004601eA9518588D073e4bC29CB31") as `0x${string}`,
    symbol: "QTX",
    decimals: 18,
    abi: erc20Abi,
  },
  qtxWbnbPair: {
    address: (process.env.NEXT_PUBLIC_QTX_WBNB_PAIR || "0xaAC8A6396Ee80AFDB973FD29899a2FaAE831A29b") as `0x${string}`,
  },
  qtxTimelock: {
    address: (process.env.NEXT_PUBLIC_QTX_TIMELOCK_ADDRESS || "0xbcB5850c6a369a91A30d764f35a116034668fb56") as `0x${string}`,
    abi: qtxTimelockAbi,
  },
} as const;
