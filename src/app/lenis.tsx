"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export let lenis: any = null;

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    lenis = new Lenis({
      lerp: 0.08,            // smoothness (0–1)
      wheelMultiplier: 1.1,  // scroll speed
      touchMultiplier: 1.2,  // touch scroll speed
      gestureOrientation: "vertical", 
      normalizeWheel: true, 
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
