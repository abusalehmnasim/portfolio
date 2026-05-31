import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading number="08" eyebrow="Certifications" />

        <div className="divide-y divide-border border-y border-border">
          {certifications.map((c) => (
            <article
              key={c.title}
              className="grid gap-6 py-7 sm:grid-cols-[200px_1fr] sm:gap-10"
            >
              {c.image ? (
                <figure className="relative aspect-[16/10] w-full border border-border bg-muted">
                  <Image
                    src={c.image}
                    alt={`${c.title} certificate`}
                    fill
                    sizes="200px"
                    className="object-contain p-1.5"
                  />
                </figure>
              ) : (
                <div />
              )}
              <div>
                <p className="serif-display text-xl leading-snug sm:text-2xl">
                  {c.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
                <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-foreground/80">
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
