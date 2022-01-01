import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const ProgressBar = ({ style }) => {
  return (
    <div class="row">
      <div className="col-md-1">
        <Button className="btn-primary btn-md" icon={<ChevronLeftIcon />} />
      </div>
      <div class="col-md-9">
        <div class="alert alert-secondary" role="alert">
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="10"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <Link to="/result">
          <Button
            text="Next Quize "
            className="btn-primary btn-md"
            icon={<ChevronRightIcon />}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProgressBar;
