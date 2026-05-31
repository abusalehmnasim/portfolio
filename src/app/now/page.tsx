import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Clock, MapPin } from "lucide-react";
import { Aurora } from "@/components/effects/aurora";
import {
  favourites,
  favouritesIntro,
  nowMeta,
  nowSections,
  philosophy,
  philosophyIntro,
} from "@/lib/now-data";
import { siteConfig } from "@/lib/data";

// Tailwind-safe chip palettes (must be string-literal classes for JIT to pick up).
const CHIP_STYLES: Record<string, string> = {
  primary:
    "border-primary/30 bg-primary/10 text-primary hover:bg-primary/15",
  emerald:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/15 dark:text-emerald-300",
  amber:
    "border-amber-500/30 bg-amber-500/10 text-amber-700 hover:bg-amber-500/15 dark:text-amber-300",
  rose:
    "border-rose-500/30 bg-rose-500/10 text-rose-700 hover:bg-rose-500/15 dark:text-rose-300",
  violet:
    "border-violet-500/30 bg-violet-500/10 text-violet-700 hover:bg-violet-500/15 dark:text-violet-300",
  sky:
    "border-sky-500/30 bg-sky-500/10 text-sky-700 hover:bg-sky-500/15 dark:text-sky-300",
  cyan:
    "border-cyan-500/30 bg-cyan-500/10 text-cyan-700 hover:bg-cyan-500/15 dark:text-cyan-300",
};

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
    <div className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <Aurora />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />

      <div className="container-tight pb-24 sm:pb-32">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 font-medium text-muted-foreground backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Live snapshot
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-muted-foreground backdrop-blur">
            <Clock className="h-3 w-3" />
            Updated {longDate.format(updated)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-muted-foreground backdrop-blur">
            <MapPin className="h-3 w-3" />
            {nowMeta.location}
          </span>
        </div>

        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          What I&apos;m <span className="gradient-text">focused on</span> right
          now.
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
          {nowMeta.summary}
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          Inspired by Derek Sivers&apos;{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-4 hover:underline"
          >
            /now page movement
          </a>
          . If we last talked a while ago, this page tells you what&apos;s
          changed.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {nowSections.map((section, i) => (
            <section
              key={section.heading}
              className={`glass-card relative overflow-hidden p-7 ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-2xl" />
              <div className="flex items-center gap-3">
                <span
                  className="text-2xl leading-none"
                  role="img"
                  aria-label={section.heading}
                >
                  {section.emoji}
                </span>
                <div>
                  <h2 className="text-base font-semibold tracking-tight">
                    {section.heading}
                  </h2>
                  {section.description && (
                    <p className="text-xs text-muted-foreground">
                      {section.description}
                    </p>
                  )}
                </div>
              </div>

              <ul className="mt-6 space-y-4">
                {section.items.map((item, idx) => (
                  <li
                    key={`${section.heading}-${idx}`}
                    className="rounded-xl border border-border/40 bg-background/40 p-4 backdrop-blur transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-semibold tracking-tight">
                        {item.title}
                      </h3>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Open ${item.title}`}
                          className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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

        {/* Favourites — things to vibe over */}
        <section className="mt-20">
          <div className="flex flex-col items-start gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Vibes
            </span>
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              Favourites — things we can vibe over.
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              {favouritesIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favourites.map((g) => (
              <div
                key={g.heading}
                className="glass-card relative overflow-hidden p-5"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="text-xl leading-none"
                    role="img"
                    aria-label={g.heading}
                  >
                    {g.emoji}
                  </span>
                  <h3 className="text-sm font-semibold tracking-tight">
                    {g.heading}
                  </h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <li key={item}>
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium transition-colors ${CHIP_STYLES[g.accent]}`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy — operating principles */}
        <section className="mt-20">
          <div className="flex flex-col items-start gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              <span className="h-1 w-1 rounded-full bg-primary" />
              Philosophy
            </span>
            <h2 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              How I try to think.
            </h2>
            <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
              {philosophyIntro}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {philosophy.map((p, i) => (
              <figure
                key={p.title}
                className={`glass-card relative overflow-hidden p-7 ${
                  i === philosophy.length - 1 && philosophy.length % 2 === 1
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <span
                  aria-hidden
                  className="absolute -left-2 -top-4 select-none text-[7rem] font-semibold leading-none text-primary/15"
                >
                  &ldquo;
                </span>
                <blockquote className="relative">
                  <p className="text-xl font-semibold leading-tight tracking-tight text-foreground sm:text-2xl">
                    {p.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </blockquote>
                <figcaption className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="h-px w-6 bg-border" />
                  Principle {String(i + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="mt-20 rounded-2xl border border-border/60 bg-background/40 p-6 text-sm text-muted-foreground backdrop-blur">
          Want to talk about any of this? The fastest way to reach me is{" "}
          <Link
            href="/#contact"
            className="font-medium text-primary hover:underline"
          >
            via the contact form
          </Link>{" "}
          — or email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-primary hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </div>
      </div>
    </div>
  );
}
