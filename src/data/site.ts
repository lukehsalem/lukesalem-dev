// ============================================================
//  EDIT THIS FILE to make the site yours. Everything the page
//  shows (about, experience, projects, stats) lives here.
//  Keep the copy tight and in your voice — coding-style, not fluffy.
// ============================================================

export interface Project { name: string; status?: string; desc: string; tech: string[]; github?: string; live?: string; }
export interface Exp { role: string; org: string; date: string; note: string; }
export interface Cred { key: string; org: string; label: string; note: string; tag: string; link?: string; linkText?: string; }

export const site = {
  name: "Luke Salem",
  grad: "May 2027",
  domain: "lukesalem.dev",
  email: "lhs23b@fsu.edu",

  links: {
    github: "https://github.com/lukehsalem",
    linkedin: "https://linkedin.com/in/lukehsalem",
    "résumé": "/SalemLukeResume.pdf",
    email: "mailto:lhs23b@fsu.edu",
  },

  // shown in the "about" panel (bento layout)
  bio: "Hey, I'm Luke! I'm a rising CS senior turning real-world solutions into reality with my passion in software, data, and AI engineering. Right now I'm a Data Analyst II for Florida's Department of Financial Services, building OrgFlow on the side, and aiming squarely at the intersection of software, data, and fintech.",
  credentials: [
    { key: "vanderbilt", org: "Vanderbilt University", label: "Data Mining Research · OUYANG Group", note: "Curating ML training data for materials-property prediction", tag: "Research", link: "https://jeff-oakley.github.io/LiteratureMiningDatabase/", linkText: "view site" },
    { key: "ibm", org: "IBM", label: "Agile Development & Scrum", note: "Issued with honors", tag: "Certificate", link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BS53T3G04AOH/CERTIFICATE_LANDING_PAGE~BS53T3G04AOH.jpeg", linkText: "view certificate" },
    { key: "harvard", org: "Harvard Online", label: "CS50: Programming with Python", note: "Python training for fluency and project development", tag: "Certificate", link: "https://certificates.cs50.io/1d546121-ab4b-4142-be6b-d1360c1f8fcb.png?size=letter", linkText: "view certificate" },
    { key: "stanford", org: "Stanford Online", label: "Machine Learning Specialization", note: "Coming soon", tag: "In progress" },
  ] as Cred[],

  about: {
    name: "Luke Salem",
    edu: "B.S. Computer Science, FSU '27",
    now: "Data Analyst II @ Department of Financial Services · Florida",
    focus: ["software", "data & analytics", "fintech"],
    stack: ["Python", "SQL / SAS", "C#", "TypeScript", "AWS"],
    building: "OrgFlow — AI-assisted platform for student orgs",
    certs: ["IBM Agile & Scrum", "CS50 Python (Harvard)"],
  },

  experience: [
    { role: "Data Analyst II", org: "Department of Financial Services · Florida", date: "Jun 2026 – Present",
      note: "Regulatory & market data analysis for the Life & Health Product Review unit — statistical analysis, reporting, and process automation; reviewing insurer filings that use predictive models, SAS, and AI/ML." },
    { role: "Data Mining Research", org: "OUYANG Group · Vanderbilt University", date: "Mar 2026 – Present",
      note: "Extract & annotate battery-materials data from scientific literature into standardized schemas; curate training data for an ML materials-property Literature Mining Database." },
    { role: "Founder & Owner", org: "Luke Salem Copywriting", date: "Jun 2024 – Jun 2025",
      note: "Founded a digital marketing service (copywriting + email marketing) driving client acquisition and revenue growth." },
  ] as Exp[],

  projects: [
    { name: "OrgFlow", status: "In Development",
      desc: "Production backend for a student-org mobile app: PostgreSQL schema + REST APIs on Node/Express/Prisma, deployed on AWS. RAG pipeline over org data using pgvector embeddings + LLM providers.",
      tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "pgvector", "TypeScript", "Python", "LangChain", "AWS", "Docker"], github: "", live: "" },
    { name: "Full-Stack Data Web App", status: "",
      desc: "End-to-end data product: ingest → analyze → serve. Python pipeline on the GitHub REST API, NBA advanced-stats EDA in Jupyter/Pandas (1,890 rows), deployed Django app with a Chart.js dashboard.",
      tech: ["Python", "Django", "Pandas", "NumPy", "Jupyter", "Chart.js", "Bootstrap", "SQLite"],
      github: "https://github.com/lukehsalem/Full-Stack-Data-Web-Application", live: "https://youtu.be/9kQBsbywEdc" },
    { name: "Learning Management System", status: "",
      desc: "Production-style LMS built from scratch in C# across 5 agile sprints — CLI → .NET MAUI GUI → ASP.NET WebAPI + Entity Framework. Patterns: Singleton, Inheritance, MVC, REST. CI/CD via GitHub Actions.",
      tech: ["C#", ".NET MAUI", "ASP.NET", "Entity Framework", "GitHub Actions"],
      github: "https://github.com/lukehsalem/Learning-Management-System", live: "" },
    { name: "Crypto Price Index API Wallet Manager", status: "",
      desc: "Python crypto-wallet simulator: deposit/withdraw logic converting coins to live Bitcoin prices via the CoinDesk BPI API. OOP Wallet class, robust error handling, full pytest suite.",
      tech: ["Python", "REST API", "pytest"],
      github: "https://github.com/lukehsalem/Cryptocurrency-API-Wallet-Manager", live: "https://youtu.be/0JDaBBGnKoM" },
    { name: "Agile Final Project", status: "",
      desc: "Agile lab-planning simulation running the full product-owner / scrum-master / developer workflow — user stories, sprint backlog, and issue tracking on GitHub.",
      tech: ["Agile", "Scrum", "GitHub Projects"],
      github: "https://github.com/lukehsalem/Agile-Final-Project", live: "" },
  ] as Project[],

  kpis: [
    { n: "170+", l: "commits · public" },
    { n: "5", l: "featured projects" },
    { n: "3", l: "roles" },
    { n: "2027", l: "B.S. CS · FSU" },
  ],
  // language breakdown across public repos (approx, from GitHub repo stats)
  langs: [
    { lbl: "Python", pct: 42 },
    { lbl: "C#", pct: 24 },
    { lbl: "Jupyter / EDA", pct: 22 },
    { lbl: "TypeScript", pct: 8 },
    { lbl: "HTML / CSS", pct: 4 },
  ],
  // full skills list for the skills section
  skills: ["Python", "SQL", "SAS", "C#", "C++", "Java", "TypeScript", "Pandas", "NumPy", "PostgreSQL", "pgvector", "Django", "Node.js", "React Native", "AWS", "Docker", "Chart.js", "Jupyter", "Git", "Linux"],
  // GitHub username used for the live contribution graph
  github: "lukehsalem",
  // living stat shown up front (bump as you ship — OrgFlow is in progress now)
  shipped: { count: 3, year: 2026 },
  focusBars: [
    { lbl: "Data & Analytics", pct: 90 },
    { lbl: "Backend / APIs", pct: 82 },
    { lbl: "Full-Stack Web", pct: 76 },
    { lbl: "Cloud / DevOps", pct: 66 },
    { lbl: "AI / ML pipelines", pct: 70 },
  ],
};

export type Site = typeof site;
