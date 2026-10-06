import React from "react";

const htmlContent = `<!-- Top Banner Strip -->
<div class="fixed top-0 left-0 right-0 z-[100] bg-black text-white overflow-hidden border-b border-white/10">
    <div class="banner-scroll flex items-center h-8">
        <!-- First set of message -->
        <div class="flex items-center gap-6 shrink-0 px-6">
            <span class="text-xs font-medium">Verify $QTX smart contract & official live feeds <a href="https://bscscan.com/token/0x60bAF3f1082004601eA9518588D073e4bC29CB31" target="_blank" rel="noopener noreferrer" class="text-[#00c799] underline hover:text-[#00c799]/80 transition">here</a>.</span>
            <span class="text-white/30">•</span>
            <span class="text-xs font-medium">This is the ONLY official site of <span class="text-[#00c799] font-semibold">QuantX AI ($QTX)</span></span>
        </div>
        
        <!-- Duplicate set for seamless loop -->
        <div class="flex items-center gap-6 shrink-0 px-6">
            <span class="text-xs font-medium">Verify $QTX smart contract & official live feeds <a href="https://bscscan.com/token/0x60bAF3f1082004601eA9518588D073e4bC29CB31" target="_blank" rel="noopener noreferrer" class="text-[#00c799] underline hover:text-[#00c799]/80 transition">here</a>.</span>
            <span class="text-white/30">•</span>
            <span class="text-xs font-medium">This is the ONLY official site of <span class="text-[#00c799] font-semibold">QuantX AI ($QTX)</span></span>
        </div>
        
        <!-- Third set for seamless loop -->
        <div class="flex items-center gap-6 shrink-0 px-6">
            <span class="text-xs font-medium">Verify $QTX smart contract & official live feeds <a href="https://bscscan.com/token/0x60bAF3f1082004601eA9518588D073e4bC29CB31" target="_blank" rel="noopener noreferrer" class="text-[#00c799] underline hover:text-[#00c799]/80 transition">here</a>.</span>
            <span class="text-white/30">•</span>
            <span class="text-xs font-medium">This is the ONLY official site of <span class="text-[#00c799] font-semibold">QuantX AI ($QTX)</span></span>
        </div>
    </div>
</div>

<style>
    @keyframes banner-scroll {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-50%, 0, 0);
        }
    }

    .banner-scroll {
        animation: banner-scroll 30s linear infinite;
        will-change: transform;
        backface-visibility: hidden;
    }

    .banner-scroll:hover {
        animation-play-state: paused;
    }
</style>`;

export default function Banner() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
