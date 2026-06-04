"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Education"
          title="Academic background."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-soft p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug text-foreground">
                    {item.institution}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.degree} · {item.field}
                  </p>
                  <span className="mt-2.5 inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80">
                    {item.period}
                  </span>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
