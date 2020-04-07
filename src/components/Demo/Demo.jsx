import React from "react";

const DemoComponent = ({ classname, children }) => {
  return <div className={classname}>{children}</div>;
};

export default DemoComponent;
