"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          description="Side projects where I combine finance with data engineering and machine learning."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-soft group flex flex-col overflow-hidden"
            >
              {p.image && (
                <Link
                  href={`/projects/${p.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-muted"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
              )}

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="hover:text-primary"
                    >
                      {p.title}
                    </Link>
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

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-foreground/80"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Read case study
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
