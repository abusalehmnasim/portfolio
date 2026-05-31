"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Decorative halftone shapes */}
      <div
        aria-hidden
        className="halftone-pink-loose absolute -left-32 top-10 -z-10 h-[26rem] w-[26rem] rounded-full opacity-70"
      />
      <div
        aria-hidden
        className="halftone-pink-loose absolute -right-40 top-1/3 -z-10 h-[18rem] w-[18rem] rounded-full opacity-50"
      />

      <div className="riso-container">
        {/* Masthead bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap items-center gap-3 border-y-2 border-current py-2.5"
        >
          <span className="riso-eyebrow">Vol. I</span>
          <span className="font-mono text-xs text-foreground/70">•</span>
          <span className="riso-eyebrow text-foreground">Issue 01</span>
          <span className="riso-divider flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/75">
            Risograph print · 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          data-text="ABU SALEH M NASIM"
          className="riso-display riso-misregister mt-10 text-[3.2rem] sm:text-[5rem] lg:text-[6.5rem]"
        >
          ABU SALEH M NASIM
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-6 max-w-2xl font-mono text-sm uppercase tracking-[0.18em] text-foreground/80 sm:text-base"
        >
          BBA Finance · BUP &nbsp;//&nbsp; CA Student · ICAB &nbsp;//&nbsp;
          Writes &nbsp;·&nbsp; codes &nbsp;·&nbsp; reads annual reports for fun
        </motion.p>

        {/* Body row — bio paragraph + portrait with halftone */}
        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <p className="prose-riso">
              I&apos;m a finance undergraduate at the{" "}
              <span className="text-primary">
                Bangladesh University of Professionals
              </span>
              , currently pre-articled with the Institute of Chartered
              Accountants of Bangladesh — Certificate Level cleared. My first
              peer-accessible paper is live on{" "}
              <a
                href="#research"
                className="font-bold text-primary underline decoration-2 underline-offset-4"
              >
                SSRN
              </a>
              , on customer loyalty in Bangladesh&apos;s organised grocery
              sector. Most weeks, you&apos;ll find me somewhere between a
              financial-modelling problem set, an XGBoost notebook, and a
              policy paper.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="riso-stamp riso-stamp--pink">
                See the work
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
              <a href="/cv.pdf" download className="riso-stamp">
                Download CV
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-primary underline decoration-2 underline-offset-4 transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 14, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="relative mx-auto w-full max-w-sm"
            style={{ transformOrigin: "center" }}
          >
            <div
              className="relative aspect-[4/5] w-full border-[3px] border-current bg-paper"
              style={{ boxShadow: "10px 10px 0 0 hsl(var(--primary))" }}
            >
              <Image
                src={siteConfig.portrait}
                alt={`Photograph of ${siteConfig.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 320px, 420px"
                className="riso-photo object-cover"
              />
              {/* Halftone wash overlay */}
              <div
                aria-hidden
                className="halftone-pink pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/70">
              <span>Plate 01</span>
              <span>Dhaka · 2026</span>
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
