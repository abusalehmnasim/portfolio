"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-muted/50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Experience"
          title="Leadership and roles."
          description="Schools, college clubs, and a policy forum — building the soft skills that come up everywhere."
        />

        <ol className="relative space-y-6 border-l border-border pl-6 sm:pl-10">
          {experience.map((item, i) => (
            <motion.li
              key={`${item.role}-${item.org}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[33px] sm:-left-[45px] top-3 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background ring-4 ring-background">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <div className="card-soft p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.org}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80">
                    <Award className="h-3 w-3 text-primary" />
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
