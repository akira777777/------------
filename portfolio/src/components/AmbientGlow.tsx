"use client";

import { useEffect, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";

function subscribePointerFine(callback: () => void) {
  const media = window.matchMedia("(hover: hover) and (pointer: fine)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getPointerFineSnapshot() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function getPointerFineServerSnapshot() {
  return false;
}

function subscribeMounted() {
  return () => {};
}

function getMountedSnapshot() {
  return true;
}

function getMountedServerSnapshot() {
  return false;
}

export default function AmbientGlow() {
  const mounted = useSyncExternalStore(subscribeMounted, getMountedSnapshot, getMountedServerSnapshot);
  const isPointerFine = useSyncExternalStore(subscribePointerFine, getPointerFineSnapshot, getPointerFineServerSnapshot);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 25 });

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Top scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent)] via-white/80 to-[var(--accent)] origin-left z-50 pointer-events-none"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Subtle cursor spotlight (desktop only) */}
      {isPointerFine && (
        <motion.div
          className="fixed pointer-events-none z-30 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-15"
          style={{
            left: springX,
            top: springY,
            background:
              "radial-gradient(circle, rgba(168,183,154,0.4) 0%, rgba(255,255,255,0.06) 45%, transparent 70%)",
          }}
        />
      )}
    </>
  );
}
