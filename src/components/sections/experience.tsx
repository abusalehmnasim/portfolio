"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Experience & Leadership"
          title="A track record of leading and contributing."
          description="From school science clubs to national policy forums, I've consistently taken on roles that build initiative, communication, and organizational skill."
        />

        <ol className="relative space-y-6 border-l border-border/70 pl-6 sm:pl-10">
          {experience.map((item, i) => (
            <motion.li
              key={`${item.role}-${item.org}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[37px] sm:-left-[49px] top-3 flex h-6 w-6 items-center justify-center rounded-full border border-border/70 bg-background ring-4 ring-background">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>

              <div className="glass-card p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {item.org}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 text-xs font-medium text-foreground/80">
                    <Award className="h-3 w-3 text-primary" />
                    {item.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
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
