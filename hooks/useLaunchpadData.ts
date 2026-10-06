"use client";

import { useAccount, useReadContracts } from "wagmi";
import { CONTRACT_CONFIG, ZERO_ADDRESS } from "@/config/contracts";

export interface LaunchpadDataState {
  address: `0x${string}` | undefined;
  isConnected: boolean;
  isLoading: boolean;
  isI6Member: boolean;
  isKsnMember: boolean;
  detectedLaunchpad: "i6" | "ksn" | null;
  i6Sponsor: `0x${string}` | null;
  ksnSponsor: `0x${string}` | null;
  i6BonusBps: number;
  ksnBonusBps: number;
  i6TokenBalance: bigint;
  ksnTokenBalance: bigint;
  i6Allowance: bigint;
  ksnAllowance: bigint;
  i6Allocation: bigint;
  ksnAllocation: bigint;
  userTotalAllocation: bigint;
  timelockReleaseTime: bigint;
  timelockTotalAllocated: bigint;
  refetch: () => void;
}

export function useLaunchpadData(): LaunchpadDataState {
  const { address, isConnected } = useAccount();

  const contractsToRead = address
    ? ([
        // 0: i6System.users(address)
        {
          address: CONTRACT_CONFIG.i6System.address,
          abi: CONTRACT_CONFIG.i6System.abi,
          functionName: "users",
          args: [address],
        },
        // 1: i6Launchpad.getI6Sponsor(address)
        {
          address: CONTRACT_CONFIG.i6Launchpad.address,
          abi: CONTRACT_CONFIG.i6Launchpad.abi,
          functionName: "getI6Sponsor",
          args: [address],
        },
        // 2: i6Launchpad.getSponsorBonusBps()
        {
          address: CONTRACT_CONFIG.i6Launchpad.address,
          abi: CONTRACT_CONFIG.i6Launchpad.abi,
          functionName: "getSponsorBonusBps",
        },
        // 3: i6Launchpad.userAllocations(address)
        {
          address: CONTRACT_CONFIG.i6Launchpad.address,
          abi: CONTRACT_CONFIG.i6Launchpad.abi,
          functionName: "userAllocations",
          args: [address],
        },
        // 4: ksnLaunchpad.getUserAllocation(address)
        {
          address: CONTRACT_CONFIG.ksnLaunchpad.address,
          abi: CONTRACT_CONFIG.ksnLaunchpad.abi,
          functionName: "getUserAllocation",
          args: [address],
        },
        // 5: ksnLaunchpad.getManualSponsor(address)
        {
          address: CONTRACT_CONFIG.ksnLaunchpad.address,
          abi: CONTRACT_CONFIG.ksnLaunchpad.abi,
          functionName: "getManualSponsor",
          args: [address],
        },
        // 6: ksnLaunchpad.getSponsorBonusBps()
        {
          address: CONTRACT_CONFIG.ksnLaunchpad.address,
          abi: CONTRACT_CONFIG.ksnLaunchpad.abi,
          functionName: "getSponsorBonusBps",
        },
        // 7: i6Token.balanceOf(address)
        {
          address: CONTRACT_CONFIG.i6Token.address,
          abi: CONTRACT_CONFIG.i6Token.abi,
          functionName: "balanceOf",
          args: [address],
        },
        // 8: i6Token.allowance(address, i6Launchpad)
        {
          address: CONTRACT_CONFIG.i6Token.address,
          abi: CONTRACT_CONFIG.i6Token.abi,
          functionName: "allowance",
          args: [address, CONTRACT_CONFIG.i6Launchpad.address],
        },
        // 9: ksnToken.balanceOf(address)
        {
          address: CONTRACT_CONFIG.ksnToken.address,
          abi: CONTRACT_CONFIG.ksnToken.abi,
          functionName: "balanceOf",
          args: [address],
        },
        // 10: ksnToken.allowance(address, ksnLaunchpad)
        {
          address: CONTRACT_CONFIG.ksnToken.address,
          abi: CONTRACT_CONFIG.ksnToken.abi,
          functionName: "allowance",
          args: [address, CONTRACT_CONFIG.ksnLaunchpad.address],
        },
      ] as const)
    : [];

  const { data, isLoading, refetch } = useReadContracts({
    contracts: contractsToRead as any,
    query: {
      enabled: Boolean(isConnected && address),
      refetchInterval: 10000,
    },
  });

  // Query global QTX Timelock on BSC Mainnet
  const { data: timelockData, refetch: refetchTimelock } = useReadContracts({
    contracts: [
      {
        address: CONTRACT_CONFIG.qtxTimelock.address,
        abi: CONTRACT_CONFIG.qtxTimelock.abi,
        functionName: "releaseTime",
      },
      {
        address: CONTRACT_CONFIG.qtxTimelock.address,
        abi: CONTRACT_CONFIG.qtxTimelock.abi,
        functionName: "totalAllocatedToUsers",
      },
    ] as const,
    query: {
      refetchInterval: 15000,
    },
  });

  const timelockReleaseTime = (timelockData?.[0]?.result as bigint) || 1806426968n;
  const timelockTotalAllocated = (timelockData?.[1]?.result as bigint) || 0n;

  const handleRefetch = () => {
    refetch();
    refetchTimelock();
  };

  if (!isConnected || !address || !data) {
    return {
      address,
      isConnected,
      isLoading,
      isI6Member: false,
      isKsnMember: false,
      detectedLaunchpad: null,
      i6Sponsor: null,
      ksnSponsor: null,
      i6BonusBps: 1000,
      ksnBonusBps: 1000,
      i6TokenBalance: 0n,
      ksnTokenBalance: 0n,
      i6Allowance: 0n,
      ksnAllowance: 0n,
      i6Allocation: 0n,
      ksnAllocation: 0n,
      userTotalAllocation: 0n,
      timelockReleaseTime,
      timelockTotalAllocated,
      refetch: handleRefetch,
    };
  }

  // Parse i6 system response
  const i6UserRaw = data[0]?.result as any;
  const i6UserTotalDeposits = i6UserRaw ? (i6UserRaw[0] as bigint) : 0n;
  const i6UserReferrer = i6UserRaw ? (i6UserRaw[19] as `0x${string}`) : ZERO_ADDRESS;

  // Parse i6 launchpad sponsor
  const i6SponsorRaw = (data[1]?.result as `0x${string}`) || ZERO_ADDRESS;
  const resolvedI6Sponsor =
    i6SponsorRaw !== ZERO_ADDRESS
      ? i6SponsorRaw
      : i6UserReferrer !== ZERO_ADDRESS
      ? i6UserReferrer
      : null;

  const isI6Member =
    (i6UserTotalDeposits > 0n || (i6UserReferrer && i6UserReferrer !== ZERO_ADDRESS)) ||
    (resolvedI6Sponsor !== null && resolvedI6Sponsor !== ZERO_ADDRESS);

  const i6BonusBps = Number((data[2]?.result as bigint) || 1000n);

  const i6AllocRaw = data[3]?.result as any;
  const i6Allocation = i6AllocRaw ? (i6AllocRaw[0] as bigint) : 0n;

  // Parse KSN user allocation
  const ksnAllocRaw = data[4]?.result as any;
  const ksnAllocation = ksnAllocRaw ? (ksnAllocRaw[0] as bigint) : 0n;

  const userTotalAllocation = i6Allocation + ksnAllocation;

  const ksnSponsorRaw = (data[5]?.result as `0x${string}`) || ZERO_ADDRESS;
  const resolvedKsnSponsor = ksnSponsorRaw !== ZERO_ADDRESS ? ksnSponsorRaw : null;

  const isKsnMember = ksnAllocation > 0n || resolvedKsnSponsor !== null;

  const ksnBonusBps = Number((data[6]?.result as bigint) || 1000n);

  // Token balances & allowances
  const i6TokenBalance = (data[7]?.result as bigint) || 0n;
  const i6Allowance = (data[8]?.result as bigint) || 0n;
  const ksnTokenBalance = (data[9]?.result as bigint) || 0n;
  const ksnAllowance = (data[10]?.result as bigint) || 0n;

  // Detected preference
  let detectedLaunchpad: "i6" | "ksn" | null = null;
  if (isI6Member) {
    detectedLaunchpad = "i6";
  } else if (isKsnMember) {
    detectedLaunchpad = "ksn";
  }

  return {
    address,
    isConnected,
    isLoading,
    isI6Member,
    isKsnMember,
    detectedLaunchpad,
    i6Sponsor: resolvedI6Sponsor,
    ksnSponsor: resolvedKsnSponsor,
    i6BonusBps,
    ksnBonusBps,
    i6TokenBalance,
    ksnTokenBalance,
    i6Allowance,
    ksnAllowance,
    i6Allocation,
    ksnAllocation,
    userTotalAllocation,
    timelockReleaseTime,
    timelockTotalAllocated,
    refetch: handleRefetch,
  };
}
