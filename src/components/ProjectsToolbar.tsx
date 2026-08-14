import React from "react";

type Props = {
  tags: string[];
  selected: string[];
  onToggle: (tag: string) => void;
};

export const ProjectsToolbar: React.FC<Props> = ({ tags, selected, onToggle }) => {
  return (
    <div className="projects-toolbar">
      <div className="tag-list">
        <button
          className={`tag ${selected.length === 0 ? "active" : ""}`}
          onClick={() => selected.length > 0 && tags.forEach(t => onToggle(t))}
          aria-pressed={selected.length === 0}
        >
          All
        </button>
        {tags.map((t) => {
          const active = selected.includes(t);
          return (
            <button
              key={t}
              className={`tag ${active ? "active" : ""}`}
              onClick={() => onToggle(t)}
              aria-pressed={active}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsToolbar;
