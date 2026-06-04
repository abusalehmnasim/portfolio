import { siteConfig, education, experience, projects, publication, skillGroups, certifications, achievements } from "@/lib/data";

export const metadata = {
  title: `CV - ${siteConfig.name}`,
  description: `ATS-Friendly resume of ${siteConfig.name}`,
};

export default function CVPage() {
  return (
    <div className="min-h-screen bg-zinc-50 py-8 print:py-0 print:bg-white text-zinc-900 font-sans antialiased">
      {/* Printable page container: A4 size layout, single-column for absolute ATS friendliness */}
      <div className="mx-auto max-w-[800px] bg-white p-12 shadow-md print:p-0 print:shadow-none print:max-w-none text-xs">
        
        {/* Name and Tagline */}
        <header className="text-center pb-3">
          <h1 className="text-2xl font-bold text-black tracking-tight uppercase">
            {siteConfig.name}
          </h1>
          <p className="text-[11px] font-semibold text-zinc-700 tracking-normal mt-0.5 print:text-zinc-800">
            {siteConfig.tagline}
          </p>
          
          {/* Contact Details (Plain text for ATS Parsing compliance) */}
          <div className="mt-2 flex flex-wrap justify-center gap-x-3 gap-y-0.5 text-[11px] text-zinc-700">
            <span>{siteConfig.location}</span>
            <span>&bull;</span>
            <span>{siteConfig.phone}</span>
            <span>&bull;</span>
            <span>
              <a href={`mailto:${siteConfig.email}`} className="text-zinc-900 hover:underline">
                {siteConfig.email}
              </a>
            </span>
            <span>&bull;</span>
            <span>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:underline">
                linkedin.com/in/{siteConfig.socials.linkedin.split("/in/")[1]?.replace("/", "") || "linkedin"}
              </a>
            </span>
            <span>&bull;</span>
            <span>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-zinc-900 hover:underline">
                github.com/{siteConfig.githubUsername}
              </a>
            </span>
          </div>
        </header>

        {/* CV Content Section (Single Column for ATS ordering) */}
        <div className="mt-4 space-y-4">

          {/* Education Section */}
          <section>
            <h2 className="border-b border-zinc-900 pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Education
            </h2>
            <div className="mt-2 space-y-2">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className="text-[11.5px]">{edu.institution}</span>
                    <span className="text-[10px] text-zinc-600 font-medium">{edu.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-zinc-800 text-[11px]">
                    <span className="italic">{edu.degree} &middot; {edu.field}</span>
                  </div>
                  <p className="text-[10px] text-zinc-500 leading-normal">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience Section */}
          <section>
            <h2 className="border-b border-zinc-900 pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Experience & Leadership
            </h2>
            <div className="mt-2 space-y-2">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className="text-[11.5px]">
                      {exp.role} &mdash; <span className="font-semibold text-zinc-800">{exp.org}</span>
                    </span>
                    <span className="text-[10px] text-zinc-600 font-medium">{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-zinc-700 leading-normal">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="border-b border-zinc-900 pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Selected Projects
            </h2>
            <div className="mt-2 space-y-2.5">
              {projects.map((project, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className="text-[11.5px]">
                      {project.title} <span className="text-[10px] font-normal text-zinc-500">({project.github ? "GitHub Repo Available" : ""})</span>
                    </span>
                    <span className="text-[10px] text-zinc-600 font-medium">{project.period}</span>
                  </div>
                  <p className="text-[10.5px] text-zinc-700 leading-normal">{project.description}</p>
                  <div className="text-[10px] text-zinc-600 leading-normal">
                    <span className="font-bold text-zinc-800">Highlights:</span> {project.highlights.join(" | ")}
                  </div>
                  <div className="text-[9.5px] text-zinc-500 font-medium">
                    Technologies: {project.tech.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Research & Publications Section */}
          <section>
            <h2 className="border-b border-zinc-900 pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Research & Publications
            </h2>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between items-baseline font-bold text-black">
                <span className="text-[11.5px]">{publication.title}</span>
                <span className="text-[10px] text-zinc-600 font-medium">{publication.postedDate.split("-")[0]}</span>
              </div>
              <p className="text-[10.5px] text-zinc-800 italic leading-tight">
                {publication.subtitle}
              </p>
              <p className="text-[10px] text-zinc-600 leading-normal">
                Published on <span className="font-semibold text-zinc-800">{publication.venue}</span> &middot; DOI: {publication.doi}
              </p>
              <p className="text-[9.5px] text-zinc-500 leading-normal">
                <span className="font-bold text-zinc-700">Abstract:</span> {publication.abstract}
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="border-b border-zinc-900 pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Technical Skills & Interests
            </h2>
            <div className="mt-2 space-y-1 text-[10.5px] text-zinc-700">
              {skillGroups.map((group, idx) => (
                <div key={idx} className="flex">
                  <span className="font-bold text-black min-w-[140px]">{group.name}:</span>
                  <span>{group.items.join(", ")}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Achievements Section */}
          <section>
            <h2 className="border-b border-zinc-900 pb-0.5 text-xs font-bold uppercase tracking-wider text-black">
              Certifications & Achievements
            </h2>
            <div className="mt-2 space-y-1 text-[10.5px] text-zinc-700">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex">
                  <span className="font-bold text-black min-w-[140px]">{cert.issuer}:</span>
                  <span>{cert.title} &mdash; <span className="text-zinc-500 text-[10px]">{cert.description}</span></span>
                </div>
              ))}
              {achievements.map((ach, idx) => (
                <div key={idx} className="flex">
                  <span className="font-bold text-black min-w-[140px]">{ach.title}:</span>
                  <span>{ach.description}</span>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
