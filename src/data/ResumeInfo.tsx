const aboutSkills = [
  {
    title: "Frontend Development",
    text: (
      <>
        Expert in Vue.js, React, and TypeScript for building scalable,
        responsive web applications. Proficient with modern CSS frameworks like
        Tailwind CSS and Sass.
      </>
    ),
    icons: [
      { cls: "vuejs-plain", label: "Vue.js" },
      { cls: "react-original", label: "React" },
      { cls: "typescript-plain", label: "TypeScript" },
      { cls: "sass-original", label: "Sass" },
    ],
  },
  {
    title: "Backend Development",
    text: (
      <>
        Full-stack experience with Node.js/Express and Java/Spring Boot.
        Building robust APIs and microservices for enterprise applications.
      </>
    ),
    icons: [
      { cls: "nodejs-plain", label: "Node.js" },
      { cls: "java-plain", label: "Java" },
      { cls: "spring-original", label: "Spring Boot" },
    ],
  },
  {
    title: "Databases & Storage",
    text: (
      <>
        Experienced with relational databases (MySQL, MariaDB), NoSQL solutions
        (MongoDB), and cloud storage (AWS S3).
      </>
    ),
    icons: [
      { cls: "mysql-plain", label: "MySQL" },
      { cls: "mariadb-original", label: "MariaDB" },
      { cls: "mongodb-plain", label: "MongoDB" },
    ],
  },
  {
    title: "Cloud & DevOps",
    text: (
      <>
        Proficient with AWS services (EC2, Lightsail, IAM), Docker
        containerization, Linux server administration, and CI/CD pipelines.
      </>
    ),
    icons: [
      { cls: "amazonwebservices-plain-wordmark", label: "AWS" },
      { cls: "docker-plain", label: "Docker" },
      { cls: "linux-plain", label: "Linux" },
      { cls: "github-original", label: "GitHub", noColor: true },
    ],
  },
  {
    title: "AI & Modern Tools",
    text: (
      <>
        Experience with AI agent frameworks (LangChain, LangGraph) and
        AI-assisted development tools for enhanced productivity.
      </>
    ),
    icons: [
      { cls: "python-plain", label: "Python" },
      { badge: "LangChain" },
      { badge: "Claude" },
    ],
  },
  {
    title: "Testing & Quality",
    text: (
      <>
        Expertise in automated testing with Jest, Vitest, and JUnit. Strong QA
        background ensuring reliable, production-ready code.
      </>
    ),
    icons: [
      { cls: "jest-plain", label: "Jest" },
      { badge: "Vitest" },
      { cls: "junit5-plain", label: "JUnit 5" },
    ],
  },
];

const projects = [
  {
    title: "Web Hosting & Infrastructure",
    type: "Self-Employed · 2017 – Present",
    text: "I run a part-time infrastructure practice hosting WordPress sites in Docker containers across multiple VPS providers, managing Linux servers, SSL, firewalls, and CDN setup with a focus on reliability and security.",
    color: "violet",
    tag: "Docker · Linux · AWS",
  },
  {
    title: "Boutique Galatea",
    type: "Side Project · 2018 – Present",
    text: "A full-stack dress management system for a major Costa Rican retail store, built with Vue 3 and Java Spring Boot and maintained in production since 2018.",
    color: "blue",
    tag: "Vue 3 · Spring Boot",
  },
  {
    title: "Client-Facing Digital Platforms",
    type: "Professional Work · 2022 – 2026",
    text: "Delivered production systems for geospatial, automotive, and identity experiences, with an emphasis on useful interfaces, performance, and long-term maintainability.",
    color: "orange",
    tag: "Vue · React · Node.js",
  },
];

