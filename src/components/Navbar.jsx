import React from "react";

const Navbar = ({ page }) => {
  return (
    <div>
      <h1 className={`${page}-nav-title`}>
        Rich Bennett
      </h1>
      <ul className={`${page}-navbar`}>
        <li className={`${page}-nav-link`}>
          Composition
        </li>
        <li className={`${page}-nav-link`}>
          Production
        </li>
        <li className={`${page}-nav-link`}>
          Mixing
        </li>
        <li className={`${page}-nav-link`}>
          Guitar
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
