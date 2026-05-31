"use client";

import * as React from "react";
import { animate } from "framer-motion";

interface CounterProps {
  to: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Counts from 0 → `to` once the component mounts (client-side).
 *
 * We intentionally do NOT gate this on viewport visibility — the Counter is
 * used for above-the-fold hero stats, and any viewport-based trigger risks
 * never firing if hydration timing or layout shrinks the intersection area.
 * Animating on mount with a small delay is the bulletproof choice here.
 */
export function Counter({
  to,
  duration = 1.6,
  delay = 0.35,
  prefix = "",
  suffix = "",
  className,
}: CounterProps) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const controls = animate(0, to, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(v),
    });
    return () => controls.stop();
  }, [to, duration, delay]);

  const formatted = Number.isInteger(to)
    ? Math.round(value).toString()
    : value.toFixed(1);

  return (
    <span className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
