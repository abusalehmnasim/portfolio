"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

function useTypewriter(text: string, ms = 55, startDelay = 200) {
  const [out, setOut] = React.useState("");
  React.useEffect(() => {
    let i = 0;
    let cancelled = false;
    const tick = () => {
      if (cancelled) return;
      if (i <= text.length) {
        setOut(text.slice(0, i));
        i += 1;
        setTimeout(tick, ms);
      }
    };
    const id = setTimeout(tick, startDelay);
    return () => {
      cancelled = true;
      clearTimeout(id);
    };
  }, [text, ms, startDelay]);
  return out;
}

export function Hero() {
  const typed = useTypewriter("ABU SALEH M NASIM");

  return (
    <section id="top" className="term-section pt-8 sm:pt-12">
      <div className="term-container">
        {/* Prompt line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="font-mono text-xs uppercase tracking-wider text-dim"
        >
          <span className="text-phosphor">guest@nasim-term</span>
          <span>:</span>
          <span className="text-amber">~/portfolio</span>
          <span>$ ./run.sh</span>
        </motion.div>

        <p className="mt-6 font-mono text-xs uppercase tracking-wider text-dim">
          {"// loading identity..."}
        </p>

        {/* Big typewriter name */}
        <h1 className="mt-3 term-display text-[2.4rem] leading-[1.02] text-foreground sm:text-[4rem] lg:text-[5rem]">
          {typed}
          <span className="caret" />
        </h1>

        <p className="mt-4 max-w-3xl font-mono text-sm uppercase tracking-wider text-foreground/85 sm:text-[0.95rem]">
          <span className="text-phosphor">[role]</span> BBA Finance · BUP{" "}
          <span className="text-dim">|</span>{" "}
          <span className="text-phosphor">[cert]</span> CA Student · ICAB{" "}
          <span className="text-dim">|</span>{" "}
          <span className="text-phosphor">[status]</span>{" "}
          <span className="text-amber">Available · 2026 internship</span>
        </p>

        {/* Body row */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.5 }}
          >
            <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-[0.92rem] leading-[1.7] text-foreground/85 sm:text-[1rem]">
{`> cat bio.txt

I'm a finance undergraduate at Bangladesh University of
Professionals, currently pre-articled with ICAB (Certificate
Level cleared, Application Level in progress).

My first peer-accessible paper is live on `}
              <a
                href="#research"
                className="text-phosphor underline decoration-phosphor underline-offset-4 hover:text-amber"
              >
                SSRN
              </a>
              {` —
on customer loyalty in Bangladesh's organised grocery sector.

Most weeks: a financial-modelling problem set, an XGBoost
notebook, and a policy paper, in some rotation.

> _`}
            </pre>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="border border-phosphor px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-phosphor transition-colors hover:bg-phosphor hover:text-background"
              >
                PROJECTS&lt;GO&gt;
              </a>
              <a
                href="/cv.pdf"
                download
                className="border border-foreground/40 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-foreground/85 transition-colors hover:border-phosphor hover:text-phosphor"
              >
                DOWNLOAD CV
              </a>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("term:palette"))
                }
                className="border border-amber px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-amber transition-colors hover:bg-amber hover:text-background"
              >
                ⌘K&nbsp;&nbsp;COMMAND
              </button>
              <span className="font-mono text-[10px] uppercase tracking-wider text-dim">
                or press <span className="kbd">?</span> for shortcuts
              </span>
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.7 }}
            className="relative"
          >
            <div className="border border-phosphor">
              {/* Fake terminal header */}
              <div className="flex items-center justify-between border-b border-phosphor/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-phosphor">
                <span>plate-01.bmp</span>
                <span className="text-dim">256×320 · 4-bit</span>
              </div>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-card">
                <Image
                  src={siteConfig.portrait}
                  alt={`Photograph of ${siteConfig.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 320px, 420px"
                  className="object-cover"
                  style={{
                    filter:
                      "saturate(0.45) contrast(1.08) hue-rotate(60deg) brightness(0.9)",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-overlay"
                  style={{
                    background:
                      "linear-gradient(180deg, hsl(var(--phosphor) / 0.12), hsl(var(--phosphor) / 0))",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-multiply"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent 0, transparent 2px, hsl(var(--background)) 3px)",
                    opacity: 0.45,
                  }}
                />
              </div>
              <div className="flex items-center justify-between border-t border-phosphor/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/70">
                <span>plate-01</span>
                <span>dhaka · 2026</span>
                <span className="text-phosphor">OK</span>
              </div>
            </div>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
