export const siteConfig = {
  name: "Abu Saleh M Nasim",
  shortName: "Nasim",
  tagline:
    "BBA Finance at BUP · CA student at ICAB · sometimes writing, sometimes coding",
  rotatingTaglines: [
    "BBA Finance at BUP",
    "CA student at ICAB",
    "Python, SQL, Excel — in that order of headache",
    "One paper on SSRN, working on the next",
  ],
  url: "https://nasimabeer.me",
  description:
    "Portfolio of Abu Saleh M Nasim — finance undergraduate at BUP and pre-articled Chartered Accountancy student combining finance, data analytics, machine learning, and policy research.",
  email: "nasimabeer7@gmail.com",
  phone: "+8801410313638",
  location: "Dhaka, Bangladesh",
  socials: {
    github: "https://github.com/abusalehmnasim",
    linkedin: "https://www.linkedin.com/in/abusalehmnasim/",
  },
  githubUsername: "abusalehmnasim",
  cvUrl: "/cv.pdf",
  portrait: "/images/nasim-portrait.jpg",
};

export const stats: Array<{
  value: string;
  label: string;
  numeric?: number;
  suffix?: string;
}> = [
  { value: "CA", label: "Certificate level cleared" },
  { value: "2", label: "Projects on GitHub", numeric: 2 },
  { value: "4+", label: "Clubs and roles", numeric: 4, suffix: "+" },
  { value: "1", label: "Paper on SSRN", numeric: 1 },
];

export const education = [
  {
    institution: "Bangladesh University of Professionals (BUP)",
    degree: "Bachelor of Business Administration",
    field: "Major in Finance",
    period: "Expected May 2027",
    description:
      "Undergraduate program focused on corporate finance, capital markets, accounting, and business analytics.",
  },
  {
    institution: "Institute of Chartered Accountants of Bangladesh (ICAB)",
    degree: "Chartered Accountancy",
    field: "Pre-articled Student",
    period: "Certificate Level Cleared",
    description:
      "Professional accountancy qualification covering financial reporting, audit, taxation, and business law.",
  },
];

export const experience = [
  {
    role: "Vice President",
    org: "Adamjee Cantonment Public School Science Club",
    period: "Leadership",
    points: [
      "Led science-based activities across the student body",
      "Organized educational programs and outreach events",
      "Managed student engagement and membership initiatives",
    ],
  },
  {
    role: "Vice President",
    org: "Adamjee Cantonment College Quiz Club",
    period: "Leadership",
    points: [
      "Organized inter-college quiz competitions",
      "Coordinated events end-to-end with the executive committee",
      "Developed academic engagement programs for members",
    ],
  },
  {
    role: "Member",
    org: "BUP Debate Club",
    period: "Current",
    points: [
      "Participate in competitive debate activities",
      "Develop analytical reasoning and structured communication",
    ],
  },
  {
    role: "Policy Envoy",
    org: "Youth Policy Forum",
    period: "Current",
    points: [
      "Contribute to policy discussions and roundtables",
      "Participate in youth-focused policy initiatives",
      "Work on civic engagement and policy awareness campaigns",
    ],
  },
];

export const projects = [
  {
    title: "Dhaka Restaurant Directory",
    description:
      "Full-stack data analytics project that ingests open-source geographic data, cleans it through an automated pipeline, and serves a live, interactive directory of Dhaka restaurants.",
    tech: ["Python", "SQL", "APIs", "Data Analytics", "Web Deployment"],
    highlights: [
      "Live dashboard utilizing open-source geographic data",
      "Automated cleaning and enrichment pipeline",
      "End-to-end deployment from ingestion to UI",
    ],
    github:
      "https://github.com/abusalehmnasim/dhaka-restaurant-directory",
    image: "/images/project-dhaka-restaurant.png",
    accent: "from-emerald-500/20 via-teal-500/10 to-sky-500/20",
  },
  {
    title: "DSE Market Prediction",
    description:
      "Machine learning project that forecasts Dhaka Stock Exchange movements using XGBoost on engineered financial features, with rigorous backtesting and feature analysis.",
    tech: [
      "Python",
      "XGBoost",
      "Machine Learning",
      "Financial Analytics",
      "Data Science",
    ],
    highlights: [
      "Applied gradient boosting to financial time-series",
      "Engineered features from market and fundamentals data",
      "Evaluated model robustness across market regimes",
    ],
    github:
      "https://github.com/abusalehmnasim/DSE-Market-Prediction-XGBoost",
    image: "/images/project-dse-prediction.png",
    accent: "from-indigo-500/20 via-violet-500/10 to-fuchsia-500/20",
  },
];

