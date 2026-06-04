"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/projects" },
  { label: "Research", href: "/#research" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            AN
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/cv.pdf"
            download
            className="hidden btn-primary md:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            className="rounded-md border border-border p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="container-wide flex flex-col gap-1 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/cv.pdf"
                download
                onClick={() => setOpen(false)}
                className="btn-primary mt-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
