"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="container-wide pb-16 pt-12 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Available for 2026 internships</span>
            <h1 className="display mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">Abu Saleh M Nasim</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I&apos;m a finance undergraduate at the{" "}
              <span className="font-semibold text-foreground">
                Bangladesh University of Professionals
              </span>{" "}
              and a pre-articled Chartered Accountancy student at{" "}
              <span className="font-semibold text-foreground">ICAB</span>. I
              combine classical finance training with hands-on data analytics,
              machine learning, and policy research.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn-primary">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>
              <a href="/cv.pdf" download className="btn-outline">
                <Download className="h-4 w-4" />
                Download CV
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail className="h-4 w-4" />
                Contact
              </a>
            </div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-muted shadow-lg">
              <Image
                src={siteConfig.portrait}
                alt={`Portrait of ${siteConfig.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 320px, 420px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4 sm:gap-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
