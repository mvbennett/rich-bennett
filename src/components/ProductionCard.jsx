import React from "react";

const ProductionCard = ({ production }) => {
  return (
    <div>
      <img src={production.img} alt={production.title} className="album-cover" />
      <a href={production.link}>
        <h3>
          {production.title}
          -
          {production.artist}
        </h3>
      </a>
      <div className="production-icons">
        {production.icons === undefined ? <div /> : production.icons.forEach((icon) => {
          <img src={icon.img} alt={icon.name} />;
        })}
      </div>
    </div>
  );
};

export default ProductionCard;
