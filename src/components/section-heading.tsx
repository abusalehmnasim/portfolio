"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Editorial section heading: §NN — LABEL across a hairline rule,
 * followed by an optional serif title and lead description.
 */
export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={cn("mb-10 sm:mb-12", className)}
    >
      <div className="flex items-center gap-4">
        <span className="section-label whitespace-nowrap">
          {number && <span className="text-foreground/70">§{number}</span>}
          {number && eyebrow && <span className="mx-2 text-border">·</span>}
          {eyebrow}
        </span>
        <span className="hairline" />
      </div>
      {title && (
        <h2 className="serif-display mt-6 text-balance text-[2rem] leading-[1.1] sm:text-[2.5rem]">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-3 max-w-prose text-pretty text-[1.0625rem] leading-[1.6] text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
