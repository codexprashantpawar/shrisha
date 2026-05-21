export interface TimelineEvent {
  id: number;
  year: number;
  title: string;
  description: string;
  icon?: string;
}

export const timeline: TimelineEvent[] = [
  {
    id: 1,
    year: 2009,
    title: "Founded",
    description: "Shrisha Architectural Consultancy established with a vision to redefine modern architecture in Pune.",
  },
  {
    id: 2,
    year: 2012,
    title: "First Major Award",
    description: "Won International Design Excellence Award for innovative residential project.",
  },
  {
    id: 3,
    year: 2015,
    title: "Commercial Expansion",
    description: "Successfully completed first large-scale commercial project in Hinjewadi.",
  },
  {
    id: 4,
    year: 2018,
    title: "Sustainability Focus",
    description: "Achieved LEED Platinum certification for multiple projects.",
  },
  {
    id: 5,
    year: 2020,
    title: "Cultural Milestone",
    description: "Completed prestigious Vishrantwas Cultural Center.",
  },
  {
    id: 6,
    year: 2023,
    title: "Design Leadership",
    description: "Recognized as one of Pune's top architectural firms with 50+ completed projects.",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Design Excellence Awards",
    count: 15,
    category: "Awards",
  },
  {
    id: 2,
    title: "Completed Projects",
    count: 50,
    category: "Portfolio",
  },
  {
    id: 3,
    title: "Happy Clients",
    count: 120,
    category: "Satisfaction",
  },
  {
    id: 4,
    title: "Years of Excellence",
    count: 14,
    category: "Experience",
  },
];
