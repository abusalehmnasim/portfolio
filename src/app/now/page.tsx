import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, MapPin } from "lucide-react";
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
    <div className="section-padding">
      <div className="container-narrow">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 font-semibold text-primary">
            Live snapshot
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-muted-foreground">
            <Calendar className="h-3 w-3" />
            Updated {longDate.format(updated)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {nowMeta.location}
          </span>
        </div>

        <h1 className="display mt-6 text-balance text-4xl leading-[1.05] sm:text-5xl">
          What I&apos;m <span className="text-primary">focused on</span> right
          now.
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
          {nowMeta.summary}
        </p>
        <p className="mt-3 max-w-prose text-sm text-muted-foreground">
          Inspired by Derek Sivers&apos;{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary hover:underline"
          >
            /now page movement
          </a>
          . If we last talked a while ago, this page tells you what&apos;s
          changed.
        </p>

        {/* Sections */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {nowSections.map((section, i) => (
            <section
              key={section.heading}
              className={`card-soft p-6 ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span
                  className="text-xl leading-none"
                  role="img"
                  aria-label={section.heading}
                >
                  {section.emoji}
                </span>
                <div>
                  <h2 className="text-base font-semibold">
                    {section.heading}
                  </h2>
                  {section.description && (
                    <p className="text-xs text-muted-foreground">
                      {section.description}
                    </p>
                  )}
                </div>
              </div>

              <ul className="mt-5 space-y-4">
                {section.items.map((item, idx) => (
                  <li
                    key={`${section.heading}-${idx}`}
                    className="rounded-md border border-border bg-background p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-md p-1 text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                    {item.detail && (
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Favourites */}
        <section className="mt-16">
          <span className="eyebrow">Vibes</span>
          <h2 className="display mt-3 text-2xl sm:text-3xl">
            Favourites.
          </h2>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">
            {favouritesIntro}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favourites.map((g) => (
              <div key={g.heading} className="card-soft p-5">
                <div className="flex items-center gap-2.5">
                  <span className="text-lg" role="img" aria-label={g.heading}>
                    {g.emoji}
                  </span>
                  <h3 className="text-sm font-semibold">{g.heading}</h3>
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section className="mt-16">
          <span className="eyebrow">Philosophy</span>
          <h2 className="display mt-3 text-2xl sm:text-3xl">
            How I try to think.
          </h2>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">
            {philosophyIntro}
          </p>

          <ol className="mt-8 space-y-6">
            {philosophy.map((p, i) => (
              <li key={p.title} className="card-soft p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Principle {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-16 rounded-lg border border-border bg-muted/50 p-6 text-sm text-muted-foreground">
          Want to talk about any of this? Email me at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-primary hover:underline"
          >
            {siteConfig.email}
          </a>{" "}
          or via the{" "}
          <Link
            href="/#contact"
            className="font-semibold text-primary hover:underline"
          >
            contact page
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
