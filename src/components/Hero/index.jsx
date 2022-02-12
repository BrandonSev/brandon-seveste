import React from "react";
import { NavLink } from "react-router-dom";

const Hero = ({ title, text, linkText, linkUrl }) => {
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
        <Image />
      </div>
    </div>
  );
};

const Image = React.memo(function Image({ src, alt }) {
  return <img src={"/image/Hero.png"} alt={alt} />;
});

export default Hero;