const resumeExperiences = [
  {
    title: "Full-Stack Developer — Internal Labs Project",
    company: "Gorilla Logic",
    period: "Sep 2023 – Feb 2026",
    description:
      "Worked on an internal project delivering AI-powered applications with agent-based tooling.",
    bullets: [
      "Developed React and Node.js and Python applications integrating AI agents built with LangChain and LangGraph.",
      "Used AI-assisted development tools (Cursor, VS Code + Ollama) to improve delivery speed and code quality.",
    ],
  },
  {
    title: "Full-Stack Developer — Global Identity Platform",
    company: "Gorilla Logic",
    period: "Sep 2023 – Feb 2026",
    description:
      "Delivered enterprise-grade applications for a US-based automotive enterprise client.",
    bullets: [
      "Maintained and enhanced an Automotive Enterprise Client's global Account Identity pages on Azure, supporting users across the Americas, Asia, Europe, and the UAE.",
      "Built front-end features with Vanilla JavaScript in a large-scale, multi-region enterprise application.",
      "Implemented Adobe Analytics tagging tailored by region, country, and language.",
    ],
  },
  {
    title: "Full-Stack Developer — Maxar Technologies",
    company: "Gorilla Logic",
    period: "Aug 2022 – Sep 2023",
    description:
      "Contributed to SecureWatch, a geospatial platform delivering Earth imagery and geospatial information.",
    bullets: [
      "Worked on SecureWatch using Vue.js on the front end and Java Spring on the back end.",
      "Participated in the development of the Maxar Developer Portal with Vue.js and Docusaurus.",
      "Developed client-facing communication skills through direct participation in client meetings.",
    ],
  },
  {
    title: "Web Developer — Subaru.com",
    company: "Accenture",
    period: "Aug 2018 – Aug 2022",
    description:
      "Contributed to the Subaru.com front-end redesign as part of a client engagement spanning nearly 8 years.",
    bullets: [
      "Built features with Vue.js and Adobe Experience Manager (AEM).",
      "Collaborated on a large-scale redesign serving millions of users.",
    ],
  },
  {
    title: "QA Analyst — Subaru.com",
    company: "Accenture",
    period: "Jan 2015 – Aug 2018",
    description:
      "Performed manual and automated testing for the Subaru.com website across multiple release cycles.",
  },
  {
    title: "QA Analyst",
    company: "Critech Research",
    period: "Nov 2011 – Jan 2015",
    description:
      "Conducted manual testing of medical devices for clients including Mindray, Bayer, and Abbott.",
  },
];

const resumeProjects = [
  {
    title: "Web Hosting & Infrastructure",
    type: "Self-Employed · 2017 – Present",
    description:
      "Run a part-time business hosting WordPress sites in Docker containers across multiple VPS providers (Vultr, OVHcloud, AWS). Administer Linux servers end-to-end: nginx, UFW firewall, SSH key-based auth, Let's Encrypt SSL, and Cloudflare CDN.",
  },
  {
    title: "Boutique Galatea — Dress Management System",
    type: "Side Project · 2018 – Present",
    description:
      "Built and maintain a full-stack application with Vue 3 and Java Spring Boot 3 to manage wedding dress inventory for a major Costa Rica retail store. In production since 2018; upgraded to latest framework versions in 2024.",
  },
];

const resumeSkills = {
  technical: [
    "Vue.js, React, TypeScript, JavaScript (ES6+)",
    "Node.js / Express",
    "Java / Spring Boot",
    "Python",
    "MariaDB / MySQL / MongoDB",
    "Docker, nginx, Linux server admin",
    "AWS (EC2, Lightsail, S3, IAM)",
    "SCSS / Sass / Tailwind CSS",
    "LangChain, LangGraph, AI agents",
    "Git, GitHub, CI/CD pipelines",
    "Jest, Vitest, JUnit",
  ],
  professional: [
    "Client-facing communication",
    "Requirements definition",
    "Agile / Scrum",
    "Cross-team collaboration",
    "Code review & mentoring",
  ],
};

const resumeEducation = [
  {
    degree: "B.Sc. in Software Systems",
    school: "Universidad Latina, Heredia, Costa Rica",
    period: "2007 – 2011",
  },
  {
    degree: "Licenciatura in Software Systems (QA/QC emphasis)",
    school: "Universidad Fidelitas, Costa Rica",
    period: "2016 – 2018",
  },
];

const resumeLanguages = [
  "Spanish (Native)",
  "English (C1 – Advanced)",
  "Russian (Basic)",
];
const resumeInterests = [
  "Open source",
  "AI tooling",
  "Infrastructure & DevOps",
  "Travelling",
];

const nav = [
  ["home", "Home", "#home"],
  ["user", "About", "#about"],
  ["briefcase", "Portfolio", "#portfolio"],
  ["file", "Resume", "#resume"],
  ["mail", "Contact", "#contact"],
];

export {
  aboutSkills,
  projects,
  resumeExperiences,
  resumeProjects,
  resumeSkills,
  resumeEducation,
  resumeLanguages,
  resumeInterests,
  nav,
};
