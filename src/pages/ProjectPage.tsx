import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/ResumeInfo";
import { slugFromTitle } from "../types/projects";
import { Icon } from "../components/utils/Icon";

export const ProjectPage: React.FC = () => {
  const { slug } = useParams();
  const project = projects.find((p) => slugFromTitle(p.title) === slug);

  if (!project) {
    return (
      <main>
        <section className="section">
          <h2>Project not found</h2>
          <p>We couldn't find the project you're looking for.</p>
          <Link to="/">Back to home</Link>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="section project-detail">
        <div className="project-detail-header">
          <h2>{project.title}</h2>
          <span>{project.type}</span>
        </div>
        <div className="project-detail-body">
          <div className={`project-visual ${project.color || "gray"}`}>
            {/* visual placeholder */}
          </div>
          <div className="project-detail-copy">
            <p>{project.description || project.text}</p>
            <div className="project-links">
              <a href="#contact" className="button light">
                Contact about this project <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
