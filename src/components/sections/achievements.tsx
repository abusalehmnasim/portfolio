import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading number="09" eyebrow="Wins" />

        <ul className="divide-y divide-border border-y border-border">
          {achievements.map((a) => (
            <li key={a.title} className="py-6">
              <p className="serif-display text-xl leading-snug sm:text-2xl">
                {a.title}
              </p>
              <p className="mt-2 max-w-prose text-[0.975rem] leading-relaxed text-foreground/80">
                {a.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
