export interface Technology {
  name: string;
  icon: string;
  category: string;
  color: string;
}

const coreServices = [
  {
    id: "web",
    title: "Software Development",
    description: "Flexible & specialized software outsourcing solutions.",
    // image: "/assets/images/software-development-rafiki.png",
    image: "/assets/images/services/swcs.jpg",
    features: [
      "Provision of expert teams: Developers, Testers, BAs, PMs as per project requirements",
      "Custom software development: websites, mobile apps, internal systems",
      "Key sectors: Fintech, Banking & Finance, Telecommunications, Big Data",
      "Working models: Offshore, Onsite, Hybrid",
      "Web portals and dashboards",
      "Independent testing services (Manual & Automation)",
    ],
    technologies: [
      "Angular",
      "Next.js",
      "Vue.js",
      "Node.js",
      "React",
      "Oracle",
      "MySQL",
      "SQL",
      "Java Spring Boot",
    ],
  },
  {
    id: "cybersecurity-services",
    title: "Cybersecurity services",
    description:
      "We provide comprehensive network security solutions to protect your digital assets and ensure business continuity.",
    image: "/assets/images/services/cbss.jpg",
    features: [
      "24/7 SECURITY MONITORING",
      "THREAT HUNTING",
      "THREAT INTELLIGENCE",
      "INCIDENT RESPONSE",
      "Security Optimization",
    ],
    technologies: [],
  },
  {
    id: "digital-infrastructure-service",
    title: "Digital Infrastructure Service",
    description:
      "A Digital Infrastructure Service delivers the core technology—hardware, software, networks, and facilities—that enables reliable, secure, and scalable digital operations.",
    image: "/assets/images/services/infracs.jpg",
    features: [
      "Data Center Management",
      "Multi-cloud management",
      "Service Management",
      "Managed security",
      "Networks",
    ],
    technologies: [],
  },
];

const blogPosts = [
  {
    id: "1",
    title: "10 Best Practices for Modern Web Development in 2023",
    excerpt:
      "Discover the essential best practices that will help you build more efficient, maintainable, and scalable web applications in 2023 and beyond.",
    date: "June 15, 2023",
    author: "Alex Johnson",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min",
    comments: 24,
  },
  {
    id: "2",
    title: "How AI is Transforming Software Development",
    excerpt:
      "Artificial Intelligence is revolutionizing how we build software. Learn how AI-powered tools can improve your development workflow and code quality.",
    date: "July 22, 2023",
    author: "Maria Garcia",
    category: "AI & Technology",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "6 min",
    comments: 18,
  },
  {
    id: "3",
    title: "The Complete Guide to Mobile App Performance Optimization",
    excerpt:
      "Slow mobile apps lead to user frustration and abandonment. This comprehensive guide covers everything you need to know about optimizing your mobile app's performance.",
    date: "August 10, 2023",
    author: "David Kim",
    category: "Mobile Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "10 min",
    comments: 32,
  },
  {
    id: "4",
    title: "Microservices vs. Monoliths: Choosing the Right Architecture",
    excerpt:
      "The debate between microservices and monolithic architectures continues. We break down the pros and cons of each approach to help you make the right decision for your project.",
    date: "September 5, 2023",
    author: "Sarah Williams",
    category: "Architecture",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min",
    comments: 15,
  },
  {
    id: "5",
    title: "Securing Your Web Applications: A Developer's Guide",
    excerpt:
      "Security should never be an afterthought. Learn the essential techniques and practices to protect your web applications from common vulnerabilities and attacks.",
    date: "October 18, 2023",
    author: "James Chen",
    category: "Security",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "9 min",
    comments: 27,
  },
  {
    id: "6",
    title: "The Future of Frontend Development: What to Expect in 2024",
    excerpt:
      "Frontend development is evolving rapidly. Discover the emerging trends, tools, and technologies that will shape the future of frontend development in the coming year.",
    date: "November 3, 2023",
    author: "Emily Rodriguez",
    category: "Frontend",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "5 min",
    comments: 21,
  },
  {
    id: "7",
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    excerpt:
      "Accessibility is crucial for creating inclusive web experiences. Learn how to build web applications that are accessible to everyone, including people with disabilities.",
    date: "November 20, 2023",
    author: "Michael Chen",
    category: "Accessibility",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "11 min",
    comments: 19,
  },
  {
    id: "8",
    title: "DevOps Best Practices for Small Teams",
    excerpt:
      "You don't need a large team to implement effective DevOps practices. This guide shows how small teams can leverage DevOps to improve their development workflow.",
    date: "December 7, 2023",
    author: "Jessica Martinez",
    category: "DevOps",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "7 min",
    comments: 14,
  },
  {
    id: "9",
    title: "Introduction to WebAssembly for JavaScript Developers",
    excerpt:
      "WebAssembly is changing how we think about web performance. This introduction helps JavaScript developers understand and start using WebAssembly in their projects.",
    date: "January 15, 2024",
    author: "David Kim",
    category: "Web Development",
    image: "/placeholder.svg?height=400&width=600",
    readTime: "8 min",
    comments: 11,
  },
];

const technologies: Technology[] = [
  {
    name: "React",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Frontend",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Frontend",
    color: "#000000",
  },
  {
    name: "Vue.js",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Frontend",
    color: "#4FC08D",
  },
  {
    name: "Angular",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Frontend",
    color: "#DD0031",
  },
  {
    name: "TypeScript",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Language",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Language",
    color: "#F7DF1E",
  },
  {
    name: "Node.js",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Backend",
    color: "#339933",
  },
  {
    name: "Python",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Backend",
    color: "#3776AB",
  },
  {
    name: "Java",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Backend",
    color: "#ED8B00",
  },
  {
    name: "Go",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Backend",
    color: "#00ADD8",
  },
  {
    name: "React Native",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Mobile",
    color: "#61DAFB",
  },
  {
    name: "Flutter",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Mobile",
    color: "#02569B",
  },
  {
    name: "Swift",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Mobile",
    color: "#FA7343",
  },
  {
    name: "Kotlin",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Mobile",
    color: "#7F52FF",
  },
  {
    name: "PostgreSQL",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Database",
    color: "#336791",
  },
  {
    name: "MongoDB",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Database",
    color: "#47A248",
  },
  {
    name: "Redis",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Database",
    color: "#DC382D",
  },
  {
    name: "MySQL",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Database",
    color: "#4479A1",
  },
  {
    name: "AWS",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Cloud",
    color: "#FF9900",
  },
  {
    name: "Azure",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Cloud",
    color: "#0078D4",
  },
  {
    name: "Google Cloud",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Cloud",
    color: "#4285F4",
  },
  {
    name: "Docker",
    icon: "/placeholder.svg?height=40&width=40",
    category: "DevOps",
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    icon: "/placeholder.svg?height=40&width=40",
    category: "DevOps",
    color: "#326CE5",
  },
  {
    name: "GitHub",
    icon: "/placeholder.svg?height=40&width=40",
    category: "Tools",
    color: "#181717",
  },
];

export { coreServices, blogPosts, technologies };
