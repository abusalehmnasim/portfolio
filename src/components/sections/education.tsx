import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading number="02" eyebrow="Education" />

        <dl className="divide-y divide-border border-y border-border">
          {education.map((item) => (
            <div
              key={item.institution}
              className="grid gap-4 py-7 sm:grid-cols-[140px_1fr] sm:gap-10"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:pt-1.5">
                {item.period}
              </dt>
              <dd>
                <p className="serif-display text-xl leading-snug sm:text-2xl">
                  {item.institution}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.degree} · {item.field}
                </p>
                <p className="mt-3 max-w-prose text-[0.95rem] leading-relaxed text-foreground/80">
                  {item.description}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
