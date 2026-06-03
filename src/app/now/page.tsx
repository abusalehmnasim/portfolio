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
  description: `What ${siteConfig.name} is focused on right now.`,
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
    <div className="pt-8">
      <div className="term-container pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground/75 transition-colors hover:text-phosphor"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          cd ../
        </Link>

        <p className="mt-10 font-mono text-xs uppercase tracking-wider text-dim">
          <span className="text-phosphor">$ cat</span>{" "}
          <span className="text-foreground/85">now.md</span>{" "}
          <span className="text-dim">
            · updated {longDate.format(updated)} · loc:{" "}
            <span className="text-amber">{nowMeta.location}</span>
          </span>
        </p>

        <h1 className="mt-3 font-mono text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground sm:text-[3.2rem]">
          WHAT I&apos;M FOCUSED ON
          <span className="caret" />
        </h1>

        <p className="mt-6 max-w-prose text-[0.96rem] leading-[1.65] text-foreground/85 sm:text-base">
          {nowMeta.summary}
        </p>

        <p className="mt-4 max-w-prose font-mono text-[11px] uppercase tracking-wider text-dim">
          {"// inspired by "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noreferrer"
            className="text-phosphor underline decoration-phosphor underline-offset-4"
          >
            Derek Sivers&apos; /now page movement
          </a>
          . updated monthly.
        </p>

        {/* Sections */}
        <div className="mt-14 space-y-14">
          {nowSections.map((section, i) => (
            <section key={section.heading}>
              <p className="font-mono text-xs uppercase tracking-wider text-dim">
                <span className="text-foreground/60">
                  [{String(i + 1).padStart(2, "0")}]
                </span>{" "}
                <span className="text-phosphor">$ ls</span>{" "}
                <span className="text-foreground/85">
                  {section.heading.toLowerCase()}/
                </span>
              </p>
              {section.description && (
                <p className="mt-3 max-w-prose font-mono text-[11px] uppercase tracking-wider text-dim">
                  {"// "}
                  {section.description}
                </p>
              )}
              <ul className="mt-5 divide-y divide-border border-y border-border font-mono">
                {section.items.map((item, idx) => (
                  <li
                    key={`${section.heading}-${idx}`}
                    className="grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:gap-6"
                  >
                    <div className="max-w-prose">
                      <p className="text-base font-bold uppercase leading-tight text-foreground sm:text-lg">
                        <span className="text-phosphor">▸</span> {item.title}
                      </p>
                      {item.detail && (
                        <p className="mt-1.5 text-[0.92rem] leading-relaxed text-foreground/75">
                          {item.detail}
                        </p>
                      )}
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-amber underline decoration-amber underline-offset-4 sm:self-start sm:pt-1"
                      >
                        link
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
        <section className="mt-16">
          <p className="font-mono text-xs uppercase tracking-wider text-dim">
            <span className="text-phosphor">$ ls</span>{" "}
            <span className="text-foreground/85">vibes/</span>
          </p>
          <h2 className="mt-3 font-mono text-2xl font-bold uppercase leading-tight text-foreground sm:text-3xl">
            FAVOURITES
          </h2>
          <p className="mt-3 max-w-prose font-mono text-[11px] uppercase tracking-wider text-dim">
            {"// "}
            {favouritesIntro}
          </p>

          <pre className="mt-6 overflow-x-auto whitespace-pre-wrap border border-border bg-card p-5 font-mono text-[0.9rem] leading-relaxed text-foreground/85 sm:p-6">
{favourites
  .map(
    (g) =>
      `${g.heading.toUpperCase().padEnd(22, " ")}  ${g.items.join(", ")}`
  )
  .join("\n\n")}
          </pre>
        </section>

        {/* Philosophy */}
        <section className="mt-16">
          <p className="font-mono text-xs uppercase tracking-wider text-dim">
            <span className="text-phosphor">$ cat</span>{" "}
            <span className="text-foreground/85">philosophy.md</span>
          </p>
          <h2 className="mt-3 font-mono text-2xl font-bold uppercase leading-tight text-foreground sm:text-3xl">
            HOW I THINK
          </h2>
          <p className="mt-3 max-w-prose font-mono text-[11px] uppercase tracking-wider text-dim">
            {"// "}
            {philosophyIntro}
          </p>

          <ol className="mt-10 space-y-10">
            {philosophy.map((p, i) => (
              <li
                key={p.title}
                className="grid gap-3 sm:grid-cols-[80px_1fr] sm:gap-8"
              >
                <span className="font-mono text-xs uppercase tracking-wider text-amber sm:pt-1.5">
                  ▸ {String(i + 1).padStart(2, "0")}
                </span>
                <div className="max-w-prose">
                  <p className="font-mono text-xl font-bold uppercase leading-tight text-foreground sm:text-2xl">
                    {p.title}
                  </p>
                  <p className="mt-3 text-[0.95rem] leading-[1.7] text-foreground/80 sm:text-base">
                    {p.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-16 border-t border-border pt-6 font-mono text-xs uppercase tracking-wider text-foreground/85">
          {"> talk to me: "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-phosphor underline decoration-phosphor underline-offset-4"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
