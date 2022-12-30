import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  return (
    <div className={`${page}-navbar`}>
      <h1 className={`${page}-nav-title`}>
        Rich Bennett
      </h1>
      <ul className={`${page}-nav-links`}>
        <li className="nav-link">
          <Link to="/projects" relative="path">
            Composition
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/productions" relative="path">
            Production
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/productions" relative="path">
            Mixing
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/projects" relative="path">
            Guitar
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
