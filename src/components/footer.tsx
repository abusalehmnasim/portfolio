import Link from "next/link";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="term-container py-8 font-mono text-[11px] uppercase tracking-wider">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-foreground/85">
              © {year} {siteConfig.name}{" "}
              <span className="text-dim">·</span>{" "}
              <span className="text-phosphor">Dhaka, Bangladesh</span>
            </p>
            <Link
              href="/now"
              className="text-dim transition-colors hover:text-phosphor"
            >
              cat /now &nbsp;→
            </Link>
          </div>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-foreground/85 transition-colors hover:text-phosphor"
            >
              email
            </a>
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/85 transition-colors hover:text-phosphor"
            >
              github
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-foreground/85 transition-colors hover:text-phosphor"
            >
              linkedin
            </a>
            <a
              href="/cv.pdf"
              download
              className="text-foreground/85 transition-colors hover:text-phosphor"
            >
              cv.pdf
            </a>
          </nav>
        </div>
        <p className="mt-5 text-[10px] text-dim">
          {">"}_ NASIM-TERM v2.06 · Built with Next.js, TypeScript, Framer
          Motion · Hosted on Vercel · {year}
        </p>
      </div>
    </footer>
  );
}
