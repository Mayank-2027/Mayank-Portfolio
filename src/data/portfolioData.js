import { 
  FaJava, FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaServer, FaCode, FaLaptopCode, FaCubes, FaProjectDiagram
} from 'react-icons/fa';
import { 
  SiTypescript, SiExpress, SiMongodb, SiMysql, SiPostman, SiVercel, SiRender, SiC, SiDocker, SiRedis, SiPostgresql
} from 'react-icons/si';

export const personalDetails = {
  name: "Mayank Chandravanshi",
  title: "Full-Stack MERN Developer",
  tagline: "Backend-Focused | Microservices & System Design | SDE Aspirant",
  bio: "Building scalable web applications, microservices, REST APIs, and real-time distributed systems.",
  about: "B.Tech Information Technology student at Jabalpur Engineering College (2027). Passionate about backend engineering, microservices architecture, system design, and high-performance databases like Redis & PostgreSQL.",
  email: "Mayankchandravanshi1977@gmail.com",
  phone: "+916260485020",
  github: "https://github.com/Mayank-2027",
  linkedin: "https://www.linkedin.com/in/mayank-chandravanshi-b4a067287/",
  location: "Jabalpur, Madhya Pradesh, India",
  targetRoles: ["Software Development Engineer (SDE)", "Backend Developer", "Full-Stack MERN Developer", "SDE Internships"]
};

export const educationData = {
  institution: "Jabalpur Engineering College",
  degree: "B.Tech Information Technology",
  expectedGraduation: "2027",
  
  highlights: [
    "Core focus on Data Structures, Algorithms, Systems Architecture, Microservices, and Database Design",
    "Active participant in campus hackathons & tech communities"
  ]
};

export const coreCS = [
  "Data Structures & Algorithms (DSA)",
  "Object-Oriented Programming (OOP)",
  "Database Management Systems (DBMS)",
  "Operating Systems (OS)",
  "Computer Networks (CN)",
  "System Design (LLD / HLD)",
  "Microservices Architecture"
];

export const skillsCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava, color: "text-red-400" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "C", icon: SiC, color: "text-blue-300" }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "Tailwind", icon: FaCss3Alt, color: "text-blue-500" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
      { name: "Microservices", icon: FaCubes, color: "text-purple-400" }
    ]
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
      { name: "Redis", icon: SiRedis, color: "text-red-500" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-400" }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-blue-500" },
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-purple-300" },
      { name: "Postman", icon: SiPostman, color: "text-orange-400" },
      { name: "Vercel", icon: SiVercel, color: "text-white" },
      { name: "Render", icon: SiRender, color: "text-cyan-300" }
    ]
  },
  {
    title: "Core CS & Architecture",
    skills: [
      { name: "System Design", icon: FaProjectDiagram, color: "text-amber-400" },
      { name: "DSA", icon: FaCode, color: "text-blue-400" },
      { name: "OOP", icon: FaLaptopCode, color: "text-indigo-400" },
      { name: "DBMS", icon: FaDatabase, color: "text-green-400" },
      { name: "OS", icon: FaServer, color: "text-teal-400" },
      { name: "Networks", icon: FaServer, color: "text-sky-400" }
    ]
  }
];

export const projectsData = [
  {
    id: "campus-olx",
    title: "Campus-OLX",
    badge: "MERN Marketplace",
    description: "Campus marketplace platform with JWT authentication, admin dashboard, and Lost & Found module.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT Auth", "REST APIs"],
    features: [
      "JWT-based user authentication & authorization",
      "Comprehensive Admin dashboard for listing moderation",
      "Dedicated Lost & Found module for campus students"
    ],
    liveDemo: "https://campus-olx-three.vercel.app/",
    github: "https://github.com/Mayank-2027/Campus-Olx",
    featured: true
  },
  {
    id: "chatty",
    title: "Chatty",
    badge: "Real-Time Systems",
    description: "Real-time chat application using MERN stack and WebSockets for seamless low-latency communication.",
    tech: ["MERN Stack", "Socket.io", "WebSockets", "Tailwind CSS", "JWT"],
    features: [
      "Secure instant user authentication",
      "Real-time instant messaging with low latency",
      "Online status tracking and message history"
    ],
    liveDemo: "https://chat-app-0zlz.onrender.com/",
    github: "https://github.com/Mayank-2027/Chat-App-",
    featured: true
  },
  {
    id: "notes-app",
    title: "Notes App",
    badge: "Full-Stack CRUD",
    description: "Secure note-taking application with CRUD functionality, tag filtering, and user authentication.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    features: [
      "Full CRUD operations for personal notes",
      "Protected routes with JWT authentication",
      "Responsive clean workspace UI"
    ],
    liveDemo: "https://notes-app-phi-sable.vercel.app/",
    github: "https://github.com/Mayank-2027/Notes-App",
    featured: true
  },
  {
    id: "ai-tumor-detection",
    title: "AI Tumor Detection System",
    badge: "Hackathon Winner",
    highlightBadge: "Winner – Campus Hackathon (Best in Domain)",
    description: "Hackathon-winning project integrating AI MRI analysis model with a full-stack MERN web application.",
    tech: ["Python / AI", "MERN Stack", "Deep Learning API", "React", "Node.js"],
    features: [
      "Seamless integration of AI MRI analysis backend with MERN",
      "High accuracy diagnostic visualization interface",
      "Awarded Best in Domain at Campus Hackathon"
    ],
    liveDemo: null, // As per spec: GitHub only for AI Tumor Detection
    github: "https://github.com/Mayank-2027/Codenonauts",
    featured: true
  }
];

export const achievementsData = [
  {
    title: "Campus Hackathon Winner",
    subtitle: "Best in Domain",
    event: "Jabalpur Engineering College Annual Hackathon",
    description: "Secured 1st Place (Best in Domain) for developing an AI-driven MRI Tumor Detection System integrated into a MERN web workflow.",
    date: "2024",
    icon: "trophy"
  }
];
