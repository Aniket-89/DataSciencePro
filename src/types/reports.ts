export interface Report {
  title: string;
  industry: string;
  summary: string;
}

export interface ReportCategory {
  name: string;
  count?: number;
}

export const INDUSTRY_SECTORS = [
  "Energy",
  "Automotive",
  "BFSI",
  "Semiconductors",
  "Agriculture",
  "Retail",
  "ICT",
  "Construction",
  "Packaging",
  "Defense",
  "Nutrition",
  "Others"
] as const;

export const SAMPLE_REPORTS: Report[] = [
  {
    title: "LNG Engine Market Forecast 2025-2030",
    industry: "Energy",
    summary: "In-depth analysis of LNG engine adoption, tech disruption, and global regulations shaping the market."
  },
  {
    title: "Bio-based Isocyanate Market Report",
    industry: "Chemicals",
    summary: "Sustainable innovation driving bio-based materials in polyurethane production across regions."
  },
  {
    title: "Margarine Market Trends Report",
    industry: "Food & Beverages",
    summary: "Forecasts on margarine usage trends, health influence, and global market shifts."
  }
];
