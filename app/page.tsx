import React from "react";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Help from "@/components/Help";
import Pricing from "@/components/Pricing";
import TradeWall from "@/components/TradeWall";
import Results from "@/components/Results";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import QuantXController from "@/components/QuantXController";

export default function Home() {
  return (
    <>
      {/* Page Preloader */}
      <div
        id="page-loader"
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020408] transition-opacity duration-500 pointer-events-auto"
      >
        <img
          src="/loder-q.gif"
          alt="QuantX AI Loading"
          className="w-32 h-auto max-w-[140px] object-contain mb-4"
        />
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-[#14F195] animate-ping"></span>
          <span className="text-xs text-[#94A3B8] font-light">
            QuantX AI Engine Initializing...
          </span>
        </div>
      </div>

      <div id="smooth-wrapper">
        <div id="smooth-content">
          {/* Video Background */}
          <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden pointer-events-none">
            <video
              id="bgVideo"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
              style={{
                pointerEvents: "none",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <source src="/bg.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="bg-grid"></div>
          <div className="bg-stars"></div>

          <div id="banner-component">
            <Banner />
          </div>
          <div id="navbar-component">
            <Navbar />
          </div>

          <main className="pt-44 relative">
            <div id="hero-component">
              <Hero />
            </div>
            <div id="logo-marque-component">
              <LogoMarquee />
            </div>
            <section className="relative w-full bg-black">
              <div id="help-component">
                <Help />
              </div>
              <div id="pricing-component">
                <Pricing />
              </div>
              <div id="trade-component">
                <TradeWall />
              </div>
            </section>
            <div id="result-component">
              <Results />
            </div>
            <div id="service-component">
              <Services />
            </div>
            <div id="faq-component">
              <Faq />
            </div>
            <div id="footer-component">
              <Footer />
            </div>
          </main>
        </div>
      </div>

      <QuantXController />
    </>
  );
}
