"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    Lenis: any;
    toggleFaq: (button: HTMLElement) => void;
    scrollToSection: (id: string) => void;
  }
}

export default function QuantXController() {
  useEffect(() => {
    // 1. Expose scrollToSection globally for navigation
    window.scrollToSection = function (id: string) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // 2. Expose toggleFaq globally for FAQ accordion
    window.toggleFaq = function (button: HTMLElement) {
      const content = button.nextElementSibling as HTMLElement | null;
      const icon = button.querySelector("svg") as HTMLElement | null;
      if (content) {
        if (content.classList.contains("hidden")) {
          content.classList.remove("hidden");
          if (icon) icon.style.transform = "rotate(180deg)";
        } else {
          content.classList.add("hidden");
          if (icon) icon.style.transform = "rotate(0deg)";
        }
      }
    };

    // 3. Force background video to play aggressively
    const bgVideo = document.getElementById("bgVideo") as HTMLVideoElement | null;
    if (bgVideo) {
      bgVideo.controls = false;
      bgVideo.removeAttribute("controls");
      bgVideo.loop = true;

      const playVideo = () => {
        const promise = bgVideo.play();
        if (promise !== undefined) {
          promise.catch(() => {
            setTimeout(playVideo, 100);
          });
        }
      };

      playVideo();

      bgVideo.addEventListener(
        "pause",
        (e) => {
          e.preventDefault();
          playVideo();
        },
        true
      );

      bgVideo.addEventListener(
        "ended",
        () => {
          bgVideo.currentTime = 0;
          playVideo();
        },
        true
      );
    }

    // 4. Spotlight cards mousemove effect
    const spotlightCards = document.querySelectorAll(".spotlight-card");
    spotlightCards.forEach((card) => {
      const el = card as HTMLElement;
      el.addEventListener("mousemove", (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--mouse-x", `${x}px`);
        el.style.setProperty("--mouse-y", `${y}px`);
      });
    });



    // 6. Lenis Smooth Scrolling
    let lenisInstance: any = null;
    const isMobile =
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 1024;
    const wrapper = document.getElementById("smooth-wrapper");
    const content = document.getElementById("smooth-content");

    if (typeof window !== "undefined" && window.Lenis && !isMobile && wrapper && content) {
      lenisInstance = new window.Lenis({
        wrapper: wrapper,
        content: content,
        lerp: 0.07,
        duration: 1.6,
        smoothWheel: true,
        smoothTouch: false,
      });

      const raf = (time: number) => {
        if (lenisInstance) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }
      };
      requestAnimationFrame(raf);
    } else if (wrapper) {
      wrapper.style.position = "relative";
      wrapper.style.height = "auto";
      wrapper.style.overflow = "visible";
    }

    // 7. GSAP & ScrollTrigger Setup
    if (typeof window !== "undefined" && window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.ScrollTrigger.config({ ignoreMobileResize: true });

      if (lenisInstance && wrapper) {
        window.ScrollTrigger.defaults({ scroller: wrapper });
        lenisInstance.on("scroll", () => window.ScrollTrigger.update());
      }

      window.gsap.ticker.lagSmoothing(0);

      // Reveal animations
      window.gsap.utils.toArray(".gsap-reveal").forEach((el: any) => {
        window.gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 60,
            filter: "blur(10px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });


      window.ScrollTrigger.refresh();
    }

    // 8. Preloader Fadeout
    const loader = document.getElementById("page-loader");
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        setTimeout(() => {
          loader.style.display = "none";
        }, 500);
      }, 350);
    }

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
      }
    };
  }, []);

  return null;
}
