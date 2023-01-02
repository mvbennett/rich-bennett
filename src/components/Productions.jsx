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
      link: '',
      player: <iframe title="Between the Funk and the Fear" style={{ border: 0, width: '300px', height: '300px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1108169207/size=large/bgcol=ffffff/linkcol=63b2cc/minimal=true/transparent=true/" seamless><a href="https://hologramteen.bandcamp.com/album/between-the-funk-and-the-fear">Between the Funk and the Fear by Hologram Teen</a></iframe>,
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Pink Sand',
      artist: 'Limoncello',
      img: 'https://res.cloudinary.com/dduinomn4/image/upload/v1672639437/rich/pink_sand_cj5pdb.jpg',
      link: '',
      player: false,
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
      link: '',
      player: <iframe title="Musica Aqui/Con Tu Amor" style={{ border: 0, width: '300px', height: '300px' }} src="https://bandcamp.com/EmbeddedPlayer/album=242006576/size=large/bgcol=ffffff/linkcol=63b2cc/minimal=true/transparent=true/" seamless><a href="https://limoncelloband.bandcamp.com/album/musica-aqui-con-tu-amor">Musica Aqui/Con Tu Amor by Limoncello</a></iframe>,
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
