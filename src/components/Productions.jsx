import React from "react";
import ProductionCard from "./ProductionCard";
import Navbar from "./Navbar";

import compose from '../assets/icons/compose.png';
import produce from '../assets/icons/produce.png';
import guitar from '../assets/icons/guitar.png';

import betweenTheFunk from '../assets/images/between_the_funk.jpg';
import memoryBox from '../assets/images/memory_box.jpg';
import fakeLove from '../assets/images/fake_love.jpg';
import pizzaConspiracy from '../assets/images/pizza_conspiracy.jpg';

const ICONS = {
  compose: {
    // img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639353/rich/compose_oi0ztl.png',
    name: 'Composer',
    img: compose
  },
  produce: {
    // img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639441/rich/produce_zehr3w.png',
    name: 'Producer',
    img: produce
  },
  guitar: {
    // img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639438/rich/guitar_nzlgek.png',
    name: 'Musician',
    img: guitar
  }
};

const Productions = () => {
  const productionList = [
    {
      title: 'Memory Box',
      artist: 'Rodney Cromwell',
      img: memoryBox,
      link: 'https://open.spotify.com/album/5undXq2henqQw2lBmqcEM8',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Nong Voru / Fake Love',
      artist: 'Alfred Kpebesaane and Brittany Anjou',
      img: fakeLove,
      link: 'https://open.spotify.com/album/50n3k94DN57jjmCKWPinYd',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Pizza Conspiracy',
      artist: 'Hologram Teen',
      img: pizzaConspiracy,
      link: 'https://open.spotify.com/album/0yWP0bki3piEYrWzRZH369',
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Between the Funk and the Fear',
      artist: 'Hologram Teen',
      img: betweenTheFunk,
      link: 'https://open.spotify.com/album/0b2kXupVrhddF7wMPZwl63?si=jxb98IRcTY6pTBG12BCUvA',
      icons: [
        ICONS.produce
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
