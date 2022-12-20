import React from "react";

const Navbar = ({style}) => {
  return(
    <div>
      <h1 className={`${style}-nav-title`}>
        Rich Bennett
      </h1>
      <ul className={`${style}-navbar`}>
        <li className={`${style}-nav-link`}>
          Composition
        </li>
        <li className={`${style}-nav-link`}>
          Production
        </li>
        <li className={`${style}-nav-link`}>
          Mixing
        </li>
        <li className={`${style}-nav-link`}>
          Guitar
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
