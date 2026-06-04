import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";
import { projectDetails } from "@/lib/project-details";

export const metadata: Metadata = {
  title: "Projects",
  description: `Project case studies by ${siteConfig.name}.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects · ${siteConfig.name}`,
    description: `Project case studies by ${siteConfig.name}.`,
    type: "article",
  },
};

export default function ProjectsIndex() {
  return (
    <div className="section-padding">
      <div className="container-wide">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to home
        </Link>

        <header className="mt-8">
          <span className="eyebrow">Projects</span>
          <h1 className="display mt-3 text-balance text-4xl leading-[1.05] sm:text-5xl">
            Case studies.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Deep-dives into the side projects below — the problem, the
            methodology, results, and what I learned.
          </p>
        </header>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const detail = projectDetails[p.slug];
            return (
              <article
                key={p.slug}
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
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    {p.status && (
                      <span className="rounded-md bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                        {p.status}
                      </span>
                    )}
                    {p.period && (
                      <span className="rounded-md bg-muted px-2 py-0.5 text-muted-foreground">
                        {p.period}
                      </span>
                    )}
                  </div>

                  <h2 className="mt-3 text-xl font-semibold tracking-tight">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="hover:text-primary"
                    >
                      {p.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {detail?.oneLiner ?? p.description}
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
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