export const publication = {
  title:
    "Retail Strategy and Customer Loyalty in Bangladesh's Modern Grocery Sector",
  subtitle:
    "A Theoretical Framework for Shwapno's Sustainable Market Leadership",
  authors: ["Abu Saleh M Nasim"],
  venue: "Social Science Research Network (SSRN)",
  // ISO dates so we can format consistently
  postedDate: "2026-04-24",
  writtenDate: "2026-04-21",
  pages: 19,
  abstract:
    "This paper develops a theoretical framework for understanding customer loyalty in Bangladesh's organized grocery retail sector, using Shwapno — the country's dominant grocery chain — as its empirical anchor. Drawing on the research methodology framework of Sekaran and Bougie (2016), the study identifies service quality, service innovation, and brand trust as independent variables; perceived value-for-money (PVM) as a mediating variable; and socioeconomic status (SES) as a moderating variable. Six hypotheses are proposed and grounded in established retail theory, including SERVQUAL (Parasuraman, Zeithaml & Berry, 1988), Zeithaml's value model (1988), and Morgan and Hunt's Commitment-Trust Theory (1994). The framework extends Western retail theory to an emerging-market context characterized by SES heterogeneity, high price sensitivity, and a transitioning retail landscape. Findings from this theoretical analysis suggest that the mediated pathway — service innovation driving loyalty through perceived value — is likely the most consequential, with SES amplifying this relationship among lower- and middle-income consumers. Theoretical and practical contributions for emerging-market retail management are discussed.",
  keywords: [
    "customer loyalty",
    "service quality",
    "brand trust",
    "perceived value-for-money",
    "organized retail",
    "Bangladesh",
    "Shwapno",
    "socioeconomic status",
  ],
  url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6618879",
  doi: "10.2139/ssrn.6618879",
  doiUrl: "https://dx.doi.org/10.2139/ssrn.6618879",
  badge: "SSRN",
  citation:
    "Nasim, Abu Saleh M, Retail Strategy and Customer Loyalty in Bangladesh's Modern Grocery Sector: A Theoretical Framework for Shwapno's Sustainable Market Leadership (April 21, 2026). Available at SSRN: https://ssrn.com/abstract=6618879 or https://dx.doi.org/10.2139/ssrn.6618879",
};

export const skillGroups = [
  {
    name: "Finance & Accounting",
    items: [
      "Financial Modeling",
      "Three Statement Modeling",
      "DCF Valuation",
      "Financial Statement Analysis",
      "Budgeting",
      "Forecasting",
      "Variance Analysis",
    ],
  },
  {
    name: "Analytics",
    items: [
      "Advanced Excel",
      "Power BI",
      "Data Visualization",
      "Dashboard Development",
    ],
  },
  {
    name: "Programming",
    items: ["Python", "SQL"],
  },
  {
    name: "Research",
    items: [
      "Academic Writing",
      "Quantitative Analysis",
      "Policy Research",
      "Data Interpretation",
    ],
  },
];

export const certifications = [
  {
    title: "Associate Data Analyst",
    issuer: "DataCamp",
    description:
      "Professional certification covering data analysis fundamentals, SQL, and analytical reporting.",
    image: "/images/datacamp-certificate.png",
  },
];

export const achievements = [
  {
    title: "Government Talentpool Scholarship",
    description:
      "National-level academic scholarship recognizing outstanding academic performance.",
  },
  {
    title: "Adamjee Cantonment College Principal's Prestigious Award",
    description:
      "Awarded for excellence in academics, leadership, and overall contribution to college life.",
  },
];

export const interests = [
  "Financial Analysis",
  "Capital Markets",
  "Data Analytics",
  "Machine Learning",
  "Economic Research",
  "Public Policy",
];

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Activity", href: "/#activity" },
  { label: "Research", href: "/#research" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];
