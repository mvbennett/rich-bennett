import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";

const Projects = () => {
  const project = {
    img: '',
    title: 'Music for Underwater Supermarkets',
    link: '#'
  };
  return (
    <div>
      <Navbar page="secondary" />
      <div className="projects container">
        <h2>Projects</h2>
        <ProjectCard project={project} />
      </div>
    </div>
  );
};

export default Projects;
