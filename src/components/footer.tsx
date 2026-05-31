import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border">
      <div className="editorial-wide flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name} · Dhaka, Bangladesh
          </p>
          <Link
            href="/now"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            What I&apos;m up to → /now
          </Link>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href="/cv.pdf"
            download
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            CV
          </a>
        </nav>
      </div>
    </footer>
  );
}
