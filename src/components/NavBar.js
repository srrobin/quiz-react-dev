import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo1.png";
import Account from "./Account";

const NavBar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="text-capitalize my-0 mr-md-auto font-weight-normal">
        <Link to="/">
          <img src={Logo} alt="" className="brand_logo" /> learn with robin
        </Link>
      </h5>
      <Account />
    </div>
  );
};

export default NavBar;
