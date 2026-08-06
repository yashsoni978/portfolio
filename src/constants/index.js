const navLinks = [
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Achievements",
    link: "#achievements",
  },
];

const words = [
  { text: "Web", imgPath: "/images/code.svg" },
  { text: "AI", imgPath: "/images/ideas.svg" },
  { text: "Data", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Web", imgPath: "/images/code.svg" },
  { text: "AI", imgPath: "/images/ideas.svg" },
  { text: "Data", imgPath: "/images/concepts.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 600, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 6, suffix: "+", label: "Featured Projects" },
  { value: 3, suffix: "", label: "Live Analytics Dashboards" },
  { value: 1743, suffix: "", label: "LeetCode Contest Rating" },
];

const logoIconsList = [
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Next.js",
    imgPath: "/images/logos/nextjs.webp",
  },
  {
    name: "JavaScript",
    imgPath: "/images/logos/javascript.webp",
  },
  {
    name: "TypeScript",
    imgPath: "/images/logos/typescript.webp",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "PostgreSQL",
    imgPath: "/images/logos/postgresql.webp",
  },
  {
    name: "Pandas",
    imgPath: "/images/logos/pandas.webp",
  },
  {
    name: "Power BI",
    imgPath: "/images/logos/powerbi.webp",
  },
  {
    name: "Supabase",
    imgPath: "/images/logos/supabase.webp",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Full-Stack Development",
    desc: "Building modern, scalable web applications with React, Next.js, Node.js, PostgreSQL, and production-ready backend systems.",
  },
  {
    imgPath: "/images/chat.png",
    title: "AI-Powered Applications",
    desc: "Integrating Generative AI, intelligent agents, and automated workflows to build practical AI-powered products.",
  },
  {
    imgPath: "/images/time.png",
    title: "Data & Analytics",
    desc: "Transforming raw data into actionable business insights using Python, SQL, Pandas, Power BI, and interactive dashboards.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    number: "01",
    cardTitle: "EDUCATION",
    cardHighlight: "KIIT, Bhubaneswar",
    cardDescription:
      "B.Tech in Computer Science & Engineering with a CGPA of 8.65.",
    tags: ["B.Tech CSE", "CGPA 8.65"],

    logoPath: "/images/logo1.png",
    title: "B.Tech in Computer Science & Engineering",
    date: "2022 - 2026",
    category: "Education",

    highlights: [
      "Pursuing B.Tech in Computer Science & Engineering at KIIT, Bhubaneswar with a CGPA of 8.65.",
      "Built a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Software Engineering.",
      "Strengthened problem-solving skills through 600+ LeetCode problems and competitive programming contests.",
    ],
  },

  {
    number: "02",
    cardTitle: "FULL-STACK + AI",
    cardHighlight: "3+ Production-Ready Applications",
    cardDescription:
      "Building intelligent full-stack products with modern web technologies and Generative AI.",
    tags: ["Next.js", "React", "Node.js", "GenAI"],

    logoPath: "/images/logo2.png",
    title: "Full-Stack & AI Development",
    date: "2025 - 2026",
    category: "Development Journey",

    highlights: [
      "Built and deployed 3+ production-ready AI-powered SaaS applications using Next.js, React, Node.js, PostgreSQL, Prisma, and Supabase.",
      "Integrated Generative AI into real-world applications for intelligent question generation, automated insights, and agent-driven workflows.",
      "Worked with authentication, databases, APIs, event-driven workflows, rate limiting, and modern full-stack deployment.",
    ],
  },

  {
    number: "03",
    cardTitle: "DATA ANALYTICS",
    cardHighlight: "3 End-to-End Analytics Projects",
    cardDescription:
      "Turning raw datasets into business insights through analysis, SQL, visualization, and interactive dashboards.",
    tags: ["Python", "SQL", "Pandas", "Power BI"],

    logoPath: "/images/logo3.png",
    title: "Data Analytics & Business Intelligence",
    date: "2026",
    category: "Data Analytics Journey",

    highlights: [
      "Built end-to-end analytics projects using Python, Pandas, PostgreSQL, SQL, Power BI, and Streamlit.",
      "Analyzed datasets containing thousands of records using data cleaning, exploratory analysis, segmentation, aggregation, CTEs, CASE statements, and window functions.",
      "Developed interactive dashboards and deployed analytics applications covering customer behavior, churn analysis, sales performance, and business insights.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "600+ LeetCode Problems",
    mentions: "Data Structures & Algorithms",
    review:
      "Solved 600+ algorithmic problems across arrays, trees, graphs, dynamic programming, greedy algorithms, heaps, and other core DSA topics.",
    icon: "💻",
  },

  {
    name: "1743 LeetCode Rating",
    mentions: "Competitive Programming",
    review:
      "Achieved a peak LeetCode contest rating of 1743 through consistent participation in competitive programming contests.",
    icon: "📈",
  },

  {
    name: "Global Rank 2323",
    mentions: "LeetCode Weekly Contest 505",
    review:
      "Ranked 2323 globally in LeetCode Weekly Contest 505, demonstrating strong algorithmic problem-solving under competitive constraints.",
    icon: "🏆",
  },

  {
    name: "AI-Powered SaaS",
    mentions: "Full-Stack + Generative AI",
    review:
      "Built and deployed 3+ production-ready AI-powered applications integrating modern full-stack architecture, Generative AI, databases, and secure backend workflows.",
    icon: "🤖",
  },

  {
    name: "Data Analytics Projects",
    mentions: "Python • SQL • Power BI",
    review:
      "Developed end-to-end analytics projects covering data cleaning, exploratory analysis, SQL-based business analysis, interactive dashboards, and actionable insights.",
    icon: "📊",
  },

  {
    name: "Full-Stack + AI + Data",
    mentions: "Multi-Domain Development",
    review:
      "Built projects spanning full-stack development, AI-powered applications, and data analytics using technologies including Next.js, Python, PostgreSQL, Pandas, Power BI, and Generative AI.",
    icon: "🚀",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
