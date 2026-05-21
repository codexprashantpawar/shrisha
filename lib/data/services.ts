export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Architecture Design",
    description: "Functional yet aesthetically driven design combining nature elements with innovative solutions.",
    icon: "building-2",
    features: ["Residential Projects", "Commercial Spaces", "Institutional Buildings", "Urban Planning"],
  },
  {
    id: 2,
    title: "Interior Design",
    description: "Clean and contextual interior design blending refined and modern elements seamlessly.",
    icon: "palette",
    features: ["Space Planning", "Material Selection", "Lighting Design", "Furnishing"],
  },
  {
    id: 3,
    title: "Sustainability",
    description: "Eco-friendly design solutions with focus on green building and environmental responsibility.",
    icon: "leaf",
    features: ["LEED Certification", "Energy Efficiency", "Green Materials", "Carbon Neutral"],
  },
  {
    id: 4,
    title: "Project Management",
    description: "End-to-end project oversight ensuring timely delivery and quality excellence.",
    icon: "briefcase",
    features: ["Planning & Coordination", "Quality Control", "Timeline Management", "Budget Optimization"],
  },
];

export const clients = [
  { id: 1, name: "Lodha Group", location: "Mumbai" },
  { id: 2, name: "Ashapura Group", location: "Mumbai" },
  { id: 3, name: "Season's Group", location: "Mumbai" },
  { id: 4, name: "Neelkanth Developers", location: "Mumbai" },
  { id: 5, name: "Span Group", location: "Mumbai" },
  { id: 6, name: "Silver Coup Of Companies", location: "Mumbai" },
  { id: 7, name: "Damji Shamji Group", location: "Mumbai" },
  { id: 8, name: "Shreekrishan Group", location: "Mumbai" },
  { id: 9, name: "Pawan Group", location: "Mumbai" },
  { id: 10, name: "Zojwalla Group", location: "Mumbai" },
  { id: 11, name: "Nutan Construction", location: "Pune" },
  { id: 12, name: "Sarvodaya Group", location: "Pune" },
  { id: 13, name: "Gr Infra Projects Pvt. Ltd", location: "Udaipur" },
  { id: 14, name: "Technopolis Const. Pvt Ltd", location: "Hyderabad" },
];

export const mediaFeatures = [
  {
    id: 1,
    title: "Good Homes",
    subtitle: "Featured Project",
    month: "June",
    year: 2022,
    image: "/images/media/good-homes.jpg",
    description: "Featured for innovative residential design and sustainability practices.",
  },
  {
    id: 2,
    title: "The Architect's Diary",
    subtitle: "Design Excellence",
    month: "October",
    year: 2021,
    image: "/images/media/architects-diary-oct.jpg",
    description: "Recognized for 30 best penthouses design in India.",
  },
  {
    id: 3,
    title: "The Architect's Diary",
    subtitle: "Interior Innovation",
    month: "August",
    year: 2021,
    image: "/images/media/architects-diary-aug.jpg",
    description: "Featured for contemporary interior design excellence.",
  },
];
