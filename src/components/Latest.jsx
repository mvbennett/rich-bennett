import React from "react";
import Navbar from "./Navbar";

const Latest = () => {
  return (
    <div>
      <Navbar page="home" />
      <div className="container">
        <div className="latest-post">
          <img src="../src/assets/images/underwatervinyl.png" alt="Music for Underwater Supermarkets on Vinyl" />
          <div className="latest-post-content">
            <h3>Music for Underwater Supermarkets now on vinyl</h3>
            <p>
              Music for Underwater Supermarkets now returns with a vinyl format from Roman Angelos.
              Have you ever wondered what it would be like to explore a submerged supermarket?
              What would such a place look like, what would they sell, and most importantly;
              what kind of music would be playing?
              Now you can find out on this beautiful color vinyl.
            </p>
            <a
              href="https://happyrobotsrecords.bandcamp.com/album/music-for-underwater-supermarkets"
              target="_blank"
              rel="noreferrer"
            >
              Order on Bandcamp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
