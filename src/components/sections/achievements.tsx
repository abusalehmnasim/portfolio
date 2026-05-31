import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="riso-section">
      <div className="riso-container">
        <SectionHeading
          number="09"
          eyebrow="Wins"
          title="A few I'm proud of."
        />

        <ul className="divide-y-2 divide-dashed divide-current border-y-2 border-current">
          {achievements.map((a) => (
            <li key={a.title} className="py-6">
              <h3 className="riso-display text-xl sm:text-2xl">{a.title}</h3>
              <p className="mt-3 max-w-prose text-[1rem] leading-relaxed text-foreground/85">
                {a.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
