import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as MainLogo } from "./logo.svg";
const Logo = ({ brandname }) => {
  return (
    <>
      <Link className="navbar-brand" to="/">
        <MainLogo width="35" /> {brandname}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  );
};

export default Logo;
