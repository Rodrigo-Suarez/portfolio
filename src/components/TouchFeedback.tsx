"use client";

import { useEffect } from "react";

/**
 * Adds .tap-press class on touchstart and removes it on touchend/touchcancel
 * for all interactive elements (a, button, [role="button"]) on mobile devices.
 * This gives instant visual feedback on tap — unlike :active which only
 * triggers while the finger is held down.
 */
export function TouchFeedback() {
  useEffect(() => {
    // Only activate on touch devices
    if (!window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;

    const PRESS_CLASS = "tap-press";
    const SELECTOR = "a, button, [role='button']";

    const onTouchStart = (e: TouchEvent) => {
      const target = (e.target as HTMLElement).closest(SELECTOR) as HTMLElement | null;
      if (target) {
        target.classList.add(PRESS_CLASS);
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      const target = (e.target as HTMLElement).closest(SELECTOR) as HTMLElement | null;
      if (target) {
        // Small delay so the visual feedback is visible even on fast taps
        setTimeout(() => target.classList.remove(PRESS_CLASS), 120);
      }
    };

    const onTouchCancel = (e: TouchEvent) => {
      const target = (e.target as HTMLElement).closest(SELECTOR) as HTMLElement | null;
      if (target) {
        target.classList.remove(PRESS_CLASS);
      }
    };

    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    document.addEventListener("touchcancel", onTouchCancel, { passive: true });

    return () => {
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchcancel", onTouchCancel);
    };
  }, []);

  return null;
}
