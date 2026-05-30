"use client";

import { motion } from "framer-motion";

export function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, 60, -40, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          opacity: { duration: 1.2 },
          x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 22, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -left-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.35),transparent_60%)] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, -50, 40, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 0.2 },
          x: { duration: 24, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -right-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,hsl(280_85%_60%/0.30),transparent_60%)] blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          x: [0, 30, -60, 0],
          y: [0, 40, 10, 0],
        }}
        transition={{
          opacity: { duration: 1.2, delay: 0.4 },
          x: { duration: 26, repeat: Infinity, ease: "easeInOut" },
          y: { duration: 28, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute -bottom-40 left-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,hsl(190_85%_55%/0.28),transparent_60%)] blur-3xl"
      />
    </div>
  );
}
