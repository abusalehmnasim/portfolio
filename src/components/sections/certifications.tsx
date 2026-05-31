"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Certifications"
          title="Things I've finished."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass-card group overflow-hidden"
            >
              {c.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border/40 bg-muted/40">
                  <Image
                    src={c.image}
                    alt={`${c.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary ring-1 ring-primary/20">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    {c.issuer}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {c.description}
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
