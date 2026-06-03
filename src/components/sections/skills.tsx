import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="07"
          cmd="skills"
          title="What I work with."
        />

        <pre className="overflow-x-auto whitespace-pre-wrap border border-border bg-card p-5 font-mono text-[0.92rem] leading-relaxed text-foreground/85 sm:p-6 sm:text-[0.95rem]">
{skillGroups
  .map((g) => `${g.name.padEnd(22, " ")}  ${g.items.join(", ")}`)
  .join("\n\n")}
        </pre>
      </div>
    </section>
  );
}
