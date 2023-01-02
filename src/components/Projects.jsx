import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";

const Projects = () => {
  const projectsList = [
    {
      img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639453/rich/underwater_supermarkets_jspelq.jpg',
      title: 'Music for Underwater Supermarkets',
      link: '#'
    },
    {
      img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639452/rich/spacetronic_lunchbox_znmwkg.jpg',
      title: 'Spacetronic Lunchbox',
      link: '#'
    },
    {
      img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639352/rich/italian_soda_chaes7.jpg',
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
