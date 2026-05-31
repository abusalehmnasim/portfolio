import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data";

const rows: Array<{
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
}> = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
  {
    label: "GitHub",
    value: "github.com/abusalehmnasim",
    href: siteConfig.socials.github,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abusalehmnasim",
    href: siteConfig.socials.linkedin,
    external: true,
  },
  {
    label: "SSRN",
    value: "ssrn.com/author/abusalehmnasim",
    href: "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=8052891",
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="editorial-section">
      <div className="editorial-wide">
        <SectionHeading
          number="10"
          eyebrow="Contact"
          description="Email is the fastest way. Especially if you're hiring an intern, building something interesting, or want to argue about Bangladeshi capital markets."
        />

        <dl className="divide-y divide-border border-y border-border">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[110px_1fr] gap-6 py-4 sm:grid-cols-[180px_1fr] sm:gap-10"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:pt-1">
                {row.label}
              </dt>
              <dd className="text-[1.0625rem] text-foreground/85">
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noreferrer" : undefined}
                    className="editorial inline-flex items-center gap-1.5"
                  >
                    {row.value}
                    {row.external && <ArrowUpRight className="h-3 w-3" />}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
