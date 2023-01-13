import React from "react";
import ProjectCard from "./ProjectCard";
import Navbar from "./Navbar";

import underwaterSuper from '../assets/images/underwater_supermarkets.jpg';
import spacetronic from '../assets/images/spacetronic_lunchbox.jpg';
import italianSoda from '../assets/images/italian_soda.jpg';
import pinkSand from '../assets/images/pink_sand.jpg';
import musicaAqui from '../assets/images/musica_aqui.jpg';

const Projects = () => {
  const projectsList = [
    {
      img: underwaterSuper,
      title: 'Music for Underwater Supermarkets',
      link: 'https://open.spotify.com/album/7xJfTkpi8FhHiCwhmMJXMO?si=KCRuk_-JTkefBqS6CLLbOA'
    },
    {
      img: spacetronic,
      title: 'Spacetronic Lunchbox',
      link: 'https://open.spotify.com/album/7l8qxzT9ABDGHBs5sN1Rt4?si=I1tohPSWTYyXCPBSrm-_PQ'
    },
    {
      img: italianSoda,
      title: 'Italian Soda',
      link: 'https://open.spotify.com/album/27RtvlLiC4r4nUF4Hh6xvr?si=4CXZsfv0QTuaeaEfbz4jNQ'
    },
    {
      img: musicaAqui,
      title: 'Musica Aqui',
      link: 'https://open.spotify.com/album/4UT873Eh7d1fiOZuFwrmmv?si=fk5XV8mrTTmQdbaDbhTwRQ'
    },
    {
      img: pinkSand,
      title: "Pink Sand",
      link: 'https://open.spotify.com/album/34va1Mi6xrlVYjbGw0eNkF?si=k492TVTaRkiju1wj0iog9Q'
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
