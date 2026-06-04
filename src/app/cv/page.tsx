import { siteConfig, education, experience, projects, publication, skillGroups, certifications, achievements } from "@/lib/data";

export const metadata = {
  title: `CV - ${siteConfig.name}`,
  description: `ATS-Friendly Times New Roman resume of ${siteConfig.name}`,
};

export default function CVPage() {
  return (
    <div 
      className="min-h-screen bg-zinc-50 py-10 print:py-0 print:bg-white text-black antialiased"
      style={{ fontFamily: "'Times New Roman', Times, serif" }}
    >
      {/* Printable page container: A4 size layout, single-column for absolute ATS friendliness */}
      <div className="mx-auto max-w-[800px] bg-white p-12 shadow-md print:p-0 print:shadow-none print:max-w-none text-[11px] leading-relaxed">
        
        {/* Name and Tagline */}
        <header className="text-center pb-4">
          <h1 className="text-[26px] font-bold text-black tracking-tight uppercase">
            {siteConfig.name}
          </h1>
          <p className="text-[11.5px] font-bold text-zinc-800 tracking-normal mt-0.5">
            {siteConfig.tagline}
          </p>
          
          {/* Contact Details (Plain text for ATS Parsing compliance) */}
          <div className="mt-2 flex flex-wrap justify-center gap-x-2 gap-y-0.5 text-[11px] text-zinc-800">
            <span>{siteConfig.location}</span>
            <span>&bull;</span>
            <span>{siteConfig.phone}</span>
            <span>&bull;</span>
            <span>
              <a href={`mailto:${siteConfig.email}`} className="text-black hover:underline">
                {siteConfig.email}
              </a>
            </span>
            <span>&bull;</span>
            <span>
              <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                linkedin.com/in/{siteConfig.socials.linkedin.split("/in/")[1]?.replace("/", "") || "linkedin"}
              </a>
            </span>
            <span>&bull;</span>
            <span>
              <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
                github.com/{siteConfig.githubUsername}
              </a>
            </span>
          </div>
        </header>

        {/* CV Content Section (Single Column for ATS ordering) */}
        <div className="mt-3 space-y-4">

          {/* Education Section */}
          <section>
            <h2 className="border-b border-black pb-0.5 text-[12px] font-bold uppercase tracking-wider text-black">
              Education
            </h2>
            <div className="mt-2 space-y-2">
              {education.map((edu, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className="text-[11.5px]">{edu.institution}</span>
                    <span className="text-[10px] text-zinc-700 font-normal">{edu.period}</span>
                  </div>
                  <div className="flex justify-between items-baseline text-zinc-900">
                    <span className="italic">{edu.degree} &middot; {edu.field}</span>
                  </div>
                  <p className="text-[10px] text-zinc-600 leading-normal">{edu.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience Section */}
          <section>
            <h2 className="border-b border-black pb-0.5 text-[12px] font-bold uppercase tracking-wider text-black">
              Experience & Leadership
            </h2>
            <div className="mt-2 space-y-2">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className="text-[11.5px]">
                      {exp.role} &mdash; <span className="font-semibold text-zinc-900">{exp.org}</span>
                    </span>
                    <span className="text-[10px] text-zinc-700 font-normal">{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] text-zinc-800 leading-normal">
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
            <h2 className="border-b border-black pb-0.5 text-[12px] font-bold uppercase tracking-wider text-black">
              Selected Projects
            </h2>
            <div className="mt-2 space-y-2">
              {projects.map((project, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="flex justify-between items-baseline font-bold text-black">
                    <span className="text-[11.5px]">
                      {project.title} <span className="text-[9.5px] font-normal text-zinc-600">({project.github ? "GitHub Repo Available" : ""})</span>
                    </span>
                    <span className="text-[10px] text-zinc-700 font-normal">{project.period}</span>
                  </div>
                  <p className="text-[10.5px] text-zinc-800 leading-normal">{project.description}</p>
                  <div className="text-[10px] text-zinc-800 leading-normal">
                    <span className="font-bold text-black">Highlights:</span> {project.highlights.join(" | ")}
                  </div>
                  <div className="text-[9.5px] text-zinc-600 font-normal">
                    Technologies: {project.tech.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Research & Publications Section */}
          <section>
            <h2 className="border-b border-black pb-0.5 text-[12px] font-bold uppercase tracking-wider text-black">
              Research & Publications
            </h2>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between items-baseline font-bold text-black">
                <span className="text-[11.5px]">{publication.title}</span>
                <span className="text-[10px] text-zinc-700 font-normal">{publication.postedDate.split("-")[0]}</span>
              </div>
              <p className="text-[10.5px] text-zinc-950 italic leading-tight">
                {publication.subtitle}
              </p>
              <p className="text-[10px] text-zinc-800 leading-normal">
                Published on <span className="font-semibold text-black">{publication.venue}</span> &middot; DOI: {publication.doi}
              </p>
              <p className="text-[9.5px] text-zinc-600 leading-normal">
                <span className="font-bold text-zinc-800">Abstract:</span> {publication.abstract}
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="border-b border-black pb-0.5 text-[12px] font-bold uppercase tracking-wider text-black">
              Technical Skills & Interests
            </h2>
            <div className="mt-2 space-y-1 text-[10.5px] text-zinc-800">
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
            <h2 className="border-b border-black pb-0.5 text-[12px] font-bold uppercase tracking-wider text-black">
              Certifications & Achievements
            </h2>
            <div className="mt-2 space-y-1 text-[10.5px] text-zinc-800">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex">
                  <span className="font-bold text-black min-w-[140px]">{cert.issuer}:</span>
                  <span>{cert.title} &mdash; <span className="text-zinc-600 text-[10px]">{cert.description}</span></span>
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
