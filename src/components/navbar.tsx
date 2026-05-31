"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const items = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Research", href: "/#research" },
  { label: "CV", href: "/cv.pdf" },
  { label: "Now", href: "/now" },
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
          ? "border-b-[2px] border-current bg-background/95 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="riso-container flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          className="group inline-flex items-center gap-2"
        >
          <span
            className="flex h-9 w-9 items-center justify-center border-[2.5px] border-current font-display text-lg font-bold leading-none"
            style={{ boxShadow: "3px 3px 0 0 hsl(var(--primary))" }}
          >
            N
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.2em]">
            nasimabeer.me
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="border-[2px] border-current p-1.5"
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
            transition={{ duration: 0.18 }}
            className="overflow-hidden border-t-2 border-current bg-background md:hidden"
          >
            <div className="riso-container flex flex-col gap-1 py-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground/75 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
