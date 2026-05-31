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
    <section id="research" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading
          number="06"
          eyebrow="Research"
          description="One paper, so far. The current one is on grocery retail in Bangladesh; the next is in draft, on capital markets."
        />

        <article className="border-t border-border pt-8">
          {/* Metadata strip */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-primary">SSRN</span>
            <span>·</span>
            <span>Posted {posted}</span>
            <span>·</span>
            <span>{publication.pages} pp.</span>
            <span>·</span>
            <span>DOI {publication.doi}</span>
          </div>

          {/* Title — serif display */}
          <h3 className="serif-display mt-5 text-balance text-[1.9rem] leading-[1.1] sm:text-[2.4rem]">
            {publication.title}
            {publication.subtitle && (
              <>
                <span className="text-muted-foreground">: </span>
                <em className="italic text-foreground/85">
                  {publication.subtitle}
                </em>
              </>
            )}
          </h3>

          {/* Byline */}
          <p className="mt-5 text-sm text-foreground/85">
            By{" "}
            <span className="font-medium text-foreground">
              {publication.authors.join(", ")}
            </span>
            <span className="text-muted-foreground"> · written {written}</span>
          </p>

          {/* Abstract */}
          <div className="mt-8">
            <p className="section-label">Abstract</p>
            <p className="dropcap mt-3 max-w-prose text-[1.0625rem] leading-[1.75] text-foreground/85 sm:text-[1.125rem]">
              {publication.abstract}
            </p>
          </div>

          {/* Keywords as inline comma-separated text */}
          <div className="mt-8">
            <p className="section-label">Keywords</p>
            <p className="mt-2 text-[0.95rem] italic text-foreground/75">
              {publication.keywords.join(", ")}.
            </p>
          </div>

          {/* Actions as inline links */}
          <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a
              href={publication.url}
              target="_blank"
              rel="noreferrer"
              className="editorial inline-flex items-center gap-1.5"
            >
              Read on SSRN
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <a
              href={publication.doiUrl}
              target="_blank"
              rel="noreferrer"
              className="editorial inline-flex items-center gap-1.5"
            >
              Open DOI
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={copyCitation}
              className="editorial inline-flex items-center gap-1.5"
              aria-label="Copy suggested citation"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Citation copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy citation
                </>
              )}
            </button>
          </p>

          <details className="mt-6 border-t border-border pt-4">
            <summary className="cursor-pointer font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">
              Suggested citation
            </summary>
            <p className="mt-3 max-w-prose font-mono text-xs leading-relaxed text-muted-foreground">
              {publication.citation}
            </p>
          </details>
        </article>
      </div>
    </section>
  );
}
