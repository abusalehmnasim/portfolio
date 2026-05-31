import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="riso-section">
      <div className="riso-container">
        <SectionHeading
          number="02"
          eyebrow="Education"
          title="Where I'm studying."
        />

        <dl className="divide-y-2 divide-dashed divide-current border-y-2 border-current">
          {education.map((item) => (
            <div
              key={item.institution}
              className="grid gap-4 py-7 sm:grid-cols-[160px_1fr] sm:gap-10"
            >
              <dt>
                <span className="riso-tag border-primary text-primary">
                  {item.period}
                </span>
              </dt>
              <dd>
                <p className="font-display text-xl font-bold uppercase tracking-tight sm:text-2xl">
                  {item.institution}
                </p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-foreground/70">
                  {item.degree} · {item.field}
                </p>
                <p className="mt-3 max-w-prose text-[1rem] leading-relaxed text-foreground/85">
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
