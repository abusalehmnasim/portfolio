"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition along the way."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card group relative overflow-hidden p-6"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-400/15 to-transparent blur-2xl" />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-600 ring-1 ring-amber-400/30 dark:text-amber-400">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">
                    {a.title}
                  </h3>
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
