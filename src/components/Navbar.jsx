import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ page }) => {
  return (
    <div className={`${page}-navbar`}>
      <Link to="/" relative="path">
        <h1 className={`${page}-nav-title nav-title`}>
          Rich Bennett
        </h1>
      </Link>
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
        {/* <li className="nav-link">
          <Link to="/projects" relative="path">
            Guitar
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
