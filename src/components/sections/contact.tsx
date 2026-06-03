import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/data";

const rows: Array<{
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
}> = [
  { label: "EMAIL", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  {
    label: "PHONE",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
  },
  { label: "LOCALE", value: siteConfig.location, href: null },
  {
    label: "GITHUB",
    value: "github.com/abusalehmnasim",
    href: siteConfig.socials.github,
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/abusalehmnasim",
    href: siteConfig.socials.linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="term-section">
      <div className="term-container">
        <SectionHeading
          number="10"
          cmd="contact"
          title="Open a connection."
          description="Email is the fastest way. Especially if you're hiring an intern, building something interesting, or want to argue about Bangladeshi capital markets."
        />

        <pre className="overflow-x-auto whitespace-pre-wrap border border-phosphor/60 bg-card p-5 font-mono text-[0.92rem] leading-[1.7] text-foreground/85 sm:p-7 sm:text-[1rem]">
{rows.map((r, i) => (
  <span key={r.label}>
    <span className="text-phosphor">{">"}</span>{" "}
    <span className="text-amber">{r.label.padEnd(10, " ")}</span>
    {r.href ? (
      <a
        href={r.href}
        target={r.external ? "_blank" : undefined}
        rel={r.external ? "noreferrer" : undefined}
        className="inline-flex items-center gap-1 text-phosphor underline decoration-phosphor underline-offset-4 hover:text-amber"
      >
        {r.value}
        {r.external && <ArrowUpRight className="h-3.5 w-3.5" />}
      </a>
    ) : (
      <span>{r.value}</span>
    )}
    {i < rows.length - 1 ? "\n" : ""}
  </span>
))}
        </pre>
      </div>
    </section>
  );
}
