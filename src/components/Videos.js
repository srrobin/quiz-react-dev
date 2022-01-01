import React from "react";
import { Link } from "react-router-dom";
import Video from "./Video";

const Videos = () => {
  return (
    <>
      <div className="col-md-3">
        <Link to="/quize">
          <Video />
        </Link>
      </div>

      <div className="col-md-3">
        <Link to="/quize">
          <Video />
        </Link>
      </div>

      <div className="col-md-3">
        <Link to="/quize">
          <Video />
        </Link>
      </div>

      <div className="col-md-3">
        <Link to="/quize">
          <Video />
        </Link>
      </div>

      <div className="col-md-3">
        <Link to="/quize">
          <Video />
        </Link>
      </div>
    </>
  );
};

export default Videos;
