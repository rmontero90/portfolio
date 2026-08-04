import { useEffect, useState } from "react";

const Icon = ({ name, size = 20 }) => {
  const paths = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c.8-4 3.5-6 8-6s7.2 2 8 6" />
      </>
    ),
    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
      </>
    ),
    file: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5M9 12h6M9 16h6" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    moon: <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </>
    ),
    arrowCircle: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M10 8l4 4-4 4" />
        <path d="M14 12H7" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01M7 17h.01" />
      </>
    ),
    cloud: (
      <path d="M7 19h11a4 4 0 0 0 .7-7.9A7 7 0 0 0 5.4 9.2 5 5 0 0 0 7 19Z" />
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4c.1-1-.4-2-1-2.5 3-.3 6-1.5 6-6.5a5 5 0 0 0-1.3-3.5A4.7 4.7 0 0 0 18.6 2S17.5 1.5 15 3a12 12 0 0 0-6 0C6.5 1.5 5.4 2 5.4 2a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 9c0 5 3 6.2 6 6.5-.5.5-.9 1.2-1 2.1V22" />
        <path d="M9 19c-3 .9-3-1.5-4-2" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a5 5 0 0 1 2-3Z" />
        <path d="M2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  };
  return (
    <svg
      className="icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
};

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
    title: "Full-Stack Developer",
    company: "Gorilla Logic",
    period: "Sep 2023 – Feb 2026",
    description:
      "Delivered AI-powered and enterprise-grade applications for US-based clients across multiple industries.",
    bullets: [
      "Maintained and enhanced an Automotive Enterprise Client's global Account Identity pages on Azure, supporting users across the Americas, Asia, Europe, and the UAE.",
      "Built front-end features with Vanilla JavaScript in a large-scale, multi-region enterprise application.",
      "Implemented Adobe Analytics tagging tailored by region, country, and language.",
      "Developed React and Node.js applications integrating AI agents built with LangChain and LangGraph.",
      "Used AI-assisted development tools (Cursor, VS Code + Ollama) to improve delivery speed and code quality.",
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

function Sidebar({ dark, setDark, open, setOpen }) {
  return (
    <aside className={`sidebar ${open ? "is-open" : ""}`}>
      <button
        className="sidebar-close"
        onClick={() => setOpen(false)}
        aria-label="Close menu"
      >
        ×
      </button>
      <a className="brand" href="#home"></a>
      <div className="profile-mini">
        <div className="avatar-small">
          <img src="/MyAvatar.jpeg" alt="Rafael Montero" />
        </div>
        <h1>Rafael Montero</h1>
        <p>Full-stack engineer crafting useful, polished digital products.</p>
      </div>
      <div className="socials">
        <a href="https://github.com" aria-label="GitHub">
          <Icon name="github" size={17} />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn">
          <Icon name="linkedin" size={17} />
        </a>
        <a href="mailto:developer@rmontero.me" aria-label="Email">
          <Icon name="mail" size={17} />
        </a>
      </div>
      <nav>
        {nav.map(([icon, label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            <Icon name={icon} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
      <a className="hire-button" href="#contact">
        <Icon name="mail" size={18} /> Hire me
      </a>
      <div className="theme-switch">
        <Icon name={dark ? "moon" : "sun"} size={18} />
        <span>{dark ? "Dark" : "Light"} mode</span>
        <button
          className={dark ? "active" : ""}
          onClick={() => setDark(!dark)}
          aria-label="Toggle color theme"
        >
          <i />
        </button>
      </div>
    </aside>
  );
}

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function TechIcons({ items }) {
  return (
    <div className="tech-icons" aria-hidden="true">
      {items.map((item) =>
        item.badge ? (
          <span key={item.badge} className="tech-badge">
            {item.badge}
          </span>
        ) : (
          <i
            key={item.cls}
            className={`devicon-${item.cls}${item.noColor ? "" : " colored"}`}
            title={item.label}
          />
        ),
      )}
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored ? stored === "dark" : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <>
      <Sidebar
        dark={dark}
        setDark={setDark}
        open={menuOpen}
        setOpen={setMenuOpen}
      />
      <button
        className="menu-button"
        onClick={() => setMenuOpen(true)}
        aria-label="Open menu"
      >
        ☰
      </button>
      {menuOpen && (
        <button
          className="scrim"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
      )}
      <main>
        <section className="hero hero-brief" id="home">
          <div className="hero-brief-copy">
            <h1 className="hero-name">Rafael Montero</h1>
            <p className="hero-role">
              Software Engineer — Full-Stack Developer
            </p>
            <p className="hero-desc">
              I’m a software engineer with 14+ years of experience across QA,
              front-end, and full-stack development, including 6+ years building
              production apps with Vue.js, React, and modern JavaScript. Strong
              backend skills with Node.js/Express and Java Spring Boot.
            </p>
            <div className="hero-brief-actions">
              <a className="button primary" href="#portfolio">
                <Icon name="arrowCircle" size={18} /> View Portfolio
              </a>
              <a className="button secondary hero-secondary" href="#resume">
                <Icon name="file" size={18} /> View Resume
              </a>
            </div>
          </div>
          <div
            className="hero-brief-photo"
            aria-label="Profile photo placeholder"
          >
            <div className="hero-photo-frame">
              <img className="hero-photo" src="/Me.jpeg" alt="Rafael Montero" />
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="about-inner">
            <div className="about-heading">
              <div className="about-title">
                <i className="about-accent" aria-hidden="true" />
                <h2>What I do</h2>
              </div>
              <p>
                I have more than 10 years' experience building software for
                clients all over the world. Below is a quick overview of my main
                technical skill sets and technologies I use. Want to find out
                more about my experience?
              </p>
            </div>

            <div className="about-grid">
              {aboutSkills.map((skill) => (
                <article className="about-skill" key={skill.title}>
                  <TechIcons items={skill.icons} />
                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>
                </article>
              ))}
            </div>

            <div className="about-cta-row">
              <a className="about-cta" href="#contact">
                <span className="about-cta-icon" aria-hidden="true">
                  <Icon name="arrow" size={16} />
                </span>
                Services
              </a>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="portfolio">
          <div className="project-header">
            <SectionTitle
              eyebrow="My work"
              title="Projects with purpose"
              copy="Work shaped around practical problems, long-term maintenance, and products that people actually use."
            />
            <a href="#contact" className="text-link">
              View all projects <Icon name="arrow" size={16} />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-visual ${project.color}`}>
                  <span className="mock-window">
                    <i />
                    <i />
                    <i />
                    <b>
                      {index === 0
                        ? "Part-Time DevOps"
                        : index === 1
                          ? "Fullstack Vue.js and Java Spring"
                          : "Full-Time Enterprise Projects"}
                    </b>
                  </span>
                </div>
                <div className="project-copy">
                  <span>{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <div>
                    <small>{project.tag}</small>
                    <a href="#contact" aria-label={`View ${project.title}`}>
                      <Icon name="arrow" size={19} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section" id="resume">
          <div className="resume-section-header">
            <h2>Online Resume</h2>
            <a
              className="button secondary resume-download-btn"
              href="/Rafael_Montero_Salazar_CV_Public.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="file" size={16} /> Download PDF Version
            </a>
          </div>

          <article className="resume-card">
            {/* Profile */}
            <div className="resume-profile">
              <div className="resume-profile-info">
                <h2>Rafael Montero Salazar</h2>
                <p>Software Engineer — Full-Stack Developer</p>
              </div>
              <ul className="resume-contact-list">
                <li>
                  <Icon name="mail" size={15} />
                  <a href="mailto:developer@rmontero.me">
                    developer@rmontero.me
                  </a>
                </li>
                <li>
                  <Icon name="linkedin" size={15} />
                  <a
                    href="https://linkedin.com/in/rmontero90"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/rmontero90
                  </a>
                </li>
                <li>
                  <Icon name="home" size={15} />
                  <span>Costa Rica</span>
                </li>
              </ul>
            </div>

            <hr className="resume-divider" />

            {/* Summary */}
            <div className="resume-summary">
              <p>
                14+ years of experience across QA, front-end, and full-stack
                development, including 6+ years building production applications
                with Vue.js, React, and JavaScript ES6. Strong backend skills
                with Node.js/Express and Java Spring Boot. Delivered for
                enterprise clients — Maxar Technologies, Automotive Enterprise
                Client, and Subaru — across geospatial, automotive, and global
                identity systems. Experienced integrating AI tooling (Cursor,
                Ollama, LangChain/LangGraph) into development workflows. Manages
                Docker-based server infrastructure as a developer/sysadmin.
                Fully remote-capable and comfortable in direct client-facing
                roles.
              </p>
            </div>

            <hr className="resume-divider" />

            {/* Body: main + aside */}
            <div className="resume-body">
              <div className="resume-main">
                {/* Work Experiences */}
                <div className="resume-block">
                  <h3 className="resume-block-title">Work Experiences</h3>
                  {resumeExperiences.map((exp) => (
                    <div className="resume-entry" key={exp.title + exp.company}>
                      <div className="resume-entry-header">
                        <h4>{exp.title}</h4>
                        <span>
                          {exp.company} | {exp.period}
                        </span>
                      </div>
                      <div className="resume-entry-body">
                        {exp.description && <p>{exp.description}</p>}
                        {exp.bullets && (
                          <ul>
                            {exp.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Projects */}
                <div className="resume-block">
                  <h3 className="resume-block-title">Projects</h3>
                  {resumeProjects.map((proj) => (
                    <div className="resume-entry" key={proj.title}>
                      <div className="resume-entry-header">
                        <h4>{proj.title}</h4>
                        <span>{proj.type}</span>
                      </div>
                      <div className="resume-entry-body">
                        <p>{proj.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <aside className="resume-aside">
                {/* Skills */}
                <div className="resume-aside-block">
                  <h3 className="resume-block-title">Skills</h3>
                  <h4>Technical</h4>
                  <ul>
                    {resumeSkills.technical.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <h4>Professional</h4>
                  <ul>
                    {resumeSkills.professional.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div className="resume-aside-block">
                  <h3 className="resume-block-title">Education</h3>
                  <ul className="resume-aside-list">
                    {resumeEducation.map((e) => (
                      <li key={e.degree}>
                        <strong>{e.degree}</strong>
                        <span>{e.school}</span>
                        <span>{e.period}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Languages */}
                <div className="resume-aside-block">
                  <h3 className="resume-block-title">Languages</h3>
                  <ul>
                    {resumeLanguages.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>

                {/* Interests */}
                <div className="resume-aside-block">
                  <h3 className="resume-block-title">Interests</h3>
                  <ul>
                    {resumeInterests.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>

            <hr className="resume-divider" />

            {/* Footer socials */}
            <div className="resume-footer-socials">
              <a href="https://github.com/rmontero90" aria-label="GitHub">
                <Icon name="github" size={18} />
              </a>
              <a
                href="https://linkedin.com/in/rmontero90"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" size={18} />
              </a>
              <a href="mailto:developer@rmontero.me" aria-label="Email">
                <Icon name="mail" size={18} />
              </a>
            </div>
          </article>
        </section>

        <section className="contact" id="contact">
          <span>Have a project in mind?</span>
          <h2>
            Let’s make something
            <br />
            great together.
          </h2>
          <a className="button light" href="mailto:developer@rmontero.me">
            developer@rmontero.me <Icon name="arrow" size={18} />
          </a>
        </section>
        <footer>
          <p>© {new Date().getFullYear()} Rafael Montero</p>
          <p>Designed & built with care.</p>
        </footer>
      </main>
    </>
  );
}
