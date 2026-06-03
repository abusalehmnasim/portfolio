import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/projects/case-study";
import { projects, siteConfig } from "@/lib/data";
import { projectDetails } from "@/lib/project-details";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  const detail = projectDetails[params.slug];
  if (!project || !detail) return { title: "Project not found" };
  return {
    title: project.title,
    description: detail.oneLiner,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} · ${siteConfig.name}`,
      description: detail.oneLiner,
      type: "article",
    },
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  const detail = projectDetails[params.slug];
  if (!project || !detail) notFound();
  return <CaseStudy project={project} detail={detail} />;
}
