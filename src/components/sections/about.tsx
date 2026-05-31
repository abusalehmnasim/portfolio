import { SectionHeading } from "@/components/section-heading";
import { interests } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="riso-section">
      <div className="riso-container">
        <SectionHeading number="01" eyebrow="About" title="A bit about me." />

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div className="space-y-5 prose-riso">
            <p>
              Most of my classroom hours are in financial statements,
              valuation, audit, and reporting standards. The CA programme has
              been a slow, heavy grind — and the reason I now read annual
              reports for fun.
            </p>
            <p>
              On my own time I build things in Python, SQL, and Power BI. The
              two projects below began from{" "}
              <span className="text-primary font-semibold">
                &ldquo;I want to know,&rdquo;
              </span>{" "}
              not &ldquo;I want to learn&rdquo;: one tries to forecast the
              Dhaka Stock Exchange with XGBoost; the other maps every
              restaurant in Dhaka I could find.
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
            <p className="riso-eyebrow">Interests</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {interests.map((item) => (
                <li key={item}>
                  <span className="riso-tag">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
