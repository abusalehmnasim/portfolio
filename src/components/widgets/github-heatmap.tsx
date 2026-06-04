import { ArrowUpRight, GitCommit } from "lucide-react";

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
  0: "bg-muted",
  1: "bg-primary/25",
  2: "bg-primary/45",
  3: "bg-primary/70",
  4: "bg-primary",
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
      <div className="card-soft flex flex-col items-center gap-3 p-10 text-center">
        <GitCommit className="h-6 w-6 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Live GitHub activity is temporarily unavailable.
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-semibold text-primary hover:underline"
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
    <div className="card-soft overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <GitCommit className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              {lastYearTotal.toLocaleString()} contributions in the last year
            </p>
            <p className="text-xs text-muted-foreground">
              Pulled live from github.com/{username}
            </p>
          </div>
        </div>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          Open profile
          <ArrowUpRight className="h-3 w-3" />
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
                      className="h-[11px] w-[11px] rounded-sm bg-transparent"
                    />
                  );
                }
                return (
                  <span
                    key={di}
                    title={`${day.count} contributions on ${day.date}`}
                    className={`h-[11px] w-[11px] rounded-sm ${LEVEL_CLASSES[day.level]}`}
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
              className={`h-[11px] w-[11px] rounded-sm ${LEVEL_CLASSES[lvl]}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
