import React from "react";
import Latest from "./Latest";
import Navbar from "./Navbar";

const App = ({ page }) => {
  console.log(page);
  return (
    <div>
      <Navbar page="home" />
      {/* using router, set up a switch that will mount latest on default,
      and the three pages otherwise */}
      <Latest />
    </div>
  );
};

export default App;
