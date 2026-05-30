"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, FileText, Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { publication } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Research & Publications"
          title="Published research."
          description="My academic contributions are listed on the Social Science Research Network (SSRN), the leading open-access repository for research in the social sciences."
        />

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="glass-card relative overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  <FileText className="h-3 w-3" />
                  {publication.badge}
                </span>
                <span className="text-xs text-muted-foreground">
                  {publication.venue}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                {publication.title}
              </h3>
              <div className="mt-4 flex gap-3 rounded-xl border border-border/50 bg-background/40 p-4 backdrop-blur">
                <Quote className="h-4 w-4 shrink-0 text-muted-foreground/70" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {publication.abstract}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button asChild>
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Publication
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <span className="text-xs text-muted-foreground">
                  papers.ssrn.com
                </span>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
