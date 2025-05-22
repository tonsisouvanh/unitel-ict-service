// Mock data for projects
// In a real application, this would likely come from a CMS, API, or database

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectVideo {
  src: string;
  poster?: string;
  type: string;
}

export interface ProjectTechnology {
  name: string;
  icon?: string;
  color?: string;
}

export interface ProjectLink {
  title: string;
  url: string;
  type: "live" | "github" | "documentation" | "case-study" | "other";
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  date: string;
  duration: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  images: ProjectImage[];
  videos?: ProjectVideo[];
  technologies: ProjectTechnology[];
  links: ProjectLink[];
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    subtitle: "A full-featured online shopping experience",
    client: "RetailTech Inc.",
    date: "2023",
    duration: "6 months",
    category: "Web Development",
    description:
      "A comprehensive e-commerce platform built with Next.js, featuring product management, user authentication, shopping cart functionality, payment processing, and order management.",
    challenge:
      "RetailTech needed a scalable e-commerce solution that could handle thousands of products and provide a seamless shopping experience across all devices. Their existing platform was outdated and couldn't support their growing business needs.",
    solution:
      "We developed a custom e-commerce platform using Next.js for the frontend and a headless CMS for content management. The application features server-side rendering for optimal performance and SEO, a responsive design for all devices, and integration with popular payment gateways.",
    outcome:
      "The new platform resulted in a 45% increase in mobile conversions, a 30% reduction in cart abandonment, and significantly improved page load times. The client reported a 25% increase in overall sales within the first three months after launch.",
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&text=E-Commerce Homepage",
        alt: "E-Commerce Platform Homepage",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Product Listing",
        alt: "Product Listing Page",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Shopping Cart",
        alt: "Shopping Cart Interface",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Checkout Process",
        alt: "Checkout Process",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Admin Dashboard",
        alt: "Admin Dashboard",
        width: 800,
        height: 600,
      },
    ],
    videos: [
      {
        src: "https://www.youtube.com/watch?v=qVEEpUvl0Kw",
        poster: "/placeholder.svg?height=400&width=700&text=Video Thumbnail",
        type: "video/mp4",
      },
    ],
    technologies: [
      { name: "Next.js", color: "#000000" },
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Stripe", color: "#6772E5" },
      { name: "MongoDB", color: "#47A248" },
      { name: "Vercel", color: "#000000" },
    ],
    links: [
      {
        title: "Live Site",
        url: "https://example-ecommerce.com",
        type: "live",
      },
      {
        title: "GitHub Repository",
        url: "https://github.com/example/ecommerce",
        type: "github",
      },
      {
        title: "Case Study",
        url: "https://example.com/case-studies/ecommerce",
        type: "case-study",
      },
    ],
    featured: true,
    testimonial: {
      quote:
        "The team at TechNova delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and focus on user experience has transformed our online business.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "RetailTech Inc.",
    },
  },
  {
    id: "2",
    slug: "healthcare-management-system",
    title: "Healthcare Management System",
    subtitle: "Streamlining patient care and administrative processes",
    client: "MediCare Solutions",
    date: "2022",
    duration: "9 months",
    category: "Custom Software",
    description:
      "A comprehensive healthcare management system that integrates patient records, appointment scheduling, billing, and inventory management into a single, secure platform.",
    challenge:
      "MediCare Solutions needed to replace multiple disconnected systems with a unified solution that could improve efficiency, reduce errors, and enhance patient care while maintaining strict compliance with healthcare regulations.",
    solution:
      "We developed a custom healthcare management system with role-based access control, electronic health records (EHR) management, automated appointment reminders, integrated billing, and comprehensive reporting. The system was built with security and compliance as top priorities.",
    outcome:
      "The new system reduced administrative time by 35%, decreased billing errors by 40%, and improved patient satisfaction scores by 25%. The client was able to achieve HIPAA compliance and streamline their entire operation.",
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&text=Healthcare Dashboard",
        alt: "Healthcare Management Dashboard",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Patient Records",
        alt: "Patient Records Interface",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Appointment Scheduling",
        alt: "Appointment Scheduling System",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Billing Module",
        alt: "Billing and Insurance Module",
        width: 800,
        height: 600,
      },
    ],
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "Node.js", color: "#339933" },
      { name: "PostgreSQL", color: "#336791" },
      { name: "Express", color: "#000000" },
      { name: "Docker", color: "#2496ED" },
      { name: "AWS", color: "#FF9900" },
      { name: "Socket.io", color: "#010101" },
    ],
    links: [
      {
        title: "Case Study",
        url: "https://example.com/case-studies/healthcare",
        type: "case-study",
      },
      {
        title: "Documentation",
        url: "https://docs.example.com/healthcare-system",
        type: "documentation",
      },
    ],
    featured: true,
    testimonial: {
      quote:
        "The healthcare management system developed by TechNova has revolutionized our operations. Our staff can now focus more on patient care rather than administrative tasks.",
      author: "Dr. Michael Chen",
      position: "CEO",
      company: "MediCare Solutions",
    },
  },
  {
    id: "3",
    slug: "financial-analytics-dashboard",
    title: "Financial Analytics Dashboard",
    subtitle: "Data-driven insights for financial decision making",
    client: "Global Investments Ltd.",
    date: "2023",
    duration: "4 months",
    category: "Data Visualization",
    description:
      "An interactive financial analytics dashboard that provides real-time insights into market trends, portfolio performance, and investment opportunities.",
    challenge:
      "Global Investments needed a way to visualize complex financial data in an intuitive manner, allowing their analysts and clients to make informed investment decisions quickly.",
    solution:
      "We created a responsive dashboard with interactive charts, customizable widgets, and automated reporting features. The solution integrates with multiple financial data sources and provides real-time updates and alerts.",
    outcome:
      "The dashboard reduced analysis time by 60% and improved decision-making accuracy by 40%. Clients reported higher satisfaction with the transparency and accessibility of their investment information.",
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&text=Financial Dashboard",
        alt: "Financial Analytics Dashboard Overview",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Performance Metrics",
        alt: "Performance Metrics Visualization",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Market Trends",
        alt: "Market Trends Analysis",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Portfolio Management",
        alt: "Portfolio Management Interface",
        width: 800,
        height: 600,
      },
    ],
    technologies: [
      { name: "React", color: "#61DAFB" },
      { name: "D3.js", color: "#F9A03C" },
      { name: "Python", color: "#3776AB" },
      { name: "FastAPI", color: "#009688" },
      { name: "Redis", color: "#DC382D" },
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "Google Cloud", color: "#4285F4" },
    ],
    links: [
      {
        title: "Demo",
        url: "https://demo.example.com/financial-dashboard",
        type: "live",
      },
      {
        title: "Case Study",
        url: "https://example.com/case-studies/financial-analytics",
        type: "case-study",
      },
    ],
    featured: false,
  },
  {
    id: "4",
    slug: "mobile-fitness-app",
    title: "Mobile Fitness Application",
    subtitle: "Personalized workout and nutrition tracking",
    client: "FitLife Innovations",
    date: "2022",
    duration: "5 months",
    category: "Mobile Development",
    description:
      "A comprehensive fitness application that provides personalized workout plans, nutrition tracking, progress monitoring, and social features to keep users motivated.",
    challenge:
      "FitLife wanted to create a mobile app that would stand out in the crowded fitness market by offering truly personalized experiences and fostering a community of users.",
    solution:
      "We developed a cross-platform mobile application with AI-driven workout recommendations, detailed progress tracking, nutrition analysis, and social features. The app integrates with popular fitness wearables and provides actionable insights based on user data.",
    outcome:
      "The app achieved over 100,000 downloads in the first three months, with a 4.8/5 rating on app stores. User retention rates were 45% higher than industry average, and premium subscription conversion exceeded targets by 30%.",
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&text=Fitness App Home",
        alt: "Fitness App Home Screen",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Workout Tracking",
        alt: "Workout Tracking Interface",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Nutrition Analysis",
        alt: "Nutrition Analysis Dashboard",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Progress Charts",
        alt: "User Progress Visualization",
        width: 800,
        height: 600,
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Community Features",
        alt: "Community and Social Features",
        width: 800,
        height: 600,
      },
    ],
    videos: [
      {
        src: "https://example.com/videos/fitness-app-demo.mp4",
        poster: "/placeholder.svg?height=400&width=700&text=App Demo Thumbnail",
        type: "video/mp4",
      },
    ],
    technologies: [
      { name: "React Native", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Firebase", color: "#FFCA28" },
      { name: "Redux", color: "#764ABC" },
      { name: "Node.js", color: "#339933" },
      { name: "MongoDB", color: "#47A248" },
      { name: "TensorFlow Lite", color: "#FF6F00" },
    ],
    links: [
      {
        title: "App Store",
        url: "https://apps.apple.com/example/fitness-app",
        type: "live",
      },
      {
        title: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.example.fitnessapp",
        type: "live",
      },
      {
        title: "Case Study",
        url: "https://example.com/case-studies/fitness-app",
        type: "case-study",
      },
    ],
    featured: true,
    testimonial: {
      quote:
        "Working with TechNova on our fitness app was a game-changer. Their technical expertise and understanding of user experience helped us create an app that our users love.",
      author: "Jessica Martinez",
      position: "Product Director",
      company: "FitLife Innovations",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject) return [];

  return projects
    .filter(
      (project) =>
        project.slug !== currentSlug &&
        project.category === currentProject.category
    )
    .slice(0, limit);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );
  if (currentIndex === -1) return undefined;

  const nextIndex = (currentIndex + 1) % projects.length;
  return projects[nextIndex];
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex(
    (project) => project.slug === currentSlug
  );
  if (currentIndex === -1) return undefined;

  const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
  return projects[previousIndex];
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projects.filter((project) => project.featured).slice(0, limit);
}
