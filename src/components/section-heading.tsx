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
      className={cn("mb-10 sm:mb-14", className)}
    >
      <div className="flex items-baseline gap-3">
        {number && (
          <span className="riso-eyebrow">№ {number}</span>
        )}
        {eyebrow && <span className="riso-eyebrow">{eyebrow}</span>}
        <span className="riso-divider flex-1" />
      </div>

      {title && (
        <h2
          data-text={title}
          className="riso-misregister riso-display mt-6 text-balance text-[2.25rem] sm:text-[3rem]"
        >
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-4 max-w-prose text-pretty text-[1.0625rem] leading-[1.6] text-foreground/85 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
