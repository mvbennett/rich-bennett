import React from "react";
import Latest from "./Latest";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar page="home" />
      <Latest />
    </div>
  );
};

export default App;
