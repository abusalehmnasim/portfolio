"use client";

import * as React from "react";

// Mocked DSE-like ticker symbols with seeded random walk so values feel live.
const SYMBOLS = [
  { sym: "DSEX",   start: 5482.13 },
  { sym: "BATBC",  start: 354.20 },
  { sym: "GP",     start: 322.10 },
  { sym: "SQURPHARMA", start: 218.40 },
  { sym: "BEXIMCO", start: 105.70 },
  { sym: "BRACBANK", start: 41.20 },
  { sym: "LHBL",   start: 64.30 },
  { sym: "BERGERPBL", start: 1645.00 },
  { sym: "MARICO", start: 2384.50 },
  { sym: "OLYMPIC", start: 158.20 },
];

interface Tick {
  sym: string;
  price: number;
  change: number;
}

function jitter(start: number, t: number, idx: number): Tick {
  // small deterministic-ish drift + sinusoidal noise so the strip looks alive
  const phase = (idx + 1) * 0.7;
  const drift = Math.sin(t / 12 + phase) * (start * 0.0085);
  const noise = Math.sin(t / 3 + phase * 4) * (start * 0.0035);
  const price = start + drift + noise;
  const change = ((price - start) / start) * 100;
  return { sym: SYMBOLS[idx].sym, price, change };
}

export function Ticker() {
  const [ticks, setTicks] = React.useState<Tick[]>(() =>
    SYMBOLS.map((s, i) => ({ sym: s.sym, price: s.start, change: 0 }))
  );

  React.useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const t = (Date.now() - start) / 1000;
      setTicks(SYMBOLS.map((s, i) => jitter(s.start, t, i)));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  // Duplicate for seamless marquee loop
  const repeated = [...ticks, ...ticks];

  return (
    <div className="sticky bottom-0 z-30 mt-16 overflow-hidden border-y border-border bg-background/95 backdrop-blur">
      <div className="flex items-center">
        <span className="shrink-0 border-r border-border bg-amber/15 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-amber">
          DSE · LIVE
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee-slow gap-8 whitespace-nowrap py-1.5 pl-6 font-mono text-[11px]">
            {repeated.map((t, i) => (
              <span key={i} className="flex items-center gap-2 uppercase tracking-wider">
                <span className="text-foreground/90">{t.sym}</span>
                <span className="text-foreground/70">
                  {t.price.toFixed(2)}
                </span>
                <span
                  className={
                    t.change >= 0
                      ? "text-phosphor"
                      : "text-destructive"
                  }
                >
                  {t.change >= 0 ? "▲" : "▼"} {Math.abs(t.change).toFixed(2)}%
                </span>
                <span className="text-dim">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
