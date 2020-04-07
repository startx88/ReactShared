import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Main = props => {
  return (
    <>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </>
  );
};

export default Main;
