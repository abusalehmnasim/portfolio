"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Cmd {
  id: string;
  label: string;
  hint?: string;
  action: () => void;
  keywords?: string;
}

const scroll = (id: string) => {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function CommandPalette() {
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [activeIdx, setActiveIdx] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const lastGRef = React.useRef<number>(0);

  const commands: Cmd[] = React.useMemo(
    () => [
      {
        id: "about",
        label: "Go to About",
        hint: "G then A",
        action: () => scroll("#about"),
        keywords: "bio intro",
      },
      {
        id: "edu",
        label: "Go to Education",
        hint: "G then E",
        action: () => scroll("#education"),
        keywords: "bup icab ca",
      },
      {
        id: "roles",
        label: "Go to Roles",
        hint: "G then L",
        action: () => scroll("#experience"),
        keywords: "leadership clubs",
      },
      {
        id: "projects",
        label: "Go to Projects",
        hint: "G then P",
        action: () => scroll("#projects"),
        keywords: "github code dse dhaka",
      },
      {
        id: "activity",
        label: "Go to GitHub Activity",
        hint: "G then H",
        action: () => scroll("#activity"),
        keywords: "heatmap commits",
      },
      {
        id: "research",
        label: "Go to Research",
        hint: "G then R",
        action: () => scroll("#research"),
        keywords: "ssrn paper publication shwapno",
      },
      {
        id: "skills",
        label: "Go to Skills",
        hint: "G then S",
        action: () => scroll("#skills"),
        keywords: "tools",
      },
      {
        id: "contact",
        label: "Go to Contact",
        hint: "G then C",
        action: () => scroll("#contact"),
        keywords: "email phone",
      },
      {
        id: "now",
        label: "Open /now page",
        hint: "G then N",
        action: () => (window.location.href = "/now"),
        keywords: "current focus monthly",
      },
      {
        id: "cv",
        label: "Download CV (PDF)",
        action: () => window.open("/cv.pdf", "_blank"),
        keywords: "resume",
      },
      {
        id: "email",
        label: "Email Nasim",
        action: () => (window.location.href = "mailto:nasimabeer7@gmail.com"),
        keywords: "send",
      },
      {
        id: "gh",
        label: "Open GitHub profile",
        action: () =>
          window.open("https://github.com/abusalehmnasim", "_blank"),
      },
      {
        id: "li",
        label: "Open LinkedIn",
        action: () =>
          window.open(
            "https://www.linkedin.com/in/abusalehmnasim/",
            "_blank"
          ),
      },
      {
        id: "ssrn",
        label: "Open SSRN paper",
        action: () =>
          window.open(
            "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6618879",
            "_blank"
          ),
      },
      {
        id: "help",
        label: "Show keyboard shortcuts",
        hint: "?",
        action: () => {
          setHelpOpen(true);
        },
      },
    ],
    []
  );

  const filtered = React.useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter((c) =>
      `${c.label} ${c.id} ${c.keywords ?? ""}`.toLowerCase().includes(q)
    );
  }, [query, commands]);

  // Global key listener
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName;
      const isTyping = targetTag === "INPUT" || targetTag === "TEXTAREA";

      // ⌘K / Ctrl+K — palette
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((v) => !v);
        setHelpOpen(false);
        return;
      }

      // Esc — close everything
      if (e.key === "Escape") {
        setPaletteOpen(false);
        setHelpOpen(false);
        return;
      }

      if (isTyping || paletteOpen || helpOpen) return;

      // ? — help
      if (e.key === "?") {
        e.preventDefault();
        setHelpOpen(true);
        return;
      }

      // vim G then X
      if (e.key.toLowerCase() === "g") {
        lastGRef.current = Date.now();
        return;
      }
      if (Date.now() - lastGRef.current < 1200) {
        const map: Record<string, string> = {
          a: "#about",
          e: "#education",
          l: "#experience",
          p: "#projects",
          h: "#activity",
          r: "#research",
          s: "#skills",
          c: "#contact",
        };
        const target = map[e.key.toLowerCase()];
        if (target) {
          e.preventDefault();
          scroll(target);
          lastGRef.current = 0;
          return;
        }
        if (e.key.toLowerCase() === "n") {
          window.location.href = "/now";
        }
      }
    };

    const onPalette = () => setPaletteOpen(true);
    const onHelp = () => setHelpOpen(true);

    window.addEventListener("keydown", onKey);
    window.addEventListener("term:palette", onPalette);
    window.addEventListener("term:help", onHelp);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("term:palette", onPalette);
      window.removeEventListener("term:help", onHelp);
    };
  }, [paletteOpen, helpOpen]);

  React.useEffect(() => {
    if (paletteOpen) {
      setQuery("");
      setActiveIdx(0);
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [paletteOpen]);

  const runActive = () => {
    const cmd = filtered[activeIdx];
    if (cmd) {
      cmd.action();
      if (cmd.id !== "help") setPaletteOpen(false);
    }
  };

  const onPaletteKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runActive();
    }
  };

  return (
    <>
      <AnimatePresence>
        {paletteOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-start justify-center pt-[10vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            <button
              type="button"
              aria-label="Close palette"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setPaletteOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="relative z-[81] w-[min(580px,92vw)] border border-phosphor bg-card font-mono shadow-[0_0_80px_rgba(74,255,136,0.18)]"
            >
              <div className="flex items-center gap-2 border-b border-border px-3 py-2 text-xs uppercase tracking-wider text-dim">
                <span className="text-phosphor">●</span>
                <span>command palette</span>
                <span className="ml-auto">ESC to close</span>
              </div>
              <div className="flex items-center gap-2 border-b border-border px-3 py-2">
                <span className="text-phosphor">{">"}</span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActiveIdx(0);
                  }}
                  onKeyDown={onPaletteKey}
                  placeholder="type a command or section..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-dim focus:outline-none"
                />
              </div>
              <ul className="max-h-[50vh] overflow-y-auto py-1">
                {filtered.length === 0 && (
                  <li className="px-3 py-3 text-sm text-dim">
                    No matching commands.
                  </li>
                )}
                {filtered.map((cmd, i) => (
                  <li key={cmd.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActiveIdx(i)}
                      onClick={runActive}
                      className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors ${
                        i === activeIdx
                          ? "bg-phosphor/10 text-phosphor"
                          : "text-foreground/85"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className={i === activeIdx ? "text-phosphor" : "text-dim"}>
                          {i === activeIdx ? "▸" : " "}
                        </span>
                        {cmd.label}
                      </span>
                      {cmd.hint && (
                        <span className="text-[10px] uppercase tracking-wider text-dim">
                          {cmd.hint}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 border-t border-border px-3 py-1.5 text-[10px] uppercase tracking-wider text-dim">
                <span><span className="kbd">↑</span> <span className="kbd">↓</span> navigate</span>
                <span><span className="kbd">↵</span> run</span>
                <span className="ml-auto">{filtered.length} result{filtered.length === 1 ? "" : "s"}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {helpOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close help"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setHelpOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="relative z-[81] w-[min(540px,92vw)] border border-amber bg-card font-mono shadow-[0_0_80px_rgba(255,190,61,0.15)]"
            >
              <div className="flex items-center gap-2 border-b border-border px-3 py-2 text-xs uppercase tracking-wider text-dim">
                <span style={{ color: "hsl(var(--amber))" }}>●</span>
                <span>keyboard shortcuts</span>
                <span className="ml-auto">ESC to close</span>
              </div>
              <div className="p-4">
                <dl className="grid gap-2.5 text-sm sm:grid-cols-[1fr_auto]">
                  {[
                    ["Open this help", "?"],
                    ["Open command palette", "⌘ K"],
                    ["Go to About", "G  A"],
                    ["Go to Education", "G  E"],
                    ["Go to Roles", "G  L"],
                    ["Go to Projects", "G  P"],
                    ["Go to GitHub activity", "G  H"],
                    ["Go to Research", "G  R"],
                    ["Go to Skills", "G  S"],
                    ["Go to Contact", "G  C"],
                    ["Open /now page", "G  N"],
                    ["Close any modal", "ESC"],
                  ].map(([label, shortcut]) => (
                    <React.Fragment key={label}>
                      <dt className="text-foreground/85">{label}</dt>
                      <dd className="flex justify-end gap-1">
                        {shortcut.split(/\s+/).map((k, i) => (
                          <span key={`${label}-${i}`} className="kbd">
                            {k}
                          </span>
                        ))}
                      </dd>
                    </React.Fragment>
                  ))}
                </dl>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
