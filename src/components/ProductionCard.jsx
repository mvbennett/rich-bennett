import React from "react";

const ProductionCard = (
  {
    img, title, link, icons
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
      <div className="production-icons">
        {icons.forEach((icon) => {
          <img src={icon.img} alt={icon.name} />;
        })}
      </div>
    </div>
  );
};

export default ProductionCard;
