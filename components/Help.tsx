import React from "react";

const htmlContent = `<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stacked Cards Section</title>
  
  <style>
    .card-stack {
      position: relative;
    }
    
    .stacked-card {
      transform-origin: center top;
      will-change: transform;
    }

    .card-image {
      object-fit: cover;
      object-position: center;
    }

    .image-blur-overlay {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.3) 10%,
        rgba(0, 0, 0, 0.2) 20%,
        transparent 30%
      );
      backdrop-filter: blur(0px);
    }

    .image-blur-overlay::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        blur(12px) 0%,
        blur(8px) 10%,
        blur(4px) 20%,
        blur(0px) 30%
      );
      pointer-events: none;
    }

    /* Actual blur using mask */
    .blur-bottom {
      position: relative;
    }

    .blur-bottom::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 30%;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      mask-image: linear-gradient(to top, black 0%, transparent 100%);
      -webkit-mask-image: linear-gradient(to top, black 0%, transparent 100%);
      pointer-events: none;
    }

    .content-gradient-bg {
      background: #0a0a0a;
      position: relative;
    }

    .content-gradient-bg::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 40%;
      height: 40%;
      background: radial-gradient(circle at top right, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.08) 30%, transparent 70%);
      pointer-events: none;
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .card-flex-mobile {
        flex-direction: column !important;
      }

      .card-width-mobile {
        width: 100% !important;
      }

      .card-height-mobile {
        height: 300px !important;
      }

      .content-height-mobile {
        min-height: auto !important;
      }
    }
  </style>

  <!-- Stacked Cards Section -->
  <section class="relative bg-black py-20">
    <div class="w-full px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="mb-20 text-center px-4 gsap-reveal">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6">
          How QuantX <span class="text-emerald-400">Thinks &amp; Trades</span>
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
          Discover the power of an autonomous quantitative intelligence designed to adapt and trade
        </p>
      </div>

      <!-- Cards Container -->
      <div class="card-stack relative">
        
        <!-- Card 1 -->
        <div class="stacked-card sticky top-24 mb-16 z-10" data-card="1" id="how">
          <div class="w-[95%] sm:w-[90%] max-w-none mx-auto bg-zinc-900 rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
            <div class="relative h-auto min-h-[600px] flex flex-col md:flex-row card-flex-mobile">
              
              <!-- Image Section - Left (40%) -->
              <div class="w-full md:w-[40%] relative blur-bottom overflow-hidden card-width-mobile card-height-mobile h-[300px] md:h-auto">
                <img 
                  src="/telegram-img.png" 
                  alt="Autonomous Sentiment Engine" 
                  class="card-image absolute inset-0 w-full h-full"
                />
              </div>

              <!-- Content Section - Right (60%) -->
              <div class="w-full md:w-[60%] content-gradient-bg relative flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16 card-width-mobile content-height-mobile">
                <div class="max-w-2xl text-left">
                  <div class="inline-block px-4 py-2 bg-emerald-400/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
                    <span class="text-emerald-400 font-semibold text-sm">Module 01</span>
                  </div>
                  <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3">
                    Autonomous Sentiment Engine
                  </h3>
                  <p class="text-xl sm:text-2xl text-emerald-400 font-semibold mb-6">
                    Think. Adapt. Execute.
                  </p>
                  <p class="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                    Continuous natural language processing synthesizing news feeds, social momentum, and on-chain whale activity dynamically.
                  </p>
                  
                  <!-- Features Grid -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 mb-2">
                        <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-semibold text-white">Real-Time NLP Feeds</span>
                      </div>
                      <p class="text-xs text-gray-400">Parses 10,000+ social and on-chain messages every minute</p>
                    </div>
                    
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 mb-2">
                        <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-semibold text-white">Emotion Scoring</span>
                      </div>
                      <p class="text-xs text-gray-400">Calculates real-time fear, greed, and institutional bias</p>
                    </div>
                    
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 mb-2">
                        <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-semibold text-white">Noise Filtering</span>
                      </div>
                      <p class="text-xs text-gray-400">Eliminates false signals through multi-agent LLM validation</p>
                    </div>
                    
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 mb-2">
                        <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-semibold text-white">Macro Ingestion</span>
                      </div>
                      <p class="text-xs text-gray-400">Sub-second absorption of breaking market headlines and data</p>
                    </div>
                    
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 mb-2">
                        <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-semibold text-white">Whale Tracking</span>
                      </div>
                      <p class="text-xs text-gray-400">Monitors large wallet accumulation and exchange netflows</p>
                    </div>
                    
                    <div class="flex flex-col">
                      <div class="flex items-center gap-2 mb-2">
                        <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm font-semibold text-white">Dynamic Triggers</span>
                      </div>
                      <p class="text-xs text-gray-400">Auto-triggers dynamic execution based on sentiment alpha</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="stacked-card sticky top-28 mb-16 z-20" data-card="2">
          <div class="w-[95%] sm:w-[90%] max-w-none mx-auto bg-zinc-900 rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
            <div class="relative h-auto min-h-[600px] flex flex-col-reverse md:flex-row card-flex-mobile">
              
              <!-- Content Section - Left (60%) -->
              <div class="w-full md:w-[60%] content-gradient-bg relative flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16 card-width-mobile content-height-mobile">
                <div class="max-w-2xl text-left md:ml-auto">
                  <div class="inline-block px-4 py-2 bg-emerald-400/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
                    <span class="text-emerald-400 font-semibold text-sm">Module 02</span>
                  </div>
                  <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3">
                    Deep Reinforcement Learning
                  </h3>
                  <p class="text-xl sm:text-2xl text-emerald-400 font-semibold mb-6">
                    Zero Hardcoded Rules
                  </p>
                  <p class="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                    Not a conventional bot relying on static indicators. QuantX continuously learns from evolving volatility regimes, adapting its quantitative neural weights to shifting market liquidity and conditions on the fly.
                  </p>
                  
                  <!-- Features Grid -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Continuous Training</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Regime Detection</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Adaptive Neural Net</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Order Book Analytics</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Cross-Asset Synergy</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Zero Emotional Bias</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Image Section - Right (40%) -->
              <div class="w-full md:w-[40%] relative blur-bottom overflow-hidden card-width-mobile card-height-mobile h-[300px] md:h-auto">
                <img 
                  src="/coaching-img.png" 
                  alt="Deep Reinforcement Learning" 
                  class="card-image absolute inset-0 w-full h-full"
                />
              </div>

            </div>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="stacked-card sticky top-32 mb-16 z-30" data-card="3">
          <div class="w-[95%] sm:w-[90%] max-w-none mx-auto bg-zinc-900 rounded-[20px] sm:rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
            <div class="relative h-auto min-h-[600px] flex flex-col md:flex-row card-flex-mobile">
              
              <!-- Image Section - Left (40%) -->
              <div class="w-full md:w-[40%] relative blur-bottom overflow-hidden card-width-mobile card-height-mobile h-[300px] md:h-auto">
                <img 
                  src="/account-img.png" 
                  alt="Institutional Execution Engine" 
                  class="card-image absolute inset-0 w-full h-full"
                />
              </div>

              <!-- Content Section - Right (60%) -->
              <div class="w-full md:w-[60%] content-gradient-bg relative flex flex-col justify-end p-6 sm:p-8 md:p-12 lg:p-16 card-width-mobile content-height-mobile">
                <div class="max-w-2xl text-left">
                  <div class="inline-block px-4 py-2 bg-emerald-400/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
                    <span class="text-emerald-400 font-semibold text-sm">Module 03</span>
                  </div>
                  <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-3">
                    Institutional Execution Engine
                  </h3>
                  <p class="text-xl sm:text-2xl text-emerald-400 font-semibold mb-6">
                    Autonomous Capital Routing
                  </p>
                  <p class="text-base sm:text-lg text-gray-300 leading-relaxed mb-8">
                    High-frequency algorithmic execution designed for decentralized liquidity and institutional volume. QuantX isolates capital risk, optimizes execution routes, and captures alpha without human intervention.
                  </p>
                  
                  <!-- Features Grid -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Dynamic Capital Guard</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Smart Order Routing</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Max Drawdown Shields</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Multi-Chain Liquidity</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Non-Custodial Vaults</span>
                    </div>
                    
                    <div class="flex items-center gap-2">
                      <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span class="text-sm font-semibold text-white">Autonomous Rebalancing</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>`;

export default function Help() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
