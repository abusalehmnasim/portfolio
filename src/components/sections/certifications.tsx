"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/lib/data";

export function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Certifications"
          title="Verified credentials."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card-soft overflow-hidden"
            >
              {c.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted">
                  <Image
                    src={c.image}
                    alt={`${c.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-3"
                  />
                </div>
              )}
              <div className="flex items-start gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold">{c.title}</h3>
                  <p className="mt-0.5 text-sm font-medium text-primary">
                    {c.issuer}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
