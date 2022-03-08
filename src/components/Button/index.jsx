import React from "react";
import {NavLink} from "react-router-dom";

const ButtonLink = ({linkUrl, linkText, style}) => {
    const handleClick = (e) => {
        const Event = new CustomEvent('active-menu', {detail: {target: e.target}});
        window.dispatchEvent(Event);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <NavLink to={linkUrl} className="pulse button" onClick={handleClick} style={style}>
            {linkText}
        </NavLink>
    );
};

export default ButtonLink;
