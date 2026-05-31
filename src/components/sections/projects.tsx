import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="riso-section">
      <div className="riso-container">
        <SectionHeading
          number="04"
          eyebrow="Projects"
          title="Things I've built."
          description="Two side projects. Both started as questions I couldn't answer in Excel."
        />

        <div className="grid gap-12 lg:gap-16">
          {projects.map((p, idx) => {
            const flip = idx % 2 === 1;
            return (
              <article
                key={p.title}
                className={
                  "grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14"
                }
              >
                {p.image && (
                  <figure
                    className={
                      "relative border-[3px] border-current bg-card " +
                      (flip ? "lg:order-2" : "lg:order-1")
                    }
                    style={{
                      boxShadow: `8px 8px 0 0 hsl(var(--primary))`,
                      transform: `rotate(${flip ? 1.2 : -1.2}deg)`,
                    }}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 540px"
                        className="riso-photo object-cover"
                      />
                      <div
                        aria-hidden
                        className="halftone-pink pointer-events-none absolute inset-0 opacity-25 mix-blend-multiply"
                      />
                    </div>
                  </figure>
                )}
                <div className={flip ? "lg:order-1" : "lg:order-2"}>
                  <p className="riso-eyebrow text-foreground">
                    № 0{idx + 1} / Project
                  </p>
                  <h3
                    className="riso-display mt-3 text-[1.75rem] leading-none sm:text-[2.25rem]"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-5 max-w-prose text-[1.05rem] leading-relaxed text-foreground/85">
                    {p.description}
                  </p>

                  <ul className="mt-5 max-w-prose space-y-1.5 text-[0.975rem] leading-relaxed text-foreground/85">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-primary" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <li key={t}>
                        <span className="riso-tag">{t}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-7">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="riso-stamp riso-stamp--pink"
                    >
                      Code on GitHub
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
