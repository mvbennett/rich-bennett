import React from "react";
import ProductionCard from "./ProductionCard";
import Navbar from "./Navbar";

const Productions = () => {
  const productionList = [
    {
      title: 'Between the Funk and the Fear',
      artist: 'Hologram Teen',
      img: '../assets/images/between_the_funk.jpg',
      link: '',
      icons: [
        '../assets/icons/produce.png'
      ]
    },
    {
      title: 'Pink Sand',
      artist: 'Limoncello',
      img: '../assets/images/pink_sand.jpg',
      link: '',
      icons: [
        '../assets/icons/compose.png',
        '../assets/icons/produce.png',
        '../assets/icons/guitar.png'
      ]
    }
  ];
  const productions = productionList.map((production) => {
    return <ProductionCard production={production} key={production.title} />;
  });
  return (
    <div>
      <Navbar page="secondary" />
      <div className="productions container">
        <h2>Productions</h2>
        {productions}
      </div>
    </div>
  );
};

export default Productions;
