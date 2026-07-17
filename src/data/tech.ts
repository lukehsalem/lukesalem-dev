// Tech-badge styling: brand color + logo slug (simpleicons.org).
// Add an entry to support a new tech; unknown techs render as a neutral pill.
export interface Tech { bg: string; fg: string; icon?: string; ic?: string; }

export const TECH: Record<string, Tech> = {
  "Node.js":          { bg: "#5FA04E", fg: "#03130a", icon: "nodedotjs",         ic: "03130a" },
  "Express":          { bg: "#151515", fg: "#fff",    icon: "express",           ic: "ffffff" },
  "Prisma":           { bg: "#2D3748", fg: "#fff",    icon: "prisma",            ic: "ffffff" },
  "PostgreSQL":       { bg: "#4169E1", fg: "#fff",    icon: "postgresql",        ic: "ffffff" },
  "pgvector":         { bg: "#2F6E64", fg: "#eafff6" },
  "TypeScript":       { bg: "#3178C6", fg: "#fff",    icon: "typescript",        ic: "ffffff" },
  "Python":           { bg: "#3776AB", fg: "#fff",    icon: "python",            ic: "ffffff" },
  "LangChain":        { bg: "#1C3C3C", fg: "#fff",    icon: "langchain",         ic: "ffffff" },
  "AWS":              { bg: "#FF9900", fg: "#201a12", icon: "amazonwebservices", ic: "201a12" },
  "Docker":           { bg: "#2496ED", fg: "#fff",    icon: "docker",            ic: "ffffff" },
  "Django":           { bg: "#092E20", fg: "#fff",    icon: "django",            ic: "ffffff" },
  "Pandas":           { bg: "#150458", fg: "#fff",    icon: "pandas",            ic: "ffffff" },
  "NumPy":            { bg: "#4D77CF", fg: "#fff",    icon: "numpy",             ic: "ffffff" },
  "Jupyter":          { bg: "#F37626", fg: "#201105", icon: "jupyter",           ic: "201105" },
  "Chart.js":         { bg: "#FF6384", fg: "#2a0a12", icon: "chartdotjs",        ic: "2a0a12" },
  "Bootstrap":        { bg: "#7952B3", fg: "#fff",    icon: "bootstrap",         ic: "ffffff" },
  "SQLite":           { bg: "#003B57", fg: "#fff",    icon: "sqlite",            ic: "ffffff" },
  "C#":               { bg: "#239120", fg: "#fff",    icon: "csharp",            ic: "ffffff" },
  ".NET MAUI":        { bg: "#512BD4", fg: "#fff",    icon: "dotnet",            ic: "ffffff" },
  "ASP.NET":          { bg: "#512BD4", fg: "#fff",    icon: "dotnet",            ic: "ffffff" },
  "Entity Framework": { bg: "#512BD4", fg: "#e9e2ff" },
  "GitHub Actions":   { bg: "#2088FF", fg: "#fff",    icon: "githubactions",     ic: "ffffff" },
  "REST API":         { bg: "#2b3a52", fg: "#cfe0ff" },
  "pytest":           { bg: "#0A9EDC", fg: "#03202b", icon: "pytest",            ic: "03202b" },
  "Agile":            { bg: "#334155", fg: "#dbe6f5" },
  "Scrum":            { bg: "#334155", fg: "#dbe6f5" },
  "GitHub Projects":  { bg: "#181717", fg: "#fff",    icon: "github",            ic: "ffffff" },
};
