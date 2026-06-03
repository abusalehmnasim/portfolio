import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="09"
          cmd="wins"
          title="A few I'm proud of."
        />

        <ul className="divide-y divide-border border-y border-border font-mono">
          {achievements.map((a, i) => (
            <li
              key={a.title}
              className="grid gap-2 py-6 sm:grid-cols-[80px_1fr] sm:gap-6"
            >
              <span className="text-xs text-amber">
                ★ [{String(i + 1).padStart(2, "0")}]
              </span>
              <div>
                <h3 className="text-lg font-bold uppercase leading-tight text-foreground sm:text-xl">
                  {a.title}
                </h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-foreground/80">
                  {a.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
