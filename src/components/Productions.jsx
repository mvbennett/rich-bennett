import React from "react";
import ProductionCard from "./ProductionCard";
import Navbar from "./Navbar";

const ICONS = {
  compose: {
    img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639353/rich/compose_oi0ztl.png',
    name: 'Composer'
  },
  produce: {
    img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639441/rich/produce_zehr3w.png',
    name: 'Producer'
  },
  guitar: {
    img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639438/rich/guitar_nzlgek.png',
    name: 'Musician'
  }
};

const Productions = () => {
  const productionList = [
    {
      title: 'Between the Funk and the Fear',
      artist: 'Hologram Teen',
      img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639439/rich/between_the_funk_n5vso7.jpg',
      link: 'https://open.spotify.com/album/0b2kXupVrhddF7wMPZwl63?si=jxb98IRcTY6pTBG12BCUvA',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Pink Sand',
      artist: 'Limoncello',
      img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639437/rich/pink_sand_cj5pdb.jpg',
      link: 'https://open.spotify.com/album/34va1Mi6xrlVYjbGw0eNkF?si=k492TVTaRkiju1wj0iog9Q',
      icons: [
        ICONS.compose,
        ICONS.produce,
        ICONS.guitar
      ]
    },
    {
      title: 'Musica Aqui/Con Tu Amor',
      artist: "Limoncello",
      img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639351/rich/musica_aqui_uursp6.jpg',
      link: 'https://open.spotify.com/album/4UT873Eh7d1fiOZuFwrmmv?si=fk5XV8mrTTmQdbaDbhTwRQ',
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
        <h2>Recording, Producing, Mixing</h2>
        {productions}
      </div>
    </div>
  );
};

export default Productions;
