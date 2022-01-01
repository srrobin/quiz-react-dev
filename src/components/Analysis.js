import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import React from "react";
import Question from "./Question";

const Analysis = ({ question }) => {
  return (
    <div className="row">
      <div className="col-md-12 mb-3">
        <div className="card">
          <div className="card-header text-capitalize text-bold">
            <HelpOutlineIcon />
            {question}
          </div>
          <div className="card-body">
            <Question />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
