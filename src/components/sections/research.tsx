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
      /* */
    }
  };

  const posted = longDate.format(new Date(publication.postedDate));
  const written = longDate.format(new Date(publication.writtenDate));

  return (
    <section id="research" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="06"
          cmd="research"
          title="One paper, so far."
          description="Open-access on SSRN. The next one is in draft on capital markets."
        />

        <article className="panel-amber">
          <div className="flex items-center justify-between border-b border-amber/60 px-4 py-2 font-mono text-[11px] uppercase tracking-wider">
            <span className="text-amber">~/papers/shwapno.tex</span>
            <span className="text-dim">peer-accessible · open</span>
          </div>

          <div className="p-5 sm:p-7">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-wider">
              <span className="border border-amber px-1.5 py-0.5 text-amber">
                SSRN
              </span>
              <span className="text-dim">/</span>
              <span className="text-foreground/85">Posted {posted}</span>
              <span className="text-dim">/</span>
              <span className="text-foreground/85">{publication.pages} pp</span>
              <span className="text-dim">/</span>
              <span className="text-foreground/85">DOI {publication.doi}</span>
            </div>

            <h3 className="mt-5 font-mono text-2xl font-bold leading-[1.05] text-foreground sm:text-[1.9rem]">
              {publication.title}
            </h3>
            {publication.subtitle && (
              <p className="mt-3 font-mono text-base text-amber sm:text-lg">
                {publication.subtitle}
              </p>
            )}

            <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-foreground/75">
              <span className="text-dim">by</span>{" "}
              <span className="font-bold text-foreground">
                {publication.authors.join(", ")}
              </span>
              <span className="text-dim"> · written {written}</span>
            </p>

            <div className="mt-7">
              <p className="font-mono text-[11px] uppercase tracking-wider text-phosphor">
                {"// abstract"}
              </p>
              <p className="mt-3 max-w-prose text-[0.95rem] leading-[1.7] text-foreground/85 sm:text-[1rem]">
                {publication.abstract}
              </p>
            </div>

            <div className="mt-7">
              <p className="font-mono text-[11px] uppercase tracking-wider text-phosphor">
                {"// keywords"}
              </p>
              <p className="mt-3 font-mono text-[0.85rem] text-foreground/80">
                {publication.keywords.map((kw, i) => (
                  <span key={kw}>
                    <span className="text-amber">#{kw.replace(/\s+/g, "-")}</span>
                    {i < publication.keywords.length - 1 && " "}
                  </span>
                ))}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-dashed border-border pt-6">
              <a
                href={publication.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-phosphor px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-phosphor transition-colors hover:bg-phosphor hover:text-background"
              >
                read on ssrn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <a
                href={publication.doiUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border border-foreground/40 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-foreground/85 transition-colors hover:border-amber hover:text-amber"
              >
                open doi
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <button
                type="button"
                onClick={copyCitation}
                className="inline-flex items-center gap-1.5 border border-foreground/40 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-foreground/85 transition-colors hover:border-amber hover:text-amber"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    cite
                  </>
                )}
              </button>
            </div>

            <details className="mt-6">
              <summary className="cursor-pointer font-mono text-[11px] uppercase tracking-wider text-foreground/70 transition-colors hover:text-phosphor">
                {"// suggested citation"}
              </summary>
              <p className="mt-3 max-w-prose font-mono text-xs leading-relaxed text-foreground/70">
                {publication.citation}
              </p>
            </details>
          </div>
        </article>
      </div>
    </section>
  );
}
