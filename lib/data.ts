export const personalInfo = {
  name: "Vidhu Prakash T P",
  title: "Software Engineer",
  subtitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in building scalable, high performance web applications. Skilled in designing seamless user experiences and developing robust backend systems. Passionate about transforming ideas into innovative digital solutions with clean code and modern technologies.",
  location: "Kerala, India",
  email: "connect@vidhuprakash.dev",
  phone: "+91 7559887249",
  image: "/profile-image.jpg",
  social: {
    linkedin: "https://linkedin.com/in/fullstackdev-vidhuprakashtp",
    github: "https://github.com/VidhuPrakash",
    instagram: "https://www.instagram.com/vidhu.prakashhh",
    facebook: "https://www.facebook.com/vidhu.prakashhh/",
  },
  aboutOne: `I'm a passionate full-stack developer with over 2+ years of experience creating 
                innovative digital solutions. I specialize in modern web technologies and love 
                building applications that solve real-world problems.`,
  aboutTwo: `When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or enjoying a good cup of coffee while sketching out ideas 
                for my next project.`,
};

export const experiences = [
  {
    id: 1,
    title: "Software Development Engineer - 1",
    company: "Profile Business Solutions",
    location: "Mukkam, Calicut, Kerala",
    period: "Jul 2025 - Present",
    description:
      "Developed and maintained enterprise web applications using Next.js, Node.js, Hono.js and Drizzle ORM + PostgreSQL. deliver high-quality software solutions. got advance knowleadgue in cloud using Cloudflare worker",
    achievements: [
      "Project architecture designing and implementation",
      "Build quick MVP to demonstrate capabilities of the product to clients",
      "Increased application performance by 300%",
      "Optimized database performance by 20%",
      "Implemented real-time collaboration features",
      "Achieved 99.9% uptime",
      "Reduced development time by 40%",
      "Got advance knowleadgue in DevOps",
    ],
  },
  {
    id: 2,
    title: "Junior Software Developer",
    company: "Techfriar Technologies",
    location: "Infopark Kochi, Kerala",
    period: "June 2024 – Jul 2025",
    description:
      "Leveraged Next.js, Node.js, Express.js, PostgreSQL, and GraphQL for full-stack development in a cross-functional Agile team. Applied Scrum and Kanban methodologies to streamline development and improve website performance by 40%.",
    achievements: [
      "Designed and implemented an optimized data model to reduce latency and enhance data processing",
      "Improved system performance by 30% through backend business logic optimization",
      "Led end-to-end development of large-scale full-stack applications, improving engagement by 25%",
      "Integrated Cashfree Payment Gateway and verification services for onboarding and compliance",
      "Delivered high-quality software solutions to clients",
      "Expertised in Database normalization and Server performance optimization",
    ],
  },
  {
    id: 3,
    title: "Software Development Trainee",
    company: "Techfriar Technologies",
    location: "Infopark Kochi, Kerala",
    period: "Aug 2023 – Mar 2024",
    description:
      "Focused on front-end optimization with responsive design, back-end bug fixes, and interactive feature development to improve engagement and reduce bounce rate.",
    achievements: [
      "Directed design and implementation of interactive components with React.js, improving site speed by 30%",
      "Collaborated on 5+ interactive features, increasing engagement",
      "Optimized JavaScript code to reduce server load by 20%",
      "Reduced bounce rate by 15% through UI/UX improvements",
      "Worked in real world live projects",
      "Expertised in RestfulAPI and Database design",
    ],
  },
];
export const personalProjects = [
  {
    id: 1,
    title: "SEOGLider-api",
    subtitle: "SEO analysis API service",
    description:
      "SEOGlide is a powerful and lightweight SEO analysis API service that provides various SEO-related insights such as metadata extraction, keyword analysis, page speed evaluation, Image Optimization Check, Heading Structure Analysis, Broken Link Check,",
    tech: ["Node.js", "Express.js"],
    github: ["https://github.com/VidhuPrakash/SEOGlider-api"],
    live: "https://seoglider-api.onrender.com/api/seo/",
    featured: true,
    type: "personal",
  },
  {
    id: 2,
    title: "Patient-Care",
    subtitle: "Patient Management tool",
    description:
      "A frontend-only patient registration application built with Next.js, PGlite (a WebAssembly-based PostgreSQL database), and Ant Design. The app allows users to register, list, update, and delete patient records, with data persisted in the browser using IndexedDB. It supports real-time synchronization across multiple browser tabs using PGlite's multi-tab worker and BroadcastChannel for seamless data updates. This project demonstrates a modern, client-side approach to managing patient data without a backend server, making it lightweight and suitable for offline-first scenarios.",
    image: "",
    tech: ["Next.js", "PGLite", "Ant Design"],
    github: ["https://github.com/VidhuPrakash/Patient-care"],
    live: "https://patient-care-three.vercel.app/",
    featured: true,
    type: "personal",
  },
  {
    id: 3,
    title: "Chat app",
    subtitle: "Chat Platform",
    description:
      "Interactive chat platform with real-time messaging, user authentication, and group conversations. Built with Next.js, Socket.io, and mongoDb for a secure and efficient messaging experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Socket.io",
      "mongoDb",
      "express.js",
      "node.js",
    ],
    github: [
      "https://github.com/VidhuPrakash/chat_app_frontend",
      "https://github.com/VidhuPrakash/chat_app_backend",
    ],
    live: "https://chat-app-frontend-cyan.vercel.app",
    featured: true,
    type: "personal",
  },
  {
    id: 4,
    title: "FilyZone",
    subtitle: "Movie Platform",
    description:
      "Interactive movie platform with a user-friendly interface for movie discovery, and personalized recommendations. Built with Next.js, Tailwind CSS, and TMDB API.",
    tech: ["Next.js", "Tailwind CSS", "TMDB API", "MongoDB"],
    github: ["https://github.com/VidhuPrakash/FilyZone-MoviePlatform"],
    live: null,
    featured: true,
    type: "personal",
  },
  {
    id: 5,
    title: "Vechicle Booking",
    subtitle: "Vehicle Rental Platform",
    description:
      "Vehicle rental platform with a user-friendly interface for vehicle discovery, and personalized recommendations. Built with MERN stack.",
    tech: ["MongoDb", "Express.js", "React", "Node.js", "Bootstrap"],
    github: ["https://github.com/VidhuPrakash/Vehicle_booking_mern"],
    live: null,
    featured: true,
    type: "personal",
  },
  {
    id: 6,
    title: "The IN-Planet",
    subtitle: "Indian Destination Platform",
    description:
      "THE IN-Planet is indian tour destination guide where you can find destiantions in North,East,West and South india with form validation using javascript.a static web page which is developed for learning html,css,js,boostarp",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
    github: [
      "https://github.com/VidhuPrakash/The_IN-Planet?tab=readme-ov-file",
    ],
    live: "https://vidhuprakash.github.io/The_IN-Planet/",
    featured: false,
    type: "personal",
  },
];

