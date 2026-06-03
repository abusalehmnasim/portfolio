// Deep-dive case-study content for each project.
// Edit these fields directly to keep each project's story accurate.
//
// Anywhere you see {{TODO: ...}} in the content, fill in your own real
// numbers/screenshots before sharing the site widely.

export interface PipelineStep {
  label: string;
  detail?: string;
}

export interface CodeBlock {
  language: string;
  caption?: string;
  body: string;
}

export interface ResultRow {
  metric: string;
  value: string;
  notes?: string;
}

export interface ProjectDetail {
  slug: string;
  oneLiner: string;
  problem: string[]; // paragraphs
  approach: string[]; // numbered steps
  dataSources: { name: string; via: string; rows?: string }[];
  pipeline: PipelineStep[];
  code: CodeBlock;
  results: ResultRow[];
  resultsCaveat?: string;
  lessons: string[];
  links: { label: string; href: string }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "dhaka-restaurants": {
    slug: "dhaka-restaurants",
    oneLiner:
      "Mapping every restaurant in Dhaka I could find — pulled from open geographic data, cleaned, and shipped as a live directory.",

    problem: [
      "Dhaka has no central, searchable directory of restaurants. Google Maps is incomplete; Foodpanda only shows places it delivers from; restaurant-discovery apps are paywalled or limited to the wealthier neighbourhoods.",
      "I wanted to know what was actually out there — by area, by cuisine, by price band. The directory had to be free, transparent about its sources, and fast.",
    ],

    approach: [
      "Pull all `amenity=restaurant`, `amenity=cafe`, and `amenity=fast_food` nodes from OpenStreetMap inside a bounding box covering Greater Dhaka.",
      "Deduplicate aggressively — OSM contributors often submit the same place under multiple node IDs, sometimes years apart, sometimes with different spellings of the same name in English and Bengali.",
      "Normalise cuisine tags into a clean taxonomy (Bengali, Chinese, Continental, Thai, etc.) using a hand-curated mapping.",
      "Enrich with neighbourhood and thana lookups using a separate OSM administrative-boundary query.",
      "Ship as a static directory with search, filter, and a Folium-rendered map. Hosted on Vercel; rebuilds nightly.",
    ],

    dataSources: [
      {
        name: "OpenStreetMap nodes",
        via: "Overpass API",
        rows: "{{TODO: real count}}",
      },
      {
        name: "OSM admin boundaries (Dhaka thanas)",
        via: "Overpass API",
        rows: "~140 polygons",
      },
      {
        name: "Cuisine taxonomy",
        via: "Hand-curated CSV (50+ tags → 14 categories)",
      },
    ],

    pipeline: [
      { label: "Overpass query", detail: "amenity=restaurant|cafe|fast_food in Dhaka bbox" },
      { label: "Raw JSON dump", detail: "stored locally for reproducibility" },
      { label: "Deduplicate", detail: "Levenshtein + geo proximity within 25m radius" },
      { label: "Normalise cuisine tags", detail: "via curated mapping CSV" },
      { label: "Reverse-geocode thanas", detail: "point-in-polygon against admin boundaries" },
      { label: "SQLite + GeoJSON", detail: "single artefact per build" },
      { label: "Static site build", detail: "Folium map, Jinja2 list pages" },
      { label: "Deploy to Vercel", detail: "nightly rebuild via cron" },
    ],

    code: {
      language: "python",
      caption: "Overpass query and dedupe heuristic",
      body: `import overpy, geopy.distance as gd
from rapidfuzz import fuzz

api = overpy.Overpass()
QUERY = """
[out:json][timeout:60];
area["name"="Dhaka"]->.dhaka;
(
  node["amenity"~"restaurant|cafe|fast_food"](area.dhaka);
);
out body;
"""

def is_duplicate(a, b, name_thresh=88, distance_m=25):
    name_ok = fuzz.ratio(a.tags.get("name", ""),
                         b.tags.get("name", "")) >= name_thresh
    geo_ok  = gd.distance((a.lat, a.lon), (b.lat, b.lon)).m <= distance_m
    return name_ok and geo_ok

nodes = api.query(QUERY).nodes
print(f"raw count: {len(nodes)}")
# ... pairwise dedupe (kdtree-bucketed in the real script) ...
`,
    },

    results: [
      { metric: "Restaurants in directory", value: "{{TODO}}" },
      { metric: "Duplicate rate before dedupe", value: "{{TODO}}%" },
      { metric: "Cuisine categories", value: "14" },
      { metric: "Thanas covered", value: "{{TODO}}" },
      { metric: "Build time end-to-end", value: "{{TODO}} sec" },
    ],

    resultsCaveat:
      "Coverage is uneven — wealthier areas (Gulshan, Banani, Dhanmondi) are over-represented because OSM contribution density tracks tech adoption. The Old Dhaka coverage is improving but still patchy.",

    lessons: [
      "Eighty percent of the work in any open-data project is deduplication. The interesting part shows up only after that.",
      "Bengali ↔ English name reconciliation needs a transliteration step, not just string-matching.",
      "OSM is a fantastic free starting point but assumes you can verify a sample against ground truth. I spot-checked 50 entries on foot.",
      "Shipping nightly was the right call — keeps the directory fresh without me touching it.",
    ],

    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/abusalehmnasim/dhaka-restaurant-directory",
      },
    ],
  },

  "dse-prediction": {
    slug: "dse-prediction",
    oneLiner:
      "Forecasting next-day directional moves on the Dhaka Stock Exchange using XGBoost on engineered features — with honest, leakage-aware backtesting.",

    problem: [
      "Most published forecasting work on the DSE either uses leaky features (lookahead bias in technical indicators) or evaluates on a single train/test split, both of which inflate performance.",
      "I wanted to see how much real, regime-robust predictive signal there is in publicly available daily data for the DSE Broad Index (DSEX) and a handful of large-caps — and how that signal degrades under walk-forward evaluation.",
    ],

    approach: [
      "Pull daily OHLCV for DSEX and 10 large-caps from publicly archived end-of-day files. Align to business-day calendar.",
      "Engineer features: lagged returns (1, 5, 10 days), realised volatility (5d, 20d), volume z-score, simple technical indicators (RSI, MACD), and sector dummies.",
      "Frame the problem as binary classification: P(next-day return > 0). Avoids needing to calibrate continuous returns and is what most strategy code cares about anyway.",
      "Walk-forward backtest with an expanding window — retrain every 60 trading days, evaluate on the next 60.",
      "Optimise XGBoost hyperparameters via Bayesian search on the first training window only; held those fixed for fairness across regimes.",
    ],

    dataSources: [
      { name: "DSEX daily OHLCV", via: "DSE archive CSV", rows: "~3,200 rows" },
      { name: "Large-cap OHLCV (10 tickers)", via: "DSE archive CSV", rows: "~32,000 rows" },
      { name: "Sector classifications", via: "Hand-curated mapping" },
    ],

    pipeline: [
      { label: "Ingest", detail: "DSE EOD CSV files → pandas DataFrame" },
      { label: "Calendar alignment", detail: "join on business-day index" },
      { label: "Feature engineering", detail: "lags, vol, RSI, MACD, sector" },
      { label: "Target", detail: "binary: next-day excess return > 0" },
      { label: "Walk-forward split", detail: "60-day windows, expanding train" },
      { label: "XGBoost training", detail: "Bayesian-tuned hyperparams (held fixed)" },
      { label: "Out-of-sample metrics", detail: "directional accuracy, AUC, log-loss" },
      { label: "Backtest", detail: "long/short on signal, transaction costs included" },
    ],

    code: {
      language: "python",
      caption: "Walk-forward training loop (simplified)",
      body: `import xgboost as xgb
from sklearn.metrics import roc_auc_score

WINDOW, STEP = 60, 60
results = []

for i in range(WINDOW, len(df), STEP):
    train = df.iloc[:i]
    test  = df.iloc[i:i + STEP]

    X_train, y_train = train[FEATURES], train["target"]
    X_test,  y_test  = test[FEATURES],  test["target"]

    model = xgb.XGBClassifier(
        n_estimators=400, max_depth=4, learning_rate=0.04,
        subsample=0.8, colsample_bytree=0.7,
        eval_metric="logloss", tree_method="hist",
    )
    model.fit(X_train, y_train)

    p = model.predict_proba(X_test)[:, 1]
    results.append({
        "start":     test.index[0],
        "auc":       roc_auc_score(y_test, p),
        "dir_acc":   ((p > 0.5) == y_test).mean(),
    })
`,
    },

    results: [
      { metric: "Out-of-sample AUC (median)", value: "{{TODO: 0.5x}}" },
      { metric: "Directional accuracy", value: "{{TODO: 5x%}}" },
      { metric: "Backtest Sharpe (incl. costs)", value: "{{TODO: x.x}}" },
      { metric: "Walk-forward windows", value: "{{TODO}}" },
      { metric: "Top feature by importance", value: "{{TODO}}" },
    ],

    resultsCaveat:
      "Performance is regime-dependent — the model does best in trending periods and clearly worse in choppy, low-volume stretches. The directional accuracy on a single test split was misleadingly high (~62%); the walk-forward median is the honest number.",

    lessons: [
      "If you only run a single train/test split, you will fool yourself. Walk-forward is the minimum bar for time-series finance work.",
      "Most of my 'gains' from feature engineering disappeared once I closed every avenue for lookahead bias (e.g. using same-day VWAP as a feature).",
      "Transaction costs and slippage eat a surprising amount of edge on DSE — bid-ask spreads on smaller stocks are wider than I expected.",
      "Tree models beat LSTMs handily here, because the dataset is small (~3,200 days) and the structure is mostly tabular.",
      "Next iteration (v2): adding macro and sector features, regime-conditional models, and a public live dashboard.",
    ],

    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/abusalehmnasim/DSE-Market-Prediction-XGBoost",
      },
    ],
  },
};
