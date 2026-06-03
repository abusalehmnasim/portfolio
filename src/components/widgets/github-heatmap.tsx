import { ArrowUpRight } from "lucide-react";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: Contribution[];
}

// ASCII shading by level (Unicode block characters).
const GLYPH: Record<number, string> = {
  0: "·",
  1: "░",
  2: "▒",
  3: "▓",
  4: "█",
};

// Phosphor intensity per level.
const TEXT: Record<number, string> = {
  0: "text-dim",
  1: "text-phosphor/40",
  2: "text-phosphor/60",
  3: "text-phosphor/85",
  4: "text-phosphor",
};

async function fetchContributions(username: string): Promise<ApiResponse | null> {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    return (await res.json()) as ApiResponse;
  } catch {
    return null;
  }
}

function chunkByWeek(contribs: Contribution[]): (Contribution | null)[][] {
  if (contribs.length === 0) return [];
  const firstDate = new Date(contribs[0].date);
  const firstDay = firstDate.getUTCDay();
  const padded: (Contribution | null)[] = [
    ...Array(firstDay).fill(null),
    ...contribs,
  ];
  const weeks: (Contribution | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks;
}

export async function GitHubHeatmap({ username }: { username: string }) {
  const data = await fetchContributions(username);

  if (!data) {
    return (
      <div className="border border-border p-6 font-mono text-xs uppercase tracking-wider text-dim">
        <span className="text-destructive">[ERR]</span> live GitHub feed
        unavailable.{" "}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-phosphor underline decoration-phosphor underline-offset-4"
        >
          fallback → github.com/{username}
        </a>
      </div>
    );
  }

  const weeks = chunkByWeek(data.contributions);
  const total = Object.values(data.total).reduce((a, b) => a + b, 0);
  const lastYearKey = Object.keys(data.total).sort().pop();
  const lastYearTotal = lastYearKey ? data.total[lastYearKey] : total;

  return (
    <div className="panel-phosphor">
      <div className="flex items-center justify-between border-b border-phosphor/60 px-4 py-2 font-mono text-[11px] uppercase tracking-wider">
        <span className="text-phosphor">~/heatmap.sh</span>
        <span className="text-dim">render: ascii · 12px</span>
      </div>

      <div className="p-4 font-mono text-xs sm:p-6">
        <p className="text-foreground/85">
          <span className="text-phosphor">{">"}</span>{" "}
          <span className="text-foreground/70">commits this year:</span>{" "}
          <span className="font-bold text-phosphor">
            {lastYearTotal.toLocaleString()}
          </span>{" "}
          <span className="text-dim">/ source:</span>{" "}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-amber underline decoration-amber underline-offset-4"
          >
            @{username}
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </p>

        <div className="mt-5 overflow-x-auto">
          <pre className="text-[14px] leading-[1] tracking-[0.06em]">
            {Array.from({ length: 7 }).map((_, day) => (
              <span key={day} className="flex">
                {weeks.map((week, wi) => {
                  const cell = week[day];
                  if (!cell) {
                    return (
                      <span key={wi} className="text-dim/20">
                        {" "}
                      </span>
                    );
                  }
                  return (
                    <span
                      key={wi}
                      title={`${cell.count} contributions on ${cell.date}`}
                      className={TEXT[cell.level]}
                    >
                      {GLYPH[cell.level]}
                    </span>
                  );
                })}
                {"\n"}
              </span>
            ))}
          </pre>
        </div>

        <p className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-wider text-dim">
          <span>less</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <span key={lvl} className={`${TEXT[lvl]} text-base leading-none`}>
              {GLYPH[lvl]}
            </span>
          ))}
          <span>more</span>
        </p>
      </div>
    </div>
  );
}
