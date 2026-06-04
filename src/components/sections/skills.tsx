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
    <section id="skills" className="section-padding bg-muted/50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and disciplines."
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
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="card-soft p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold tracking-tight">
                  {group.name}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs text-foreground/80"
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
