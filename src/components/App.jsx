import React from "react";
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import Latest from "./Latest";
import Projects from './Projects';
import Productions from "./Productions";

const App = ({ page }) => {
  console.log(page);
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Latest />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/productions" element={<Productions />} />
      </Routes>
    </Router>
  );
};

export default App;
