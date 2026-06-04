"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { interests } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding bg-muted/50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="About"
          title="A bit about me."
          description="Where finance training meets practical analytics and applied research."
        />

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-2"
          >
            <p>
              Most of my classroom hours are in financial statements,
              valuation, audit, and reporting standards. The CA programme has
              been a slow, heavy grind — and the reason I now read annual
              reports for fun.
            </p>
            <p>
              On my own time I build things in Python, SQL, and Power BI. The
              two projects in my portfolio began from{" "}
              <span className="font-semibold text-foreground">
                &ldquo;I want to know,&rdquo;
              </span>{" "}
              not &ldquo;I want to learn&rdquo;: one tries to forecast the
              Dhaka Stock Exchange with XGBoost; the other maps every
              restaurant in Dhaka I could find from open-source geographic
              data.
            </p>
            <p>
              I&apos;ve recently started writing — a first paper on customer
              loyalty in Bangladeshi organised grocery retail is open on SSRN.
              I&apos;m also a Policy Envoy with the Youth Policy Forum.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card-soft p-6"
          >
            <p className="eyebrow">Areas of interest</p>
            <ul className="mt-5 space-y-2.5 text-sm">
              {interests.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-foreground/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
