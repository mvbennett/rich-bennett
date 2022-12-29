import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const project = {
    img: '',
    title: 'Music for Underwater Supermarkets',
    link: '#'
  };
  return (
    <div>
      <ProjectCard project={project} />
    </div>
  );
};

export default Projects;
