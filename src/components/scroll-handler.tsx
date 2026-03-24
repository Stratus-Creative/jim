"use client";

import { useEffect } from "react";

/**
 * On mount, checks the URL path and scrolls to the matching section.
 * e.g. /merch → scrolls to #merch, /about → scrolls to #about
 */
export function ScrollHandler() {
  useEffect(() => {
    const path = window.location.pathname.replace("/", "");
    if (path && path !== "") {
      // Small delay to let the page render first
      const timer = setTimeout(() => {
        const el = document.getElementById(path);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return null;
}
