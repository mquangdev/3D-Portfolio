import React from "react";

function Menu() {
  return (
    <div className="menu">
      <div></div>
      <div className="menu__buttons">
        <a className="menu__button" href="#home">
          Home
        </a>
        <a className="menu__button" href="#skills">
          Skills
        </a>
        <a className="menu__button" href="#projects">
          Projects
        </a>
        <a className="menu__button" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Menu;
