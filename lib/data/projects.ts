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

// ── Excel-sourced project data (added for project-details popup) ──

export interface ProjectData {
  name: string;
  plotArea: string;      // SQM (Design Work) or unitless (Liasoning Work) — see note below
  builtUpArea: string;    // SQFT
  tenaments: string;
}

// ── DESIGN WORK ─────────────────────────────────────────
// Excel headers: PLOT AREA (SQM.) | BUILT UP AREA (SQFT) | TENAMENTS
export const designWorkProjects: ProjectData[] = [
  { name: 'BHOOMI ALLIUM AT RAHATANI', plotArea: '6646.87', builtUpArea: '213350', tenaments: '94 FLATS, 86 SHOPS & 04 FLOORS HOTEL' },
  { name: 'FLORENZA AT PIMPRI', plotArea: '3086.93', builtUpArea: '170000', tenaments: '142 FLATS' },
  { name: 'HOMETOWN AT CHIKHALI', plotArea: '5500', builtUpArea: '175000', tenaments: '206 FLATS' },
  { name: 'SILVER 18 AT CHIKHALI', plotArea: '7872.41', builtUpArea: '215000', tenaments: '325 FLATS' },
  { name: 'RIVIERAA AT DUDULGAON', plotArea: '6459', builtUpArea: '303000', tenaments: '276 FLATS & 9 SHOPS' },
  { name: 'BAJIRAO PARK AT RAVET', plotArea: '2489.34', builtUpArea: '58258', tenaments: '71 FLATS, 2 BUNGALOWS & COMMERCIAL SHOPS' },
  { name: 'ESSENTIA AT RAVET', plotArea: '2650', builtUpArea: '68300', tenaments: '76 FLATS & COMMERCIAL SHOPS' },
  { name: 'B SQUARE AT THERGAON', plotArea: '2300', builtUpArea: '68600', tenaments: '42 FLATS & COMMERCIAL SHOPS' },
  { name: 'SILVER LAVISH AT MOSHI', plotArea: '', builtUpArea: '', tenaments: '' },
  { name: 'NJ PROPERTIES AT CHIKHALI', plotArea: '', builtUpArea: '', tenaments: '' },
  { name: 'VERDURA AT DUDULGAN', plotArea: '', builtUpArea: '', tenaments: '' },
  { name: 'SAI BLISS AT PUNAVALE', plotArea: '', builtUpArea: '', tenaments: '' },
  { name: 'FORTUNE FLORA AT KIWALE', plotArea: '621.5', builtUpArea: '28000', tenaments: '28 FLATS' },
  { name: 'SHRISHA CORNER AT NIRA', plotArea: '', builtUpArea: '', tenaments: '' },
  { name: 'SWAYMBHU PRATHAM AT PIMPLE NILAKH', plotArea: '1400', builtUpArea: '30500', tenaments: '48 FLATS' },
  { name: 'BUNGALOW AT PUNAVALE', plotArea: '', builtUpArea: '', tenaments: '' },
  { name: 'BUNGALOW AT MAMURDI', plotArea: '', builtUpArea: '', tenaments: '' },
  { name: 'BUNGALOW AT PIMPLE SAUDAGAR', plotArea: '', builtUpArea: '', tenaments: '' },
  { name: 'BUNGALOW AT MOSHI', plotArea: '', builtUpArea: '', tenaments: '' },
];

// ── LIASONING WORK ──────────────────────────────────────
// Excel headers: PLOT AREA | BUILT UP AREA | TENAMENTS (no unit specified in sheet)
export const liasoningWorkProjects: ProjectData[] = [
  { name: 'SPLENDID PARK AT DUDULGAON', plotArea: '24250', builtUpArea: '863400', tenaments: '954 FLATS & COMMERCIAL SHOPS' },
  { name: 'VANTAGE AT PIMPLE SAUDAGAR', plotArea: '11500', builtUpArea: '650000', tenaments: '280 FLATS & 1 COMMERCIAL BUILDING' },
  { name: 'STERLING BLOOM AT RAHATANI', plotArea: '6700', builtUpArea: '145000', tenaments: '135 FLATS & COMMERCIAL SHOPS & OFFICES' },
  { name: 'WINDSONNG AT RAVET', plotArea: '10200', builtUpArea: '588945', tenaments: '324 FLATS' },
  { name: 'DREAMSONG AT MAMURDI', plotArea: '8800', builtUpArea: '545000', tenaments: '291 FLATS' },
  { name: 'EARTHSONG AT RAVET', plotArea: '20500', builtUpArea: '1562340', tenaments: '710 FLATS & COMMERCIAL SHOPS' },
  { name: 'MIRAYA AT MOSHI-BORHADEWADI', plotArea: '8800', builtUpArea: '497000', tenaments: '495 FLATS' },
  { name: 'MARVEL AT CHARHOLI', plotArea: '12100', builtUpArea: '607000', tenaments: '566 FLATS' },
  { name: 'MIDAS CITY AT CHOVISAWADI', plotArea: '25200', builtUpArea: '1240000', tenaments: '991 FLATS & COMMERCIAL SHOPS' },
  { name: 'MIRAJ CITY AT KIWALE', plotArea: '199000', builtUpArea: '1246000', tenaments: '928 FLATS, 48 SHOPS & 24 OFFICES' },
  { name: 'HOMES AT DUDULGAON', plotArea: '7118', builtUpArea: '182000', tenaments: '272 FLATS' },
  { name: 'ETERNIA AT CHARHOLI', plotArea: '3900', builtUpArea: '155000', tenaments: '194 FLATS' },
  { name: 'MEADOWS AT PIMPLE SAUDAGAR', plotArea: '2562.5', builtUpArea: '63000', tenaments: '62 FLATS' },
  { name: 'BRAND SQUARE AT PIMPLE SAUDAGAR', plotArea: '5299', builtUpArea: '170000', tenaments: 'COMMERCIAL BUILDING (SHOPS, OFFICES & RESTAURANTS)' },
  { name: 'SNBP UNIVERSITY AT CHIKHALI', plotArea: '16723.46', builtUpArea: '450000', tenaments: 'EDUCATIONAL BUILDING' },
  { name: 'PRESIDENT PARK AT DUDULGAON', plotArea: '4728', builtUpArea: '370000', tenaments: '217 FLATS, SHOPS, RESTAURANT & BANQUETTE HALL' },
  { name: 'KINGSFORT AT MAMURDI', plotArea: '6000', builtUpArea: '295000', tenaments: '153 FLATS & 33 SHOPS' },
  { name: 'PREETAM PRAKASH AT MOSHI', plotArea: '12400', builtUpArea: '775300', tenaments: '628 FLATS' },
  { name: 'AARAMBH AT DUDULGAON', plotArea: '8205.1', builtUpArea: '0', tenaments: '' },
  { name: 'VEDIKA AT PIMPLE SAUDAGAR', plotArea: '3000', builtUpArea: '0', tenaments: '' },
  { name: 'VERONIKA AT PIMPLE SAUDAGAR', plotArea: '3400', builtUpArea: '0', tenaments: '' },
];