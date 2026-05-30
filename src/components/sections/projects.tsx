"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Tilt } from "@/components/ui/tilt";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="Hands-on projects where I combine financial intuition with data engineering and machine learning."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
            <Tilt max={6}>
            <article className="glass-card group relative flex flex-col overflow-hidden">
              <div
                className={`relative aspect-[16/9] w-full overflow-hidden border-b border-border/40 bg-gradient-to-br ${p.accent}`}
              >
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 grid-bg opacity-40" />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-border/60 bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider backdrop-blur">
                  {p.tech[0]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {p.title}
                  </h3>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${p.title} on GitHub`}
                    className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-5">
                  <h4 className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Highlights
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                        <span className="text-muted-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    View on GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </article>
            </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
