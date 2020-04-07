import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = props => {
  return (
    <nav className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item ">
          <NavLink exact className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
