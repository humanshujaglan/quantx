"use client";

import { useState, useEffect } from "react";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { parseUnits, maxUint256 } from "viem";
import { CONTRACT_CONFIG, ZERO_ADDRESS } from "@/config/contracts";

export interface ReinvestParams {
  launchpadType: "i6" | "ksn";
  amountStr: string;
  manualSponsor?: `0x${string}` | null;
  slippagePercent?: number;
}

export function useLaunchpadActions(onSuccessCallback?: () => void) {
  const [actionStep, setActionStep] = useState<"idle" | "approving" | "reinvesting">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { writeContractAsync, data: txHash, isPending: isWritePending, reset } = useWriteContract();

  const { isLoading: isTxWaiting, isSuccess: isTxSuccess } = useWaitForTransactionReceipt({
    hash: txHash,
  });

  useEffect(() => {
    if (isTxSuccess) {
      setActionStep("idle");
    }
  }, [isTxSuccess]);

  const approveToken = async (launchpadType: "i6" | "ksn") => {
    setErrorMessage(null);
    setActionStep("approving");
    try {
      const isI6 = launchpadType === "i6";
      const tokenAddress = isI6 ? CONTRACT_CONFIG.i6Token.address : CONTRACT_CONFIG.ksnToken.address;
      const spenderAddress = isI6
        ? CONTRACT_CONFIG.i6Launchpad.address
        : CONTRACT_CONFIG.ksnLaunchpad.address;

      const hash = await writeContractAsync({
        address: tokenAddress,
        abi: CONTRACT_CONFIG.i6Token.abi,
        functionName: "approve",
        args: [spenderAddress, maxUint256],
      });

      return hash;
    } catch (err: any) {
      console.error("Approval error:", err);
      setErrorMessage(err?.shortMessage || err?.message || "Token approval failed");
      setActionStep("idle");
      throw err;
    }
  };

  const executeReinvest = async ({
    launchpadType,
    amountStr,
    manualSponsor,
  }: ReinvestParams) => {
    setErrorMessage(null);
    setActionStep("reinvesting");
    try {
      const parsedAmount = parseUnits(amountStr, 18);
      // Min output protection (0 allows open liquidity routing, higher values enforce slippage)
      const minBnbOut = 0n;
      const minQtxOut = 0n;

      let hash: `0x${string}`;

      if (launchpadType === "i6") {
        if (manualSponsor && manualSponsor !== ZERO_ADDRESS) {
          hash = await writeContractAsync({
            address: CONTRACT_CONFIG.i6Launchpad.address,
            abi: CONTRACT_CONFIG.i6Launchpad.abi,
            functionName: "reinvest",
            args: [parsedAmount, minBnbOut, minQtxOut, manualSponsor],
          });
        } else {
          hash = await writeContractAsync({
            address: CONTRACT_CONFIG.i6Launchpad.address,
            abi: CONTRACT_CONFIG.i6Launchpad.abi,
            functionName: "reinvest",
            args: [parsedAmount, minBnbOut, minQtxOut],
          });
        }
      } else {
        if (manualSponsor && manualSponsor !== ZERO_ADDRESS) {
          hash = await writeContractAsync({
            address: CONTRACT_CONFIG.ksnLaunchpad.address,
            abi: CONTRACT_CONFIG.ksnLaunchpad.abi,
            functionName: "reinvest",
            args: [parsedAmount, minBnbOut, minQtxOut, manualSponsor],
          });
        } else {
          hash = await writeContractAsync({
            address: CONTRACT_CONFIG.ksnLaunchpad.address,
            abi: CONTRACT_CONFIG.ksnLaunchpad.abi,
            functionName: "reinvest",
            args: [parsedAmount, minBnbOut, minQtxOut],
          });
        }
      }

      if (onSuccessCallback) {
        onSuccessCallback();
      }

      return hash;
    } catch (err: any) {
      console.error("Reinvestment error:", err);
      setErrorMessage(err?.shortMessage || err?.message || "Reinvestment failed");
      setActionStep("idle");
      throw err;
    }
  };

  return {
    approveToken,
    executeReinvest,
    actionStep,
    isWritePending,
    isTxWaiting,
    isTxSuccess,
    txHash,
    errorMessage,
    resetAction: () => {
      reset();
      setActionStep("idle");
      setErrorMessage(null);
    },
  };
}
