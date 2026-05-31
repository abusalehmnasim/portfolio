import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading
          number="03"
          eyebrow="Roles"
          description="Clubs, committees, the occasional forum. Most of this is from school. The pattern goes back further than the CV does."
        />

        <dl className="divide-y divide-border border-y border-border">
          {experience.map((item, i) => (
            <div
              key={`${item.role}-${item.org}`}
              className="grid gap-4 py-7 sm:grid-cols-[140px_1fr] sm:gap-10"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:pt-1.5">
                {item.period}
              </dt>
              <dd>
                <p className="serif-display text-xl leading-snug sm:text-2xl">
                  {item.role}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                <ul className="mt-3 max-w-prose space-y-1 text-[0.95rem] leading-relaxed text-foreground/80">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2.5 h-px w-3 shrink-0 bg-border" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
