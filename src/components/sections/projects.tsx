import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="04"
          cmd="projects"
          title="Things I've built."
          description="Two side projects. Both started as questions I couldn't answer in Excel."
        />

        <div className="space-y-14">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12"
            >
              {p.image && (
                <figure className="border border-phosphor/70 font-mono">
                  <div className="flex items-center justify-between border-b border-phosphor/40 px-3 py-1.5 text-[10px] uppercase tracking-wider text-phosphor">
                    <span>preview.png</span>
                    <span className="text-dim">scanned 1440×900</span>
                  </div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-card">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 540px"
                      className="object-cover"
                      style={{
                        /* Light desaturation only — colors remain themselves */
                        filter: "saturate(0.55) contrast(1.03) brightness(0.95)",
                      }}
                    />
                    {/* Faint phosphor wash */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 mix-blend-screen"
                      style={{
                        background: "hsl(var(--phosphor) / 0.07)",
                      }}
                    />
                    {/* Softer scanlines */}
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
                  <div className="flex items-center justify-between border-t border-phosphor/40 px-3 py-1.5 text-[10px] uppercase tracking-wider text-foreground/70">
                    <span className="text-phosphor">OK</span>
                    <span className="text-dim">render: 12ms</span>
                  </div>
                </figure>
              )}

              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-dim">
                  <span className="text-foreground/60">[{String(idx + 1).padStart(2, "0")}]</span>{" "}
                  <span className="text-phosphor">project</span> ·{" "}
                  <span className="text-foreground/70">
                    {p.title.toLowerCase().replace(/\s+/g, "_")}
                  </span>
                </p>
                <h3 className="mt-3 font-mono text-2xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-[1.8rem]">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-foreground/85">
                  {p.description}
                </p>

                <ul className="mt-4 max-w-prose space-y-1 text-[0.92rem] leading-relaxed text-foreground/80">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-phosphor">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-foreground/75">
                  <span className="text-dim">stack:</span>{" "}
                  {p.tech.map((t, i) => (
                    <span key={t}>
                      <span className="text-amber">{t}</span>
                      {i < p.tech.length - 1 && (
                        <span className="text-dim"> · </span>
                      )}
                    </span>
                  ))}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
