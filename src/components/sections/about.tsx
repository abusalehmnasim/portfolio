import { SectionHeading } from "@/components/section-heading";
import { interests } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading number="01" eyebrow="About" />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-5 body-prose">
            <p>
              Most of my classroom hours are in financial statements,
              valuation, audit, and reporting standards. The CA programme has
              been a slow, heavy grind — and the reason I now read annual
              reports for fun.
            </p>
            <p>
              On my own time I build things in Python, SQL, and Power BI. The
              two projects below began from &ldquo;I want to know,&rdquo; not
              &ldquo;I want to learn&rdquo;: one tries to forecast the Dhaka
              Stock Exchange with XGBoost; the other maps every restaurant in
              Dhaka I could find from open-source geographic data.
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
            <p className="section-label">Interests</p>
            <ul className="mt-4 space-y-1.5 text-[1.0625rem] leading-relaxed text-foreground/85">
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
