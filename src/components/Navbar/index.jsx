import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [width, setWidth] = useState(0);
  const [left, setLeft] = useState();
  const handleWidth = (e) => {
    setWidth(e.target.offsetWidth)
    if(window.scrollY > 15){
      document.addEventListener("click", (e) => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  }
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
    return () => {
      window.removeEventListener("click", linkClick);
      window.removeEventListener("click", handleWidth);
    }
  }, [width]);
  return (
    <nav>
      <div className="container">
        <ul className="navbar">
          <li className="marker" style={{ width, left }} />
          <li>
            <NavLink
              to="/"
              onClick={handleWidth}
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
              onClick={handleWidth}
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
              onClick={handleWidth}
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
