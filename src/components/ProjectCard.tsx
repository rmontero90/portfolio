import React from "react";
import { Link } from "react-router-dom";
import type { Project } from "../types/projects";
import { slugFromTitle } from "../types/projects";
import { Icon } from "./utils/Icon";

type Props = {
  project: Project;
  index?: number;
};

export const ProjectCard: React.FC<Props> = ({ project, index = 0 }) => {
  const slug = slugFromTitle(project.title);
  return (
    <article className="project-card">
      <div className={`project-visual ${project.color || "gray"}`}>
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
        {project.type && <span>{project.type}</span>}
        <h3>{project.title}</h3>
        <p>{project.text || project.description}</p>
        <div>
          <small>{project.tag}</small>
          <Link to={`/projects/${slug}`} aria-label={`View ${project.title}`}>
            <Icon name="arrow" size={19} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
