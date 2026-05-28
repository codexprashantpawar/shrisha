export interface Project {
  id: number;
  title: string;
  category: "residential" | "villa" | "commercial" | "liasoning" | "institutional" | "interior";
  description: string;
  location: string;
  year: number;
  image: string;
  scale: string;
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Residential Project 01",
    category: "residential",
    description: "We craft homes that blend timeless design with everyday living.",
    location: "Pune, Maharashtra",
    year: 2023,
    image: "/images/projects/lakeside-residences.jpg",
    scale: "15,000 sq.ft",
  },
  {
    id: 2,
    title: "Residential Project 02",
    category: "residential",
    description: "We craft homes that blend timeless design with everyday living.",
    location: "Pune, Maharashtra",
    year: 2022,
    image: "/images/projects/koregaon-villas.jpg",
    scale: "12,000 sq.ft",
  },
  {
    id: 3,
    title: "Villa Project 01",
    category: "villa",
    description: "Luxury villa designed as private sanctuaries of elegance, light and nature.",
    location: "Pune, Maharashtra",
    year: 2023,
    image: "/images/projects/koregaon-villas.jpg",
    scale: "8,500 sq.ft",
  },
  {
    id: 4,
    title: "Villa Project 02",
    category: "villa",
    description: "Luxury villa designed as private sanctuaries of elegance, light and nature.",
    location: "Pune, Maharashtra",
    year: 2022,
    image: "/images/projects/lakeside-residences.jpg",
    scale: "6,000 sq.ft",
  },
  {
    id: 5,
    title: "Commercial Project 01",
    category: "commercial",
    description: "Innovative commercial spaces that inspire business, people, and growth.",
    location: "Pune, Maharashtra",
    year: 2022,
    image: "/images/projects/it-complex.jpg",
    scale: "25,000 sq.ft",
  },
  {
    id: 6,
    title: "Commercial Project 02",
    category: "commercial",
    description: "Innovative commercial spaces that inspire business, people, and growth.",
    location: "Pune, Maharashtra",
    year: 2021,
    image: "/images/projects/bund-garden-hub.jpg",
    scale: "40,000 sq.ft",
  },
  {
    id: 7,
    title: "Liasoning Project 01",
    category: "liasoning",
    description: "Seamless liasoning solutions ensuring smooth approvals and hassle-free execution.",
    location: "Pune, Maharashtra",
    year: 2023,
    image: "/images/projects/it-complex.jpg",
    scale: "20,000 sq.ft",
  },
  {
    id: 8,
    title: "Institutional Project 01",
    category: "institutional",
    description: "Purpose-driven institutional architecture built for learning, community & impact.",
    location: "Pune, Maharashtra",
    year: 2021,
    image: "/images/projects/cultural-center.jpg",
    scale: "12,000 sq.ft",
  },
  {
    id: 9,
    title: "Institutional Project 02",
    category: "institutional",
    description: "Purpose-driven institutional architecture built for learning, community & impact.",
    location: "Pune, Maharashtra",
    year: 2020,
    image: "/images/projects/college-wing.jpg",
    scale: "10,000 sq.ft",
  },
  {
    id: 10,
    title: "Interior Project 01",
    category: "interior",
    description: "Thoughtfully designed interiors that transform spaces into experience.",
    location: "Pune, Maharashtra",
    year: 2023,
    image: "/images/projects/cultural-center.jpg",
    scale: "5,000 sq.ft",
  },
  {
    id: 11,
    title: "Interior Project 02",
    category: "interior",
    description: "Thoughtfully designed interiors that transform spaces into experience.",
    location: "Pune, Maharashtra",
    year: 2022,
    image: "/images/projects/bund-garden-hub.jpg",
    scale: "4,000 sq.ft",
  },
];

export const projectCategories = [
  { id: "residential", label: "Residential" },
  { id: "villa", label: "Villa" },
  { id: "commercial", label: "Commercial" },
  { id: "liasoning", label: "Liasoning" },
  { id: "institutional", label: "Institutional" },
  { id: "interior", label: "Interior" },
];