"use client";

import { useMemo } from "react";
import { isAddress } from "viem";
import { useReadContracts } from "wagmi";
import { CONTRACT_CONFIG, ZERO_ADDRESS } from "@/config/contracts";

export interface SponsorValidationResult {
  isValid: boolean | null;
  isLoading: boolean;
  error: string | null;
  foundIn: "i6" | "ksn" | null;
}

export function useValidateSponsor(
  sponsorInput: string,
  userAddress?: `0x${string}`
): SponsorValidationResult {
  const trimmed = sponsorInput.trim();

  // Basic format validations
  const isFormattedAddress = Boolean(trimmed && isAddress(trimmed));
  const isSelf = Boolean(
    userAddress &&
      trimmed &&
      isFormattedAddress &&
      userAddress.toLowerCase() === trimmed.toLowerCase()
  );
  const isZero = trimmed.toLowerCase() === ZERO_ADDRESS.toLowerCase();

  const formattedAddress = (isFormattedAddress && !isSelf && !isZero
    ? trimmed
    : undefined) as `0x${string}` | undefined;

  const { data, isLoading } = useReadContracts({
    contracts: formattedAddress
      ? ([
          // 0: Check i6System
          {
            address: CONTRACT_CONFIG.i6System.address,
            abi: CONTRACT_CONFIG.i6System.abi,
            functionName: "users",
            args: [formattedAddress],
          },
          // 1: Check i6Launchpad allocation
          {
            address: CONTRACT_CONFIG.i6Launchpad.address,
            abi: CONTRACT_CONFIG.i6Launchpad.abi,
            functionName: "userAllocations",
            args: [formattedAddress],
          },
          // 2: Check ksnLaunchpad allocation
          {
            address: CONTRACT_CONFIG.ksnLaunchpad.address,
            abi: CONTRACT_CONFIG.ksnLaunchpad.abi,
            functionName: "getUserAllocation",
            args: [formattedAddress],
          },
        ] as const)
      : [],
    query: {
      enabled: Boolean(formattedAddress),
    },
  });

  return useMemo(() => {
    if (!trimmed) {
      return { isValid: null, isLoading: false, error: null, foundIn: null };
    }

    if (!isFormattedAddress) {
      return {
        isValid: false,
        isLoading: false,
        error: "Invalid EVM address format",
        foundIn: null,
      };
    }

    if (isSelf) {
      return {
        isValid: false,
        isLoading: false,
        error: "You cannot sponsor yourself",
        foundIn: null,
      };
    }

    if (isZero) {
      return {
        isValid: false,
        isLoading: false,
        error: "Null address cannot be used as sponsor",
        foundIn: null,
      };
    }

    if (isLoading) {
      return {
        isValid: null,
        isLoading: true,
        error: null,
        foundIn: null,
      };
    }

    if (!data) {
      return {
        isValid: null,
        isLoading: false,
        error: null,
        foundIn: null,
      };
    }

    // Check i6System
    const i6User = data[0]?.result as any;
    const hasI6System =
      Boolean(i6User && (i6User[0] > 0n || (i6User[19] && i6User[19] !== ZERO_ADDRESS)));

    // Check i6Launchpad
    const i6Alloc = data[1]?.result as any;
    const hasI6Launchpad = Boolean(i6Alloc && i6Alloc[0] > 0n);

    // Check ksnLaunchpad
    const ksnAlloc = data[2]?.result as any;
    const hasKsnLaunchpad = Boolean(ksnAlloc && ksnAlloc[0] > 0n);

    if (hasI6System || hasI6Launchpad) {
      return {
        isValid: true,
        isLoading: false,
        error: null,
        foundIn: "i6",
      };
    }

    if (hasKsnLaunchpad) {
      return {
        isValid: true,
        isLoading: false,
        error: null,
        foundIn: "ksn",
      };
    }

    return {
      isValid: false,
      isLoading: false,
      error: "Sponsor not found in QTX launchpads or i6 system",
      foundIn: null,
    };
  }, [trimmed, isFormattedAddress, isSelf, isZero, isLoading, data]);
}
