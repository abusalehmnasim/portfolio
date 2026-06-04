"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Calendar, Check, Copy, FileText } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { publication } from "@/lib/data";

const longDate = new Intl.DateTimeFormat("en-US", {
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
      /* */
    }
  };

  const posted = longDate.format(new Date(publication.postedDate));
  const written = longDate.format(new Date(publication.writtenDate));

  return (
    <section id="research" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Research"
          title="Published research."
          description="Open-access on SSRN. The current paper is on grocery retail in Bangladesh; a second one is in draft."
        />

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="card-soft p-6 sm:p-10"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 font-semibold text-primary">
              <FileText className="h-3 w-3" />
              SSRN
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-muted-foreground">
              <Calendar className="h-3 w-3" />
              Posted {posted}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-muted-foreground">
              <BookOpen className="h-3 w-3" />
              {publication.pages} pages
            </span>
          </div>

          <h3 className="display mt-5 text-2xl leading-tight sm:text-3xl">
            {publication.title}
          </h3>
          {publication.subtitle && (
            <p className="mt-2 text-lg leading-snug text-muted-foreground sm:text-xl">
              {publication.subtitle}
            </p>
          )}

          <p className="mt-5 text-sm text-muted-foreground">
            By{" "}
            <span className="font-semibold text-foreground">
              {publication.authors.join(", ")}
            </span>
            <span> · written {written} · DOI {publication.doi}</span>
          </p>

          <div className="mt-7">
            <p className="eyebrow">Abstract</p>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-foreground/85">
              {publication.abstract}
            </p>
          </div>

          <div className="mt-7">
            <p className="eyebrow">Keywords</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {publication.keywords.map((kw) => (
                <li
                  key={kw}
                  className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  {kw}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
            <a
              href={publication.url}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Read on SSRN
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={publication.doiUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              DOI
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={copyCitation} className="btn-ghost">
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  Citation copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Cite
                </>
              )}
            </button>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
