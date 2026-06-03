import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="03"
          cmd="roles"
          title="Clubs, committees, the occasional forum."
          description="Most of this is from school. The leadership pattern goes back further than the CV does."
        />

        <ul className="divide-y divide-border border-y border-border font-mono">
          {experience.map((item, i) => (
            <li
              key={`${item.role}-${item.org}`}
              className="grid gap-3 py-6 sm:grid-cols-[80px_140px_1fr] sm:gap-6"
            >
              <span className="text-xs text-dim">
                [{String(i + 1).padStart(2, "0")}]
              </span>
              <span className="text-xs uppercase tracking-wider text-amber">
                {item.period}
              </span>
              <div>
                <p className="text-base font-semibold text-foreground sm:text-lg">
                  {item.role}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-foreground/70">
                  {item.org}
                </p>
                <ul className="mt-3 max-w-prose space-y-1 text-sm leading-relaxed text-foreground/80">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-phosphor">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
