import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
    <div className="pt-32 sm:pt-36">
      <div className="editorial-wide pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>

        {/* Masthead */}
        <div className="mt-10 flex items-center gap-4">
          <span className="section-label">/now · Vol. 01</span>
          <span className="hairline" />
          <span className="section-label whitespace-nowrap">
            {longDate.format(updated)}
          </span>
        </div>

        <h1 className="serif-display mt-10 text-balance text-[2.75rem] leading-[1.05] sm:text-[4rem]">
          What I&apos;m focused on right now.
        </h1>

        <p className="mt-6 max-w-prose text-[1.0625rem] leading-[1.7] text-muted-foreground sm:text-lg">
          {nowMeta.summary}
        </p>

        <p className="mt-3 max-w-prose text-sm text-muted-foreground">
          Inspired by Derek Sivers&apos;{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noreferrer"
            className="editorial"
          >
            /now page movement
          </a>
          . If we last talked a while ago, this page tells you what&apos;s
          changed. Updated monthly. Currently writing from{" "}
          <span className="text-foreground">{nowMeta.location}</span>.
        </p>

        {/* Sections */}
        <div className="mt-16 space-y-16">
          {nowSections.map((section, i) => (
            <section key={section.heading}>
              <div className="flex items-center gap-4">
                <span className="section-label whitespace-nowrap">
                  <span className="text-foreground/70">
                    §{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mx-2 text-border">·</span>
                  {section.heading}
                </span>
                <span className="hairline" />
              </div>
              {section.description && (
                <p className="mt-3 max-w-prose text-sm text-muted-foreground">
                  {section.description}
                </p>
              )}
              <ul className="mt-6 divide-y divide-border border-y border-border">
                {section.items.map((item, idx) => (
                  <li
                    key={`${section.heading}-${idx}`}
                    className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:gap-6"
                  >
                    <div className="max-w-prose">
                      <p className="serif-display text-lg leading-snug sm:text-xl">
                        {item.title}
                      </p>
                      {item.detail && (
                        <p className="mt-1.5 text-[0.95rem] leading-relaxed text-foreground/75">
                          {item.detail}
                        </p>
                      )}
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="editorial sm:self-start sm:pt-1 text-sm"
                      >
                        link →
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
          <div className="flex items-center gap-4">
            <span className="section-label">Vibes</span>
            <span className="hairline" />
          </div>
          <h2 className="serif-display mt-6 text-balance text-[1.75rem] leading-tight sm:text-[2.2rem]">
            Favourites — things we can vibe over.
          </h2>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">
            {favouritesIntro}
          </p>
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {favourites.map((g) => (
              <div
                key={g.heading}
                className="grid gap-3 py-5 sm:grid-cols-[200px_1fr] sm:gap-10"
              >
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:pt-1">
                  {g.heading}
                </dt>
                <dd className="text-[1.0625rem] leading-relaxed text-foreground/85">
                  {g.items.join(", ")}.
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Philosophy */}
        <section className="mt-20">
          <div className="flex items-center gap-4">
            <span className="section-label">Philosophy</span>
            <span className="hairline" />
          </div>
          <h2 className="serif-display mt-6 text-balance text-[1.75rem] leading-tight sm:text-[2.2rem]">
            How I try to think.
          </h2>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">
            {philosophyIntro}
          </p>

          <ol className="mt-10 space-y-12">
            {philosophy.map((p, i) => (
              <li key={p.title} className="grid gap-4 sm:grid-cols-[60px_1fr] sm:gap-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:pt-2">
                  §{String(i + 1).padStart(2, "0")}
                </span>
                <div className="max-w-prose">
                  <p className="serif-display text-2xl leading-[1.2] sm:text-[1.7rem]">
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

        <div className="mt-20 border-t border-border pt-8 text-sm text-muted-foreground">
          Want to talk about any of this? Reach me at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="editorial"
          >
            {siteConfig.email}
          </a>
          {" "}or via the{" "}
          <Link href="/#contact" className="editorial">
            contact page
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
