import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState();
  useEffect(() => {
    const children = document.querySelectorAll(".nav_item");
    const linkClick = (e) => {
      if (e.target.href.split("/")[3] === "") {
        setWidth(children[0].offsetWidth);
        setLeft(children[0].offsetLeft - 1);
      }
      if (e.target.href.split("/")[3] === "mes-realisations") {
        setWidth(children[1].offsetWidth);
        setLeft("90px");
      }
      if (e.target.href.split("/")[3] === "contact") {
        setWidth(children[2].offsetWidth);
        setLeft("221px");
      }
    };
    if (window.location.pathname === "/") {
      setWidth(children[0].offsetWidth);
      setLeft(children[0].offsetLeft - 1);
    }
    if (window.location.pathname === "/mes-realisations") {
      setWidth(children[1].offsetWidth);
      setLeft("90px");
    }
    if (window.location.pathname === "/contact") {
      setWidth(children[2].offsetWidth);
      setLeft("221px");
    }
    window.addEventListener("click", linkClick);
    return () => window.removeEventListener("click", linkClick);
  }, [width]);
  return (
    <nav>
      <div className="container">
        <ul className="navbar">
          <li className="marker" style={{ width, left }} />
          <li>
            <NavLink
              to="/"
              onClick={(e) => setWidth(e.target.offsetWidth)}
              className={({ isActive }) =>
                isActive ? "nav_item .nav_active" : "nav_item"
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mes-realisations"
              onClick={(e) => setWidth(e.target.offsetWidth)}
              className={({ isActive }) =>
                isActive ? "nav_item .nav_active" : "nav_item"
              }
            >
              Réalisations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={(e) => setWidth(e.target.offsetWidth)}
              className={({ isActive }) =>
                isActive ? "nav_item .nav_active" : "nav_item"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
