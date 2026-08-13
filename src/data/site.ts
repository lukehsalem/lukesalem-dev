// ============================================================
//  EDIT THIS FILE to make the site yours. Everything the page
//  shows (about, experience, projects, stats) lives here.
//  Keep the copy tight and in your voice — coding-style, not fluffy.
// ============================================================

export interface Project { name: string; status?: string; desc: string; tech: string[]; github?: string; live?: string; }
export interface Exp { role: string; org: string; date: string; loc?: string; bullets: string[]; }
export interface Cred { key: string; org: string; label: string; note: string; tag: string; link?: string; linkText?: string; }
export interface Marker { role: string; org: string; }

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

  // headshot (rounded-square in the hero)
  photo: "/luke.jpg",

  // short line shown by the terminal `about` command
  bio: "CS student at Florida State (B.S. CS, Math minor, '27) working at the intersection of software, data, and AI — currently a Data Scientist II for Florida's Dept. of Financial Services, building RAG and document-intelligence systems, and researching materials-science ML at Vanderbilt.",

  // professional About paragraph (prose section under the hero)
  aboutProse: "I'm a Computer Science student at Florida State University, minoring in Mathematics, focused on the intersection of software, data, and AI engineering. I currently serve as a Data Scientist II for Florida's Department of Financial Services, where I analyze thousands of insurer filings that apply predictive models and AI/ML across a multi-billion-dollar regulated insurance market. Alongside that, I engineer retrieval-augmented (RAG) pipelines and document-intelligence systems — most recently through an AI & Data Externship at Pfizer — and contribute to materials-science ML research with the OUYANG Group at Vanderbilt University. I care about building reliable, production-grade systems and turning messy, real-world data into tools people can actually use.",

  // role markers shown near the name (compact, à la a résumé header)
  markers: [
    { role: "Data Scientist II", org: "Florida Dept. of Financial Services" },
    { role: "AI & Data Extern", org: "Pfizer" },
    { role: "Data Mining Research", org: "OUYANG Group · Vanderbilt" },
    { role: "ERP Analyst", org: "FSU IT Services" },
  ] as Marker[],

  // curated, featured skills (highlighted block up top)
  topSkills: ["Machine Learning", "Artificial Intelligence", "Large Language Models", "RAG", "Python", "SQL", "AWS", "Data Analytics"],

  credentials: [
    { key: "vanderbilt", org: "Vanderbilt University", label: "Data Mining Research · OUYANG Group", note: "Curating ML training data for materials-property prediction", tag: "Research", link: "https://jeff-oakley.github.io/LiteratureMiningDatabase/", linkText: "view site" },
    { key: "ibm", org: "IBM", label: "Agile Development & Scrum", note: "Issued with honors", tag: "Certificate", link: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~BS53T3G04AOH/CERTIFICATE_LANDING_PAGE~BS53T3G04AOH.jpeg", linkText: "view certificate" },
    { key: "harvard", org: "Harvard Online", label: "CS50: Programming with Python", note: "Python training for fluency and project development", tag: "Certificate", link: "https://certificates.cs50.io/1d546121-ab4b-4142-be6b-d1360c1f8fcb.png?size=letter", linkText: "view certificate" },
    { key: "stanford", org: "Stanford Online", label: "Machine Learning Specialization", note: "Coming soon", tag: "In progress" },
  ] as Cred[],

  about: {
    name: "Luke Salem",
    edu: "B.S. Computer Science, FSU '27",
    now: "Data Scientist II @ Department of Financial Services · Florida",
    focus: ["software", "data & analytics", "fintech"],
    stack: ["Python", "SQL / SAS", "C#", "TypeScript", "AWS"],
    building: "OrgFlow — AI-assisted platform for student orgs",
    certs: ["IBM Agile & Scrum", "CS50 Python (Harvard)"],
  },

  experience: [
    {
      role: "Data Scientist II", org: "Florida Dept. of Financial Services",
      date: "Jun 2026 – Present", loc: "Tallahassee, FL",
      bullets: [
        "Analyze, clean, and transform 5,000+ insurer/market filings that incorporate predictive models, Python, SQL, and AI/ML — assessing how these methods are applied within regulated insurance products, and structuring data that supports legislative/financial budget requests and internal reporting.",
        "Analyze regulatory and market data for the Life & Health Product Review unit, supporting statistical analysis, reporting, and process automation that informs state oversight of a complex, multi-billion-dollar insurance market.",
      ],
    },
    {
      role: "AI & Data Externship", org: "Pfizer",
      date: "Jun 2026 – Aug 2026", loc: "Tallahassee, FL",
      bullets: [
        "Engineered an end-to-end RAG pipeline in Python using LlamaIndex — applying advanced chunking, overlap tuning, and metadata-based filtering to improve retrieval precision; benchmarked open-source LLMs against proprietary models to optimize accuracy and inference efficiency for pharmaceutical document intelligence.",
        "Built a modular document-processing system integrating OCR (Tesseract, PaddleOCR, EasyOCR), PDF extraction (PyMuPDF, pdfplumber), and rule-based/ML classification to split, tag, and route unstructured regulatory PDFs — deployed as an interactive Gradio chatbot automating Pfizer's compliance flagging workflow.",
      ],
    },
    {
      role: "Data Mining Research", org: "OUYANG Group · Vanderbilt University",
      date: "Mar 2026 – Present", loc: "Remote",
      bullets: [
        "Extract and annotate data from 7,500+ peer-reviewed literature entries on perovskite oxides and Na-ion layered cathode materials — processing 2,000+ text-mined papers into standardized schemas covering synthesis conditions, structural parameters, and electrochemical performance.",
        "Curate training data feeding the group's Mining Database, a public corpus used to train ML models for materials-property prediction.",
      ],
    },
    {
      role: "ERP Analyst", org: "FSU Information Technology Services",
      date: "Aug 2026 – Present", loc: "Tallahassee, FL",
      bullets: [
        "Author simple-to-medium complexity SQL queries in PeopleSoft Query Manager and support FACET operational reporting to surface HR data for campus stakeholders — collaborating with analysts and developers to gather requirements and deliver reporting solutions.",
        "Maintain lower PeopleSoft ERP HR testing environments by keeping module data current and in-sync, and design testing scenarios for recruiting and onboarding workflows to validate system integrity ahead of production deployment.",
      ],
    },
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
    { n: "4", l: "roles" },
    { n: "2027", l: "B.S. CS · FSU" },
  ],
  // language breakdown across public repos (approx, from GitHub repo stats)
  langs: [
    { lbl: "Python", pct: 34 },
    { lbl: "HTML", pct: 22 },
    { lbl: "C#", pct: 15 },
    { lbl: "Jupyter / EDA", pct: 12 },
    { lbl: "CSS", pct: 11 },
    { lbl: "TypeScript", pct: 6 },
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
