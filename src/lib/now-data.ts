// Edit this file to update your /now page.
// Convention: keep it short, current, and honest.

export const nowMeta = {
  // ISO date — used for "last updated" line and JSON-LD
  updatedAt: "2026-05-31",
  // Location at time of writing — supports remote/travel notes
  location: "Dhaka, Bangladesh",
  // Single sentence summary at the top
  summary:
    " levelling up financial modeling on real Bangladeshi listed companies, and shipping a second iteration of the DSE prediction work.",
};

export interface NowItem {
  title: string;
  detail?: string;
  link?: string;
}

export interface NowSection {
  emoji: string;
  heading: string;
  description?: string;
  items: NowItem[];
}

export const nowSections: NowSection[] = [
  {
    emoji: "📚",
    heading: "Learning",
    description: "What I'm actively studying this month.",
    items: [
      {
        title: "AI Automation in Finance",
        detail:
          "Working through how I can effectively use AI in FInance",
      },
      {
        title: "Advanced financial modeling",
        detail:
          "Building three-statement and DCF models from scratch on Bangladeshi listed companies (BATBC, Square Pharma, Grameenphone).",
      },
      {
        title: "Time-series machine learning",
        detail:
          "Refreshing on stationarity, feature engineering, and walk-forward validation for financial forecasting.",
      },
    ],
  },
  {
    emoji: "💼",
    heading: "Building",
    description: "Active projects this month.",
    items: [
      {
        title: "DSE Market Prediction · v2",
        detail:
          "Adding macro and sector features, walk-forward backtesting, and a public dashboard for results.",
        link: "https://github.com/abusalehmnasim/DSE-Market-Prediction-XGBoost",
      },
      {
        title: "Dhaka Restaurant Directory · maintenance",
        detail:
          "Refreshing the geospatial data pipeline and adding a search-by-cuisine filter.",
        link: "https://github.com/abusalehmnasim/dhaka-restaurant-directory",
      },
      {
        title: "This portfolio",
        detail:
          "Polishing micro-interactions and writing case studies for each project.",
      },
    ],
  },
  {
    emoji: "📖",
    heading: "Reading",
    description: "Books and papers in rotation.",
    items: [
      {
        title: "Prothom Alo by Sunil Gangopaddhay",
        detail: "I LOVE HISTORICAL FICTION",
      },
      {
        title: "Thinking, Fast and Slow — Daniel Kahneman",
        detail: "For the behavioural finance angle on policy and markets.",
      },
      {
        title: "Selected SSRN papers on emerging-market capital flows",
      },
    ],
  },
  {
    emoji: "🎯",
    heading: "Focus",
    description: "Big-picture goals this season.",
    items: [
      {
        title: "Land a finance or analytics internship for the upcoming term",
      },
      {
        title:
          "Publish a second short research note on Bangladeshi capital markets",
      },
      {
        title: "Ship two well-documented case studies on this portfolio",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Favourites — things to vibe over. Edit the chips freely.
// Each group renders as a colored card with chip tags inside.
// ---------------------------------------------------------------------------

export interface FavouriteGroup {
  emoji: string;
  heading: string;
  items: string[];
  /**
   * Tailwind class for the chip accent. Pick one of:
   *   "primary" | "emerald" | "amber" | "rose" | "violet" | "sky" | "cyan"
   */
  accent:
    | "primary"
    | "emerald"
    | "amber"
    | "rose"
    | "violet"
    | "sky"
    | "cyan";
}

export const favouritesIntro =
  "If you recognise any of these, we'll probably get on.";

export const favourites: FavouriteGroup[] = [
  {
    emoji: "📖",
    heading: "Forever bookshelf",
    accent: "amber",
    items: [
      "Prothom Alo — Sunil Gangopadhyay",
      "Security Analysis — Graham & Dodd",
      "Sapiens — Yuval Noah Harari",
      "Antifragile — N.N. Taleb",
    ],
  },
  {
    emoji: "🎬",
    heading: "Watching",
    accent: "rose",
    items: [
      "The Social Network",
      "Margin Call",
      "Interstellar",
      "Mad Men",
      "Anything by Christopher Nolan",
    ],
  },
  {
    emoji: "🎵",
    heading: "Sounds I lock in to",
    accent: "violet",
    items: [
      "Lofi instrumentals",
      "Coldplay",
      "Arijit Singh",
      "Anjan Dutta",
      "Lo-fi Bengali covers",
    ],
  },
  {
    emoji: "🏏",
    heading: "Sports",
    accent: "emerald",
    items: [
      "Bangladesh Cricket",
      "Test cricket > T20",
      "FC Barcelona",
      "Casual badminton",
    ],
  },
  {
    emoji: "🍜",
    heading: "Comfort food",
    accent: "primary",
    items: [
      "Old Dhaka biryani",
      "Beef tehari",
      "Cha (the stronger the better)",
      "Late-night kebabs",
    ],
  },
  {
    emoji: "🧰",
    heading: "Daily tools",
    accent: "sky",
    items: [
      "Notion",
      "Obsidian",
      "VS Code",
      "Excel (yes, still)",
      "Power BI",
      "ChatGPT",
    ],
  },
  {
    emoji: "🌍",
    heading: "Cities I'd live in",
    accent: "cyan",
    items: ["Dhaka", "Singapore", "London", "Istanbul"],
  },
  {
    emoji: "🪄",
    heading: "Ask me about",
    accent: "primary",
    items: [
      "Bangladeshi capital markets",
      "How XGBoost beats LSTMs on small data",
      "Why audit is more interesting than it sounds",
      "Bengali literature & history",
    ],
  },
];

// ---------------------------------------------------------------------------
// Philosophy — short principles I try to operate by.
// Keep each "principle" tight (max ~2 lines). Quality over quantity.
// ---------------------------------------------------------------------------

export interface Principle {
  title: string;
  body: string;
}

export const philosophyIntro =
  "A few things I try to keep in mind.";

export const philosophy: Principle[] = [
  {
    title: "Progress that leaves people behind is not progress at all",
    body: "I believe that true growth is never an isolated achievement; it is built on mutual support, empathy, and collaboration. A thriving community relies on the understanding that we are deeply interconnected. In my work and life, I focus on creating value that extends beyond individual gain, ensuring that knowledge, opportunities, and resources are shared to cultivate a more equitable and supportive environment for everyone.",
  },
  {
    title: "When the obvious path is blurred, perception must go deeper",
    body: "Living with a condition that obscures the center of my physical vision has profoundly shaped how I interact with the world. It has taught me that true clarity is not always about what is right in front of you. When the center fades, you learn to adapt, to look at the periphery, and to rely on insight and intuition. This translates into how I solve problems: I do not just look at the surface; I navigate complex systems by finding alternative perspectives and uncovering what others might miss.",
  },
  {
    title: "Identity is preserved through the refusal to be silenced",
    body: "I come from a land born out of an uncompromising demand for a voice, a language, and the right to exist. The history of my people is one of enduring immense hardship, weathering both historical storms and systemic oppression, and relentlessly rebuilding. This legacy is ingrained in my philosophy. It teaches me that resilience is not merely about surviving adversity; it is about standing firm in your identity, honoring the sacrifices of the past, and pushing forward against any odds",
  },
  {
    title: "We are caretakers of our skills, time, and resources.",
    body: "I hold the conviction that our abilities and knowledge carry an inherent responsibility. This principle of stewardship demands that we act with unwavering integrity and a deep sense of accountability. We are entrusted with our talents not merely for self-service, but to utilize them to uphold fairness, act justly, and ultimately leave our environment and our community better than we found them.",
  },
  {
    title: "Information is power, and the truth belongs to everyone.",
    body: "Move quickly on small bets where the cost of being wrong is low. Slow down — way down — on the few that you can't undo.",
  },
];

