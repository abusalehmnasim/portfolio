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
];

export function Contact() {
  return (
    <section id="contact" className="riso-section">
      <div className="riso-container">
        <SectionHeading
          number="10"
          eyebrow="Contact"
          title="Get in touch."
          description="Email is the fastest way. Especially if you're hiring an intern, building something interesting, or want to argue about Bangladeshi capital markets."
        />

        <dl className="divide-y-2 divide-dashed divide-current border-y-2 border-current">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[110px_1fr] gap-6 py-5 sm:grid-cols-[200px_1fr] sm:gap-10"
            >
              <dt className="riso-eyebrow text-foreground sm:pt-1">
                {row.label}
              </dt>
              <dd className="text-[1.0625rem]">
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.external ? "_blank" : undefined}
                    rel={row.external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 font-bold text-primary underline decoration-2 underline-offset-4 transition-colors hover:text-foreground"
                  >
                    {row.value}
                    {row.external && <ArrowUpRight className="h-3 w-3" />}
                  </a>
                ) : (
                  <span className="text-foreground/85">{row.value}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
