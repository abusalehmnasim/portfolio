import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading
          number="04"
          eyebrow="Projects"
          description="Two side projects. Both started as questions I couldn't answer in Excel."
        />

        <div className="space-y-16">
          {projects.map((p, idx) => (
            <article
              key={p.title}
              className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12"
            >
              {p.image && (
                <figure className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-muted">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                </figure>
              )}
              <div>
                <p className="section-label">
                  Project · 0{idx + 1}
                </p>
                <h3 className="serif-display mt-3 text-2xl leading-tight sm:text-[1.75rem]">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-prose text-[1.0625rem] leading-relaxed text-foreground/85">
                  {p.description}
                </p>

                <ul className="mt-5 max-w-prose space-y-1 text-[0.95rem] leading-relaxed text-foreground/80">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-3">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-border" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {p.tech.join(" · ")}
                </p>

                <p className="mt-6">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial inline-flex items-center gap-1.5"
                  >
                    View code on GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
