import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="08"
          cmd="certifications"
          title="Things I've finished."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {certifications.map((c) => (
            <article key={c.title} className="panel font-mono">
              {c.image && (
                <>
                  <div className="flex items-center justify-between border-b border-border px-3 py-1.5 text-[10px] uppercase tracking-wider text-dim">
                    <span className="text-phosphor">cert.png</span>
                    <span>verified</span>
                  </div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-background">
                    <Image
                      src={c.image}
                      alt={`${c.title} certificate`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-contain p-2"
                      style={{ filter: "saturate(0.9) brightness(0.95)" }}
                    />
                  </div>
                </>
              )}
              <div className="p-5">
                <p className="text-[11px] uppercase tracking-wider text-amber">
                  {c.issuer}
                </p>
                <h3 className="mt-1 text-xl font-bold uppercase leading-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground/80">
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
