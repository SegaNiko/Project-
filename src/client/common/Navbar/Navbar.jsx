import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./index.scss";

const Navbar = () => {
  const [links] = useState([
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about/",
      label: "About Me",
    },
    {
      to: "/api/",
      label: "Use API",
    },
    {
      to: "/tiktoe/",
      label: "Tik Toe",
    },
    {
      to: "/todo/",
      label: "To Do List",
    },
  ]);
  const linkItem = links.map((item) => {
    return (
      <li className="nav__item" key={item.label}>
        <NavLink
          exact
          className="nav__link"
          activeClassName="nav__link-active"
          to={item.to}
        >
          {item.label}
        </NavLink>
      </li>
    );
  });
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="logo__link">
          S
        </Link>
      </div>
      <ul className="nav__list">{linkItem}</ul>
    </nav>
  );
};

export default Navbar;
