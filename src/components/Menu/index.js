import React from "react";

const Menu = ({ link, text }) => {
    return (
        <a href={link}>
            <p>{text}</p>
        </a>
    );
};

export default Menu;