export const companyProjects = [
  {
    id: 1,
    title: "HRMS Platform",
    subtitle: "HR Management and project management Platform",
    description:
      "Manage your employees and projects effectively with HRMS platform. Streamline employee management, project tracking, and resource allocation to optimize your organization's operations and efficiency.",
    tech: [
      "Next.js",
      "TypeScript",
      "Hono.js",
      "Drizzle ORM",
      "Cloudflare Worker",
      "Vercel",
    ],
    github: null,
    live: null,
    featured: true,
    type: "company",
  },
  {
    id: 2,
    title: "Company Formation and Marketing Automation Tool",
    subtitle: "Automated company formation and compliance monitoring tool.",
    description:
      "The pilot program successfully automated the entire company formation process. It reduced the time and cost of company formation by 80% and improved compliance by 50%.",
    tech: ["Laravel", "Next.js", "React", "MySQL"],
    github: null,
    live: null,
    featured: true,
    type: "company",
  },
  {
    id: 3,
    title: "Online Job Portal System",
    subtitle: "Job Management Platform",
    description:
      "Developed using Next.js, TypeScript, GraphQL, and PostgreSQL with server-side rendering and optimized data fetching. Features user-specific management panels for Admin, Company, and Candidate roles.",
    image: "/job-portal.png",
    tech: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Primsa ORM",
      "PostgreSQL",
      "Node.js",
      "Express.js",
    ],
    github: null,
    live: null,
    featured: true,
    type: "company",
  },
  {
    id: 4,
    title: "Wealth Management System",
    subtitle: "Asset Tracking Platform",
    description:
      "MERN stack platform for tracking asset values across diverse portfolios. Optimized both front-end and back-end for performance improvements.",
    image: "/wealth-management.png",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    github: null,
    live: null,
    featured: false,
    type: "company",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Shadcn UI",
      "Tailwind CSS",
      "AntDesign",
      "Bootstrap",
      "Material UI",
      "Redux",
      "Zustand",
      "Context API",
      "SSR, CSR, SSG",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Hono.js",
      "Wordpress",
      "Laravel",
      "Prisma ORM",
      "Drizzle ORM",
      "PGLite",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "REST API",
      "Apollo",
      "Socket.io",
      "Firebase",
      "TanStack Query",
      "Joi",
      "Zod",
      "Swagger",
      "Better Auth",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "Github",
      "CloudeFlare worker",
      "Vercel",
      "AWS S3",
      "Docker",
      "Husky",
      "TurboRepo",
      "Webpack",
      "Vite",
      "Yarn",
      "NPM",
      "Pnpm",
      "Resend",
      "nodemailer",
      "ESLint",
      "Prettier",
      "Biome Lint",
      "Linux",
    ],
  },
  {
    title: "Productivity Tools",
    skills: [
      "Jira",
      "Trello",
      "Slack",
      "Microsoft Teams",
      "Excel",
      "VScode",
      "Eraser.io",
      "Keka",
      "Desklog",
    ],
  },
];

