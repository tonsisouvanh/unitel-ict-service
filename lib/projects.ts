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
  tags: any[];
  featured: boolean;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
}

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number; // Optional, as it might be handled by layout="fill"
  height?: number; // Optional
}

export interface ProjectVideo {
  src: string;
  poster: string;
  type: string;
}

export interface ProjectTechnology {
  name: string;
  color?: string; // Optional, if you want specific colors for technologies
  icon?: string; // Added for consistency with previous output
}

export interface ProjectLink {
  title: string;
  url: string;
  type: "live" | "github" | "case-study" | "documentation" | "download"; // Added 'download' type
}

// Helper to slugify titles (assuming you have a similar utility in your lib/utils)
const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -

export const projects: Project[] = [
  {
    id: "1",
    slug: slugify("U-Money App"),
    title: "U-Money App",
    subtitle: "Laos's leading e-wallet for seamless cashless transactions.",
    client: "Unitel (Laos)",
    date: "2019", // Launch year
    duration: "Ongoing development",
    category: "Mobile Application",
    description:
      "u-Money is a leading e-wallet application in Laos, launched in 2019, providing comprehensive cashless payment solutions. It facilitates fast money transfers, bill payments, mobile top-ups, online shopping, and QR code payments.",
    challenge:
      "To introduce and establish a secure, reliable, and widely adopted cashless payment ecosystem in Laos, addressing the need for convenient digital financial services.",
    solution:
      "Developed a robust and user-friendly mobile e-wallet application with multi-layer security features, including eKYC Liveness detection, and integrated diverse payment functionalities to cater to everyday needs.",
    outcome:
      "U-Money has successfully become a prominent digital wallet in Laos, significantly boosting financial inclusion and enabling a secure and efficient cashless society.",
    images: [
      {
        src: "/assets/images/projects/umoney/uma.jpeg",
        alt: "U-Money App Homepage",
      },
      {
        src: "/assets/images/projects/umoney/umb.png",
        alt: "U-Money Money Transfer",
      },
      {
        src: "/assets/images/projects/umoney/umc.png",
        alt: "U-Money QR Payment",
      },
      {
        src: "/assets/images/projects/umoney/umd.jpeg",
        alt: "U-Money QR Payment",
      },
      {
        src: "/assets/images/projects/umoney/ume.jpg",
        alt: "U-Money QR Payment",
      },
      {
        src: "/assets/images/projects/umoney/umf.png",
        alt: "U-Money QR Payment",
      },
      {
        src: "/assets/images/projects/umoney/umg.png",
        alt: "U-Money QR Payment",
      },
      {
        src: "/assets/images/projects/umoney/umh.png",
        alt: "U-Money QR Payment",
      },
      {
        src: "/assets/images/projects/umoney/umi.png",
        alt: "U-Money QR Payment",
      },
    ],
    videos: [
      // {
      //   src: "https://youtu.be/uK5aQIcYo2g", // Placeholder YouTube video URL
      //   poster: "/placeholder.svg?height=400&width=700&text=U-Money Demo",
      //   type: "video/mp4",
      // },
    ],
    technologies: [
      {
        name: "Mobile Development",
        icon: "/icons/mobile.svg",
        color: "#3498db",
      },
      { name: "FinTech", icon: "/icons/finance.svg", color: "#2ecc71" },
      {
        name: "Payment Gateway Integration",
        icon: "/icons/api.svg",
        color: "#f39c12",
      },
      {
        name: "eKYC & Biometrics",
        icon: "/icons/security.svg",
        color: "#e74c3c",
      },
    ],
    tags: ["Mobile Wallet", "FinTech", "Payment Gateway", "eKYC"],
    links: [
      {
        title: "Download on Google Play",
        url: "https://play.google.com/store/apps/details?id=com.umoney.enduser&hl=en",
        type: "download",
      },
      {
        title: "Download on App Store",
        url: "https://apps.apple.com/us/app/u-money/id1524617501",
        type: "download",
      },
    ],
    featured: true,
    testimonial: {
      quote:
        "U-Money has truly transformed the way people transact in Laos, providing unparalleled convenience and security.",
      author: "Mr. Phoutthasinh",
      position: "Head of Digital Finance",
      company: "Unitel",
    },
  },
  {
    id: "2",
    slug: slugify("Lao App (Super App)"),
    title: "Lao App (Super App)",
    subtitle: "The all-in-one super application for daily life in Laos.",
    client: "Unitel (Laos)",
    date: "2019", // Assuming around the same timeframe for initial conceptualization
    duration: "Ongoing development",
    category: "Mobile Application",
    description:
      "LaoApp is a multi-functional platform developed by Unitel, integrating numerous essential utilities into a single application to serve the diverse needs of the Laotian market. It offers messaging, video calls, entertainment, and more.",
    challenge:
      "To consolidate various essential services into one seamless and secure mobile application, fostering a comprehensive digital ecosystem for users in Laos.",
    solution:
      "Built a robust 'Super App' architecture, integrating secure messaging, high-quality voice/video calls, and a wide array of entertainment and utility services, focusing on user privacy and a multi-platform experience.",
    outcome:
      "LaoApp has become a central digital hub for millions of users, simplifying daily tasks and providing a rich, integrated experience across various services.",
    images: [
      {
        src: "/assets/images/projects/laoapp/lappa.png",
        alt: "Lao App Home Screen",
      },
      {
        src: "/assets/images/projects/laoapp/lappb.png",
        alt: "Lao App Messaging",
      },
      {
        src: "/assets/images/projects/laoapp/lappc.png",
        alt: "Lao App Entertainment",
      },
      {
        src: "/assets/images/projects/laoapp/lappd.png",
        alt: "Lao App Entertainment",
      },
      {
        src: "/assets/images/projects/laoapp/lappe.png",
        alt: "Lao App Entertainment",
      },
      {
        src: "/assets/images/projects/laoapp/lappf.png",
        alt: "Lao App Entertainment",
      },
      {
        src: "/assets/images/projects/laoapp/lappg.png",
        alt: "Lao App Entertainment",
      },
    ],
    tags: ["Super App", "Messaging", "Video Calls", "Entertainment"],
    videos: [],
    technologies: [
      { name: "React Native", icon: "/icons/react.svg", color: "#61DAFB" },
      { name: "Firebase", icon: "/icons/firebase.svg", color: "#FFCA28" },
      { name: "Cloud Computing", icon: "/icons/cloud.svg", color: "#FF9900" },
      {
        name: "Real-time Communication",
        icon: "/icons/chat.svg",
        color: "#00C4FF",
      },
    ],
    links: [
      {
        title: "Download LaoApp (Android)",
        url: "https://play.google.com/store/apps/details?id=com.unitel.mocha.app&hl=lo&pli=1",
        type: "download",
      }, // Placeholder
      {
        title: "Download LaoApp (iOS)",
        url: "https://apps.apple.com/us/app/laoapp/id1521185976",
        type: "download",
      }, // Placeholder
    ],
    featured: true,
    testimonial: {
      quote:
        "LaoApp has truly simplified my digital life in Laos. It's incredibly convenient to have so many services in one place!",
      author: "Ms. Saysana",
      position: "LaoApp User",
      company: "General Public",
    },
  },
  {
    id: "3",
    slug: slugify("Lao TV"),
    title: "Lao TV",
    subtitle:
      "Your digital gateway to diverse online television and video-on-demand.",
    client: "Unitel (Laos)",
    date: "2020", // Inferred launch year
    duration: "Ongoing development",
    category: "Media & Entertainment Platform",
    description:
      "LaoTV is a digital entertainment platform offering Over-The-Top (OTT) online television services and Video On Demand (VOD) content. It provides live viewing of domestic and international TV channels and a diverse digital content library.",
    challenge:
      "To deliver high-quality, diverse digital entertainment content across various devices in Laos, ensuring stable streaming and a rich user experience.",
    solution:
      "Developed a robust OTT platform with live TV streaming, a comprehensive VOD library, catch-up TV functionality, and unique features like multi-angle camera views for sports, ensuring broad accessibility and seamless viewing.",
    outcome:
      "LaoTV has become a popular entertainment destination, offering extensive local and international content, enhancing the digital media consumption experience for users in Laos.",
    images: [
      {
        src: "/assets/images/projects/laotv/laotva.png",
        alt: "LaoTV Homepage",
      },
      {
        src: "/assets/images/projects/laotv/laotvb.png",
        alt: "LaoTV Live Channels", // Example alt text
      },
      {
        src: "/assets/images/projects/laotv/laotvc.png",
        alt: "LaoTV VOD Content", // Example alt text
      },
      {
        src: "/assets/images/projects/laotv/laotvd.png",
        alt: "LaoTV Sports Section", // Example alt text
      },
      {
        src: "/assets/images/projects/laotv/laotvi.png",
        alt: "LaoTV User Profile", // Example alt text
      },
      {
        src: "/assets/images/projects/laotv/laotvj.png",
        alt: "LaoTV Settings", // Example alt text
      },
      {
        src: "/assets/images/projects/laotv/laotvk.png",
        alt: "LaoTV Search Interface", // Example alt text
      },
      {
        src: "/assets/images/projects/laotv/laotvl.png",
        alt: "LaoTV Featured Content", // Example alt text
      },
    ],
    videos: [],
    technologies: [
      { name: "OTT Streaming", icon: "/icons/video.svg", color: "#9b59b6" },
      {
        name: "Content Delivery Networks (CDN)",
        icon: "/icons/cloud.svg",
        color: "#34495e",
      },
      {
        name: "DRM (Digital Rights Management)",
        icon: "/icons/security.svg",
        color: "#c0392b",
      },
      {
        name: "Adaptive Bitrate Streaming",
        icon: "/icons/network.svg",
        color: "#1abc9c",
      },
    ],
    links: [
      { title: "Visit LaoTV Website", url: "https://laotv.la", type: "live" }, // Placeholder URL
    ],
    tags: ["OTT", "Streaming", "VOD", "Live TV"],
    featured: false,
    testimonial: {
      quote:
        "LaoTV offers an incredible array of content, from live sports to my favorite movies. It's truly a comprehensive entertainment solution.",
      author: "Mr. Bounmy",
      position: "LaoTV Subscriber",
      company: "General Public",
    },
  },
  {
    id: "4",
    slug: slugify("eKYC Solution"),
    title: "eKYC Solution",
    subtitle:
      "Advanced electronic Know Your Customer for secure and efficient identity verification.",
    client: "Unitel (Internal & Partners)",
    date: "2024", // Integration year
    duration: "Ongoing implementation & expansion",
    category: "Security & Identity Management",
    description:
      "Unitel's eKYC (Electronic Know Your Customer) solution was integrated into the LaoApp and u-Money applications from 2024. It aims to enhance security and convenience for customers by using AI-OCR and facial recognition technology.",
    challenge:
      "To streamline customer onboarding and identity verification processes while significantly reducing fraud and ensuring regulatory compliance in a digital-first environment.",
    solution:
      "Developed an cutting-edge eKYC system leveraging AI-powered Optical Character Recognition (OCR) and facial recognition with liveness detection, enabling rapid and secure online authentication and eSIM registration.",
    outcome:
      "The eKYC solution has dramatically accelerated user authentication, minimized fraudulent activities, and simplified the process of digital service registration for Unitel and its partners.",
    images: [
      {
        src: "/assets/images/projects/ekyc/ekyca.png",
        alt: "eKYC Solution Interface",
      },
      {
        src: "/assets/images/projects/ekyc/ekycb.png",
        alt: "eKYC AI-OCR Process",
      },
      {
        src: "/assets/images/projects/ekyc/ekycc.png",
        alt: "eKYC Facial Recognition",
      },
      {
        src: "/assets/images/projects/ekyc/ekycd.png",
        alt: "eKYC Facial Recognition",
      },
    ],
    tags: ["Security", "AI-OCR", "Facial Recognition", "Identity Verification"],
    videos: [],
    technologies: [
      {
        name: "Artificial Intelligence (AI)",
        icon: "/icons/ai.svg",
        color: "#FF6F00",
      },
      { name: "Machine Learning", icon: "/icons/ml.svg", color: "#FF6F00" },
      {
        name: "Biometric Authentication",
        icon: "/icons/fingerprint.svg",
        color: "#27ae60",
      },
      { name: "Data Security", icon: "/icons/lock.svg", color: "#34495e" },
    ],
    links: [
      {
        title: "Learn More",
        url: "https://ekyc.unitel.com.la/",
        type: "case-study",
      }, // Placeholder URL
    ],
    featured: true,
    testimonial: {
      quote:
        "The eKYC solution is a game-changer for digital onboarding. It's incredibly fast, accurate, and has significantly boosted our security.",
      author: "Dr. Somphone K.",
      position: "Chief Technology Officer",
      company: "Unitel",
    },
  },
  {
    id: "5",
    slug: slugify("Ushopping E-commerce System"),
    title: "Ushopping E-commerce System",
    subtitle:
      "Unitel's comprehensive online shopping platform for products and services.",
    client: "Unitel (Laos)",
    date: "2020", // Launch year
    duration: "Ongoing development",
    category: "E-commerce Platform",
    description:
      "Unitel's Ushopping e-commerce system provides a comprehensive online shopping solution, launched in 2020. It offers a wide range of products from electronic devices to SIM cards and IoT devices, with nationwide home delivery.",
    challenge:
      "To create a robust and user-friendly e-commerce platform capable of handling diverse product categories, secure payments, and efficient nationwide logistics.",
    solution:
      "Developed a full-fledged e-commerce system with seamless integration for online payments via u-Money, comprehensive product catalog management, attractive promotional features, and a dedicated 24/7 customer support system.",
    outcome:
      "Ushopping has become a key online sales channel for Unitel, expanding market reach, improving customer convenience, and driving significant digital sales growth.",
    images: [
      {
        src: "/assets/images/projects/ushopping/ushopa.png",
        alt: "Ushopping Homepage",
      },
      {
        src: "/assets/images/projects/ushopping/ushopb.png",
        alt: "Ushopping Product Listing",
      },
      {
        src: "/assets/images/projects/ushopping/ushopc.png",
        alt: "Ushopping Checkout Process",
      },
      {
        src: "/assets/images/projects/ushopping/ushopd.png",
        alt: "Ushopping Checkout Process",
      },
      {
        src: "/assets/images/projects/ushopping/ushope.png",
        alt: "Ushopping Checkout Process",
      },
      {
        src: "/assets/images/projects/ushopping/ushopf.png",
        alt: "Ushopping Checkout Process",
      },
    ],
    tags: ["E-commerce", "Online Shopping", "Delivery", "Promotions"],
    videos: [],
    technologies: [
      {
        name: "E-commerce Platform",
        icon: "/icons/cart.svg",
        color: "#e67e22",
      },
      { name: "Web Development", icon: "/icons/web.svg", color: "#3498db" },
      {
        name: "Payment Integration",
        icon: "/icons/payment.svg",
        color: "#27ae60",
      },
      {
        name: "Logistics Management",
        icon: "/icons/delivery.svg",
        color: "#f1c40f",
      },
    ],
    links: [
      {
        title: "Visit Ushopping Website",
        url: "https://u-money.com.la",
        type: "live",
      }, // Placeholder URL
    ],
    featured: true,
    testimonial: {
      quote:
        "Ushopping has transformed our online sales. The platform is intuitive for customers and efficient for our operations.",
      author: "Mr. Bounnhang S.",
      position: "Head of Sales & Marketing",
      company: "Unitel",
    },
  },
];

export function getProjects(): Project[] | undefined {
  return projects;
}

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
