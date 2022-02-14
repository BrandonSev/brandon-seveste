import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const ButtonLink = ({ linkUrl, linkText }) => {
  const handleClick = (e) => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };
  useEffect(() => {
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <NavLink to={linkUrl} className="pulse button" onClick={handleClick}>
      {linkText}
    </NavLink>
  );
};

export default ButtonLink;