export const skillsWithIcons = [
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  }, // [2]
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  }, // [2]
  {
    name: "Hono.js",
    icon: "https://images.seeklogo.com/logo-png/49/1/hono-logo-png_seeklogo-499529.png",
  },
  {
    name: "Laravel",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMoO1kQEm6tKiQbd-moXfnmzFakSSyYPpdIw&s",
  },
  {
    name: "Wordpress",
    icon: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  }, // [1]
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  }, // [2]
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  }, // [2]
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  }, // [2]
  {
    name: "Tailwind CSS",
    icon: "https://www.svgrepo.com/show/333609/tailwind-css.svg",
  }, // [2]
  {
    name: "Shadcn UI",
    icon: "https://avatars.githubusercontent.com/u/139895814?s=280&v=4",
  }, // [2]
  {
    name: "AntDesign",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
  }, // [2]
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  }, // [2]
  {
    name: "Redux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  }, // [2]
  {
    name: "Zustand",
    icon: "data:image/jpeg;base64,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",
  }, // [2]

  // Backend
  // [2]
  {
    name: "Prisma ORM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  }, // [2]
  {
    name: "Drizzle ORM",
    icon: "https://images.opencollective.com/drizzle-orm/9405e48/logo/256.png",
  }, // [2]
  {
    name: "PGLite",
    icon: "https://pglite.dev/img/brand/icon-light.svg",
  }, // [2]
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  }, // [2]
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  }, // [2]
  {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  }, // [2]
  {
    name: "GraphQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  }, // [2]
  {
    name: "REST API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  }, // [2]
  {
    name: "Apollo",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apollographql/apollographql-original.svg",
  }, // [2]
  {
    name: "Socket.io",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
  }, // [2]
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
  }, // [2]
  {
    name: "Joi",
    icon: "https://assets.blackslate.io/posts/01/VrwAENW7swawB0I.png",
  }, // [2]
  {
    name: "Zod",
    icon: "https://zod.dev/logo/logo-glow.png",
  }, // [2]
  {
    name: "Better Auth",
    icon: "https://www.better-auth.com/_next/static/media/better-auth-logo-light.c58bb6b7.png",
  }, // [2]

  // Tools
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  }, // [2]
  {
    name: "Cloudflare",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg",
  }, // [2]
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  }, // [2]
  {
    name: "AWS S3",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33H8yKyHcKan9j0gzV_oag8xlPLRjU5mCCA&s",
  }, // [2]
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  }, // [2]
  {
    name: "Husky",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  }, // [2]
  {
    name: "TurboRepo",
    icon: "https://images.seeklogo.com/logo-png/42/1/turborepo-logo-png_seeklogo-428038.png",
  }, // [2]
  {
    name: "Webpack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  }, // [2]
  {
    name: "Yarn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg",
  }, // [2]
  {
    name: "NPM",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  }, // [2]
  {
    name: "Pnpm",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  }, // [2]
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  }, // [2]
];

export const stats = [
  { number: "50+", label: "Technologies" },
  { number: "10+", label: "Projects" },
  { number: "2+", label: "Years Exp" },
  { number: "∞", label: "Coffee Cups" },
];

export const education = [
  {
    id: 1,
    degree: "Diploma in Computer Engineering",
    institution: "AKNM Government Polytechnic College Thirurangadi",
    location: "Kerala, India",
    period: "2021 – 2024",
    gpa: "8.0 CGPA",
    description:
      "Comprehensive knowledge in software development, hardware systems, networking, embedded systems, and computer architecture through hands-on projects and industrial training.",
    achievements: [
      "Practical experience in application development and network programming",
      "Industrial training exposure in IT and engineering sectors",
    ],
  },
];
export const certificates = [
  {
    id: 1,
    title: "HackerRank Certified Software Engineer",
    issuer: "HackerRank",
    issueDate: "Feb 2025",
    certificateId: "F48EA52EC866",
    expiryDate: null,
    iframeLink:
      "https://user-images.githubusercontent.com/1194257/65596422-1cef2080-df97-11e9-9abb-a225204d1805.png",
    verificationLink:
      "https://www.hackerrank.com/certificates/iframe/f48ea52ec866",
    description:
      "Validated proficiency in core software engineering skills including data structures, MySQL database management, and REST API design.",
    skills: ["Data Structures", "MySQL", "REST API"],
  },
  {
    id: 2,
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Simplilearn",
    issueDate: "Jan 2025",
    certificateId: "7816461",
    expiryDate: null,
    iframeLink:
      "https://assets.bitdegree.org/online-learning-platforms/storage/media/simplilearn-reviews-logo-big.o.png?tr=w-250",
    verificationLink: "https://simpli-web.app.link/e/Xcyj4QlgRVb",
    description:
      "Gained practical skills to design, implement, and manage responsible AI systems focusing on fairness, transparency, governance, and bias mitigation.",
    skills: ["Ethical AI", "Google Cloud AI", "Bias Mitigation"],
  },
];
