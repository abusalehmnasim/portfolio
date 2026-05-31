"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Check,
  Copy,
  FileText,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { publication } from "@/lib/data";

const monthYear = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export function Research() {
  const [copied, setCopied] = React.useState(false);

  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(publication.citation);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard may not be available — degrade silently */
    }
  };

  const posted = monthYear.format(new Date(publication.postedDate));
  const written = monthYear.format(new Date(publication.writtenDate));

  return (
    <section id="research" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Research & Publications"
          title="Published research."
          description="Working at the intersection of finance, retail, and emerging-market policy. Open-access on SSRN."
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass-card relative overflow-hidden p-7 sm:p-10"
        >
          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
          <div className="absolute -left-12 bottom-0 h-44 w-44 rounded-full bg-gradient-to-tr from-amber-500/10 to-transparent blur-3xl" />

          {/* Top metadata row */}
          <div className="relative flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 font-bold uppercase tracking-widest text-amber-700 dark:text-amber-300">
              <FileText className="h-3 w-3" />
              {publication.badge}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 font-medium text-muted-foreground backdrop-blur">
              <Calendar className="h-3 w-3" />
              Posted {posted}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 font-medium text-muted-foreground backdrop-blur">
              <BookOpen className="h-3 w-3" />
              {publication.pages} pages
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 font-mono text-[10px] text-muted-foreground backdrop-blur sm:inline-flex">
              DOI · {publication.doi}
            </span>
          </div>

          {/* Title + subtitle */}
          <header className="relative mt-6">
            <h3 className="font-serif text-2xl leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.1rem]">
              {publication.title}
            </h3>
            {publication.subtitle && (
              <p className="mt-2 font-serif text-lg italic leading-snug text-muted-foreground sm:text-xl">
                {publication.subtitle}
              </p>
            )}

            {/* Author byline */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-sm">
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Users className="h-3.5 w-3.5" />
                By
              </span>
              {publication.authors.map((author, i) => (
                <React.Fragment key={author}>
                  <span className="font-medium text-foreground">{author}</span>
                  {i < publication.authors.length - 1 && (
                    <span className="text-muted-foreground">·</span>
                  )}
                </React.Fragment>
              ))}
              <span className="text-muted-foreground">
                · Written {written}
              </span>
            </div>
          </header>

          {/* Abstract */}
          <div className="relative mt-7">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Abstract
              </span>
              <span className="h-px flex-1 bg-border/60" />
            </div>
            <p className="mt-4 text-pretty font-serif text-[1.05rem] leading-[1.65] text-foreground/90 sm:text-[1.1rem]">
              {publication.abstract}
            </p>
          </div>

          {/* Keywords */}
          <div className="relative mt-7">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Keywords
              </span>
              <span className="h-px flex-1 bg-border/60" />
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {publication.keywords.map((kw) => (
                <li
                  key={kw}
                  className="rounded-full border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-foreground/80 backdrop-blur"
                >
                  {kw}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="relative mt-8 flex flex-wrap items-center gap-3 border-t border-border/40 pt-6">
            <Button asChild>
              <a
                href={publication.url}
                target="_blank"
                rel="noreferrer"
              >
                Read on SSRN
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href={publication.doiUrl}
                target="_blank"
                rel="noreferrer"
              >
                DOI
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              onClick={copyCitation}
              aria-label="Copy suggested citation"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4 text-emerald-500" />
                  Citation copied
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  Cite
                </>
              )}
            </Button>
          </div>

          {/* Suggested citation, collapsed by default */}
          <details className="relative mt-5 rounded-xl border border-border/40 bg-background/40 p-4 backdrop-blur open:bg-background/60">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span>Suggested citation</span>
              <span className="text-muted-foreground/70 transition-transform group-open:rotate-180">
                ▾
              </span>
            </summary>
            <p className="mt-3 font-mono text-xs leading-relaxed text-muted-foreground">
              {publication.citation}
            </p>
          </details>
        </motion.article>
      </div>
    </section>
  );
}
