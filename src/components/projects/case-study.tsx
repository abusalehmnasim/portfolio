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
    <article className="pt-8">
      <div className="term-narrow pb-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground/75 transition-colors hover:text-phosphor"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          cd ../projects
        </Link>

        {/* Header */}
        <p className="mt-10 font-mono text-xs uppercase tracking-wider text-dim">
          <span className="text-phosphor">$ cat</span>{" "}
          <span className="text-foreground/85">{project.slug}/README.md</span>
        </p>

        <h1 className="mt-3 font-mono text-3xl font-bold uppercase leading-[1.05] tracking-tight text-foreground sm:text-[3rem]">
          {project.title}
          <span className="caret" />
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-foreground/75">
          {project.status && (
            <span>
              <span className="text-dim">status:</span>{" "}
              <span className="text-amber">{project.status}</span>
            </span>
          )}
          {project.period && (
            <span>
              <span className="text-dim">period:</span>{" "}
              <span className="text-foreground/85">{project.period}</span>
            </span>
          )}
          <span>
            <span className="text-dim">stack:</span>{" "}
            <span className="text-phosphor">{project.tech.join(" · ")}</span>
          </span>
        </div>

        <p className="mt-8 max-w-prose text-[1rem] leading-[1.7] text-foreground/85 sm:text-[1.05rem]">
          {detail.oneLiner}
        </p>

        {/* Cover image */}
        {project.image && (
          <figure className="mt-10 border border-phosphor/60 font-mono">
            <div className="flex items-center justify-between border-b border-phosphor/40 px-3 py-1.5 text-[10px] uppercase tracking-wider text-phosphor">
              <span>cover.png</span>
              <span className="text-dim">scanned 1440×900</span>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-card">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover"
                style={{ filter: "saturate(0.55) contrast(1.03) brightness(0.95)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 mix-blend-screen"
                style={{ background: "hsl(var(--phosphor) / 0.07)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent 0, transparent 2px, hsl(var(--background)) 3px)",
                  opacity: 0.2,
                }}
              />
            </div>
          </figure>
        )}

        {/* Problem */}
        <Section number="01" name="problem">
          {detail.problem.map((p, i) => (
            <p key={i} className="max-w-prose">
              {p}
            </p>
          ))}
        </Section>

        {/* Approach */}
        <Section number="02" name="approach">
          <ol className="space-y-3 max-w-prose">
            {detail.approach.map((step, i) => (
              <li key={i} className="flex gap-3 font-mono text-[0.95rem]">
                <span className="shrink-0 text-phosphor">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* Data sources */}
        <Section number="03" name="data sources">
          <pre className="overflow-x-auto whitespace-pre border border-border bg-card p-4 font-mono text-[0.85rem] leading-relaxed text-foreground/85">
{`SOURCE                                  VIA                          ROWS
${detail.dataSources
  .map(
    (d) =>
      `${d.name.padEnd(40, " ")}${d.via.padEnd(29, " ")}${d.rows ?? "-"}`
  )
  .join("\n")}`}
          </pre>
        </Section>

        {/* Pipeline */}
        <Section number="04" name="pipeline">
          <pre className="overflow-x-auto whitespace-pre border border-border bg-card p-4 font-mono text-[0.85rem] leading-[1.6] text-foreground/85 sm:p-5">
{detail.pipeline
  .map((s, i, arr) => {
    const head = `[${String(i + 1).padStart(2, "0")}]  ${s.label.padEnd(28, " ")}`;
    const tail = s.detail ? `// ${s.detail}` : "";
    const connector = i < arr.length - 1 ? "\n      │\n      ▼" : "";
    return `${head}${tail}${connector}`;
  })
  .join("\n")}
          </pre>
        </Section>

        {/* Code */}
        <Section number="05" name="code">
          <div className="overflow-x-auto border border-phosphor/60">
            <div className="flex items-center justify-between border-b border-phosphor/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-phosphor">
              <span>{detail.code.caption ?? "snippet"}.{detail.code.language}</span>
              <span className="text-dim">{detail.code.language}</span>
            </div>
            <pre className="overflow-x-auto whitespace-pre bg-card p-4 font-mono text-[0.85rem] leading-[1.55] text-foreground/85 sm:p-5">
              {detail.code.body}
            </pre>
          </div>
        </Section>

        {/* Results */}
        <Section number="06" name="results">
          <pre className="overflow-x-auto whitespace-pre border border-amber/60 bg-card p-4 font-mono text-[0.9rem] leading-relaxed text-foreground/85 sm:p-5">
{`METRIC                              VALUE
${detail.results
  .map(
    (r) => `${r.metric.padEnd(36, " ")}${r.value}`
  )
  .join("\n")}`}
          </pre>
          {detail.resultsCaveat && (
            <p className="mt-4 max-w-prose font-mono text-[0.85rem] leading-relaxed text-foreground/75">
              <span className="text-amber">// caveat:</span>{" "}
              {detail.resultsCaveat}
            </p>
          )}
        </Section>

        {/* Lessons */}
        <Section number="07" name="lessons">
          <ul className="space-y-3 max-w-prose">
            {detail.lessons.map((l, i) => (
              <li key={i} className="flex gap-3 font-mono text-[0.95rem]">
                <span className="shrink-0 text-amber">▸</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Links */}
        <Section number="08" name="links">
          <ul className="space-y-2 font-mono text-sm">
            {detail.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-phosphor underline decoration-phosphor underline-offset-4 hover:text-amber"
                >
                  {l.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Section>

        <div className="mt-16 border-t border-border pt-6 font-mono text-xs uppercase tracking-wider text-foreground/85">
          <span className="text-phosphor">▸</span>{" "}
          <Link
            href="/projects"
            className="text-foreground/85 underline decoration-foreground/40 underline-offset-4 hover:text-phosphor"
          >
            back to /projects
          </Link>
        </div>
      </div>
    </article>
  );
}

function Section({
  number,
  name,
  children,
}: {
  number: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <h2 className="font-mono text-xs uppercase tracking-wider text-dim">
        <span className="text-foreground/60">[{number}]</span>{" "}
        <span className="text-phosphor">$ cat</span>{" "}
        <span className="text-foreground/85">{name}.md</span>
      </h2>
      <div className="mt-4 space-y-3 text-[0.95rem] leading-[1.7] text-foreground/85">
        {children}
      </div>
    </section>
  );
}
