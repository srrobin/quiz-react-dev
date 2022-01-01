import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="py-5">
        <div className="container">{children}</div>
      </div>
    </>
  );
};

export default Layout;
