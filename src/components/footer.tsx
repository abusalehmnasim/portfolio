import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container-wide py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-semibold">
                AN
              </span>
              <span className="font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              BBA Finance at BUP. Pre-articled Chartered Accountancy student at
              ICAB. Looking for a 2026 internship.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Navigate</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/#about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link></li>
              <li><Link href="/#research" className="text-muted-foreground hover:text-foreground">Research</Link></li>
              <li><Link href="/now" className="text-muted-foreground hover:text-foreground">/now</Link></li>
              <li><Link href="/#contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Elsewhere</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="/cv.pdf" download className="text-muted-foreground hover:text-foreground">
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Built with Next.js · Hosted on Vercel · Dhaka, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
