import React from 'react';
import {NavLink} from "react-router-dom";
import Home from "../Pages/Home";
import MesRealisations from "../Pages/MesRealisations";
import Contact from "../Pages/Contact";

const Navbar = () => {
  return (
    <nav className={"container"}>
      <ul className="navbar">
        <li>
          <NavLink to='/'>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to='/mes-realisations'>
            Réalisations
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
