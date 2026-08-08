import { useEffect, useState } from "react";
import { Icon } from "./components/utils/Icon";
import {
  aboutSkills,
  projects,
  resumeExperiences,
  resumeProjects,
  resumeSkills,
  resumeEducation,
  resumeLanguages,
  resumeInterests,
  nav,
} from "./data/ResumeInfo";

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
        <a href="https://github.com/rmontero90" aria-label="GitHub">
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

const customSvgIcons = {
  langchain: {
    title: "LangChain",
    viewBox: "0 0 100 100",
    children: (
      <>
        <rect width="100" height="100" rx="22" fill="#203D3D" />
        <path
          d="M54.2612 54.2583L63.1942 45.3253C67.8979 40.6215 67.8979 32.9952 63.1942 28.2914C58.4904 23.5877 50.8641 23.5877 46.1603 28.2914L37.2273 37.2244"
          stroke="#7FC8FF"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.7427 45.7411L36.8098 54.6741C32.106 59.3779 32.106 67.0042 36.8098 71.7079C41.5135 76.4117 49.1398 76.4117 53.8436 71.7079L62.7766 62.775"
          stroke="#7FC8FF"
          strokeWidth="12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  claude: {
    title: "Claude",
    viewBox: "0 0 24 24",
    children: (
      <path
        d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z"
        fill="#D97757"
      />
    ),
  },
};

function TechIcons({ items }) {
  return (
    <div className="tech-icons" aria-hidden="true">
      {items.map((item) =>
        item.badge ? (
          <span key={item.badge} className="tech-badge">
            {item.badge}
          </span>
        ) : item.svg ? (
          <svg
            key={item.svg}
            className="tech-svg"
            viewBox={customSvgIcons[item.svg]?.viewBox}
            width="28"
            height="28"
            role="img"
            title={item.label}
          >
            {customSvgIcons[item.svg]?.children}
          </svg>
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
