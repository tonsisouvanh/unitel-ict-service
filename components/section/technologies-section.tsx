"use client";

import type React from "react";

import {
  motion,
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import Image from "next/image";
import { useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Info } from "lucide-react";
import { useAnimation } from "@/lib/provider/animation-provider";

// Enhanced technology interface with more detailed information
interface Technology {
  name: string;
  logo: string;
  description: string;
  features?: string[];
  website?: string;
}

interface TechnologyCategory {
  name: string;
  icon: React.ReactNode;
  color: string;
  technologies: Technology[];
}

export function TechnologiesSection() {
  const { ref, inView } = useAnimation("technologies");
  const isMobile = useIsMobile();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Mouse position for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightSize = useMotionValue(0);
  const spotlightOpacity = useMotionValue(0);

  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      ${spotlightSize}px circle at ${mouseX}px ${mouseY}px,
      rgba(249, 115, 22, 0.15),
      transparent 80%
    )
  `;

  // Technology categories with enhanced data
  const technologyCategories: TechnologyCategory[] = [
    {
      name: "Frontend",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12h10"></path>
          <path d="m12 2 10 10-10 10"></path>
        </svg>
      ),
      color: "#3B82F6",
      technologies: [
        {
          name: "Angular",
          logo: "/assets/svg/angular.svg",
          description:
            "Platform for building mobile and desktop web applications",
          features: [
            "Two-way data binding",
            "Dependency injection",
            "TypeScript integration",
            "RxJS",
          ],
          website: "https://angular.io",
        },
        {
          name: "React",
          logo: "/assets/svg/reactjs.svg",
          description: "A JavaScript library for building user interfaces",
          features: [
            "Component-based",
            "Virtual DOM",
            "JSX syntax",
            "React Hooks",
          ],
          website: "https://reactjs.org",
        },
        {
          name: "Next.js",
          logo: "/assets/svg/nextjs.svg",
          description: "The React framework for production",
          features: [
            "Server-side rendering",
            "Static site generation",
            "API routes",
            "File-based routing",
          ],
          website: "https://nextjs.org",
        },
        {
          name: "TypeScript",
          logo: "/assets/svg/typescript.svg",
          description:
            "Typed superset of JavaScript that compiles to plain JavaScript",
          features: [
            "Static typing",
            "Type inference",
            "Interfaces",
            "Generics",
          ],
          website: "https://www.typescriptlang.org",
        },
        {
          name: "Vue.js",
          logo: "/assets/svg/vuejs.svg",
          description: "Progressive JavaScript framework for building UIs",
          features: [
            "Component system",
            "Reactive data binding",
            "Virtual DOM",
            "Directives",
          ],
          website: "https://vuejs.org",
        },
      ],
    },
    {
      name: "Backend",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
          <line x1="6" x2="6" y1="6" y2="6"></line>
          <line x1="6" x2="6" y1="18" y2="18"></line>
        </svg>
      ),
      color: "#10B981",
      technologies: [
        {
          name: "Node.js",
          logo: "/assets/svg/nodejs.svg", // Updated logo path based on typical naming
          description:
            "JavaScript runtime built on Chrome's V8 JavaScript engine for scalable network applications.",
          features: [
            "Event-driven, non-blocking I/O",
            "npm ecosystem",
            "Cross-platform",
            "High performance for real-time applications",
          ],
          website: "https://nodejs.org",
        },
        {
          name: "Java",
          logo: "/assets/svg/java.svg", // Updated logo path
          description:
            "Object-oriented programming language designed for platform independence and enterprise-level applications.",
          features: [
            "Write Once, Run Anywhere (WORA)",
            "Robust memory management",
            "High security features",
            "Extensive ecosystem with frameworks like Spring",
          ],
          website: "https://www.java.com",
        },
        {
          name: "PHP",
          logo: "/assets/svg/php.svg", // Added PHP based on the image
          description:
            "A popular general-purpose scripting language especially suited to web development.",
          features: [
            "Server-side scripting",
            "Large community and frameworks (Laravel, Symfony)",
            "Database integration",
            "Cross-platform compatibility",
          ],
          website: "https://www.php.net",
        },
        {
          name: "Microsoft .NET",
          logo: "/assets/svg/ms-dotnet.svg", // Added .NET based on the image, using a common naming
          description:
            "A free, cross-platform, open-source developer platform for building many different types of applications.",
          features: [
            "Multi-language support (C#, F#, VB.NET)",
            "Cross-platform development",
            "High performance and scalability",
            "Rich set of libraries and tools",
          ],
          website: "https://dotnet.microsoft.com/",
        },
        {
          name: "C++",
          logo: "/assets/svg/cpp.svg", // Added C++ based on the image
          description:
            "A powerful, high-performance programming language used for system programming, game development, and embedded systems.",
          features: [
            "Performance and efficiency",
            "Object-oriented programming",
            "Memory control",
            "Large standard library",
          ],
          website: "https://isocpp.org/",
        },
      ],
    },
    {
      name: "Database",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      color: "#F59E0B",
      technologies: [
        {
          name: "PostgreSQL",
          logo: "/assets/svg/postgresql.svg",
          description:
            "Powerful, open source object-relational database system known for its strong compliance to standards and reliability.",
          features: [
            "ACID compliance",
            "JSON support",
            "Extensible",
            "Multi-version concurrency control",
          ],
          website: "https://www.postgresql.org",
        },
        {
          name: "MongoDB",
          logo: "/assets/svg/mongodb.svg",
          description:
            "Document-oriented NoSQL database used for high volume data storage and flexible data models.",
          features: [
            "Document model",
            "Horizontal scaling",
            "Aggregation framework",
            "Flexible schema",
          ],
          website: "https://www.mongodb.com",
        },
        {
          name: "MySQL",
          logo: "/assets/svg/mysql.svg",
          description:
            "The world's most popular open-source relational database management system.",
          features: [
            "Replication",
            "Partitioning",
            "Stored procedures",
            "Triggers",
          ],
          website: "https://www.mysql.com",
        },
        {
          name: "Oracle Database",
          logo: "/assets/svg/oracle.svg", // Changed to match "oracle.svg" from the image
          description:
            "A multi-model database management system produced and marketed by Oracle Corporation.",
          features: [
            "High availability",
            "Scalability",
            "Security",
            "Data warehousing",
          ],
          website: "https://www.oracle.com/database/",
        },
        {
          name: "Microsoft SQL Server",
          logo: "/assets/svg/sql.svg", // Changed to match "sql.svg" from the image, assuming it represents generic SQL or MS SQL Server
          description:
            "A relational database management system developed by Microsoft.",
          features: [
            "Business intelligence",
            "Data warehousing",
            "Advanced analytics",
            "High performance",
          ],
          website: "https://www.microsoft.com/en-us/sql-server",
        },
        {
          name: "Apache Hadoop",
          logo: "/assets/svg/hadoop.svg", // Changed to match "hadoop.svg" from the image
          description:
            "An open-source software framework for storing data and running applications on clusters of commodity hardware.",
          features: [
            "Distributed storage (HDFS)",
            "Distributed processing (MapReduce)",
            "Scalability",
            "Fault tolerance",
          ],
          website: "https://hadoop.apache.org/",
        },
      ],
    },
    // {
    //   name: "DevOps",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
    //       <path d="M12 3a6 6 0 0 1-9 9 9 9 0 0 0 9 9Z"></path>
    //     </svg>
    //   ),
    //   color: "#8B5CF6",
    //   technologies: [
    //     {
    //       name: "Docker",
    //       logo: "/placeholder.svg?height=64&width=64&text=Docker",
    //       description:
    //         "Platform for developing, shipping, and running applications in containers",
    //       features: [
    //         "Containerization",
    //         "Docker Compose",
    //         "Docker Swarm",
    //         "Docker Hub",
    //       ],
    //       website: "https://www.docker.com",
    //     },
    //     {
    //       name: "Kubernetes",
    //       logo: "/placeholder.svg?height=64&width=64&text=K8s",
    //       description:
    //         "Open-source system for automating deployment, scaling, and management of containerized applications",
    //       features: [
    //         "Container orchestration",
    //         "Service discovery",
    //         "Auto-scaling",
    //         "Self-healing",
    //       ],
    //       website: "https://kubernetes.io",
    //     },
    //     {
    //       name: "GitHub Actions",
    //       logo: "/placeholder.svg?height=64&width=64&text=GH Actions",
    //       description:
    //         "CI/CD platform that allows you to automate your build, test, and deployment pipeline",
    //       features: [
    //         "Workflow automation",
    //         "Matrix builds",
    //         "Environment secrets",
    //         "Artifacts",
    //       ],
    //       website: "https://github.com/features/actions",
    //     },
    //     {
    //       name: "Terraform",
    //       logo: "/placeholder.svg?height=64&width=64&text=Terraform",
    //       description:
    //         "Infrastructure as code software tool that enables you to safely and predictably create, change, and improve infrastructure",
    //       features: [
    //         "Infrastructure as code",
    //         "Multi-cloud",
    //         "State management",
    //         "Modules",
    //       ],
    //       website: "https://www.terraform.io",
    //     },
    //     {
    //       name: "AWS",
    //       logo: "/placeholder.svg?height=64&width=64&text=AWS",
    //       description: "Cloud computing platform provided by Amazon",
    //       features: ["EC2", "S3", "Lambda", "RDS"],
    //       website: "https://aws.amazon.com",
    //     },
    //     {
    //       name: "Azure",
    //       logo: "/placeholder.svg?height=64&width=64&text=Azure",
    //       description: "Cloud computing service created by Microsoft",
    //       features: [
    //         "Virtual Machines",
    //         "App Service",
    //         "Azure Functions",
    //         "Cosmos DB",
    //       ],
    //       website: "https://azure.microsoft.com",
    //     },
    //   ],
    // },
    {
      name: "Cloud & AI",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 18h.01"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path>
          <path d="M12 10V6"></path>
          <path d="M10 8l2-2 2 2"></path>
        </svg>
      ),
      color: "#34D399", // A common color for cloud/AI, you can adjust this
      technologies: [
        {
          name: "Google Cloud",
          logo: "/assets/svg/google-cloud.svg",
          description:
            "A suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.",
          features: [
            "Global network",
            "Machine learning capabilities",
            "Big data analytics",
            "Serverless computing",
          ],
          website: "https://cloud.google.com",
        },
        {
          name: "OpenAI",
          logo: "/assets/svg/openai.svg",
          description:
            "An AI research and deployment company that aims to ensure that artificial general intelligence benefits all of humanity.",
          features: [
            "Generative AI models (GPT)",
            "Image generation (DALL-E)",
            "API access for developers",
            "Reinforcement learning research",
          ],
          website: "https://openai.com",
        },
        {
          name: "AWS (Amazon Web Services)",
          logo: "/assets/svg/aws.svg",
          description:
            "The world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services.",
          features: [
            "Extensive service portfolio",
            "Global infrastructure",
            "Scalability and reliability",
            "Strong security features",
          ],
          website: "https://aws.amazon.com",
        },
        {
          name: "LangChain",
          logo: "/assets/svg/langchain.svg",
          description:
            "A framework designed to simplify the creation of applications using large language models (LLMs).",
          features: [
            "Modular components",
            "Chainable agents",
            "Integrations with various LLMs",
            "Application development for LLMs",
          ],
          website: "https://www.langchain.com",
        },
        {
          name: "NVIDIA",
          logo: "/assets/svg/nvidia.svg",
          description:
            "A global technology company that designs graphics processing units (GPUs) for the gaming, professional visualization, data center, and automotive markets.",
          features: [
            "GPU accelerated computing",
            "AI development platforms (CUDA, cuDNN)",
            "Deep learning frameworks support",
            "Data science tools",
          ],
          website: "https://www.nvidia.com",
        },
        {
          name: "Streamlit",
          logo: "/assets/svg/streamlit.svg",
          description:
            "An open-source app framework for Machine Learning and Data Science teams.",
          features: [
            "Turn data scripts into web apps",
            "Interactive widgets",
            "Simple API",
            "Rapid prototyping",
          ],
          website: "https://streamlit.io",
        },
        {
          name: "Azure (Microsoft Azure)",
          logo: "/assets/svg/msazure.svg",
          description:
            "A cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services.",
          features: [
            "Hybrid cloud capabilities",
            "Extensive AI and machine learning services",
            "Strong enterprise focus",
            "Integrated development tools",
          ],
          website: "https://azure.microsoft.com",
        },
      ],
    },
    // {
    //   name: "AI & ML",
    //   icon: (
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //     >
    //       <path d="M12 2v8"></path>
    //       <path d="m4.93 10.93 1.41 1.41"></path>
    //       <path d="M2 18h2"></path>
    //       <path d="M20 18h2"></path>
    //       <path d="m19.07 10.93-1.41 1.41"></path>
    //       <path d="M22 22H2"></path>
    //       <path d="m16 6-4 4-4-4"></path>
    //       <path d="M16 18a4 4 0 0 0-8 0"></path>
    //     </svg>
    //   ),
    //   color: "#06B6D4",
    //   technologies: [
    //     {
    //       name: "TensorFlow",
    //       logo: "/placeholder.svg?height=64&width=64&text=TensorFlow",
    //       description:
    //         "Open-source machine learning framework developed by Google",
    //       features: [
    //         "Neural networks",
    //         "Deep learning",
    //         "Model deployment",
    //         "TensorFlow.js",
    //       ],
    //       website: "https://www.tensorflow.org",
    //     },
    //     {
    //       name: "PyTorch",
    //       logo: "/placeholder.svg?height=64&width=64&text=PyTorch",
    //       description:
    //         "Open source machine learning library based on the Torch library",
    //       features: [
    //         "Dynamic computation graph",
    //         "GPU acceleration",
    //         "Python integration",
    //         "Research-friendly",
    //       ],
    //       website: "https://pytorch.org",
    //     },
    //     {
    //       name: "OpenAI",
    //       logo: "/placeholder.svg?height=64&width=64&text=OpenAI",
    //       description:
    //         "AI research laboratory consisting of the for-profit corporation OpenAI LP and its parent company",
    //       features: ["GPT models", "DALL-E", "API access", "Fine-tuning"],
    //       website: "https://openai.com",
    //     },
    //     {
    //       name: "Hugging Face",
    //       logo: "/placeholder.svg?height=64&width=64&text=HF",
    //       description:
    //         "AI community building the future of AI with open source",
    //       features: ["Transformers", "Model hub", "Datasets", "Spaces"],
    //       website: "https://huggingface.co",
    //     },
    //     {
    //       name: "scikit-learn",
    //       logo: "/placeholder.svg?height=64&width=64&text=scikit-learn",
    //       description: "Machine learning library for Python",
    //       features: [
    //         "Classification",
    //         "Regression",
    //         "Clustering",
    //         "Dimensionality reduction",
    //       ],
    //       website: "https://scikit-learn.org",
    //     },
    //     {
    //       name: "LangChain",
    //       logo: "/placeholder.svg?height=64&width=64&text=LangChain",
    //       description:
    //         "Framework for developing applications powered by language models",
    //       features: ["Chains", "Agents", "Memory", "Document loaders"],
    //       website: "https://langchain.com",
    //     },
    //   ],
    // },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
    setHoveredTech(null);
    setShowTooltip(null);
  };

  const handleTechMouseEnter = (techName: string) => {
    if (isMobile) return;
    setHoveredTech(techName);
    spotlightSize.set(200);
    spotlightOpacity.set(0.15);
  };

  const handleTechMouseLeave = () => {
    if (isMobile) return;
    setHoveredTech(null);
    spotlightSize.set(0);
    spotlightOpacity.set(0);
  };

  const toggleTooltip = (techName: string | null) => {
    setShowTooltip(showTooltip === techName ? null : techName);
  };

  // Get the active category data
  const activeCategoryData =
    technologyCategories.find((cat) => cat.name === activeCategory) ||
    technologyCategories[0];

  return (
    <section
      id="technologies"
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 bg-color-1/3 dark:bg-gray-900 overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-color-1/5 dark:bg-color-1/10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#F97316]/5 dark:bg-[#F97316]/10 blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16 relative z-10"
        >
          <motion.div
            className="inline-block rounded-lg bg-color-1/10 px-3 py-1 text-sm text-color-1 dark:bg-color-1/20 dark:text-[#F5F5F5]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.4 }}
          >
            Our Tech Stack
          </motion.div>
          <motion.h2
            className="text-3xl font-bold tracking-tighter text-color-2 sm:text-5xl dark:text-[#F5F5F5]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technologies <span className="text-color-1">We Use</span>
          </motion.h2>
          <motion.p
            className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We leverage the latest technologies to build robust, scalable, and
            high-performance applications.
          </motion.p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {technologyCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => handleCategoryClick(category.name)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-color-1 text-white shadow-lg dark:bg-[#F97316]"
                  : "bg-white text-color-1 hover:bg-color-1/10 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={
                  activeCategory === category.name
                    ? "text-white"
                    : `text-[${category.color}]`
                }
              >
                {category.icon}
              </span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Technology Grid with Spotlight Effect */}
        <motion.div
          className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => spotlightOpacity.set(0.15)}
          onMouseLeave={() => spotlightOpacity.set(0)}
        >
          {/* Spotlight effect */}
          <motion.div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background: spotlightBackground,
              opacity: spotlightOpacity,
            }}
          />

          {/* Category header */}
          <div
            className="p-6 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between"
            style={{ backgroundColor: `${activeCategoryData.color}15` }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: activeCategoryData.color }}
              >
                <span className="text-white">{activeCategoryData.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-color-1 dark:text-white">
                {activeCategoryData.name}
              </h3>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {activeCategoryData.technologies.length} technologies
            </div>
          </div>

          {/* Technologies grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {activeCategoryData.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`relative p-6 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-700 transition-all duration-300 ${
                  hoveredTech === tech.name
                    ? "bg-gray-50 dark:bg-gray-700/50 z-20"
                    : "bg-white dark:bg-gray-800"
                }`}
                variants={itemVariants}
                onMouseEnter={() => handleTechMouseEnter(tech.name)}
                onMouseLeave={handleTechMouseLeave}
              >
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={tech.logo || "/placeholder.svg"}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="object-contain transition-transform w-full h-full duration-300"
                    style={{
                      transform:
                        hoveredTech === tech.name ? "scale(1.1)" : "scale(1)",
                    }}
                  />
                </div>

                <h4 className="text-color-1 dark:text-white font-medium text-center mb-2">
                  {tech.name}
                </h4>

                <p className="text-xs text-gray-500 dark:text-gray-400 text-center line-clamp-2 mb-3">
                  {tech.description}
                </p>

                <button
                  onClick={() => toggleTooltip(tech.name)}
                  className="mt-auto text-[#F97316] hover:text-color-1 hidden dark:hover:text-white transition-colors duration-300 p-1 rounded-full"
                  aria-label={`More info about ${tech.name}`}
                >
                  <Info size={16} />
                </button>

                {/* Detailed tooltip */}
                <AnimatePresence>
                  {showTooltip === tech.name && (
                    <motion.div
                      ref={tooltipRef}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl z-30 p-4 border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 relative flex-shrink-0">
                          <Image
                            src={tech.logo || "/placeholder.svg"}
                            alt={tech.name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <h5 className="font-bold text-color-1 dark:text-white">
                          {tech.name}
                        </h5>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                        {tech.description}
                      </p>

                      {tech.features && tech.features.length > 0 && (
                        <div className="mb-3">
                          <h6 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">
                            Key Features:
                          </h6>
                          <div className="flex flex-wrap gap-1">
                            {tech.features.map((feature, i) => (
                              <span
                                key={i}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {tech.website && (
                        <a
                          href={tech.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-[#F97316] hover:text-color-1 dark:hover:text-white transition-colors duration-300 flex items-center gap-1"
                        >
                          Visit Website
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M7 7h10v10"></path>
                            <path d="M7 17 17 7"></path>
                          </svg>
                        </a>
                      )}

                      {/* Arrow pointing to the tech */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white dark:bg-gray-800 border-r border-b border-gray-200 dark:border-gray-700"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional technologies indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <motion.div
            className="inline-block rounded-full bg-gradient-to-r from-color-1 to-[#F97316] p-[2px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-900 rounded-full px-6 py-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-color-1 to-[#F97316] font-medium">
                And many more technologies in our stack
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
