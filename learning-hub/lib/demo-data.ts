export type Lesson = {
  id: string;
  title: string;
  duration: string;
  status: "AVAILABLE" | "UPCOMING";
  videoUrl?: string;
  description: string;
  resources: { title: string; type: string; url?: string }[];
};

export type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Program = {
  slug: string;
  title: string;
  subtitle: string;
  cohort: string;
  schedule: string;
  instructor: string;
  progress: number;
  modules: Module[];
};

export const programs: Program[] = [
  {
    slug: "fmva-round-7",
    title: "FMVA Round 7",
    subtitle: "Financial Modeling and Valuation learning journey",
    cohort: "Round 7 · 2026",
    schedule: "Two live sessions per week",
    instructor: "ModEX Faculty",
    progress: 18,
    modules: [
      {
        id: "foundation-accelerator",
        title: "Module 1 · Foundation Accelerator",
        description: "Build the accounting, Excel, and financial-analysis foundation required for connected modeling.",
        lessons: [
          {
            id: "model-standards",
            title: "Model Standards and Workbook Structure",
            duration: "1h 35m",
            status: "AVAILABLE",
            description: "Learn how to structure a professional workbook, separate inputs from calculations, and create transparent model logic.",
            resources: [
              { title: "Session workbook", type: "Excel" },
              { title: "Model standards checklist", type: "PDF" },
            ],
          },
          {
            id: "financial-statements",
            title: "Understanding the Financial Statements",
            duration: "1h 50m",
            status: "AVAILABLE",
            description: "Connect the income statement, balance sheet, and cash-flow statement before building the forecast.",
            resources: [{ title: "Historical statements case", type: "Excel" }],
          },
          {
            id: "analysis-basics",
            title: "Financial Analysis and Business Drivers",
            duration: "2h 05m",
            status: "UPCOMING",
            description: "Translate historical performance into ratios, trends, operating drivers, and modeling assumptions.",
            resources: [],
          },
        ],
      },
      {
        id: "core-modeling",
        title: "Module 2 · Core Financial Modeling",
        description: "Build a connected three-statement model with supporting schedules and integrated checks.",
        lessons: [
          {
            id: "three-statement-model",
            title: "Building the Three-Statement Model",
            duration: "2h 30m",
            status: "UPCOMING",
            description: "Build a connected forecast model from assumptions through the three financial statements.",
            resources: [],
          },
          {
            id: "supporting-schedules",
            title: "Supporting Schedules and Model Checks",
            duration: "2h 10m",
            status: "UPCOMING",
            description: "Develop working-capital, debt, tax, depreciation, and integrity-check schedules.",
            resources: [],
          },
        ],
      },
      {
        id: "valuation-decision",
        title: "Module 3 · Valuation and Decision Output",
        description: "Convert the operating model into valuation, scenarios, dashboards, and a defendable recommendation.",
        lessons: [
          {
            id: "dcf-valuation",
            title: "DCF Valuation and Sensitivity",
            duration: "2h 20m",
            status: "UPCOMING",
            description: "Build enterprise and equity value, terminal value, WACC, and sensitivity analysis.",
            resources: [],
          },
        ],
      },
    ],
  },
];

export const adminSummary = {
  activePrograms: 1,
  activeCohorts: 1,
  enrolledStudents: 1,
  publishedLessons: programs.flatMap((program) => program.modules).flatMap((module) => module.lessons).filter((lesson) => lesson.status === "AVAILABLE").length,
};

export function findProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function findLesson(program: Program, lessonId: string) {
  for (const module of program.modules) {
    const lesson = module.lessons.find((item) => item.id === lessonId);
    if (lesson) return { module, lesson };
  }
  return null;
}
