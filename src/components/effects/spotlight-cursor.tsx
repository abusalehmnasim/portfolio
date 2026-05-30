"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function SpotlightCursor() {
  const [hasFinePointer, setHasFinePointer] = React.useState(false);
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 200, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 200, damping: 30, mass: 0.6 });

  React.useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setHasFinePointer(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  React.useEffect(() => {
    if (!hasFinePointer) return;
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [hasFinePointer, x, y]);

  if (!hasFinePointer) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[58] -translate-x-1/2 -translate-y-1/2"
    >
      <div className="h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.18),transparent_60%)] blur-2xl dark:bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.22),transparent_60%)]" />
    </motion.div>
  );
}
