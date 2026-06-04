"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-muted/50">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Awards"
          title="Recognition."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-soft p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {a.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
