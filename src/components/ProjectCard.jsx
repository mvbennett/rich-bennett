import React from "react";

const ProjectCard = (
  {
    img, title, link
  }
) => {
  return (
    <div>
      <img src={img} alt={title} className="album-cover" />
      <a href={link}>
        <h3>
          {title}
        </h3>
      </a>
    </div>
  );
};

export default ProjectCard;
