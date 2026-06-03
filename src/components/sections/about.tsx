import { SectionHeading } from "@/components/section-heading";
import { interests } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="01"
          cmd="about"
          title="A bit about me."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div className="space-y-5 term-prose">
            <p>
              Most of my classroom hours are in financial statements,
              valuation, audit, and reporting standards. The CA programme has
              been a slow, heavy grind — and the reason I now read{" "}
              <span className="text-phosphor">annual reports for fun</span>.
            </p>
            <p>
              On my own time I build things in{" "}
              <span className="text-amber">Python</span>,{" "}
              <span className="text-amber">SQL</span>, and{" "}
              <span className="text-amber">Power BI</span>. The two projects
              below began from <span className="text-phosphor">&ldquo;I want to know,&rdquo;</span>{" "}
              not &ldquo;I want to learn&rdquo;: one forecasts the Dhaka Stock
              Exchange with XGBoost; the other maps every restaurant in Dhaka
              I could find.
            </p>
            <p>
              I&apos;ve recently started writing — a first paper on customer
              loyalty in Bangladeshi organised grocery retail is open on SSRN.
              I&apos;m also a Policy Envoy with the Youth Policy Forum, which
              mostly means I read more about public policy than I get to act
              on.
            </p>
          </div>

          <aside>
            <p className="font-mono text-xs uppercase tracking-wider text-dim">
              {"// ls interests/"}
            </p>
            <ul className="mt-4 font-mono text-sm text-foreground/85">
              {interests.map((item, i) => (
                <li key={item} className="border-b border-border/60 py-1.5">
                  <span className="text-dim">
                    {String(i + 1).padStart(2, "0")}.
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
