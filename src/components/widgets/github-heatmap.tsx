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

// Riso pink ink ramp
const LEVEL_CLASSES: Record<number, string> = {
  0: "bg-muted",
  1: "bg-primary/25",
  2: "bg-primary/50",
  3: "bg-primary/75",
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

function chunkByWeek(contribs: Contribution[]): Contribution[][] {
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
  return weeks as Contribution[][];
}

export async function GitHubHeatmap({ username }: { username: string }) {
  const data = await fetchContributions(username);

  if (!data) {
    return (
      <div className="border-[2.5px] border-current p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Live GitHub activity is temporarily unavailable.
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-block font-mono text-sm font-bold uppercase tracking-[0.16em] text-primary underline decoration-2 underline-offset-4"
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
    <div
      className="relative border-[3px] border-current bg-card p-6 sm:p-8"
      style={{ boxShadow: "8px 8px 0 0 hsl(var(--primary))" }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-2 border-dashed border-current pb-4">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/80">
          <span
            data-text={lastYearTotal.toLocaleString()}
            className="riso-misregister riso-display mr-2 text-3xl"
          >
            {lastYearTotal.toLocaleString()}
          </span>{" "}
          commits this year
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary underline decoration-2 underline-offset-4"
        >
          @{username}
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>

      <div className="overflow-x-auto pt-6">
        <div className="flex gap-[3px]">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }).map((_, di) => {
                const day = week[di];
                if (!day) {
                  return (
                    <span
                      key={di}
                      className="h-[12px] w-[12px] bg-transparent"
                    />
                  );
                }
                return (
                  <span
                    key={di}
                    title={`${day.count} contributions on ${day.date}`}
                    className={`h-[12px] w-[12px] ${LEVEL_CLASSES[day.level]}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-end gap-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/70">
          <span>Less</span>
          {[0, 1, 2, 3, 4].map((lvl) => (
            <span
              key={lvl}
              className={`h-[12px] w-[12px] ${LEVEL_CLASSES[lvl]}`}
            />
          ))}
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
