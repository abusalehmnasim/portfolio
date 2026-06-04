"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4 }}
      className={cn(
        "mb-12 flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && (
        <h2 className="display text-3xl sm:text-4xl">{title}</h2>
      )}
      {description && (
        <p
          className={cn(
            "text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg",
            align === "center" ? "max-w-2xl" : "max-w-3xl"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
