"use client";

import * as React from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
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
      /* clipboard may not be available */
    }
  };

  const posted = longDate.format(new Date(publication.postedDate));
  const written = longDate.format(new Date(publication.writtenDate));

  return (
    <section id="research" className="riso-section">
      <div className="riso-container">
        <SectionHeading
          number="06"
          eyebrow="Research"
          title="One paper, so far."
          description="The current one is on grocery retail in Bangladesh. The next is on capital markets — in draft."
        />

        <article
          className="relative border-[3px] border-current bg-card p-6 sm:p-10"
          style={{ boxShadow: "10px 10px 0 0 hsl(var(--primary))" }}
        >
          {/* Metadata strip */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="riso-tag border-primary text-primary">SSRN</span>
            <span className="text-foreground/60">/</span>
            <span className="text-foreground/85">Posted {posted}</span>
            <span className="text-foreground/60">/</span>
            <span className="text-foreground/85">{publication.pages} pp.</span>
            <span className="text-foreground/60">/</span>
            <span className="text-foreground/85">DOI {publication.doi}</span>
          </div>

          {/* Title */}
          <h3 className="riso-display mt-6 text-[1.9rem] leading-[1.02] sm:text-[2.6rem]">
            {publication.title}
          </h3>
          {publication.subtitle && (
            <p className="mt-3 font-display text-lg font-medium leading-snug text-primary sm:text-xl">
              {publication.subtitle}
            </p>
          )}

          <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-foreground/75">
            By{" "}
            <span className="font-bold text-foreground">
              {publication.authors.join(", ")}
            </span>
            <span className="text-foreground/60"> · written {written}</span>
          </p>

          <div className="mt-8">
            <p className="riso-eyebrow text-foreground">Abstract</p>
            <p className="mt-3 max-w-prose text-[1rem] leading-[1.7] text-foreground/85 sm:text-[1.0625rem]">
              {publication.abstract}
            </p>
          </div>

          <div className="mt-8">
            <p className="riso-eyebrow text-foreground">Keywords</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {publication.keywords.map((kw) => (
                <li key={kw}>
                  <span className="riso-tag">{kw}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t-2 border-dashed border-current pt-6">
            <a
              href={publication.url}
              target="_blank"
              rel="noreferrer"
              className="riso-stamp riso-stamp--pink"
            >
              Read on SSRN
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={publication.doiUrl}
              target="_blank"
              rel="noreferrer"
              className="riso-stamp"
            >
              Open DOI
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={copyCitation}
              className="riso-stamp"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Cite
                </>
              )}
            </button>
          </div>

          <details className="mt-6">
            <summary className="cursor-pointer font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-primary">
              Suggested citation
            </summary>
            <p className="mt-3 max-w-prose font-mono text-xs leading-relaxed text-foreground/70">
              {publication.citation}
            </p>
          </details>
        </article>
      </div>
    </section>
  );
}
