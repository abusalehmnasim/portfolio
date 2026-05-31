"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { Counter } from "@/components/ui/counter";
import { Aurora } from "@/components/effects/aurora";
import { DhakaClock } from "@/components/widgets/dhaka-clock";
import { siteConfig, stats } from "@/lib/data";

export function Hero() {
  const [taglineIndex, setTaglineIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(
      () =>
        setTaglineIndex(
          (i) => (i + 1) % siteConfig.rotatingTaglines.length
        ),
      3200
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      <Aurora />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* Text column */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              Looking for a 2026 internship
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Abu Saleh M Nasim</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg lg:mx-0"
            >
              Studying finance at BUP. Training to be a Chartered Accountant
              at ICAB. On the side, I write about Bangladeshi markets and
              build small things in Python and SQL.
            </motion.p>

            <div className="mt-5 flex h-7 items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={taglineIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  className="text-sm font-medium text-primary"
                >
                  {siteConfig.rotatingTaglines[taglineIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <Magnetic strength={0.4}>
                <Button asChild size="lg">
                  <a href="#projects">
                    View Projects
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Magnetic>
              <Magnetic strength={0.4}>
                <Button asChild size="lg" variant="outline">
                  <a href={siteConfig.cvUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </Magnetic>
              <Magnetic strength={0.4}>
                <Button asChild size="lg" variant="ghost">
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </a>
                </Button>
              </Magnetic>
            </motion.div>
          </div>

          {/* Portrait column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/25 via-accent/15 to-fuchsia-500/15 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl shadow-primary/10">
              <Image
                src={siteConfig.portrait}
                alt={`Portrait of ${siteConfig.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 320px, 420px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <DhakaClock />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background/70 p-5 text-center backdrop-blur sm:p-6"
            >
              <div className="text-2xl font-semibold tracking-tight sm:text-3xl">
                <span className="gradient-text">
                  {s.numeric !== undefined ? (
                    <Counter to={s.numeric} suffix={s.suffix ?? ""} />
                  ) : (
                    s.value
                  )}
                </span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
