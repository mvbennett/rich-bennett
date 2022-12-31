import React from "react";
import ProductionCard from "./ProductionCard";
import Navbar from "./Navbar";

const ICONS = {
  compose: {
    img: '../src/assets/icons/compose.png',
    name: 'Composer'
  },
  produce: {
    img: '../src/assets/icons/produce.png',
    name: 'Producer'
  },
  guitar: {
    img: '../src/assets/icons/guitar.png',
    name: 'Musician'
  }
};

const Productions = () => {
  const productionList = [
    {
      title: 'Between the Funk and the Fear',
      artist: 'Hologram Teen',
      img: '../src/assets/images/between_the_funk.jpg',
      link: '',
      player: <iframe title="Between the Funk and the Fear" style={{ border: 0, width: '300px', height: '300px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1108169207/size=large/bgcol=ffffff/linkcol=63b2cc/minimal=true/transparent=true/" seamless><a href="https://hologramteen.bandcamp.com/album/between-the-funk-and-the-fear">Between the Funk and the Fear by Hologram Teen</a></iframe>,
      icons: [
        ICONS.produce
      ]
    },
    {
      title: 'Pink Sand',
      artist: 'Limoncello',
      img: '../src/assets/images/pink_sand.jpg',
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
      img: '../src/assets/images/musica_aqui.jpg',
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
