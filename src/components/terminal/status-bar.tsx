"use client";

import * as React from "react";

const dhakaFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Dhaka",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function StatusBar() {
  const [time, setTime] = React.useState<string | null>(null);
  const [scrollPct, setScrollPct] = React.useState(0);

  React.useEffect(() => {
    const tick = () => setTime(dhakaFormat.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const pct = h > 0 ? Math.round((window.scrollY / h) * 100) : 0;
      setScrollPct(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="term-container flex h-9 items-center justify-between font-mono text-[11px] uppercase tracking-wider text-foreground/85">
        <div className="flex items-center gap-3">
          <span className="hidden text-phosphor sm:inline">NASIM-TERM</span>
          <span className="hidden text-dim sm:inline">v2.06</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 animate-blink bg-phosphor" />
            <span className="text-foreground/70">Online</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden text-dim md:inline">
            Dhaka <span className="text-foreground/85">{time ?? "--:--:--"}</span>
          </span>
          <span className="hidden text-dim md:inline">
            Scroll <span className="text-foreground/85">{scrollPct}%</span>
          </span>
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("term:palette"));
            }}
            className="inline-flex items-center gap-2 border border-border px-2 py-0.5 text-foreground/80 transition-colors hover:border-phosphor hover:text-phosphor"
            aria-label="Open command palette"
          >
            <span>Search</span>
            <span className="kbd">⌘K</span>
          </button>
          <button
            type="button"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("term:help"));
            }}
            className="border border-border px-2 py-0.5 text-foreground/80 transition-colors hover:border-amber hover:text-amber"
            aria-label="Open keyboard shortcuts"
          >
            <span className="kbd text-amber" style={{ color: "hsl(var(--amber))" }}>?</span>
          </button>
        </div>
      </div>
    </header>
  );
}
