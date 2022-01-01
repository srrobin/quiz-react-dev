import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
import { NavLink } from "react-router-dom";

const Account = () => {
  return (
    <nav className="my-2 my-md-0 mr-md-3 text-capitalize nav_area">
      <NavLink
        to="/signup"
        className={(navInfo) => (navInfo.isActive ? "active" : "")}
      >
        signup
      </NavLink>
      <NavLink
        to="/login"
        className={(navInfo) => (navInfo.isActive ? "active" : "")}
      >
        login
      </NavLink>

      <a className="p-2 text-dark font-weight-bold" href="/">
        <AccountCircleOutlinedIcon fontSize="small" /> sr robin
      </a>
      <a className="p-2 text-dark font-weight-bold" href="/">
        {" "}
        <ExitToAppIcon fontSize="small" />{" "}
      </a>
    </nav>
  );
};

export default Account;
