import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="02"
          cmd="education"
          title="Where I'm studying."
        />

        <ul className="divide-y divide-border border-y border-border font-mono">
          {education.map((item, i) => (
            <li
              key={item.institution}
              className="grid gap-3 py-6 sm:grid-cols-[80px_180px_1fr] sm:gap-6"
            >
              <span className="text-xs text-dim">
                [{String(i + 1).padStart(2, "0")}]
              </span>
              <span className="text-xs uppercase tracking-wider text-amber">
                {item.period}
              </span>
              <div>
                <p className="text-base font-semibold text-foreground sm:text-lg">
                  {item.institution}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-foreground/70">
                  {item.degree} · {item.field}
                </p>
                <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground/80">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
