export const siteConfig = {
  name: "Abu Saleh M Nasim",
  shortName: "Nasim",
  tagline:
    "Finance Undergraduate · Chartered Accountancy Student · Data Analyst · Researcher",
  rotatingTaglines: [
    "Finance & Analytics Enthusiast",
    "Future Chartered Accountant",
    "Data-Driven Problem Solver",
    "Research and Policy Contributor",
  ],
  url: "https://abusalehnasim.me",
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
  { value: "CA", label: "Certificate Level Cleared" },
  { value: "2", label: "Major Data Projects", numeric: 2 },
  { value: "4+", label: "Leadership Positions", numeric: 4, suffix: "+" },
  { value: "1", label: "Published Research Author", numeric: 1 },
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
  title: "Research Publication on SSRN",
  venue: "Social Science Research Network (SSRN)",
  abstract:
    "Peer-accessible research paper contributing to discourse on finance, economics, and policy. Published on the Social Science Research Network.",
  url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6618879",
  badge: "SSRN",
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
