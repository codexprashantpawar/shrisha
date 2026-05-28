export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialization: string[];
  experience: number;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Ar. Vilas Yele",
    role: "Principal Architect",
    bio: "Visionary architect with 20+ years of experience in large-scale projects and sustainable design.",
    image: "/images/team/Vilas.jpg",
    specialization: ["Residential", "Sustainable Design", "Urban Planning"],
    experience: 20,
  },
  {
    id: 2,
    name: "Priya Kulkarni",
    role: "Lead Interior Designer",
    bio: "Innovative interior designer known for creating spaces that blend aesthetics with functionality.",
    image: "/images/team/priya.jpg",
    specialization: ["Interior Design", "Hospitality", "Residential"],
    experience: 16,
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Commercial Architect",
    bio: "Expert in commercial projects with a focus on modern design and smart building integration.",
    image: "/images/team/vikram.jpeg",
    specialization: ["Commercial", "Smart Buildings", "IT Parks"],
    experience: 18,
  },
  {
    id: 4,
    name: "Shruti Sharma",
    role: "Sustainability Consultant",
    bio: "Passionate about green architecture and eco-friendly design solutions for modern living.",
    image: "/images/team/shruti.jpg",
    specialization: ["Sustainability", "Green Building", "LEED Certification"],
    experience: 14,
  },
  // {
  //   id: 5,
  //   name: "Arun Desai",
  //   role: "Project Manager",
  //   bio: "Experienced project manager ensuring timely and efficient delivery of all architectural ventures.",
  //   image: "/images/team/arun.jpg",
  //   specialization: ["Project Management", "Coordination", "Planning"],
  //   experience: 15,
  // },
 
];

export const founders = [
  {
    id: 1,
    name: "Ar. Vilas Yele",
    title: "Founder & Principal Architect",
    bio: "Founder of Shrisha with a vision to redefine architectural excellence in Pune and beyond.",
    image: "/images/team/vilas.jpg",
  },
  {
    id: 2,
    name: "Priya Desai",
    title: "Co-founder & Creative Director",
    bio: "Co-founder driving innovation and creative excellence across all design verticals.",
    image: "/images/team/shruti.jpg",
  },
];
