"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { useAppKit } from "@reown/appkit/react";
import { formatUnits, parseUnits } from "viem";
import {
  Wallet,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  RefreshCw,
  LayoutGrid,
  Lock,
  Coins,
} from "lucide-react";
import { CONTRACT_CONFIG } from "@/config/contracts";
import { useLaunchpadData } from "@/hooks/useLaunchpadData";
import { useValidateSponsor } from "@/hooks/useValidateSponsor";
import { useLaunchpadActions } from "@/hooks/useLaunchpadActions";

export default function LaunchpadDapp() {
  const { open } = useAppKit();

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const {
    address,
    isConnected,
    isLoading: isDataLoading,
    isI6Member,
    isKsnMember,
    i6Sponsor,
    ksnSponsor,
    i6TokenBalance,
    ksnTokenBalance,
    i6Allowance,
    ksnAllowance,
    i6Allocation,
    ksnAllocation,
    userTotalAllocation,
    timelockReleaseTime,
    timelockTotalAllocated,
    refetch,
  } = useLaunchpadData();

  // Live countdown timer for QTX Timelock
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isUnlocked: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isUnlocked: false });

  useEffect(() => {
    const targetSec = Number(timelockReleaseTime || 1806426968n);
    const updateCountdown = () => {
      const nowSec = Math.floor(Date.now() / 1000);
      const diff = targetSec - nowSec;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isUnlocked: true });
      } else {
        const days = Math.floor(diff / 86400);
        const hours = Math.floor((diff % 86400) / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = diff % 60;
        setTimeLeft({ days, hours, minutes, seconds, isUnlocked: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [timelockReleaseTime]);

  const unlockDateStr = useMemo(() => {
    try {
      const sec = Number(timelockReleaseTime || 1806426968n);
      return new Date(sec * 1000).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return "March 30, 2027";
    }
  }, [timelockReleaseTime]);

  const formattedTotalAllocation = useMemo(() => {
    try {
      if (!userTotalAllocation || userTotalAllocation === 0n) return "0.00";
      const val = Number(formatUnits(userTotalAllocation, 18));
      return isNaN(val) ? "0.00" : val.toLocaleString(undefined, { maximumFractionDigits: 4 });
    } catch {
      return "0.00";
    }
  }, [userTotalAllocation]);

  const formattedI6Allocation = useMemo(() => {
    try {
      if (!i6Allocation || i6Allocation === 0n) return "0.00";
      const val = Number(formatUnits(i6Allocation, 18));
      return isNaN(val) ? "0.00" : val.toLocaleString(undefined, { maximumFractionDigits: 4 });
    } catch {
      return "0.00";
    }
  }, [i6Allocation]);

  const formattedKsnAllocation = useMemo(() => {
    try {
      if (!ksnAllocation || ksnAllocation === 0n) return "0.00";
      const val = Number(formatUnits(ksnAllocation, 18));
      return isNaN(val) ? "0.00" : val.toLocaleString(undefined, { maximumFractionDigits: 4 });
    } catch {
      return "0.00";
    }
  }, [ksnAllocation]);

  // "hub" (home page after login / default) | "i6" | "ksn"
  const [currentView, setCurrentView] = useState<"hub" | "i6" | "ksn">("hub");
  const [selectedLaunchpad, setSelectedLaunchpad] = useState<"i6" | "ksn">("i6");

  const [amountInput, setAmountInput] = useState<string>("");
  const [manualSponsorInput, setManualSponsorInput] = useState<string>("");
  const sponsorValidation = useValidateSponsor(manualSponsorInput, address);

  const [slippage, setSlippage] = useState<number>(0.5);
  const [copied, setCopied] = useState(false);

  const {
    approveToken,
    executeReinvest,
    actionStep,
    isWritePending,
    isTxWaiting,
    isTxSuccess,
    txHash,
    errorMessage,
  } = useLaunchpadActions(() => {
    refetch();
    setAmountInput("");
  });

  const isI6 = selectedLaunchpad === "i6";
  const activeLaunchpadContract = isI6
    ? CONTRACT_CONFIG.i6Launchpad.address
    : CONTRACT_CONFIG.ksnLaunchpad.address;
  const activeTokenSymbol = isI6 ? "i6" : "KSN";
  const activeLaunchpadName = isI6 ? "Infinity Six" : "Kissan";
  const activeLaunchpadLogo = isI6 ? "/i6-logo.png" : "/kissanlogo.webp";
  const activeBalance = isI6 ? i6TokenBalance : ksnTokenBalance;
  const activeAllowance = isI6 ? i6Allowance : ksnAllowance;

  const formattedBalance = useMemo(() => {
    try {
      if (!activeBalance || activeBalance === 0n) return "0";
      const val = Number(formatUnits(activeBalance, 18));
      return isNaN(val) ? "0" : val.toLocaleString(undefined, { maximumFractionDigits: 4 });
    } catch {
      return "0";
    }
  }, [activeBalance]);

  const effectiveSponsor = useMemo(() => {
    if (isI6 && i6Sponsor) return i6Sponsor;
    if (!isI6 && ksnSponsor) return ksnSponsor;
    if (sponsorValidation.isValid && manualSponsorInput.trim()) {
      return manualSponsorInput.trim() as `0x${string}`;
    }
    return null;
  }, [isI6, i6Sponsor, ksnSponsor, sponsorValidation.isValid, manualSponsorInput]);

  const hasSponsorBonus = Boolean(
    (isI6 && (isI6Member || sponsorValidation.isValid)) ||
      (!isI6 && (isKsnMember || sponsorValidation.isValid))
  );

  const parsedAmountBigInt = useMemo(() => {
    try {
      if (!amountInput || isNaN(Number(amountInput)) || Number(amountInput) <= 0) return 0n;
      return parseUnits(amountInput, 18);
    } catch {
      return 0n;
    }
  }, [amountInput]);

  const needsApproval = parsedAmountBigInt > 0n && activeAllowance < parsedAmountBigInt;
  const hasInsufficientBalance = parsedAmountBigInt > activeBalance;

  const handleMaxClick = () => {
    if (activeBalance > 0n) {
      setAmountInput(formatUnits(activeBalance, 18));
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenWallet = async () => {
    try {
      await open();
    } catch (e) {
      console.error("Wallet open error:", e);
    }
  };

  const handleApprove = async () => {
    if (!amountInput || parsedAmountBigInt === 0n) return;
    try {
      await approveToken(selectedLaunchpad, amountInput);
    } catch {
      // Handled in hook
    }
  };

  const handleReinvest = async () => {
    if (!amountInput || parsedAmountBigInt === 0n) return;
    if (manualSponsorInput.trim() && !sponsorValidation.isValid) return;

    try {
      await executeReinvest({
        launchpadType: selectedLaunchpad,
        amountStr: amountInput,
        manualSponsor: effectiveSponsor,
        slippagePercent: slippage,
      });
    } catch {
      // Handled in hook
    }
  };

  const openLaunchpad = (type: "i6" | "ksn") => {
    setSelectedLaunchpad(type);
    setCurrentView(type);
  };

  const effectiveConnected = mounted && isConnected;
  const effectiveAddress = mounted ? address : undefined;

  return (
    <div
      className="min-h-screen bg-[#07080a] text-neutral-300 flex flex-col justify-between selection:bg-[#14F195]/20 selection:text-[#14F195] overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      <style>{`
        @keyframes qtxFloat {
          0%, 100% {
            transform: translateY(0px) scale(1);
            filter: drop-shadow(0 14px 22px rgba(20, 241, 149, 0.45));
          }
          50% {
            transform: translateY(-16px) scale(1.03);
            filter: drop-shadow(0 24px 38px rgba(20, 241, 149, 0.7));
          }
        }
        .animate-qtx-float {
          animation: qtxFloat 3.8s ease-in-out infinite;
        }
      `}</style>

      {/* Top Navigation */}
      <header className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between bg-[#0a0c0f]/85 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2.5 sm:gap-4 min-w-0">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/qtx-logo.png" alt="QuantX Logo" className="h-7 sm:h-8 w-auto object-contain" />
          </Link>

          {currentView !== "hub" && (
            <button
              onClick={() => setCurrentView("hub")}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#121418] hover:bg-[#181b21] text-[11px] sm:text-xs font-light text-neutral-300 transition-colors shrink-0"
            >
              <ArrowLeft className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#14F195]" />
              <span>
                <span className="hidden sm:inline">Launchpad </span>Hub
              </span>
            </button>
          )}
        </div>

        {/* Top Right Actions */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121418] text-xs text-neutral-400 font-light">
            <span className="w-2 h-2 rounded-full bg-[#F3BA2F]"></span>
            <span>BSC Mainnet</span>
          </div>

          <button
            onClick={() => refetch()}
            title="Refresh on-chain data"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#121418] flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isDataLoading ? "animate-spin text-[#14F195]" : ""}`} />
          </button>

          {effectiveConnected ? (
            <button
              onClick={handleOpenWallet}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#121418] hover:bg-[#181b21] text-[11px] sm:text-xs font-light text-neutral-200 flex items-center gap-1.5 sm:gap-2 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#14F195]"></span>
              <span className="font-light">
                {effectiveAddress?.slice(0, 5)}...{effectiveAddress?.slice(-4)}
              </span>
            </button>
          ) : (
            <button
              onClick={handleOpenWallet}
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-[#14F195] hover:bg-[#10c87b] text-[11px] sm:text-xs font-normal text-[#07080a] flex items-center gap-1.5 sm:gap-2 transition-all shadow-md active:scale-95"
            >
              <Wallet className="w-3.5 h-3.5 text-[#07080a]" />
              <span>Connect</span>
            </button>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col items-center justify-start px-4 sm:px-6 py-4 sm:py-8 max-w-3xl mx-auto w-full">
        {/* Wider Top Navigation Tabs (Placed at the top of the page across all views) */}
        <div className="w-full max-w-xl sm:max-w-2xl px-1 mb-5 sm:mb-7">
          <div className="grid grid-cols-3 p-1 sm:p-1.5 bg-[#0e1014] border border-white/[0.06] rounded-2xl sm:rounded-full shadow-lg gap-1.5 sm:gap-2">
            <button
              onClick={() => setCurrentView("hub")}
              className={`w-full py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-light transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                currentView === "hub"
                  ? "bg-[#181b22] text-white shadow-md border border-white/[0.08]"
                  : "text-neutral-400 hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <LayoutGrid className={`w-3.5 sm:w-4 h-3.5 sm:h-4 ${currentView === "hub" ? "text-[#14F195]" : "text-neutral-400"}`} />
              <span className="font-normal">Home</span>
            </button>

            <button
              onClick={() => openLaunchpad("i6")}
              className={`w-full py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-light transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                currentView === "i6"
                  ? "bg-[#181b22] text-white shadow-md border border-white/[0.08]"
                  : "text-neutral-400 hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <img src="/i6-logo.png" alt="i6" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
              <span className="font-normal truncate">Infinity Six</span>
              {isI6Member && (
                <span className="hidden md:inline px-1.5 py-0.5 text-[9px] rounded bg-[#14F195]/20 text-[#14F195] font-light">
                  detected
                </span>
              )}
            </button>

            <button
              onClick={() => openLaunchpad("ksn")}
              className={`w-full py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl sm:rounded-full text-xs sm:text-sm font-light transition-all flex items-center justify-center gap-1.5 sm:gap-2 ${
                currentView === "ksn"
                  ? "bg-[#181b22] text-white shadow-md border border-white/[0.08]"
                  : "text-neutral-400 hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <img src="/kissanlogo.webp" alt="KSN" className="w-3.5 sm:w-4 h-3.5 sm:h-4 object-contain" />
              <span className="font-normal truncate">Kissan</span>
              {isKsnMember && (
                <span className="hidden md:inline px-1.5 py-0.5 text-[9px] rounded bg-[#14F195]/20 text-[#14F195] font-light">
                  detected
                </span>
              )}
            </button>
          </div>
        </div>

        {currentView === "hub" ? (
          /* =========================================================================
             HOME PAGE (LAUNCHPAD HUB)
             - /platform.png launchpad platform image
             - /qtx-logo.png floating back and forth (hovering up and down) above it
             - QTX Timelock Status (time until unlock) & Connected User Allocation
             - Two options below: "Infinity Six" & "Kissan" (NO DESCRIPTIONS)
             ========================================================================= */
          <div className="w-full flex flex-col items-center">
            {/* Launchpad Platform Showcase: QTX Logo floating above platform.png */}
            <div className="relative w-full max-w-xl flex flex-col items-center justify-center my-1 sm:my-2 px-2">
              {/* Floating QTX Logo hovering up and down above platform */}
              <div className="relative z-20 -mb-6 sm:-mb-8 md:-mb-10 animate-qtx-float transition-transform">
                <img
                  src="/qtx-logo.png"
                  alt="QuantX AI"
                  className="w-44 sm:w-60 md:w-64 h-auto object-contain pointer-events-none select-none drop-shadow-[0_15px_30px_rgba(20,241,149,0.5)]"
                />
              </div>

              {/* Platform Image */}
              <div className="relative z-10 w-full flex justify-center">
                <img
                  src="/platform.png"
                  alt="QuantX Launchpad Platform"
                  className="w-44 sm:w-60 md:w-64 h-auto object-contain filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>

            {/* QTX Timelock Countdown & User Allocation Dashboard */}
            <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4 mt-3 sm:mt-5">
              {/* Card 1: Time Until Unlock */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0d0f13] border border-white/[0.05] shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#14171e] flex items-center justify-center">
                        <Lock className="w-4 h-4 text-[#14F195]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-normal text-white">QTX Timelock</h4>
                        <a
                          href="https://bscscan.com/address/0xbcB5850c6a369a91A30d764f35a116034668fb56"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[10px] text-neutral-400 hover:text-neutral-200 flex items-center gap-1 font-light"
                        >
                          <span>0xbcB5...fb56</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-light bg-[#14F195]/15 text-[#14F195] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14F195] animate-pulse"></span>
                      {timeLeft.isUnlocked ? "Unlocked" : "Locked in Vault"}
                    </span>
                  </div>

                  <p className="text-[11px] text-neutral-400 font-light mb-2">
                    Time until $QTX token release:
                  </p>

                  {/* Countdown Grid */}
                  <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                    <div className="bg-[#12151b] p-2 rounded-xl text-center border border-white/[0.04]">
                      <div className="text-base sm:text-lg font-mono font-medium text-white">{timeLeft.days}</div>
                      <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-light">Days</div>
                    </div>
                    <div className="bg-[#12151b] p-2 rounded-xl text-center border border-white/[0.04]">
                      <div className="text-base sm:text-lg font-mono font-medium text-white">{String(timeLeft.hours).padStart(2, "0")}</div>
                      <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-light">Hours</div>
                    </div>
                    <div className="bg-[#12151b] p-2 rounded-xl text-center border border-white/[0.04]">
                      <div className="text-base sm:text-lg font-mono font-medium text-white">{String(timeLeft.minutes).padStart(2, "0")}</div>
                      <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-light">Mins</div>
                    </div>
                    <div className="bg-[#12151b] p-2 rounded-xl text-center border border-white/[0.04]">
                      <div className="text-base sm:text-lg font-mono font-medium text-[#14F195]">{String(timeLeft.seconds).padStart(2, "0")}</div>
                      <div className="text-[9px] uppercase tracking-wider text-neutral-400 font-light">Secs</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2.5 mt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-neutral-400 font-light">
                  <span>Release Date:</span>
                  <span className="text-neutral-300 font-normal">{unlockDateStr}</span>
                </div>
              </div>

              {/* Card 2: Connected User Allocation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#0d0f13] border border-white/[0.05] shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#14171e] flex items-center justify-center">
                        <Coins className="w-4 h-4 text-[#14F195]" />
                      </div>
                      <div>
                        <h4 className="text-xs font-normal text-white">Your Allocation</h4>
                        <span className="text-[10px] text-neutral-400 font-light">
                          {effectiveConnected
                            ? `${effectiveAddress?.slice(0, 6)}...${effectiveAddress?.slice(-4)}`
                            : "Wallet not connected"}
                        </span>
                      </div>
                    </div>

                    {effectiveConnected ? (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-light bg-[#14F195]/15 text-[#14F195]">
                        Connected
                      </span>
                    ) : (
                      <button
                        onClick={handleOpenWallet}
                        className="px-2.5 py-0.5 rounded-full text-[10px] font-normal bg-[#14F195] text-[#07080a] hover:bg-[#10c87b] transition-colors"
                      >
                        Connect
                      </button>
                    )}
                  </div>

                  <p className="text-[11px] text-neutral-400 font-light mb-1">
                    Total allocated $QTX:
                  </p>

                  {effectiveConnected ? (
                    <div className="bg-[#12151b] p-2.5 sm:p-3 rounded-xl border border-white/[0.04] mb-2">
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-2xl font-mono font-medium text-white tracking-tight">
                          {formattedTotalAllocation}
                        </span>
                        <span className="text-xs font-normal text-[#14F195]">$QTX</span>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleOpenWallet}
                      className="w-full bg-[#12151b] p-2.5 sm:p-3 rounded-xl border border-white/[0.04] mb-2 text-left hover:border-[#14F195]/30 transition-colors block"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-400 font-light">Connect to view allocation</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#14F195]" />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Two Options Below: Infinity Six & Kissan (WITHOUT DESCRIPTIONS) */}
            <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mt-3.5 sm:mt-5">
              {/* Option 1: Infinity Six */}
              <button
                onClick={() => openLaunchpad("i6")}
                className="group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0d0f13] hover:bg-[#12151b] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 text-left flex flex-col justify-between shadow-2xl active:scale-[0.99] touch-manipulation"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#14171e] flex items-center justify-center p-2 shadow-inner">
                      <img
                        src="/i6-logo.png"
                        alt="Infinity Six Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-normal text-white group-hover:text-[#14F195] transition-colors">
                        Infinity Six
                      </h3>
                      <span className="text-[11px] text-neutral-400 font-light">Launchpad 01</span>
                    </div>
                  </div>
                  {isI6Member ? (
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-light bg-[#14F195]/15 text-[#14F195]">
                      Detected Member
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-light bg-[#1a1d24] text-neutral-400">
                      Eligible
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-light text-[#14F195]">
                  <span>Enter Infinity Six Launchpad</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              {/* Option 2: Kissan */}
              <button
                onClick={() => openLaunchpad("ksn")}
                className="group relative p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#0d0f13] hover:bg-[#12151b] border border-white/[0.04] hover:border-white/[0.08] transition-all duration-300 text-left flex flex-col justify-between shadow-2xl active:scale-[0.99] touch-manipulation"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#14171e] flex items-center justify-center p-2 shadow-inner">
                      <img
                        src="/kissanlogo.webp"
                        alt="Kissan Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-normal text-white group-hover:text-[#14F195] transition-colors">
                        Kissan
                      </h3>
                      <span className="text-[11px] text-neutral-400 font-light">Launchpad 02</span>
                    </div>
                  </div>
                  {isKsnMember ? (
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-light bg-[#14F195]/15 text-[#14F195]">
                      Detected Member
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-light bg-[#1a1d24] text-neutral-400">
                      Eligible
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs font-light text-[#14F195]">
                  <span>Enter Kissan Launchpad</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        ) : (
          /* =========================================================================
             ACTIVE LAUNCHPAD WORKSPACE (i6 OR KSN)
             ========================================================================= */
          <div className="w-full max-w-xl">

            {/* Dynamic Context Banner Pill */}
            <div className="mb-4 sm:mb-5 w-full">
              {effectiveConnected && isI6Member && isI6 ? (
                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 rounded-xl sm:rounded-full bg-[#14F195]/10 text-[11px] sm:text-xs text-[#14F195] font-light gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <img src="/i6-logo.png" alt="i6" className="w-4 h-4 object-contain shrink-0" />
                    <span className="truncate sm:whitespace-normal">Infinity Six member · 10% sponsor bonus auto-applied</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </div>
              ) : effectiveConnected && isKsnMember && !isI6 ? (
                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 rounded-xl sm:rounded-full bg-[#14F195]/10 text-[11px] sm:text-xs text-[#14F195] font-light gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <img src="/kissanlogo.webp" alt="KSN" className="w-4 h-4 object-contain shrink-0" />
                    <span className="truncate sm:whitespace-normal">Kissan participant connected</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </div>
              ) : (
                <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 rounded-xl sm:rounded-full bg-[#101216] text-[11px] sm:text-xs text-neutral-400 font-light gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="px-1.5 py-0.5 rounded bg-[#1c1f26] text-neutral-300 font-light text-[10px] shrink-0">
                      active
                    </span>
                    <span className="truncate sm:whitespace-normal">{activeLaunchpadName} Launchpad on BNB Smart Chain</span>
                  </div>
                  <button
                    onClick={() => setCurrentView("hub")}
                    className="text-[11px] text-[#14F195] hover:underline shrink-0"
                  >
                    change
                  </button>
                </div>
              )}
            </div>

            {/* Central Card with Zero Borders */}
            <div className="w-full bg-[#0d0f13] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-2xl relative overflow-hidden">
              {/* Header with QTX logo and Active Launchpad logo */}
              <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                <img src="/qtx-logo.png" alt="QuantX" className="h-6 sm:h-7 w-auto object-contain" />
                <span className="text-neutral-600 text-xs font-light">×</span>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#14171e]">
                  <img src={activeLaunchpadLogo} alt={activeLaunchpadName} className="h-4 w-4 object-contain" />
                  <span className="text-xs font-light text-neutral-200">{activeLaunchpadName}</span>
                </div>
              </div>

              <h1 className="text-center text-base sm:text-lg font-normal text-neutral-200 mb-4 sm:mb-5">
                Reinvest from {activeLaunchpadName}
              </h1>

              {!effectiveConnected ? (
                /* Unconnected State inside workspace */
                <div className="space-y-4">
                  <button
                    onClick={handleOpenWallet}
                    className="w-full py-3.5 px-4 rounded-xl bg-white hover:bg-neutral-100 text-[#07080a] font-normal text-xs sm:text-sm flex items-center justify-center gap-2.5 transition-all shadow-lg hover:shadow-xl active:scale-[0.99] touch-manipulation"
                  >
                    <Wallet className="w-4 h-4 text-black" />
                    <span>Continue with wallet</span>
                  </button>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#121418] space-y-2">
                    <div className="flex items-center gap-2 text-xs text-neutral-300 font-light">
                      <ShieldCheck className="w-4 h-4 text-[#14F195]" />
                      <span>Secure Web3 Authentication</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Connected State Form */
                <div className="space-y-4">
                  {/* Connected User Summary */}
                  <div className="p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#121418] flex items-center justify-between text-xs font-light gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="w-2 h-2 rounded-full bg-[#14F195] shrink-0"></div>
                      <span className="text-neutral-300 text-xs font-light truncate">
                        {effectiveAddress?.slice(0, 6)}...{effectiveAddress?.slice(-4)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      {isI6Member && isI6 ? (
                        <span className="px-2 py-0.5 rounded-md bg-[#14F195]/15 text-[#14F195] text-[10px] sm:text-[11px] font-light flex items-center gap-1">
                          <img src="/i6-logo.png" alt="i6" className="w-3 h-3 object-contain" />
                          i6 member
                        </span>
                      ) : isKsnMember && !isI6 ? (
                        <span className="px-2 py-0.5 rounded-md bg-[#14F195]/15 text-[#14F195] text-[10px] sm:text-[11px] font-light flex items-center gap-1">
                          <img src="/kissanlogo.webp" alt="KSN" className="w-3 h-3 object-contain" />
                          Kissan member
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded-md bg-[#1a1d24] text-neutral-400 text-[10px] sm:text-[11px] font-light">
                          direct participant
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Sponsor Information / Input */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-light text-neutral-300 flex items-center justify-between">
                      <span>sponsor address</span>
                      {hasSponsorBonus && (
                        <span className="text-[10px] sm:text-[11px] text-[#14F195] flex items-center gap-1 font-light">
                          <Sparkles className="w-3 h-3" />
                          10% bonus qualified
                        </span>
                      )}
                    </div>

                    {/* If user has detected sponsor */}
                    {isI6 && isI6Member && effectiveSponsor ? (
                      <div className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#121418] text-xs text-neutral-300 flex items-center justify-between font-light">
                        <span className="truncate">
                          {effectiveSponsor.slice(0, 8)}...{effectiveSponsor.slice(-6)}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#14F195]/10 text-[#14F195] text-[10px] font-light flex items-center gap-1 shrink-0">
                          <img src="/i6-logo.png" alt="i6" className="w-3 h-3 object-contain" />
                          on-chain sponsor
                        </span>
                      </div>
                    ) : !isI6 && isKsnMember && effectiveSponsor ? (
                      <div className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#121418] text-xs text-neutral-300 flex items-center justify-between font-light">
                        <span className="truncate">
                          {effectiveSponsor.slice(0, 8)}...{effectiveSponsor.slice(-6)}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#14F195]/10 text-[#14F195] text-[10px] font-light flex items-center gap-1 shrink-0">
                          <img src="/kissanlogo.webp" alt="KSN" className="w-3 h-3 object-contain" />
                          registered sponsor
                        </span>
                      </div>
                    ) : (
                      /* Manual input for unregistered or override */
                      <div>
                        <input
                          type="text"
                          placeholder="enter sponsor address (optional for 10% bonus)"
                          value={manualSponsorInput}
                          onChange={(e) => setManualSponsorInput(e.target.value)}
                          className={`w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#121418] text-xs placeholder:text-neutral-500 placeholder:font-light focus:outline-none transition-colors ${
                            manualSponsorInput.trim()
                              ? sponsorValidation.isValid
                                ? "text-[#14F195]"
                                : sponsorValidation.isLoading
                                ? "text-neutral-300"
                                : "text-red-400"
                              : "text-neutral-300"
                          }`}
                        />
                        {manualSponsorInput.trim() && (
                          <div className="mt-1.5 text-[11px] flex items-start gap-1.5 font-light leading-snug">
                            {sponsorValidation.isLoading ? (
                              <span className="text-neutral-400 flex items-center gap-1">
                                <RefreshCw className="w-3 h-3 animate-spin shrink-0" /> verifying sponsor in QTX ecosystem...
                              </span>
                            ) : sponsorValidation.isValid ? (
                              <span className="text-[#14F195] flex items-center gap-1">
                                <Check className="w-3.5 h-3.5 shrink-0" /> verified QTX sponsor ({sponsorValidation.foundIn}) — 10% bonus credited
                              </span>
                            ) : (
                              <span className="text-red-400 flex items-start gap-1">
                                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                <span className="break-words">{sponsorValidation.error}</span>
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Deposit Amount Input */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-light flex-wrap gap-1">
                      <span>reinvest amount</span>
                      <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                        <span>balance:</span>
                        <span className="text-neutral-200 font-light">{formattedBalance}</span>
                        <img src={activeLaunchpadLogo} alt={activeTokenSymbol} className="w-3.5 h-3.5 object-contain" />
                        <span>{activeTokenSymbol}</span>
                      </span>
                    </div>

                    <div className="relative">
                      <input
                        type="number"
                        step="any"
                        placeholder="0.0"
                        value={amountInput}
                        onChange={(e) => setAmountInput(e.target.value)}
                        className="w-full pl-3.5 pr-24 sm:pr-28 py-2.5 sm:py-3 rounded-xl bg-[#121418] text-white text-xs sm:text-sm focus:outline-none transition-colors font-light"
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 sm:gap-1.5">
                        <button
                          type="button"
                          onClick={handleMaxClick}
                          className="px-2 py-1 rounded-md bg-[#1a1d24] hover:bg-[#222630] text-[10px] sm:text-[11px] font-normal text-[#14F195] transition-colors"
                        >
                          MAX
                        </button>
                        <div className="flex items-center gap-1 pr-1 text-xs font-light text-neutral-400">
                          <img src={activeLaunchpadLogo} alt={activeTokenSymbol} className="w-3.5 h-3.5 object-contain" />
                          <span>{activeTokenSymbol}</span>
                        </div>
                      </div>
                    </div>

                    {hasInsufficientBalance && (
                      <p className="text-[11px] text-red-400 flex items-center gap-1 mt-1 font-light">
                        <AlertCircle className="w-3 h-3" /> insufficient {activeTokenSymbol} balance
                      </p>
                    )}
                  </div>

                  {/* Slippage Settings */}
                  <div className="p-3 sm:p-3.5 rounded-xl bg-[#121418] space-y-2">
                    <div className="flex items-center justify-between text-xs text-neutral-400 font-light">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#14F195]" /> anti-MEV slippage tolerance
                      </span>
                      <span className="text-neutral-200 font-light">{slippage}%</span>
                    </div>
                    <div className="flex gap-2">
                      {[0.5, 1.0, 2.0].map((val) => (
                        <button
                          key={val}
                          onClick={() => setSlippage(val)}
                          type="button"
                          className={`flex-1 py-1.5 text-xs rounded-lg font-light transition-colors ${
                            slippage === val
                              ? "bg-[#1c1f26] text-[#14F195]"
                              : "bg-[#0d0f13] text-neutral-400 hover:text-white"
                          }`}
                        >
                          {val}%
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Error Alert */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/40 text-red-300 text-xs flex items-start gap-2 font-light">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-normal">transaction error</p>
                        <p className="text-neutral-400 text-[11px] mt-0.5 break-words">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Success Alert */}
                  {isTxSuccess && txHash && (
                    <div className="p-3 rounded-xl bg-emerald-950/40 text-emerald-300 text-xs flex items-start gap-2 font-light">
                      <Check className="w-4 h-4 text-[#14F195] shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="font-normal text-[#14F195]">transaction confirmed</p>
                        <a
                          href={`https://bscscan.com/tx/${txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-300 hover:text-white underline text-[11px] flex items-center gap-1 mt-0.5"
                        >
                          <span>view on BscScan</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons: Two-Stage Approval & Reinvestment */}
                  <div className="pt-2">
                    {needsApproval ? (
                      <button
                        disabled={isWritePending || isTxWaiting || hasInsufficientBalance}
                        onClick={handleApprove}
                        className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-[#14F195] hover:bg-[#10c87b] disabled:bg-[#121418] disabled:text-neutral-600 disabled:cursor-not-allowed text-[#07080a] font-normal text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] touch-manipulation"
                      >
                        {actionStep === "approving" && (isWritePending || isTxWaiting) ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#07080a]" />
                            <span>approving {activeTokenSymbol}...</span>
                          </>
                        ) : (
                          <>
                            <ShieldCheck className="w-3.5 h-3.5 text-[#07080a]" />
                            <span>approve {activeTokenSymbol} for launchpad</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <button
                        disabled={
                          isWritePending ||
                          isTxWaiting ||
                          hasInsufficientBalance ||
                          parsedAmountBigInt === 0n ||
                          (manualSponsorInput.trim() !== "" && !sponsorValidation.isValid)
                        }
                        onClick={handleReinvest}
                        className="w-full py-3 sm:py-3.5 px-4 rounded-xl bg-[#14F195] hover:bg-[#10c87b] disabled:bg-[#121418] disabled:text-neutral-600 disabled:cursor-not-allowed text-[#07080a] font-normal text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] touch-manipulation"
                      >
                        {actionStep === "reinvesting" && (isWritePending || isTxWaiting) ? (
                          <>
                            <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#07080a]" />
                            <span>processing reinvestment...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5 text-[#07080a]" />
                            <span>
                              reinvest {amountInput || "0"} {activeTokenSymbol}
                            </span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Minimal Footer */}
        <p className="mt-6 sm:mt-8 text-center text-xs text-neutral-600 max-w-sm font-light">
          Welcome to QuantX AI's Launchpad
        </p>
      </main>
    </div>
  );
}
