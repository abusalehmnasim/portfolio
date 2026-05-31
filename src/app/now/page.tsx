import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  favourites,
  favouritesIntro,
  nowMeta,
  nowSections,
  philosophy,
  philosophyIntro,
} from "@/lib/now-data";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Now",
  description: `What ${siteConfig.name} is focused on right now — learning, building, reading, and current goals.`,
  alternates: { canonical: "/now" },
  openGraph: {
    title: `Now · ${siteConfig.name}`,
    description: `A snapshot of what ${siteConfig.name} is focused on this month.`,
    type: "article",
  },
};

const longDate = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function NowPage() {
  const updated = new Date(nowMeta.updatedAt);

  return (
    <div className="relative overflow-hidden pt-32 sm:pt-36">
      <div
        aria-hidden
        className="halftone-pink-loose absolute -left-32 top-10 -z-10 h-[26rem] w-[26rem] rounded-full opacity-60"
      />

      <div className="riso-container pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>

        {/* Masthead */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-y-2 border-current py-2.5">
          <span className="riso-eyebrow">/now</span>
          <span className="font-mono text-xs text-foreground/70">·</span>
          <span className="riso-eyebrow text-foreground">Vol. 01</span>
          <span className="riso-divider flex-1" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/75">
            Updated {longDate.format(updated)} · {nowMeta.location}
          </span>
        </div>

        <h1
          data-text="WHAT I'M FOCUSED ON"
          className="riso-display riso-misregister mt-10 text-[2.5rem] sm:text-[4rem] lg:text-[5rem]"
        >
          WHAT I&apos;M FOCUSED ON
        </h1>

        <p className="mt-6 max-w-prose prose-riso text-foreground/85">
          {nowMeta.summary}
        </p>

        <p className="mt-4 max-w-prose font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
          Inspired by Derek Sivers&apos;{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline decoration-2 underline-offset-4"
          >
            /now page movement
          </a>
          . Updated monthly.
        </p>

        {/* Sections */}
        <div className="mt-16 space-y-16">
          {nowSections.map((section, i) => (
            <section key={section.heading}>
              <div className="flex items-baseline gap-3">
                <span className="riso-eyebrow">
                  № 0{i + 1}
                </span>
                <span className="riso-eyebrow text-foreground">
                  {section.heading}
                </span>
                <span className="riso-divider flex-1" />
              </div>
              {section.description && (
                <p className="mt-4 max-w-prose font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {section.description}
                </p>
              )}
              <ul className="mt-6 divide-y-2 divide-dashed divide-current border-y-2 border-current">
                {section.items.map((item, idx) => (
                  <li
                    key={`${section.heading}-${idx}`}
                    className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-6"
                  >
                    <div className="max-w-prose">
                      <p className="font-display text-lg font-bold uppercase tracking-tight sm:text-xl">
                        {item.title}
                      </p>
                      {item.detail && (
                        <p className="mt-1.5 text-[1rem] leading-relaxed text-foreground/80">
                          {item.detail}
                        </p>
                      )}
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary underline decoration-2 underline-offset-4 sm:self-start sm:pt-1"
                      >
                        Link
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Favourites */}
        <section className="mt-20">
          <div className="flex items-baseline gap-3">
            <span className="riso-eyebrow">Vibes</span>
            <span className="riso-divider flex-1" />
          </div>
          <h2
            data-text="FAVOURITES"
            className="riso-display riso-misregister mt-6 text-[1.8rem] sm:text-[2.4rem]"
          >
            FAVOURITES
          </h2>
          <p className="mt-3 max-w-prose font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {favouritesIntro}
          </p>
          <dl className="mt-8 divide-y-2 divide-dashed divide-current border-y-2 border-current">
            {favourites.map((g) => (
              <div
                key={g.heading}
                className="grid gap-3 py-5 sm:grid-cols-[200px_1fr] sm:gap-10"
              >
                <dt className="riso-eyebrow text-foreground sm:pt-1">
                  {g.heading}
                </dt>
                <dd>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item}>
                        <span className="riso-tag">{item}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Philosophy */}
        <section className="mt-20">
          <div className="flex items-baseline gap-3">
            <span className="riso-eyebrow">Philosophy</span>
            <span className="riso-divider flex-1" />
          </div>
          <h2
            data-text="HOW I THINK"
            className="riso-display riso-misregister mt-6 text-[1.8rem] sm:text-[2.4rem]"
          >
            HOW I THINK
          </h2>
          <p className="mt-3 max-w-prose font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {philosophyIntro}
          </p>

          <ol className="mt-10 space-y-12">
            {philosophy.map((p, i) => (
              <li
                key={p.title}
                className="grid gap-4 sm:grid-cols-[80px_1fr] sm:gap-10"
              >
                <span className="riso-eyebrow text-primary sm:pt-2">
                  № 0{i + 1}
                </span>
                <div className="max-w-prose">
                  <p className="font-display text-2xl font-bold uppercase leading-[1.05] tracking-tight sm:text-[1.7rem]">
                    {p.title}
                  </p>
                  <p className="mt-4 text-[1rem] leading-[1.7] text-foreground/80 sm:text-[1.05rem]">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-20 border-t-2 border-current pt-8 font-mono text-xs uppercase tracking-[0.16em] text-foreground/80">
          Want to talk?{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-primary underline decoration-2 underline-offset-4"
          >
            {siteConfig.email}
          </a>
          {" — "}
          <Link
            href="/#contact"
            className="text-primary underline decoration-2 underline-offset-4"
          >
            contact page
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
