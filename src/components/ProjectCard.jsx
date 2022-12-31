import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.img} alt={project.title} className="project-album-cover" />
      <a href={project.link}>
        <h3 className="project-title">
          {project.title}
        </h3>
      </a>
    </div>
  );
};

export default ProjectCard;
