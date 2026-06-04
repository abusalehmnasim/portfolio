import { siteConfig, education, experience, projects, publication, skillGroups, certifications, achievements } from "@/lib/data";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

export const metadata = {
  title: `CV - ${siteConfig.name}`,
  description: `Professional resume of ${siteConfig.name}`,
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-10 print:py-0 print:bg-white">
      {/* Printable page container: A4-ish layout */}
      <div className="mx-auto max-w-[800px] bg-white p-10 shadow-lg print:p-0 print:shadow-none print:max-w-none">
        
        {/* Header */}
        <header className="border-b border-zinc-200 pb-4 text-center">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-zinc-950">
            {siteConfig.name}
          </h1>
          <p className="mt-1 text-sm font-medium text-zinc-600 print:text-xs">
            {siteConfig.tagline}
          </p>
          
          {/* Contact Details */}
          <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-zinc-600">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3 text-zinc-400" />
              {siteConfig.location}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3 text-zinc-400" />
              {siteConfig.phone}
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-3 w-3 text-zinc-400" />
              <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                {siteConfig.email}
              </a>
            </span>
            <span className="flex items-center gap-1">
              <Linkedin className="h-3 w-3 text-zinc-400" />
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/{siteConfig.socials.linkedin.split("/in/")[1]?.replace("/", "") || "linkedin"}
              </a>
            </span>
            <span className="flex items-center gap-1">
              <Github className="h-3 w-3 text-zinc-400" />
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/{siteConfig.githubUsername}
              </a>
            </span>
          </div>
        </header>

        {/* CV Sections */}
        <div className="mt-5 space-y-5 print:space-y-4">

          {/* Education */}
          <section>
            <h2 className="border-b border-zinc-800 pb-0.5 text-sm font-bold uppercase tracking-wider text-zinc-950">
              Education
            </h2>
            <div className="mt-2 space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex justify-between text-xs">
                  <div>
                    <h3 className="font-bold text-zinc-900">{edu.institution}</h3>
                    <p className="text-zinc-700">{edu.degree} &middot; {edu.field}</p>
                    <p className="mt-0.5 text-[11px] text-zinc-500">{edu.description}</p>
                  </div>
                  <div className="text-right font-medium text-zinc-600 whitespace-nowrap">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="border-b border-zinc-800 pb-0.5 text-sm font-bold uppercase tracking-wider text-zinc-950">
              Experience & Leadership
            </h2>
            <div className="mt-2 space-y-3">
              {experience.map((exp, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-zinc-900">
                      {exp.role} — <span className="font-semibold text-zinc-700">{exp.org}</span>
                    </h3>
                    <span className="font-medium text-zinc-600 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <ul className="mt-1 list-disc pl-4 space-y-0.5 text-[11px] text-zinc-600">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="border-b border-zinc-800 pb-0.5 text-sm font-bold uppercase tracking-wider text-zinc-950">
              Projects
            </h2>
            <div className="mt-2 space-y-3">
              {projects.map((project, idx) => (
                <div key={idx} className="text-xs">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-zinc-900 flex items-center gap-1.5">
                      {project.title}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 print:hidden">
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </h3>
                    <span className="font-medium text-zinc-600 whitespace-nowrap">{project.period}</span>
                  </div>
                  <p className="text-[11px] text-zinc-700 mt-0.5">{project.description}</p>
                  <p className="mt-1 text-[11px] text-zinc-600">
                    <span className="font-semibold">Key Highlights:</span> {project.highlights.join("; ")}
                  </p>
                  <p className="mt-0.5 text-[10px] text-zinc-500 font-medium">
                    Tech Stack: {project.tech.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Research & Publications */}
          <section>
            <h2 className="border-b border-zinc-800 pb-0.5 text-sm font-bold uppercase tracking-wider text-zinc-950">
              Research & Publications
            </h2>
            <div className="mt-2 text-xs">
              <div className="flex justify-between">
                <h3 className="font-bold text-zinc-900">
                  {publication.title}
                </h3>
                <span className="font-medium text-zinc-600 whitespace-nowrap">
                  {publication.postedDate.split("-")[0]}
                </span>
              </div>
              <p className="text-zinc-700 text-[11px] font-medium italic mt-0.5">
                {publication.subtitle}
              </p>
              <p className="text-zinc-600 text-[10px] mt-0.5">
                Published on <span className="font-semibold">{publication.venue}</span> &middot; DOI:{" "}
                <a href={publication.doiUrl} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600 print:text-zinc-900 print:no-underline">
                  {publication.doi}
                </a>
              </p>
              <p className="text-[10px] text-zinc-500 mt-1 line-clamp-2 print:line-clamp-none">
                <span className="font-semibold">Abstract:</span> {publication.abstract}
              </p>
            </div>
          </section>

          {/* Skills, Certifications & Achievements */}
          <section className="grid grid-cols-2 gap-4">
            <div>
              <h2 className="border-b border-zinc-800 pb-0.5 text-sm font-bold uppercase tracking-wider text-zinc-950">
                Skills
              </h2>
              <div className="mt-2 space-y-1 text-xs">
                {skillGroups.map((group, idx) => (
                  <div key={idx} className="text-[11px]">
                    <span className="font-semibold text-zinc-800">{group.name}: </span>
                    <span className="text-zinc-600">{group.items.join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="border-b border-zinc-800 pb-0.5 text-sm font-bold uppercase tracking-wider text-zinc-950">
                Certifications & Awards
              </h2>
              <div className="mt-2 space-y-1.5 text-[11px] text-zinc-600">
                {certifications.map((cert, idx) => (
                  <div key={idx}>
                    <span className="font-bold text-zinc-800">{cert.title}</span> &middot; {cert.issuer}
                  </div>
                ))}
                {achievements.map((ach, idx) => (
                  <div key={idx}>
                    <span className="font-bold text-zinc-800">{ach.title}</span>
                    <p className="text-[10px] text-zinc-500 leading-tight">{ach.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
