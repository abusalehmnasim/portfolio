import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="riso-section">
      <div className="riso-container">
        <SectionHeading
          number="08"
          eyebrow="Certifications"
          title="Things I've finished."
        />

        <div className="grid gap-10 lg:gap-12">
          {certifications.map((c) => (
            <article
              key={c.title}
              className="grid gap-6 sm:grid-cols-[240px_1fr] sm:gap-10"
            >
              {c.image && (
                <figure
                  className="relative border-[3px] border-current bg-card"
                  style={{ boxShadow: "6px 6px 0 0 hsl(var(--primary))" }}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={c.image}
                      alt={`${c.title} certificate`}
                      fill
                      sizes="240px"
                      className="object-contain p-2"
                    />
                  </div>
                </figure>
              )}
              <div>
                <p className="riso-eyebrow text-foreground">{c.issuer}</p>
                <h3 className="riso-display mt-2 text-2xl sm:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-4 max-w-prose text-[1rem] leading-relaxed text-foreground/85">
                  {c.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
