"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data";

const rows: Array<{
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
}> = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/abusalehmnasim",
    href: siteConfig.socials.github,
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abusalehmnasim",
    href: siteConfig.socials.linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect."
          description="Email is fastest. Especially for internships, research collaborations, or conversations about finance and Bangladeshi capital markets."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl"
        >
          <ul className="card-soft divide-y divide-border overflow-hidden">
            {rows.map((row) => (
              <li key={row.label}>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noreferrer" : undefined}
                    className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-muted/60"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <row.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {row.label}
                      </p>
                      <p className="truncate text-sm font-medium text-foreground">
                        {row.value}
                      </p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                ) : (
                  <div className="flex items-center gap-4 px-5 py-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <row.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {row.label}
                      </p>
                      <p className="truncate text-sm font-medium text-foreground">
                        {row.value}
                      </p>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary">
              <Mail className="h-4 w-4" />
              Email me
            </a>
            <a href="/cv.pdf" download className="text-sm text-muted-foreground hover:text-foreground">
              or download my CV (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
