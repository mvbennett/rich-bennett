import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";

const Projects = () => {
  const projectsList = [
    {
      img: '../assets/images/underwater_supermarkets.jpg',
      title: 'Music for Underwater Supermarkets',
      link: '#'
    },
    {
      img: '../assets/images/spacetronic_lunchbox.jpg',
      title: 'Spacetronic Lunchbox',
      link: '#'
    },
    {
      img: '../assets/images/italian_soda.jpg',
      title: 'Italian Soda',
      link: '#'
    }
  ];
  const projects = projectsList.map((project) => {
    return <ProjectCard project={project} />;
  });
  return (
    <div>
      <Navbar page="secondary" />
      <div className="container">
        <h2>Projects</h2>
        <div className="projects">
          {projects}
        </div>
      </div>
    </div>
  );
};

export default Projects;
