import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="riso-section">
      <div className="riso-container">
        <SectionHeading
          number="07"
          eyebrow="Skills"
          title="What I work with."
        />

        <dl className="divide-y-2 divide-dashed divide-current border-y-2 border-current">
          {skillGroups.map((group) => (
            <div
              key={group.name}
              className="grid gap-4 py-6 sm:grid-cols-[220px_1fr] sm:gap-10"
            >
              <dt className="riso-eyebrow text-foreground sm:pt-1">
                {group.name}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li key={s}>
                      <span className="riso-tag">{s}</span>
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
