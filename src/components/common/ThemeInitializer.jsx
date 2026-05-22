"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScriptInitializer = () => {
  const pathname = usePathname();

  useEffect(() => {
    let mounted = true;

    const initAllScripts = () => {
      if (!mounted) return;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // =========================
          // THEME SCRIPTS
          // =========================

          if (typeof window !== "undefined") {
            if (window.initThemeScripts) {
              window.initThemeScripts();
            }

            // =========================
            // LOAN ELIGIBILITY
            // =========================

            if (window.initLoanEligibility) {
              window.initLoanEligibility();
            }

            // =========================
            // LOAN CALCULATOR
            // =========================

            if (window.initLoanCalculator) {
              window.initLoanCalculator();
            }

            // =========================
            // FORCE REFLOW
            // =========================

            window.dispatchEvent(new Event("resize"));

            window.dispatchEvent(new Event("scroll"));

            // =========================
            // FIX STICKY HEADER
            // =========================

            const stickyMenu = document.querySelector(".stricked-menu");

            if (stickyMenu) {
              if (window.scrollY > 130) {
                stickyMenu.classList.add("stricky-fixed");
              } else {
                stickyMenu.classList.remove("stricky-fixed");
              }
            }

            // =========================
            // REFRESH WOW
            // =========================

            if (window.WOW) {
              const wow = new window.WOW({
                boxClass: "wow",
                animateClass: "animated",
                mobile: true,
                live: false,
              });

              wow.init();
            }

            // =========================
            // FIX AOS / SWIPER LAYOUT
            // =========================

            setTimeout(() => {
              window.dispatchEvent(new Event("resize"));
            }, 300);
          }
        });
      });
    };

    // delay for Next.js DOM hydration

    const timer = setTimeout(() => {
      initAllScripts();
    }, 150);

    return () => {
      mounted = false;

      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
};

export default ScriptInitializer;
