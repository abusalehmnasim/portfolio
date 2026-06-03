"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** e.g. "01" */
  number?: string;
  /** lowercase machine-id, e.g. "about" */
  cmd?: string;
  /** human-readable name shown after the command */
  title?: string;
  /** sub-comment in dim color */
  description?: string;
  className?: string;
}

export function SectionHeading({
  number,
  cmd,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35 }}
      className={cn("mb-10", className)}
    >
      {(number || cmd) && (
        <p className="font-mono text-xs uppercase tracking-wider text-dim">
          {number && <span className="mr-3 text-foreground/60">[{number}]</span>}
          <span className="text-phosphor">$ cat</span>{" "}
          <span className="text-foreground/85">{cmd}.md</span>
        </p>
      )}
      {title && (
        <h2 className="term-display mt-3 text-balance text-3xl text-foreground sm:text-4xl">
          {title}
          <span className="caret" />
        </h2>
      )}
      {description && (
        <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-foreground/75 sm:text-base">
          <span className="text-dim">{"// "}</span>
          {description}
        </p>
      )}
    </motion.div>
  );
}
