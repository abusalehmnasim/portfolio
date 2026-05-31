import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t-2 border-current">
      <div className="riso-container flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/85">
            © {year} {siteConfig.name} ·{" "}
            <span className="text-primary">Dhaka, Bangladesh</span>
          </p>
          <Link
            href="/now"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
          >
            What I&apos;m up to → /now
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.16em]">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-foreground/85 transition-colors hover:text-primary"
          >
            Email
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/85 transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-foreground/85 transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href="/cv.pdf"
            download
            className="text-foreground/85 transition-colors hover:text-primary"
          >
            CV
          </a>
        </nav>
      </div>
      <div className="riso-container pb-8">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
          Set in Space Grotesk and Inter · Printed at 200% on cream stock ·
          Volume I
        </p>
      </div>
    </footer>
  );
}
