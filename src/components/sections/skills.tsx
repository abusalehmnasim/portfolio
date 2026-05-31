"use client";

import { motion } from "framer-motion";
import { BarChart3, Code2, Landmark, Microscope } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

const iconForGroup: Record<string, typeof Landmark> = {
  "Finance & Accounting": Landmark,
  Analytics: BarChart3,
  Programming: Code2,
  Research: Microscope,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = iconForGroup[group.name] ?? Code2;
            return (
              <motion.div
                key={group.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="glass-card group flex flex-col p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold tracking-tight">
                  {group.name}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-border/60 bg-background/50 px-2.5 py-1 text-xs text-foreground/80 backdrop-blur"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
