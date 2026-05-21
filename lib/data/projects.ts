export interface Project {
  id: number;
  title: string;
  category: "residential" | "commercial" | "institutional" | "interior";
  description: string;
  location: string;
  year: number;
  image: string;
  scale: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lakeside Residences",
    category: "residential",
    description: "Premium residential complex overlooking Pashan Lake with sustainable architecture and modern amenities.",
    location: "Pune, Maharashtra",
    year: 2022,
    image: "/images/projects/lakeside-residences.jpg",
    scale: "15,000 sq.m",
    highlights: ["Sustainable Design", "Lake Views", "Green Spaces", "Smart Home Integration"],
  },
  {
    id: 2,
    title: "Bund Garden Commercial Hub",
    category: "commercial",
    description: "Contemporary commercial complex with retail and office spaces in Pune's central business district.",
    location: "Pune, Maharashtra",
    year: 2021,
    image: "/images/projects/bund-garden-hub.jpg",
    scale: "25,000 sq.m",
    highlights: ["Mixed Use", "Retail Integration", "Modern Facade", "LEED Certified"],
  },
  {
    id: 3,
    title: "Vishrantwas Cultural Center",
    category: "institutional",
    description: "Multi-purpose cultural institution featuring art galleries, theaters, and community spaces.",
    location: "Pune, Maharashtra",
    year: 2020,
    image: "/images/projects/cultural-center.jpg",
    scale: "12,000 sq.m",
    highlights: ["Cultural Hub", "Flexible Spaces", "Acoustic Excellence", "Public Access"],
  },
  {
    id: 4,
    title: "Koregaon Park Villas",
    category: "residential",
    description: "Luxury villa community with private terraces and landscaped gardens in Pune's premium locality.",
    location: "Pune, Maharashtra",
    year: 2023,
    image: "/images/projects/koregaon-villas.jpg",
    scale: "8,500 sq.m",
    highlights: ["Luxury Living", "Private Gardens", "Boutique Design", "Craftmanship"],
  },
  {
    id: 5,
    title: "Hinjewadi IT Complex",
    category: "commercial",
    description: "State-of-the-art IT park with collaborative workspaces and innovation zones.",
    location: "Pune, Maharashtra",
    year: 2022,
    image: "/images/projects/it-complex.jpg",
    scale: "40,000 sq.m",
    highlights: ["Tech Forward", "Collaborative Spaces", "Sustainable", "Future Ready"],
  },
  {
    id: 6,
    title: "Fergusson College Wing",
    category: "institutional",
    description: "Modern academic building with lecture halls, laboratories, and digital learning centers.",
    location: "Pune, Maharashtra",
    year: 2021,
    image: "/images/projects/college-wing.jpg",
    scale: "10,000 sq.m",
    highlights: ["Educational Excellence", "Modern Labs", "Sustainable Design", "Future Learning"],
  },
];

export const projectCategories = [
  { id: "residential", label: "Residential", icon: "building-2" },
  { id: "commercial", label: "Commercial", icon: "building" },
  { id: "institutional", label: "Institutional", icon: "landmark-2" },
  { id: "interior", label: "Interior", icon: "palette" },
];
