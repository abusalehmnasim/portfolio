import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";
import { projectDetails } from "@/lib/project-details";

export const metadata: Metadata = {
  title: "Projects",
  description: `Project case studies by ${siteConfig.name} — Dhaka Restaurant Directory and DSE Market Prediction.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects · ${siteConfig.name}`,
    description: `Project case studies by ${siteConfig.name}.`,
    type: "article",
  },
};

export default function ProjectsIndex() {
  return (
    <div className="pt-8">
      <div className="term-narrow pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground/75 transition-colors hover:text-phosphor"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          cd ../
        </Link>

        <p className="mt-10 font-mono text-xs uppercase tracking-wider text-dim">
          <span className="text-phosphor">$ ls</span>{" "}
          <span className="text-amber">-la</span>{" "}
          <span className="text-foreground/85">./projects/</span>
        </p>

        <h1 className="mt-3 font-mono text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground sm:text-[3rem]">
          PROJECTS<span className="caret" />
        </h1>

        <p className="mt-4 max-w-prose font-mono text-[11px] uppercase tracking-wider text-dim">
          {"// "}two side projects. each has its own deep-dive case study.
        </p>

        {/* ls -la style listing */}
        <div className="mt-10 overflow-x-auto border border-border bg-card font-mono text-[0.88rem]">
          <div className="border-b border-border px-4 py-2 text-[11px] uppercase tracking-wider text-dim">
            total {projects.length}
          </div>
          <div className="divide-y divide-border">
            {/* Header row */}
            <div className="hidden grid-cols-[80px_120px_140px_1fr_24px] gap-4 px-4 py-2 text-[10px] uppercase tracking-wider text-dim sm:grid">
              <span>perms</span>
              <span>updated</span>
              <span>status</span>
              <span>name → readme</span>
              <span></span>
            </div>

            {projects.map((p) => {
              const detail = projectDetails[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group grid grid-cols-[80px_1fr_24px] gap-3 px-4 py-3 transition-colors hover:bg-phosphor/5 sm:grid-cols-[80px_120px_140px_1fr_24px] sm:gap-4"
                >
                  <span className="text-foreground/80">drwxr-xr-x</span>
                  <span className="hidden text-foreground/65 sm:inline">
                    {p.period?.split(" – ")[0] ?? "—"}
                  </span>
                  <span className="hidden text-amber sm:inline">
                    {p.status ?? "—"}
                  </span>
                  <span>
                    <span className="text-phosphor group-hover:underline">
                      {p.slug}/
                    </span>
                    <span className="ml-2 text-dim hidden sm:inline">
                      {detail?.oneLiner.slice(0, 80) ?? p.description.slice(0, 80)}
                      {(detail?.oneLiner.length ?? p.description.length) > 80 ? "…" : ""}
                    </span>
                    <span className="block text-dim sm:hidden">
                      {detail?.oneLiner ?? p.description}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-dim transition-colors group-hover:text-phosphor" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick details per project */}
        <div className="mt-12 space-y-12">
          {projects.map((p) => {
            const detail = projectDetails[p.slug];
            return (
              <section key={p.slug} className="border-l-2 border-phosphor/40 pl-5">
                <p className="font-mono text-xs uppercase tracking-wider text-dim">
                  <span className="text-foreground/60">{">"}</span>{" "}
                  <span className="text-phosphor">{p.slug}/</span>
                </p>
                <h2 className="mt-2 font-mono text-2xl font-bold uppercase leading-tight text-foreground sm:text-3xl">
                  {p.title}
                </h2>
                <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-foreground/85">
                  {detail?.oneLiner ?? p.description}
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-wider">
                  <span className="text-dim">stack:</span>{" "}
                  <span className="text-amber">{p.tech.join(" · ")}</span>
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 border border-phosphor px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-phosphor transition-colors hover:bg-phosphor hover:text-background"
                  >
                    read case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 border border-foreground/40 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-foreground/85 transition-colors hover:border-amber hover:text-amber"
                  >
                    git clone
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
