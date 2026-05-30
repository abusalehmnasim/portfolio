"use client";

import * as React from "react";
import { MapPin } from "lucide-react";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Dhaka",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

export function DhakaClock() {
  const [time, setTime] = React.useState<string | null>(null);

  React.useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-xs font-medium shadow-lg backdrop-blur-xl">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/70" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <MapPin className="h-3.5 w-3.5 text-primary" />
      <span>Dhaka</span>
      <span className="h-3 w-px bg-border" />
      <span className="font-mono tabular-nums">{time ?? "--:--:--"}</span>
    </div>
  );
}
