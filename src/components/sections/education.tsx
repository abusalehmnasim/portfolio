"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Education"
          title="Where I'm studying."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.article
              key={item.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card group relative overflow-hidden p-7"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug tracking-tight">
                    {item.institution}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.degree} · {item.field}
                  </p>
                  <p className="mt-2 inline-flex items-center rounded-full border border-border/60 bg-background/60 px-2.5 py-0.5 text-xs font-medium text-foreground/80">
                    {item.period}
                  </p>
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
