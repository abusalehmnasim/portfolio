import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="riso-section">
      <div className="riso-container">
        <SectionHeading
          number="03"
          eyebrow="Roles"
          title="Clubs, committees, the occasional forum."
          description="Most of this is from school. The pattern goes back further than the CV does."
        />

        <dl className="divide-y-2 divide-dashed divide-current border-y-2 border-current">
          {experience.map((item) => (
            <div
              key={`${item.role}-${item.org}`}
              className="grid gap-4 py-7 sm:grid-cols-[160px_1fr] sm:gap-10"
            >
              <dt>
                <span className="riso-tag border-primary text-primary">
                  {item.period}
                </span>
              </dt>
              <dd>
                <p className="font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
                  {item.role}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-foreground/70">
                  {item.org}
                </p>
                <ul className="mt-3 max-w-prose space-y-1.5 text-[0.975rem] leading-relaxed text-foreground/85">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-primary" />
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
