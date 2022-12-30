import React from "react";
import ProductionCard from "./ProductionCard";
import Navbar from "./Navbar";

const Productions = () => {
  return (
    <div>
      <Navbar page="side" />
      <div className="productions container">
        <h2>Productions</h2>
        <ProductionCard />
      </div>
    </div>
  );
};

export default Productions;
