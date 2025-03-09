// data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  screenshots?: string[];
  challenges?: string[];
  solutions?: string[];
  technologies?: Record<string, string[]>;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
    longDescription: `
      This e-commerce platform was built to provide a seamless shopping experience across all devices.
      The project features a robust product catalog with advanced filtering options, a streamlined checkout process,
      and secure payment processing via Stripe.
      
      Key features include:
      - Responsive design that works on mobile, tablet, and desktop
      - Product search with filters for categories, price ranges, and ratings
      - Cart and wishlist functionality with persistent storage
      - User authentication and account management
      - Secure checkout process with Stripe integration
      - Order history and tracking
      - Admin dashboard for product and order management
    `,
    image: "/project-1.jpg",
    tags: ["Symfony PHP", "MySQL",],
    featured: true,
    screenshots: [
      "/project-1-screenshot-1.jpg",
      "/project-1-screenshot-2.jpg",
      "/project-1-screenshot-3.jpg",
    ],
    challenges: [
      "Implementing a responsive design that works seamlessly across all device sizes",
      "Creating an efficient state management system for the shopping cart",
    ],
    solutions: [
      "local storage for efficient cart state management",
      "Created a secure Stripe checkout flow with webhooks for payment confirmation",
    ],
    technologies: {
      "Backend": ["Symfony PHP", "MySQL"]
    }
  },
  {
    id: 2,
    title: "BAP 3 Project - site d'accessibilité",
    description: "Site d'accèsibilité pour les personnes en situation de handicap",
    longDescription: `
      Ce site a été créé pour le projet BAP 3 de la formation de développeur web et web mobile.
      Le site a été réalisé en HTML, CSS et JavaScript. Il est responsive et accessible.
      Il a été réalisé en collaboration avec un groupe de 3 devs, 4 creative et design, 2 communication. 2 Chef de projet.
    `,
    image: "/project-2.jpg",
    tags: ["HTML", "CSS", "Bootstrap CSS", "JavaScript"],
    demoUrl: "https://lowmediumcoder.github.io/site-accessibilite/global/pages/accueil.html",
    githubUrl: "https://github.com/LowMediumCoder/site-accessibilite",
    featured: true,
    technologies: {
      "Frontend": ["HTML", "CSS", "Bootstrap CSS", "JavaScript"],
      "Deployment": ["GitHub"]
    }
  },
];

export const getFeaturedProjects = async () => {
  return projects.filter(project => project.featured);
};

export const getAllProjects = async () => {
  return projects;
};

export const getProjectById = async (id: number | string) => {
  return projects.find(project => project.id.toString() === id.toString());
};