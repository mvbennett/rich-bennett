import React from "react";
import ProductionCard from "./ProductionCard";
import Navbar from "./Navbar";

const ICONS = {
  compose: {
    img: '../assets/icons/compose.png',
    name: 'Composer'
  },
  produce: {
    img: '../assets/icons/produce.png',
    name: 'Producer'
  },
  guitar: {
    img: '../assets/icons/guitar.png',
    name: 'Musician'
  }
};

const Productions = () => {
  const productionList = [
    {
      title: 'Between the Funk and the Fear',
      artist: 'Hologram Teen',
      img: '../assets/images/between_the_funk.jpg',
      link: '',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Pink Sand',
      artist: 'Limoncello',
      img: '../assets/images/pink_sand.jpg',
      link: '',
      icons: [
        ICONS.compose,
        ICONS.produce,
        ICONS.guitar
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
