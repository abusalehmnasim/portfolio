import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { ProjectDetail } from "@/lib/project-details";

interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  image?: string;
  status?: string;
  period?: string;
}

export function CaseStudy({
  project,
  detail,
}: {
  project: Project;
  detail: ProjectDetail;
}) {
  return (
    <article className="section-padding">
      <div className="container-narrow">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All projects
        </Link>

        <div className="mt-8 flex flex-wrap gap-2 text-xs">
          {project.status && (
            <span className="rounded-md bg-primary/10 px-2.5 py-1 font-semibold text-primary">
              {project.status}
            </span>
          )}
          {project.period && (
            <span className="rounded-md bg-muted px-2.5 py-1 text-muted-foreground">
              {project.period}
            </span>
          )}
        </div>

        <h1 className="display mt-5 text-balance text-4xl leading-[1.05] sm:text-5xl">
          {project.title}
        </h1>

        <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
          {detail.oneLiner}
        </p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80"
            >
              {t}
            </li>
          ))}
        </ul>

        {project.image && (
          <figure className="mt-10 overflow-hidden rounded-lg border border-border bg-muted">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          </figure>
        )}

        {/* 01 Problem */}
        <Section eyebrow="01 — Problem" title="Why this project">
          {detail.problem.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        {/* 02 Approach */}
        <Section eyebrow="02 — Approach" title="How I tackled it">
          <ol className="not-prose space-y-3">
            {detail.approach.map((step, i) => (
              <li
                key={i}
                className="flex gap-4 rounded-md border border-border bg-card p-4"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-semibold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-foreground/85">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* 03 Data sources */}
        <Section eyebrow="03 — Data sources" title="Where the data came from">
          <div className="not-prose overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/50 text-left">
                <tr>
                  <th className="px-4 py-2 font-semibold">Source</th>
                  <th className="px-4 py-2 font-semibold">Via</th>
                  <th className="px-4 py-2 font-semibold">Rows</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {detail.dataSources.map((d) => (
                  <tr key={d.name}>
                    <td className="px-4 py-2 text-foreground">{d.name}</td>
                    <td className="px-4 py-2 text-muted-foreground">{d.via}</td>
                    <td className="px-4 py-2 text-muted-foreground">
                      {d.rows ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* 04 Pipeline */}
        <Section eyebrow="04 — Pipeline" title="End-to-end flow">
          <ol className="not-prose space-y-2">
            {detail.pipeline.map((s, i, arr) => (
              <li key={i}>
                <div className="flex items-start gap-3 rounded-md border border-border bg-card p-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10 text-[10px] font-semibold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-foreground">
                      {s.label}
                    </p>
                    {s.detail && (
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {s.detail}
                      </p>
                    )}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="ml-5 my-1 h-3 w-px bg-border" />
                )}
              </li>
            ))}
          </ol>
        </Section>

        {/* 05 Code */}
        <Section eyebrow="05 — Code" title="A key snippet">
          {detail.code.caption && (
            <p className="text-sm text-muted-foreground">
              {detail.code.caption}
            </p>
          )}
          <div className="not-prose overflow-x-auto rounded-md border border-border bg-muted/40">
            <div className="flex items-center justify-between border-b border-border px-4 py-2 text-xs">
              <span className="font-mono font-semibold text-foreground/70">
                snippet.{detail.code.language}
              </span>
              <span className="text-muted-foreground">
                {detail.code.language}
              </span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 text-xs leading-relaxed text-foreground/90 sm:text-[13px]">
              <code>{detail.code.body}</code>
            </pre>
          </div>
        </Section>

        {/* 06 Results */}
        <Section eyebrow="06 — Results" title="What it shipped">
          <div className="not-prose overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-muted/50 text-left">
                <tr>
                  <th className="px-4 py-2 font-semibold">Metric</th>
                  <th className="px-4 py-2 font-semibold">Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {detail.results.map((r) => (
                  <tr key={r.metric}>
                    <td className="px-4 py-2 text-foreground">{r.metric}</td>
                    <td className="px-4 py-2 font-semibold text-foreground">
                      {r.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {detail.resultsCaveat && (
            <p className="mt-3 rounded-md border-l-2 border-primary/40 bg-muted/40 p-4 text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Caveat: </span>
              {detail.resultsCaveat}
            </p>
          )}
        </Section>

        {/* 07 Lessons */}
        <Section eyebrow="07 — Lessons" title="What I learned">
          <ul className="not-prose space-y-3">
            {detail.lessons.map((l, i) => (
              <li
                key={i}
                className="flex gap-3 rounded-md border border-border bg-card p-4"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <p className="text-sm leading-relaxed text-foreground/85">
                  {l}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* 08 Links */}
        <Section eyebrow="08 — Links" title="References">
          <ul className="not-prose space-y-2">
            {detail.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <div className="mt-16 border-t border-border pt-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All projects
          </Link>
        </div>
      </div>
    </article>
  );
}

function Section({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-2 text-2xl sm:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4 text-base leading-relaxed text-foreground/85">
        {children}
      </div>
    </section>
  );
}
