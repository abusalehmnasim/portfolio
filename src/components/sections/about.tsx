"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Cpu,
  LineChart,
  ScrollText,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { interests } from "@/lib/data";

const focus = [
  { icon: Briefcase, label: "Finance" },
  { icon: ScrollText, label: "Accounting" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Cpu, label: "Technology" },
  { icon: BookOpen, label: "Research" },
];

const interestIcons: Record<string, typeof LineChart> = {
  "Financial Analysis": LineChart,
  "Capital Markets": BarChart3,
  "Data Analytics": BarChart3,
  "Machine Learning": Cpu,
  "Economic Research": BookOpen,
  "Public Policy": ScrollText,
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="About"
          title="Bridging finance, data, and policy."
          description="I'm a finance undergraduate at Bangladesh University of Professionals and a pre-articled Chartered Accountancy student. I work at the intersection of finance, analytics, technology, and research — turning raw data and complex problems into clear, decision-ready insight."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="glass-card lg:col-span-3 p-8"
          >
            <h3 className="text-base font-semibold tracking-tight">
              How I work
            </h3>
            <div className="mt-4 space-y-4 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                My academic background in finance and chartered accountancy
                gives me a strong grounding in financial statements, valuation,
                and the corporate reporting standards that drive real business
                decisions.
              </p>
              <p>
                Alongside this, I build practical projects in Python, SQL, and
                Power BI — applying machine learning to financial markets,
                automating data pipelines, and shipping dashboards that answer
                specific questions for stakeholders.
              </p>
              <p>
                Through my work with the Youth Policy Forum and as a published
                research author, I&apos;ve learned to translate quantitative
                analysis into the kind of arguments that support sound policy
                and informed leadership.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {focus.map((f) => (
                <span
                  key={f.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur"
                >
                  <f.icon className="h-3.5 w-3.5 text-primary" />
                  {f.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card lg:col-span-2 p-8"
          >
            <h3 className="text-base font-semibold tracking-tight">
              Areas of interest
            </h3>
            <ul className="mt-5 space-y-3">
              {interests.map((item) => {
                const Icon = interestIcons[item] ?? LineChart;
                return (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-border/40 bg-background/40 px-3 py-2.5 text-sm backdrop-blur transition-colors hover:border-primary/40 hover:bg-primary/[0.04]"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
