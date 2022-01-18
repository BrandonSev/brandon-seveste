import React from 'react';
import {NavLink} from "react-router-dom";

const Hero = ({title, text, linkText, linkUrl}) => {
  return (
    <div className="container hero">
      <div className="hero_text">
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{text}</p>
        <NavLink to={linkUrl} className="pulse button">
          {linkText}
        </NavLink>
      </div>
      <div className="hero_image">
        <img src="/image/Hero.png" alt="hero"/>
      </div>
    </div>
  );
};

export default Hero;
