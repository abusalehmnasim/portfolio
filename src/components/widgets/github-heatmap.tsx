import { GitCommit } from "lucide-react";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: Contribution[];
}

const LEVEL_CLASSES: Record<number, string> = {
  0: "bg-muted/60 dark:bg-muted/30",
  1: "bg-emerald-500/30",
  2: "bg-emerald-500/55",
  3: "bg-emerald-500/80",
  4: "bg-emerald-500",
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

function chunkByWeek(contribs: Contribution[]): Contribution[][] {
  // Pad start so the first day in the array falls on a Sunday column
  if (contribs.length === 0) return [];
  const firstDate = new Date(contribs[0].date);
  const firstDay = firstDate.getUTCDay(); // 0=Sun
  const padded: (Contribution | null)[] = [
    ...Array(firstDay).fill(null),
    ...contribs,
  ];
  const weeks: (Contribution | null)[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    weeks.push(padded.slice(i, i + 7));
  }
  return weeks as Contribution[][];
}

export async function GitHubHeatmap({ username }: { username: string }) {
  const data = await fetchContributions(username);

  if (!data) {
    return (
      <div className="glass-card flex flex-col items-center gap-3 p-10 text-center">
        <GitCommit className="h-6 w-6 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Live GitHub activity is temporarily unavailable.
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-primary hover:underline"
        >
          View on GitHub →
        </a>
      </div>
    );
  }

  const weeks = chunkByWeek(data.contributions);
  const total = Object.values(data.total).reduce((a, b) => a + b, 0);
  const lastYearKey = Object.keys(data.total).sort().pop();
  const lastYearTotal = lastYearKey ? data.total[lastYearKey] : total;

  return (
    <div className="glass-card overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/40 p-5">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20 dark:text-emerald-400">
            <GitCommit className="h-4 w-4" />
          </span>
          <div>
            <p className="text-sm font-semibold tracking-tight">
              {lastYearTotal.toLocaleString()} contributions in the last year
            </p>
            <p className="text-xs text-muted-foreground">
              Live from github.com/{username}
            </p>
          </div>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-medium text-primary hover:underline"
        >
          Open profile →
        </a>
      </div>

      <div className="overflow-x-auto p-5">
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }).map((_, di) => {
                const day = week[di];
                if (!day) {
                  return (
                    <span
                      key={di}
                      className="h-[11px] w-[11px] rounded-[2px] bg-transparent"
                    />
                  );
                }
                return (
                  <span
                    key={di}
                    title={`${day.count} contributions on ${day.date}`}
                    className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL_CLASSES[day.level]} transition-colors`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end gap-1.5 text-[10px] text-muted-foreground">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <span
              key={lvl}
              className={`h-[11px] w-[11px] rounded-[2px] ${LEVEL_CLASSES[lvl]}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
