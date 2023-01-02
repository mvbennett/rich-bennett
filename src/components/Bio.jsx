import React from "react";
import Navbar from "./Navbar";

const Bio = () => {
  return (
    <div>
      <Navbar page="secondary" />
      <div className="container">
        <div className="bio-card">
          <div className="bio-pic">
            <img src="" alt="Rich Bennett" />
          </div>
          <div className="bio-info">
            <h3>
              Hi, Im Rich Bennett
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Labore velit vitae tempora sit necessitatibus excepturi numquam
              dolorem modi eos, nulla alias hic aperiam dolorum saepe praesentium
              perferendis eaque dolores laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
