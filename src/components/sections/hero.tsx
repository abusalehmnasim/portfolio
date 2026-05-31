"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="pt-32 sm:pt-40">
      <div className="editorial-wide">
        {/* Masthead */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-4"
        >
          <span className="section-label">Personal Portfolio · Vol. I</span>
          <span className="hairline" />
          <span className="section-label whitespace-nowrap">Dhaka, BD</span>
        </motion.div>

        {/* Name block */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="serif-display mt-10 text-balance text-[2.75rem] leading-[1.02] sm:text-[4rem] lg:text-[5rem]"
        >
          Abu Saleh M Nasim
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-3 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          BBA Finance at BUP. Pre-articled Chartered Accountancy student at
          ICAB. Writes about Bangladeshi capital and retail markets; builds
          small things in Python and SQL on the side.
        </motion.p>

        {/* Body row — lead paragraph + portrait */}
        <div className="mt-14 grid gap-10 sm:mt-16 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
          >
            <p className="dropcap body-prose">
              I&apos;m a finance undergraduate at the Bangladesh University of
              Professionals, currently pre-articled with the Institute of
              Chartered Accountants of Bangladesh — Certificate Level cleared,
              Application Level in progress. My first peer-accessible paper is
              live on{" "}
              <a
                href={siteConfig.url + "/#research"}
                className="editorial"
              >
                SSRN
              </a>
              , looking at customer loyalty in Bangladesh&apos;s organised
              grocery sector. Most weeks, you&apos;ll find me somewhere between
              a financial-modelling problem set, an XGBoost notebook, and a
              policy paper.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <a href="#projects" className="editorial">
                See the projects
              </a>
              <a href="/cv.pdf" download className="editorial">
                Download CV (PDF)
              </a>
              <a href={`mailto:${siteConfig.email}`} className="editorial">
                Email me
              </a>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-border bg-muted">
              <Image
                src={siteConfig.portrait}
                alt={`Photograph of ${siteConfig.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
                style={{ filter: "saturate(0.85) contrast(1.02)" }}
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Plate 01 · Photographed in Dhaka, 2026
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
