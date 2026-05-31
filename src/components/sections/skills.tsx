import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading number="07" eyebrow="Skills" />

        <dl className="divide-y divide-border border-y border-border">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="grid gap-4 py-6 sm:grid-cols-[200px_1fr] sm:gap-10"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:pt-1">
                {group.name}
              </dt>
              <dd className="text-[1.0625rem] leading-relaxed text-foreground/85">
                {group.items.join(", ")}.
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
