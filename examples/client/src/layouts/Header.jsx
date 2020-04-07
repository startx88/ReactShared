import React from "react";
import Logo from "../widgets/Logo/Logo";
import Navigation from "./Navigation";

const Header = props => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Logo brandname="Share Library Demo" />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
